import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { calcScore } from "@/lib/score";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { score, max, level, color } = calcScore(body);

    const lead = {
      ...body,
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
