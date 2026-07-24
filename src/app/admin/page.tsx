"use client";

import { useState, useEffect, useCallback } from "react";

type Lead = {
  id: string;
  createdAt: string;
  updatedAt?: string;
  nombre: string;
  marca: string;
  negocio: string;
  instagram: string;
  whatsapp: string;
  email: string;
  presenciaRedes: string;
  identidadVisual: string;
  estrategia: string;
  obstaculo: string;
  intentoPrevio: string;
  tiempoProblema: string;
  urgencia: string;
  presupuesto: string;
  mensaje: string;
  score: number;
  max: number;
  level: string;
  color: string;
  status: string;
  notes: string;
};

type Status = "Todos" | "Nuevo" | "Contactado" | "En seguimiento" | "Cerrado" | "No avanzó";
const STATUSES: Status[] = ["Todos", "Nuevo", "Contactado", "En seguimiento", "Cerrado", "No avanzó"];
const STATUS_COLORS: Record<string, string> = {
  "Nuevo": "#2742ff",
  "Contactado": "#f59e0b",
  "En seguimiento": "#8b5cf6",
  "Cerrado": "#22c55e",
  "No avanzó": "#6b7280",
};

const S = {
  bg: "#080808",
  surface: "#0d0d0d",
  border: "rgba(255,255,255,0.06)",
  white: "#f5f5f0",
  gray: "#8a8a8a",
  blue: "#2742ff",
  font: "'Space Grotesk', sans-serif",
};

function StatCard({ label, value, color }: { label: string; value: number; color?: string }) {
  return (
    <div style={{ padding: "1.25rem 1.5rem", border: `1px solid ${S.border}`, backgroundColor: S.surface, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <p style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: S.gray }}>{label}</p>
      <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", lineHeight: 1, color: color ?? S.white }}>{value}</p>
    </div>
  );
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Lead | null>(null);
  const [filter, setFilter] = useState<Status>("Todos");
  const [saving, setSaving] = useState(false);
  const [panelStatus, setPanelStatus] = useState("");
  const [panelNotes, setPanelNotes] = useState("");

  const fetchLeads = useCallback(async (pwd: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/leads", { headers: { "x-admin-password": pwd } });
      if (!res.ok) { setError("Contraseña incorrecta"); setAuthed(false); return; }
      const data = await res.json();
      setLeads(data.leads ?? []);
      setAuthed(true);
    } catch { setError("Error de conexión"); }
    finally { setLoading(false); }
  }, []);

  const selectLead = (lead: Lead) => {
    setSelected(lead);
    setPanelStatus(lead.status);
    setPanelNotes(lead.notes ?? "");
  };

  const saveChanges = async () => {
    if (!selected) return;
    setSaving(true);
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "x-admin-password": password, "Content-Type": "application/json" },
        body: JSON.stringify({ id: selected.id, status: panelStatus, notes: panelNotes }),
      });
      const data = await res.json();
      if (data.ok) {
        setLeads((prev) => prev.map((l) => l.id === selected.id ? { ...l, status: panelStatus, notes: panelNotes } : l));
        setSelected((prev) => prev ? { ...prev, status: panelStatus, notes: panelNotes } : null);
      }
    } finally { setSaving(false); }
  };

  const deleteLead = async (id: string) => {
    if (!confirm("¿Eliminar este lead?")) return;
    await fetch("/api/admin/leads", {
      method: "DELETE",
      headers: { "x-admin-password": password, "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setLeads((prev) => prev.filter((l) => l.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const filtered = filter === "Todos" ? leads : leads.filter((l) => l.status === filter);

  const stats = {
    total: leads.length,
    nuevo: leads.filter((l) => l.status === "Nuevo").length,
    seguimiento: leads.filter((l) => l.status === "En seguimiento").length,
    cerrado: leads.filter((l) => l.status === "Cerrado").length,
  };

  // ── LOGIN ──────────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: S.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: S.font }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Bebas+Neue&display=swap');*{box-sizing:border-box;margin:0;padding:0}`}</style>
        <form onSubmit={(e) => { e.preventDefault(); fetchLeads(password); }} style={{ width: "100%", maxWidth: "340px", padding: "2.5rem", border: `1px solid ${S.border}` }}>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: S.white, letterSpacing: "0.05em", lineHeight: 1, marginBottom: "0.25rem" }}>
            ALPHA STUDIO<span style={{ color: S.blue }}>.</span>
          </p>
          <p style={{ fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: S.gray, marginBottom: "2rem" }}>CRM / Dashboard</p>
          <label style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.gray, display: "block", marginBottom: "0.5rem" }}>Contraseña</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoFocus
            style={{ width: "100%", padding: "0.875rem", backgroundColor: "transparent", border: `1px solid rgba(255,255,255,0.12)`, color: S.white, fontSize: "0.875rem", outline: "none", fontFamily: S.font, marginBottom: "0.75rem" }} />
          {error && <p style={{ fontSize: "0.75rem", color: "#ef4444", marginBottom: "0.75rem" }}>{error}</p>}
          <button type="submit" disabled={loading}
            style={{ width: "100%", padding: "0.875rem", backgroundColor: S.blue, color: S.white, border: "none", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", fontFamily: S.font }}>
            {loading ? "Verificando..." : "Entrar"}
          </button>
        </form>
      </div>
    );
  }

  // ── DASHBOARD ──────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", backgroundColor: S.bg, fontFamily: S.font, color: S.white, display: "flex", flexDirection: "column" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Bebas+Neue&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:2px}::-webkit-scrollbar-thumb{background:${S.blue}}`}</style>

      {/* ── Topbar ── */}
      <div style={{ padding: "1rem 1.5rem", borderBottom: `1px solid ${S.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "rgba(8,8,8,0.96)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", letterSpacing: "0.05em", lineHeight: 1 }}>
            ALPHA STUDIO<span style={{ color: S.blue }}>.</span>
          </p>
          <span style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: S.gray, borderLeft: `1px solid ${S.border}`, paddingLeft: "1rem" }}>CRM</span>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <button onClick={() => fetchLeads(password)} style={{ padding: "0.45rem 0.875rem", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", border: `1px solid ${S.border}`, backgroundColor: "transparent", color: S.gray, cursor: "pointer", fontFamily: S.font }}>
            Actualizar
          </button>
          <button onClick={() => { setAuthed(false); setPassword(""); setLeads([]); setSelected(null); }}
            style={{ padding: "0.45rem 0.875rem", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "none", backgroundColor: "transparent", color: S.gray, cursor: "pointer", fontFamily: S.font }}>
            Salir
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* ── Main ── */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem" }}>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", backgroundColor: S.border, marginBottom: "1.5rem" }}>
            <StatCard label="Total Leads" value={stats.total} />
            <StatCard label="Sin Contactar" value={stats.nuevo} color={S.blue} />
            <StatCard label="En Seguimiento" value={stats.seguimiento} color="#8b5cf6" />
            <StatCard label="Cerrado" value={stats.cerrado} color="#22c55e" />
          </div>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            {STATUSES.map((s) => (
              <button key={s} onClick={() => setFilter(s)}
                style={{ padding: "0.45rem 1rem", fontSize: "0.65rem", letterSpacing: "0.08em", fontFamily: S.font, border: `1px solid ${filter === s ? S.blue : S.border}`, backgroundColor: filter === s ? "rgba(39,66,255,0.12)" : "transparent", color: filter === s ? S.white : S.gray, cursor: "pointer", transition: "all 0.15s" }}>
                {s} {s !== "Todos" ? `(${leads.filter((l) => l.status === s).length})` : `(${leads.length})`}
              </button>
            ))}
          </div>

          {/* Table */}
          {filtered.length === 0 ? (
            <div style={{ padding: "4rem 0", textAlign: "center", color: S.gray, fontSize: "0.8rem" }}>No hay leads{filter !== "Todos" ? ` con estado "${filter}"` : " todavía"}.</div>
          ) : (
            <div style={{ border: `1px solid ${S.border}` }}>
              {/* Table header */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 100px 130px 140px", padding: "0.75rem 1.25rem", borderBottom: `1px solid ${S.border}`, backgroundColor: S.surface }}>
                {["NOMBRE", "TELÉFONO", "SCORE", "NIVEL", "ESTADO"].map((h) => (
                  <span key={h} style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: S.gray }}>{h}</span>
                ))}
              </div>

              {filtered.map((lead) => (
                <div key={lead.id}
                  onClick={() => selectLead(lead)}
                  style={{ display: "grid", gridTemplateColumns: "1fr 140px 100px 130px 140px", padding: "1rem 1.25rem", borderBottom: `1px solid ${S.border}`, cursor: "pointer", backgroundColor: selected?.id === lead.id ? "#111" : "transparent", borderLeft: selected?.id === lead.id ? `2px solid ${S.blue}` : "2px solid transparent", transition: "background-color 0.15s", alignItems: "center" }}
                  onMouseEnter={(e) => { if (selected?.id !== lead.id) e.currentTarget.style.backgroundColor = "#0d0d0d"; }}
                  onMouseLeave={(e) => { if (selected?.id !== lead.id) e.currentTarget.style.backgroundColor = "transparent"; }}
                >
                  <div>
                    <p style={{ fontWeight: 500, fontSize: "0.875rem", marginBottom: "0.2rem" }}>{lead.nombre}</p>
                    <p style={{ fontSize: "0.7rem", color: S.gray }}>{lead.marca}</p>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: S.gray }}>{lead.whatsapp || "—"}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", lineHeight: 1, color: lead.color }}>{lead.score}</span>
                    <span style={{ fontSize: "0.65rem", color: S.gray }}>/{lead.max}</span>
                  </div>
                  <span style={{ display: "inline-block", padding: "0.25rem 0.625rem", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", border: `1px solid ${lead.color}`, color: lead.color }}>
                    {lead.level}
                  </span>
                  <span style={{ display: "inline-block", padding: "0.25rem 0.625rem", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", backgroundColor: `${STATUS_COLORS[lead.status] ?? S.gray}18`, color: STATUS_COLORS[lead.status] ?? S.gray, border: `1px solid ${STATUS_COLORS[lead.status] ?? S.gray}40` }}>
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Side panel ── */}
        {selected && (
          <div style={{ width: "380px", borderLeft: `1px solid ${S.border}`, overflowY: "auto", flexShrink: 0, backgroundColor: S.surface }}>
            <div style={{ padding: "1.5rem" }}>

              {/* Panel header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div>
                  <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.25rem" }}>{selected.nombre}</h2>
                  <a href={`https://wa.me/${selected.whatsapp?.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "0.8rem", color: "#22c55e", textDecoration: "none" }}>
                    ● {selected.whatsapp}
                  </a>
                </div>
                <button onClick={() => setSelected(null)}
                  style={{ background: "none", border: "none", color: S.gray, cursor: "pointer", fontSize: "1.1rem", padding: "0.25rem", lineHeight: 1 }}>×</button>
              </div>

              {/* Score */}
              <div style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: `1px solid ${S.border}` }}>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: S.gray, marginBottom: "0.75rem" }}>// RESULTADO DEL DIAGNÓSTICO</p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", lineHeight: 1, color: selected.color }}>{selected.score}</span>
                    <span style={{ fontSize: "0.8rem", color: S.gray }}>/{selected.max}</span>
                  </div>
                  <span style={{ padding: "0.3rem 0.75rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: `${selected.color}20`, color: selected.color, border: `1px solid ${selected.color}50` }}>
                    {selected.level}
                  </span>
                </div>
              </div>

              {/* Status selector */}
              <div style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: `1px solid ${S.border}` }}>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: S.gray, marginBottom: "0.75rem" }}>// ESTADO DEL LEAD</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  {(["Nuevo", "Contactado", "En seguimiento", "Cerrado", "No avanzó"] as const).map((s) => (
                    <button key={s} onClick={() => setPanelStatus(s)}
                      style={{ padding: "0.625rem 1rem", textAlign: "left", fontSize: "0.8rem", fontFamily: S.font, border: `1px solid ${panelStatus === s ? STATUS_COLORS[s] : S.border}`, backgroundColor: panelStatus === s ? `${STATUS_COLORS[s]}15` : "transparent", color: panelStatus === s ? S.white : S.gray, cursor: "pointer", transition: "all 0.15s", display: "flex", alignItems: "center", gap: "0.625rem" }}>
                      {panelStatus === s && <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: STATUS_COLORS[s], display: "block", flexShrink: 0 }} />}
                      {s}
                      {s === "Cerrado" && " ✓"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: S.gray, marginBottom: "0.75rem" }}>// NOTAS DEL SEGUIMIENTO</p>
                <textarea
                  value={panelNotes}
                  onChange={(e) => setPanelNotes(e.target.value)}
                  rows={4}
                  placeholder="Anotá lo que pasó en la llamada, próximos pasos, etc."
                  style={{ width: "100%", padding: "0.75rem", backgroundColor: S.bg, border: `1px solid ${S.border}`, color: S.white, fontSize: "0.8rem", fontFamily: S.font, resize: "vertical", outline: "none", lineHeight: 1.6 }}
                  onFocus={(e) => { e.target.style.borderColor = S.blue; }}
                  onBlur={(e) => { e.target.style.borderColor = S.border; }}
                />
              </div>

              {/* Save */}
              <button onClick={saveChanges} disabled={saving}
                style={{ width: "100%", padding: "0.875rem", backgroundColor: "#22c55e", color: "#000", border: "none", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", fontFamily: S.font, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                {saving ? "Guardando..." : "✓ Guardar cambios"}
              </button>

              {/* Divider + quick info */}
              <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: "1.25rem" }}>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: S.gray, marginBottom: "0.75rem" }}>// DATOS DEL LEAD</p>
                {[
                  { k: "Marca", v: selected.marca },
                  { k: "Negocio", v: selected.negocio },
                  { k: "Email", v: selected.email },
                  { k: "Instagram", v: selected.instagram || "—" },
                  { k: "Urgencia", v: selected.urgencia },
                  { k: "Presupuesto", v: selected.presupuesto },
                  { k: "Obstáculo", v: selected.obstaculo },
                  { k: "Mensaje", v: selected.mensaje || "—" },
                ].map((row) => (
                  <div key={row.k} style={{ padding: "0.625rem 0", borderBottom: `1px solid ${S.border}` }}>
                    <p style={{ fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.gray, marginBottom: "0.2rem" }}>{row.k}</p>
                    <p style={{ fontSize: "0.78rem", lineHeight: 1.5, color: S.white }}>{row.v}</p>
                  </div>
                ))}

                <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
                  <a href={`mailto:${selected.email}`} target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, padding: "0.6rem", border: `1px solid ${S.border}`, color: S.gray, textDecoration: "none", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
                    Email
                  </a>
                  <button onClick={() => deleteLead(selected.id)}
                    style={{ flex: 1, padding: "0.6rem", border: "1px solid rgba(239,68,68,0.3)", backgroundColor: "transparent", color: "#ef4444", cursor: "pointer", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: S.font }}>
                    Eliminar
                  </button>
                </div>

                <p style={{ fontSize: "0.6rem", color: S.gray, marginTop: "1rem" }}>
                  Recibido: {new Date(selected.createdAt).toLocaleString("es-AR")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
