"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Experience() {
  const { tr } = useLanguage();
  const e = tr.experience;

  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: "var(--black)" }}>
      <div className="container-xl">
        <div className="section-label"><span>{e.sectionLabel}</span></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="big-heading" style={{ marginBottom: "3.5rem" }}
        >
          {e.heading1}<br /><span style={{ color: "var(--blue)" }}>{e.heading2}</span>
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {e.items.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ border: `1px solid ${exp.featured ? "rgba(39,66,255,0.5)" : "rgba(255,255,255,0.08)"}`, backgroundColor: exp.featured ? "rgba(39,66,255,0.03)" : "transparent", padding: "2.5rem" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }} className="exp-header">
                <div style={{ flex: 1 }}>
                  {exp.featured && (
                    <span style={{ display: "inline-block", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.3rem 0.75rem", backgroundColor: "var(--blue)", color: "var(--white)", fontWeight: 500, marginBottom: "0.75rem" }}>
                      {e.founderBadge}
                    </span>
                  )}
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", lineHeight: 1, color: "var(--white)", letterSpacing: "0.02em", marginBottom: "0.375rem" }}>
                    {exp.company}
                  </h3>
                  {exp.role && <p style={{ fontSize: "0.8rem", color: "var(--blue)", fontWeight: 500 }}>{exp.role}</p>}
                </div>
                <div>
                  <p style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--white)" }}>{exp.period}</p>
                  {exp.location && <p style={{ fontSize: "0.75rem", color: "var(--gray-text)", marginTop: "0.25rem" }}>{exp.location}</p>}
                </div>
              </div>

              <div className="grid-line" style={{ marginBottom: "1.5rem" }} />

              {exp.description && (
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--gray-text)", marginBottom: "1.25rem" }}>{exp.description}</p>
              )}

              <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {exp.bullets.map((bullet, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.875rem", lineHeight: 1.6, color: "var(--white)" }}>
                    <span style={{ marginTop: "0.5rem", width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--blue)", flexShrink: 0, display: "block" }} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (min-width: 768px) { .exp-header { flex-direction: row !important; justify-content: space-between !important; align-items: flex-start !important; } }`}</style>
    </section>
  );
}
