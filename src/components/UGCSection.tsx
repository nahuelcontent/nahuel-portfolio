"use client";

import { motion } from "framer-motion";
import { PERSONAL, INSTAGRAM_REELS } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

function ReelEmbed({ item }: { item: { id: string; type: string } }) {
  return (
    <div style={{ width: "100%", aspectRatio: "9/16", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
      <iframe
        src={`https://www.instagram.com/${item.type}/${item.id}/embed/`}
        style={{ width: "100%", height: "100%", border: "none" }}
        allowFullScreen
        loading="lazy"
        title={`Instagram ${item.type} ${item.id}`}
      />
    </div>
  );
}

export default function UGCSection() {
  const { tr } = useLanguage();
  const u = tr.ugc;

  return (
    <section id="ugc" className="section-padding" style={{ backgroundColor: "var(--black)" }}>
      <div className="container-xl">

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "4rem" }} className="ugc-header">
          <div>
            <div className="section-label"><span>{u.sectionLabel}</span></div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="big-heading">
              {u.heading1}<br /><span style={{ color: "var(--blue)" }}>{u.heading2}</span>
            </motion.h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", justifyContent: "flex-end" }}>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--white)" }}>
              {u.description}
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--gray-text)", fontStyle: "italic" }}>
              {u.subtext}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={u.ctaUrl} className="btn-primary">{u.cta}</a>
              <a href={PERSONAL.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">{u.igCta}</a>
            </motion.div>
          </div>
        </div>

        {/* Reels label */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ width: "1.5rem", height: "1px", backgroundColor: "var(--blue)" }} />
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray-text)" }}>
            @{PERSONAL.instagramHandle} · {u.videosLabel}
          </span>
        </motion.div>

        {/* Reels grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="reels-grid">
          {INSTAGRAM_REELS.map((item, i) => (
            <motion.div key={item.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <ReelEmbed item={item} />
            </motion.div>
          ))}
        </div>

        {/* IG profile link */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <a href={PERSONAL.instagramUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-text)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--white)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--gray-text)"; }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            @{PERSONAL.instagramHandle}
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) { .ugc-header { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .reels-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
