import { NextRequest, NextResponse } from "next/server";

const ALPHAFLOW_URL = "https://alphaflow-kappa.vercel.app/api/leads";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(ALPHAFLOW_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("AlphaFlow error:", res.status, text);
      return NextResponse.json(
        { ok: false, error: "AlphaFlow rejected the request" },
        { status: 502 }
      );
    }

    const data = await res.json().catch(() => ({}));
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
