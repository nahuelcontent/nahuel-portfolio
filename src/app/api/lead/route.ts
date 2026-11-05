import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { calcScore } from "@/lib/score";

const FIELDS = [
  "nombre", "marca", "negocio", "instagram", "whatsapp", "email", "servicio", "mensaje",
  "presenciaRedes", "identidadVisual", "estrategia", "obstaculo", "intentoPrevio",
  "tiempoProblema", "urgencia", "presupuesto",
] as const;

const MAX_LEN = 2000;
const MAX_BODY = 20_000;
const WINDOW_SECONDS = 600;
const MAX_PER_WINDOW = 5;

export async function POST(req: NextRequest) {
  try {
    const text = await req.text();
    if (text.length > MAX_BODY) {
      return NextResponse.json({ ok: false, error: "Too large" }, { status: 413 });
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(text);
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
    }

    // Whitelist: only known string fields, trimmed and length-limited
    const clean: Record<string, string> = {};
    for (const key of FIELDS) {
      const v = body[key];
      clean[key] = typeof v === "string" ? v.trim().slice(0, MAX_LEN) : "";
    }

    if (!clean.nombre || (!clean.email && !clean.whatsapp)) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Basic rate limit per IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    const key = `rl:lead:${ip}`;
    const count = await redis.incr(key);
    if (count === 1) await redis.expire(key, WINDOW_SECONDS);
    if (count > MAX_PER_WINDOW) {
      return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
    }

    const { score, max, level, color } = calcScore(clean);

    const lead = {
      ...clean,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: "Nuevo",
      notes: "",
      score,
      max,
      level,
      color,
    };

    await redis.lpush("leads", JSON.stringify(lead));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
