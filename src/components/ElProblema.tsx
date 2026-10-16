"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function ElProblema() {
  const { tr } = useLanguage();
  const ep = tr.elProblema;

  return (
    <section id="el-problema" style={{ backgroundColor: "var(--blue)", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "860px", marginLeft: "auto", marginRight: "auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.1, color: "var(--white)", marginBottom: "2.5rem", letterSpacing: "0.02em" }}>
          {ep.title}
        </motion.p>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
          {ep.items.map((item, i) => (
            <motion.li key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--white)", flexShrink: 0, marginTop: "0.45rem" }} />
              <span style={{ fontSize: "0.95rem", color: "rgba(245,245,240,0.85)", lineHeight: 1.6 }}>{item}</span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.35 }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "var(--white)", letterSpacing: "0.04em" }}>
          {ep.close}
        </motion.p>
      </div>
    </section>
  );
}
