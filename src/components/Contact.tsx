"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1rem",
  backgroundColor: "transparent",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "var(--white)",
  fontSize: "0.875rem",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--gray-text)",
  display: "block",
  marginBottom: "0.5rem",
};

function validateContact(val: string): boolean {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const isPhone = /^\+?[\d\s\-()]{8,}$/.test(val);
  return isEmail || isPhone;
}

export default function Contact() {
  const { tr } = useLanguage();
  const c = tr.contact;
  const f = c.fields;

  const [form, setForm] = useState({ nombre: "", contacto: "", rubro: "", necesidad: "", mensaje: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = "Requerido";
    if (!form.contacto.trim()) e.contacto = "Requerido";
    else if (!validateContact(form.contacto)) e.contacto = "Email o WhatsApp válido";
    if (!form.necesidad) e.necesidad = "Elegí una opción";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contacto);
    const payload = {
      nombre: form.nombre,
      marca: "",
      negocio: form.rubro,
      instagram: "",
      whatsapp: isEmail ? "" : form.contacto,
      email: isEmail ? form.contacto : "",
      servicio: form.necesidad,
      mensaje: form.mensaje,
      presenciaRedes: "",
      identidadVisual: "",
      estrategia: "",
      obstaculo: "",
      intentoPrevio: "",
      tiempoProblema: "",
      urgencia: "",
      presupuesto: "",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const rows = [
    { label: c.rows.email, value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
    { label: c.rows.phone, value: PERSONAL.phone, href: `https://wa.me/${PERSONAL.whatsapp}` },
    { label: c.rows.location, value: PERSONAL.location, href: undefined },
    { label: c.rows.instagram, value: `@${PERSONAL.instagramHandle}`, href: PERSONAL.instagramUrl },
  ];

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }} className="contact-grid">

          {/* Left */}
          <div>
            <div className="section-label"><span>{c.sectionLabel}</span></div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="big-heading" style={{ marginBottom: "1.5rem" }}>
              {c.heading1}<br /><span style={{ color: "var(--blue)" }}>{c.heading2}</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--gray-text)", maxWidth: "360px" }}>
              {c.bajada}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ marginTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2rem" }}>
              {rows.map((row) => (
                <div key={row.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.875rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)", gap: "1rem" }}>
                  <span style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-text)", flexShrink: 0 }}>{row.label}</span>
                  {row.href ? (
                    <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--white)", textDecoration: "none", transition: "color 0.2s", textAlign: "right" }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--blue)"; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--white)"; }}>
                      {row.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.8rem", color: "var(--white)", textAlign: "right" }}>{row.value}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            {status === "success" ? (
              <div style={{ padding: "3rem 2rem", border: "1px solid rgba(39,66,255,0.3)", backgroundColor: "rgba(39,66,255,0.05)", textAlign: "center", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(39,66,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "var(--white)", letterSpacing: "0.05em" }}>{f.successTitle}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--gray-text)", lineHeight: 1.65 }}>{f.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                {/* Nombre */}
                <div>
                  <label style={labelStyle}>{f.nombre} <span style={{ color: "var(--blue)" }}>*</span></label>
                  <input type="text" value={form.nombre} onChange={set("nombre")} style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; }}
                    onBlur={(e) => { e.target.style.borderColor = errors.nombre ? "#ef4444" : "rgba(255,255,255,0.12)"; }} />
                  {errors.nombre && <p style={{ fontSize: "0.7rem", color: "#ef4444", marginTop: "0.375rem" }}>{errors.nombre}</p>}
                </div>

                {/* WhatsApp o email */}
                <div>
                  <label style={labelStyle}>{f.contacto} <span style={{ color: "var(--blue)" }}>*</span></label>
                  <input type="text" value={form.contacto} onChange={set("contacto")} style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; }}
                    onBlur={(e) => { e.target.style.borderColor = errors.contacto ? "#ef4444" : "rgba(255,255,255,0.12)"; }} />
                  {errors.contacto && <p style={{ fontSize: "0.7rem", color: "#ef4444", marginTop: "0.375rem" }}>{errors.contacto}</p>}
                </div>

                {/* Rubro */}
                <div>
                  <label style={labelStyle}>{f.rubro}</label>
                  <input type="text" value={form.rubro} onChange={set("rubro")} style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)"; }} />
                </div>

                {/* ¿Qué necesitás? */}
                <div>
                  <label style={labelStyle}>{f.necesidad} <span style={{ color: "var(--blue)" }}>*</span></label>
                  <select value={form.necesidad} onChange={set("necesidad")}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer", backgroundColor: "#0d0d0d" }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; }}
                    onBlur={(e) => { e.target.style.borderColor = errors.necesidad ? "#ef4444" : "rgba(255,255,255,0.12)"; }}>
                    <option value="" disabled>—</option>
                    <option value={f.opcionDC}>{f.opcionDC}</option>
                    <option value={f.opcionDP}>{f.opcionDP}</option>
                    <option value={f.opcionNS}>{f.opcionNS}</option>
                  </select>
                  {errors.necesidad && <p style={{ fontSize: "0.7rem", color: "#ef4444", marginTop: "0.375rem" }}>{errors.necesidad}</p>}
                </div>

                {/* Mensaje */}
                <div>
                  <label style={labelStyle}>{f.mensaje}</label>
                  <textarea value={form.mensaje} onChange={set("mensaje")} rows={4} style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)"; }} />
                </div>

                <button type="submit" disabled={status === "sending"}
                  style={{ padding: "0.875rem 1.75rem", backgroundColor: "var(--blue)", color: "var(--white)", border: "none", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", cursor: status === "sending" ? "not-allowed" : "pointer", fontFamily: "inherit", opacity: status === "sending" ? 0.7 : 1 }}>
                  {status === "sending" ? f.sending : `${f.submit} →`}
                </button>

                {status === "error" && (
                  <p style={{ fontSize: "0.8rem", color: "#ff6b6b", textAlign: "center" }}>{f.errorMsg}</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        select option { background-color: #0d0d0d; color: #f5f5f0; }
      `}</style>
    </section>
  );
}
