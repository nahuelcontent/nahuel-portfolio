"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { PERSONAL } from "@/lib/constants";

export default function Navbar() {
  const { lang, toggle, tr } = useLanguage();
  const n = tr.nav;

  const links = [
    { label: n.creativeDirection, href: "#creative-direction" },
    { label: n.ugc, href: "#ugc" },
    { label: n.projects, href: "#projects" },
    { label: n.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", backgroundColor: "rgba(8,8,8,0.92)", gap: "1rem" }}
    >
      <a href="#hero" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", letterSpacing: "0.05em", color: "var(--white)", textDecoration: "none", flexShrink: 0 }}>
        NR<span style={{ color: "var(--blue)" }}>.</span>
      </a>

      <ul style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none", flex: 1, justifyContent: "center" }} className="nav-links-desktop">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-text)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--white)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--gray-text)"; }}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
        <button onClick={toggle} aria-label="Toggle language"
          style={{ display: "flex", alignItems: "center", gap: "0.375rem", padding: "0.45rem 0.875rem", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "transparent", cursor: "pointer", transition: "all 0.2s ease" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--blue)"; e.currentTarget.style.backgroundColor = "rgba(39,66,255,0.08)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.backgroundColor = "transparent"; }}>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="var(--gray-text)" strokeWidth="1.2" />
            <path d="M7 1c-1.5 2-2.5 3.8-2.5 6s1 4 2.5 6M7 1c1.5 2 2.5 3.8 2.5 6S8.5 11 7 13M1 7h12" stroke="var(--gray-text)" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <AnimatePresence mode="wait">
            <motion.span key={lang} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }}
              style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "var(--white)", lineHeight: 1 }}>
              {lang === "en" ? "ES" : "EN"}
            </motion.span>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.span key={lang + "-flag"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
              style={{ fontSize: "0.75rem", lineHeight: 1 }}>
              {lang === "en" ? "🇦🇷" : "🇺🇸"}
            </motion.span>
          </AnimatePresence>
        </button>

        <a href={`https://wa.me/${PERSONAL.whatsapp}`} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", padding: "0.5rem 1.1rem", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", backgroundColor: "var(--blue)", color: "var(--white)", textDecoration: "none", transition: "background-color 0.2s" }}
          className="cta-desktop"
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1a2de0"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--blue)"; }}>
          {n.getInTouch}
        </a>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .nav-links-desktop { display: none !important; }
          .cta-desktop { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
