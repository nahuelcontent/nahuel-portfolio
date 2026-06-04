"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Skills() {
  const { tr } = useLanguage();
  const s = tr.skills;
  const categories = Object.entries(s.categories) as [string, string[]][];

  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: "var(--black)" }}>
      <div className="container-xl">
        <div className="section-label"><span>{s.sectionLabel}</span></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="big-heading" style={{ marginBottom: "3.5rem" }}
        >
          {s.heading1}<br /><span style={{ color: "var(--blue)" }}>{s.heading2}</span>
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", marginBottom: "4rem" }} className="skills-grid">
          {categories.map(([category, items], i) => (
            <motion.div key={category}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--blue)", display: "block", flexShrink: 0 }} />
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--blue)", fontWeight: 500 }}>
                  {category}
                </span>
              </div>
              <ul style={{ display: "flex", flexDirection: "column" }}>
                {items.map((skill) => (
                  <li key={skill} style={{ fontSize: "0.875rem", color: "var(--white)", padding: "0.625rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid-line" style={{ marginBottom: "3rem" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }} className="edu-grid">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="section-label"><span>{s.educationLabel}</span></div>
            {s.education.map((edu, i) => (
              <div key={i}>
                <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", letterSpacing: "0.02em", color: "var(--white)", marginBottom: "0.25rem" }}>
                  {edu.school}
                </h4>
                <p style={{ fontSize: "0.75rem", color: "var(--blue)", marginBottom: "1rem", fontWeight: 500 }}>{edu.country}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {edu.fields.map((field) => (
                    <span key={field} style={{ fontSize: "0.7rem", padding: "0.375rem 0.875rem", border: "1px solid rgba(255,255,255,0.1)", color: "var(--gray-text)" }}>
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="section-label"><span>{s.languagesLabel}</span></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {s.languages.map((lang) => (
                <div key={lang.language} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.875rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--white)" }}>{lang.language}</span>
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", padding: "0.3rem 0.75rem", backgroundColor: "rgba(39,66,255,0.12)", color: "var(--blue)" }}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .edu-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
