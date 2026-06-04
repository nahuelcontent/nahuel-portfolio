"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Services() {
  const { tr } = useLanguage();
  const s = tr.services;

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="container-xl">
        <div style={{ marginBottom: "4rem" }}>
          <div className="section-label"><span>{s.sectionLabel}</span></div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="big-heading"
          >
            {s.heading}
          </motion.h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "rgba(255,255,255,0.06)" }} className="services-grid">
          {s.items.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ backgroundColor: "#0d0d0d", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", cursor: "default", transition: "background-color 0.25s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#141414"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#0d0d0d"; }}
              className="service-card"
            >
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--blue)", fontWeight: 500 }}>{service.number}</span>
              <div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", lineHeight: 1, color: "var(--white)", marginBottom: "0.75rem", letterSpacing: "0.02em" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--gray-text)" }}>{service.description}</p>
              </div>
              <div className="service-line" style={{ height: "1px", width: 0, backgroundColor: "var(--blue)", transition: "width 0.5s ease" }} />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) { .services-grid { grid-template-columns: 1fr 1fr !important; } }
        .service-card:hover .service-line { width: 100% !important; }
      `}</style>
    </section>
  );
}
