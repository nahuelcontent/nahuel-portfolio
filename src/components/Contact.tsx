"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { tr } = useLanguage();
  const c = tr.contact;

  const rows = [
    { label: c.rows.email, value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
    { label: c.rows.phone, value: PERSONAL.phone, href: `https://wa.me/${PERSONAL.whatsapp}` },
    { label: c.rows.location, value: PERSONAL.location, href: undefined },
    { label: c.rows.instagram, value: `@${PERSONAL.instagramHandle}`, href: PERSONAL.instagramUrl },
  ];

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }} className="contact-grid">

          {/* Left */}
          <div>
            <div className="section-label"><span>{c.sectionLabel}</span></div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="big-heading" style={{ marginBottom: "1.5rem" }}>
              {c.heading1}{c.heading2 && <><br /><span style={{ color: "var(--blue)" }}>{c.heading2}</span></>}
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--gray-text)", marginBottom: "2.5rem", maxWidth: "360px" }}>
              {c.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }} className="contact-btns">
              {/* WhatsApp — primary */}
              <a href={`https://wa.me/${PERSONAL.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.115 1.535 5.837L.057 23.272a.75.75 0 00.92.92l5.435-1.478A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.696-.508-5.24-1.394l-.376-.214-3.896 1.059 1.059-3.896-.214-.376A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                {c.whatsapp}
              </a>
              <a href={`mailto:${PERSONAL.email}`} className="btn-secondary">{c.email}</a>
              <a href={PERSONAL.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">{c.linkedin}</a>
            </motion.div>

            {/* CV — secondary download */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
              style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--gray-text)", marginBottom: "0.75rem" }}>
                {c.downloadCv ? "Want to know more about me?" : ""}
              </p>
              <a href={PERSONAL.cvUrl} download
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-text)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--white)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--gray-text)"; }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {c.downloadCv}
              </a>
            </motion.div>
          </div>

          {/* Right — info rows */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", alignSelf: "end" }}>
            {rows.map((row) => (
              <div key={row.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.375rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", gap: "1rem" }}>
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-text)", flexShrink: 0 }}>{row.label}</span>
                {row.href ? (
                  <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--white)", textDecoration: "none", transition: "color 0.2s", textAlign: "right" }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--blue)"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--white)"; }}>
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
