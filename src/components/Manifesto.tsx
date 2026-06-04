"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Manifesto() {
  const { tr } = useLanguage();
  const m = tr.manifesto;

  return (
    <section className="section-padding" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }} className="manifesto-grid">
          <div>
            <div className="section-label"><span>{m.sectionLabel}</span></div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="big-heading"
            >
              {m.heading1}<br /><span style={{ color: "var(--blue)" }}>{m.heading2}</span>
            </motion.h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {m.lines.map((line, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 500, lineHeight: 1.4, color: "var(--white)" }}
              >
                {line}
              </motion.p>
            ))}

            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)", transformOrigin: "left" }}
            />

            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.35 }}
              style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--gray-text)" }}>
              {m.p1}
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.45 }}
              style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--gray-text)" }}>
              {m.p2}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.55 }}
              style={{ padding: "1.75rem 2rem", borderLeft: "2px solid var(--blue)", backgroundColor: "rgba(39,66,255,0.05)", marginTop: "0.5rem" }}
            >
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "0.02em", color: "var(--white)" }}>
                {m.quote}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media (min-width: 900px) { .manifesto-grid { grid-template-columns: 2fr 5fr !important; gap: 5rem !important; } }`}</style>
    </section>
  );
}
