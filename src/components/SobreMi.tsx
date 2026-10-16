"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function SobreMi() {
  const { tr } = useLanguage();
  const sm = tr.sobreMi;

  return (
    <section id="sobre-mi" className="section-padding" style={{ backgroundColor: "var(--black)" }}>
      <div className="container-xl">
        <div className="section-label"><span>{sm.sectionLabel}</span></div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="sobremi-grid">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="big-heading" style={{ marginBottom: "1.75rem" }}>
              {sm.heading1}<br /><span style={{ color: "var(--blue)" }}>{sm.heading2}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--gray-text)", maxWidth: "480px" }}>
              {sm.text}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ display: "flex", justifyContent: "center" }} className="sobremi-photo">
            <div style={{ position: "relative", width: "clamp(200px, 24vw, 300px)", height: "clamp(260px, 32vw, 400px)", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden" }}>
              <Image src="/images/nahuel-hero.jpg" alt="Nahuel Recabarren" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .sobremi-grid { grid-template-columns: 1fr auto !important; gap: 5rem !important; }
          .sobremi-photo { justify-content: flex-end !important; }
        }
      `}</style>
    </section>
  );
}
