import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { redis } from "@/lib/redis";

const PWD = process.env.ADMIN_PASSWORD;

function auth(req: NextRequest) {
  // Without ADMIN_PASSWORD configured, the admin API is disabled.
  if (!PWD) return false;
  const given = req.headers.get("x-admin-password") ?? "";
  if (given.length !== PWD.length) return false;
  return timingSafeEqual(Buffer.from(given), Buffer.from(PWD));
}

function parseLeads(raw: unknown[]): unknown[] {
  return raw.map((item) => {
    if (typeof item === "string") { try { return JSON.parse(item); } catch { return item; } }
    return item;
  });
}

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ ok: false }, { status: 401 });
  try {
    const raw = await redis.lrange("leads", 0, -1);
    return NextResponse.json({ ok: true, leads: parseLeads(raw) });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Failed" }, { status: 500 });
  }
}

// Update status and/or notes for a lead
export async function PATCH(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ ok: false }, { status: 401 });
  const { id, status, notes } = await req.json();
  if (!id) return NextResponse.json({ ok: false }, { status: 400 });

  try {
    const raw = await redis.lrange("leads", 0, -1);
    const leads = parseLeads(raw) as Record<string, unknown>[];
    const idx = leads.findIndex((l) => l.id === id);
    if (idx === -1) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

    const updated = { ...leads[idx] };
    if (status !== undefined) updated.status = status;
    if (notes !== undefined) updated.notes = notes;
    updated.updatedAt = new Date().toISOString();

    await redis.lset("leads", idx, JSON.stringify(updated));
    return NextResponse.json({ ok: true, lead: updated });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Failed" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ ok: false }, { status: 401 });
  const { id } = await req.json();
  if (!id) return NextResponse.json({ ok: false }, { status: 400 });

  try {
    const raw = await redis.lrange("leads", 0, -1);
    const parsed = parseLeads(raw) as Record<string, unknown>[];
    const idx = parsed.findIndex((l) => l.id === id);
    if (idx === -1) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

    // Atomic removal of just this entry (no del + rpush window)
    const original = raw[idx];
    await redis.lrem("leads", 1, typeof original === "string" ? original : JSON.stringify(original));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Failed" }, { status: 500 });
  }
}
