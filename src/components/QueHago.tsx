"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function QueHago() {
  const { tr } = useLanguage();
  const q = tr.queHago;

  return (
    <section id="que-hago" className="section-padding" style={{ backgroundColor: "var(--black)" }}>
      <div className="container-xl">
        <div className="section-label"><span>{q.sectionLabel}</span></div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "4rem" }} className="quehago-header">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="big-heading">
              {q.heading1}<br /><span style={{ color: "var(--blue)" }}>{q.heading2}</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--gray-text)", maxWidth: "440px", alignSelf: "flex-end" }}>
            {q.bajada}
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", border: "1px solid rgba(255,255,255,0.08)" }} className="services-grid">
          {q.services.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ padding: "2rem", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "1.5rem", alignItems: "flex-start", backgroundColor: "var(--black)", transition: "background-color 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(39,66,255,0.04)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--black)"; }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", color: "var(--blue)", letterSpacing: "0.1em", flexShrink: 0, paddingTop: "0.15rem" }}>{s.number}</span>
              <div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "var(--white)", letterSpacing: "0.04em", marginBottom: "0.625rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--gray-text)", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .quehago-header { grid-template-columns: 1fr 1fr !important; align-items: end !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .services-grid > div { border-right: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>
    </section>
  );
}
