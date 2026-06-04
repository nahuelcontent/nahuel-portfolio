"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Impact() {
  const { tr } = useLanguage();
  const im = tr.impact;

  return (
    <section className="section-padding" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="container-xl">
        <div className="section-label"><span>{im.sectionLabel}</span></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="big-heading" style={{ marginBottom: "3.5rem" }}
        >
          {im.heading1}<br /><span style={{ color: "var(--blue)" }}>{im.heading2}</span>
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "rgba(255,255,255,0.06)" }} className="impact-grid">
          {im.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ backgroundColor: "#0d0d0d", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>
                <span style={{ display: "block", fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1, color: "var(--white)", letterSpacing: "0.02em" }}>
                  {item.value}
                </span>
                {item.label && (
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "var(--blue)", letterSpacing: "0.05em" }}>
                    {item.label}
                  </span>
                )}
              </div>
              <div style={{ width: "2rem", height: "1px", backgroundColor: "var(--blue)" }} />
              <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--gray-text)" }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 600px) { .impact-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .impact-grid { grid-template-columns: repeat(4, 1fr) !important; } }
      `}</style>
    </section>
  );
}
