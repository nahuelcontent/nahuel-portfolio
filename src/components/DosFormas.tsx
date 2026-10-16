"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { PERSONAL } from "@/lib/constants";

export default function DosFormas() {
  const { tr } = useLanguage();
  const df = tr.dosFormas;

  return (
    <section id="dos-formas" className="section-padding" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="container-xl">
        <div className="section-label"><span>{df.sectionLabel}</span></div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="big-heading" style={{ marginBottom: "4rem" }}>
          {df.heading1}<br /><span style={{ color: "var(--blue)" }}>{df.heading2}</span>
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="dosformas-grid">
          {df.cards.map((card, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ border: i === 0 ? "1px solid rgba(39,66,255,0.4)" : "1px solid rgba(255,255,255,0.08)", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem", backgroundColor: i === 0 ? "rgba(39,66,255,0.04)" : "transparent", position: "relative" }}>
              {i === 0 && (
                <div style={{ position: "absolute", top: "-1px", left: "2rem", backgroundColor: "var(--blue)", padding: "0.2rem 0.75rem" }}>
                  <span style={{ fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--white)" }}>Recomendado</span>
                </div>
              )}
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)" }}>{card.tag}</p>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--white)", letterSpacing: "0.03em" }}>{card.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--gray-text)", lineHeight: 1.7, flex: 1 }}>{card.desc}</p>
              <a
                href={card.tag === "Alpha Studio" ? card.link : PERSONAL.whatsappUrl}
                target="_blank" rel="noopener noreferrer"
                className={i === 0 ? "btn-primary" : "btn-secondary"}
                style={{ display: "inline-block", textAlign: "center" }}>
                {card.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .dosformas-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
