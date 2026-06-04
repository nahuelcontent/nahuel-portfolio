"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { tr } = useLanguage();

  return (
    <footer style={{ backgroundColor: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "3rem 0" }}>
      <div className="container-xl">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} className="footer-row">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", lineHeight: 1, letterSpacing: "0.02em", color: "var(--white)", marginBottom: "0.375rem" }}>
              {PERSONAL.name}<span style={{ color: "var(--blue)" }}>.</span>
            </p>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-text)" }}>
              {tr.footer.tagline}
            </p>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "0.75rem", color: "var(--gray-text)" }}>
            © {new Date().getFullYear()} {PERSONAL.fullName}
          </motion.p>
        </div>
      </div>
      <style>{`@media (min-width: 768px) { .footer-row { flex-direction: row !important; align-items: center !important; justify-content: space-between !important; } }`}</style>
    </footer>
  );
}
