"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { tr } = useLanguage();
  const c = tr.contact;

  const rows = [
    { label: c.rows.email, value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
    { label: c.rows.phone, value: PERSONAL.phone, href: `tel:${PERSONAL.phone}` },
    { label: c.rows.location, value: PERSONAL.location, href: undefined },
    { label: c.rows.linkedin, value: `linkedin.com/in/${PERSONAL.linkedinHandle}`, href: PERSONAL.linkedinUrl },
  ];

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: "var(--black)" }}>
      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }} className="contact-grid">

          <div>
            <div className="section-label"><span>{c.sectionLabel}</span></div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="big-heading" style={{ marginBottom: "1.5rem" }}
            >
              {c.heading1}<br /><span style={{ color: "var(--blue)" }}>{c.heading2}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--gray-text)", marginBottom: "2.5rem", maxWidth: "360px" }}
            >
              {c.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }} className="contact-btns"
            >
              <a href={PERSONAL.cvUrl} download className="btn-primary">{c.downloadCv}</a>
              <a href={`mailto:${PERSONAL.email}`} className="btn-secondary">{c.emailMe}</a>
              <a href={PERSONAL.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">{c.linkedin}</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", alignSelf: "end" }}
          >
            {rows.map((row) => (
              <div key={row.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.375rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", gap: "1rem" }}>
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-text)", flexShrink: 0 }}>
                  {row.label}
                </span>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--white)", textDecoration: "none", transition: "color 0.2s", textAlign: "right" }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--blue)"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--white)"; }}
                  >
                    {row.value}
                  </a>
                ) : (
                  <span style={{ fontSize: "0.875rem", color: "var(--white)", textAlign: "right" }}>{row.value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (min-width: 900px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
          .contact-btns { flex-direction: row !important; flex-wrap: wrap !important; }
        }
      `}</style>
    </section>
  );
}
