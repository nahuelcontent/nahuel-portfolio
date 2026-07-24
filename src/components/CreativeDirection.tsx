"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function CreativeDirection() {
  const { tr } = useLanguage();
  const c = tr.creativeDirection;

  return (
    <section id="creative-direction" className="section-padding" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="container-xl">

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "5rem" }} className="cd-header">
          <div>
            <div className="section-label"><span>{c.sectionLabel}</span></div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="big-heading">
              {c.heading1}<br /><span style={{ color: "var(--blue)" }}>{c.heading2}</span>
            </motion.h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.6, color: "var(--white)", fontWeight: 500 }}>
              {c.intro}
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--gray-text)" }}>
              {c.description}
            </motion.p>
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              style={{ paddingLeft: "1.5rem", borderLeft: "2px solid var(--blue)", marginTop: "0.5rem" }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--white)", letterSpacing: "0.02em" }}>
                {c.quote}
              </p>
            </motion.div>
          </div>
        </div>

        {/* 4 service cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "rgba(255,255,255,0.06)", marginBottom: "3rem" }} className="cd-grid">
          {c.services.map((s, i) => (
            <motion.div key={s.number}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ backgroundColor: "#0d0d0d", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem", transition: "background-color 0.2s" }}
              className="cd-card"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#141414"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#0d0d0d"; }}
            >
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--blue)", fontWeight: 500 }}>{s.number}</span>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", lineHeight: 1, color: "var(--white)", letterSpacing: "0.02em" }}>{s.title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--gray-text)" }}>{s.desc}</p>
              <div className="cd-line" style={{ height: "1px", width: 0, backgroundColor: "var(--blue)", transition: "width 0.5s ease" }} />
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
          <a href={c.ctaUrl} className="btn-primary">{c.cta}</a>
          <a href={c.learnMoreUrl} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--blue)", textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
            {c.learnMore}
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) { .cd-header { grid-template-columns: 1fr 2fr !important; gap: 5rem !important; } }
        @media (min-width: 768px) { .cd-grid { grid-template-columns: 1fr 1fr !important; } }
        .cd-card:hover .cd-line { width: 100% !important; }
      `}</style>
    </section>
  );
}
