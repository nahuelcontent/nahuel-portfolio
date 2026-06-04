"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { tr } = useLanguage();
  const a = tr.about;

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: "var(--black)" }}>
      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "start" }} className="about-grid">

          <div>
            <div className="section-label"><span>{a.sectionLabel}</span></div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="big-heading"
            >
              {a.heading1}<br />{a.heading2.split(" ")[0]}<span style={{ color: "var(--blue)" }}> {a.heading2.split(" ").slice(1).join(" ") || a.heading2}</span>
            </motion.h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "1.1rem", lineHeight: 1.65, color: "var(--white)", fontWeight: 400 }}>
              {a.p1}
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--gray-text)" }}>
              {a.p2}
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--gray-text)" }}>
              {a.p3}
            </motion.p>
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              style={{ marginTop: "0.5rem", paddingLeft: "1.5rem", borderLeft: "2px solid var(--blue)" }}>
              <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.5, color: "var(--white)", fontWeight: 500 }}>
                {a.quote}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media (min-width: 900px) { .about-grid { grid-template-columns: 2fr 5fr !important; gap: 5rem !important; } }`}</style>
    </section>
  );
}
