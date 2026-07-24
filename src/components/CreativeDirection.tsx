"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CreativeDirection() {
  const { tr } = useLanguage();
  const c = tr.creativeDirection;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} id="creative-direction" className="section-padding" style={{ backgroundColor: "#0a0a0a", position: "relative", overflow: "hidden" }}>

      {/* Decorative number */}
      <motion.p style={{ x, position: "absolute", top: "2rem", right: "-2rem", fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(8rem, 18vw, 16rem)", lineHeight: 1, color: "rgba(255,255,255,0.02)", userSelect: "none", pointerEvents: "none", letterSpacing: "-0.02em" }}>
        01
      </motion.p>

      <div className="container-xl">

        {/* Header */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="section-label"><span>{c.sectionLabel}</span></div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="big-heading">
              {c.heading1}<br />
              <span style={{ color: "var(--blue)", textShadow: "0 0 80px rgba(39,66,255,0.3)" }}>{c.heading2}</span>
            </motion.h2>
          </div>
        </div>

        {/* Quote — big */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "5rem", paddingLeft: "2rem", borderLeft: "2px solid var(--blue)" }}>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1, color: "var(--white)", letterSpacing: "0.02em", maxWidth: "700px" }}>
            {c.intro}
          </p>
        </motion.div>

        {/* Services — bento grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "rgba(255,255,255,0.05)", marginBottom: "4rem" }} className="cd-grid">
          {c.services.map((s, i) => (
            <motion.div key={s.number}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ backgroundColor: "#0a0a0a", padding: "2.5rem", position: "relative", overflow: "hidden", transition: "background-color 0.3s" }}
              className="cd-card"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#111"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#0a0a0a"; }}>
              {/* Number watermark */}
              <span style={{ position: "absolute", top: "1rem", right: "1.5rem", fontFamily: "'Bebas Neue', sans-serif", fontSize: "4rem", lineHeight: 1, color: "rgba(255,255,255,0.04)", userSelect: "none" }}>{s.number}</span>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1, color: "var(--white)", letterSpacing: "0.02em", marginBottom: "0.75rem" }}>{s.title}</h3>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--gray-text)", maxWidth: "300px" }}>{s.desc}</p>
              <div className="cd-line" style={{ position: "absolute", bottom: 0, left: 0, height: "1px", width: 0, backgroundColor: "var(--blue)", transition: "width 0.5s ease" }} />
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <a href={c.ctaUrl} className="btn-primary">{c.cta}</a>
          <a href={c.learnMoreUrl} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "var(--blue)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
            {c.learnMore}
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) { .cd-header { grid-template-columns: 1fr 2fr !important; } }
        @media (min-width: 768px) { .cd-grid { grid-template-columns: 1fr 1fr !important; } }
        .cd-card:hover .cd-line { width: 100% !important; }
      `}</style>
    </section>
  );
}
