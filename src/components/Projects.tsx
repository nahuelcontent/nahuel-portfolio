"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function Projects() {
  const { lang, tr } = useLanguage();
  const p = tr.projects;

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="container-xl">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "4rem" }}>
          <div className="section-label"><span>{p.sectionLabel}</span></div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="big-heading">
            {p.heading1}<br /><span style={{ color: "var(--blue)" }}>{p.heading2}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "0.875rem", color: "var(--gray-text)", marginTop: "0.5rem", maxWidth: "400px" }}>
            {p.description}
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "rgba(255,255,255,0.06)" }} className="projects-grid">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ backgroundColor: "#0d0d0d", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem", textDecoration: "none", transition: "background-color 0.2s", cursor: "pointer" }}
              className="project-card"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#111"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#0d0d0d"; }}
            >
              {/* Top row: tag + arrow */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.3rem 0.75rem", border: "1px solid rgba(39,66,255,0.3)", color: "var(--blue)", fontWeight: 500 }}>
                  {project.tag}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "var(--gray-text)", transition: "transform 0.2s, color 0.2s" }} className="project-arrow">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Name */}
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1, color: "var(--white)", letterSpacing: "0.02em" }}>
                {project.name}
              </h3>

              {/* Tagline */}
              <p style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--blue)" }}>
                {project.tagline[lang]}
              </p>

              {/* Description */}
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--gray-text)" }}>
                {project.description[lang]}
              </p>

              {/* CTA */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "auto" }}>
                <div style={{ height: "1px", width: "1.5rem", backgroundColor: "var(--blue)" }} />
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue)", fontWeight: 500 }}>
                  {project.cta[lang]}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .projects-grid { grid-template-columns: 1fr 1fr !important; } }
        .project-card:hover .project-arrow { transform: translate(3px, -3px); color: var(--blue) !important; }
      `}</style>
    </section>
  );
}
