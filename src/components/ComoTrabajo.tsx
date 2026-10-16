"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function ComoTrabajo() {
  const { tr } = useLanguage();
  const ct = tr.comoTrabajo;

  return (
    <section id="como-trabajo" className="section-padding" style={{ backgroundColor: "var(--black)" }}>
      <div className="container-xl">
        <div className="section-label"><span>{ct.sectionLabel}</span></div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="big-heading" style={{ marginBottom: "4rem" }}>
          {ct.heading1}<br /><span style={{ color: "var(--blue)" }}>{ct.heading2}</span>
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", border: "1px solid rgba(255,255,255,0.08)" }} className="steps-grid">
          {ct.steps.map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ padding: "2.5rem 2rem", backgroundColor: "var(--black)", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "4rem", color: "rgba(39,66,255,0.06)", letterSpacing: "0.02em", position: "absolute", top: "0.5rem", right: "1rem", lineHeight: 1, userSelect: "none" }}>{step.n}</span>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.75rem" }}>{step.n}</p>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--white)", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>{step.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--gray-text)", lineHeight: 1.65, maxWidth: "280px" }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 1100px) {
          .steps-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
