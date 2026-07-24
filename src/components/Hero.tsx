"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PERSONAL } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const { tr } = useLanguage();
  const h = tr.hero;

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "var(--black)", overflow: "hidden" }}>
      {/* grid bg */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />

      {/* blue top line */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        style={{ position: "absolute", top: 0, left: 0, height: "2px", width: "160px", backgroundColor: "var(--blue)", transformOrigin: "left" }} />

      <div className="container-xl" style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="hero-grid">

          {/* TEXT */}
          <div>
            {/* tag */}
            <motion.div {...up(0.1)} style={{ marginBottom: "2rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 1rem", border: "1px solid rgba(39,66,255,0.3)", backgroundColor: "rgba(39,66,255,0.06)" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--blue)", display: "block", flexShrink: 0 }} />
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>{h.tag}</span>
              </div>
            </motion.div>

            {/* headline */}
            <motion.div {...up(0.2)} style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "var(--gray-text)", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                {h.headingLine1}
              </p>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(5rem, 14vw, 11rem)", lineHeight: 0.88, letterSpacing: "0.01em", color: "var(--white)" }}>
                {h.headingLine2}
              </h1>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 1, letterSpacing: "0.01em", color: "var(--blue)" }}>
                {h.headingLine3}
              </p>
            </motion.div>

            <motion.p {...up(0.35)} style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", lineHeight: 1.65, color: "var(--white)", marginBottom: "2.5rem", maxWidth: "500px" }}>
              {h.tagline}
            </motion.p>

            <motion.div {...up(0.45)} style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2.5rem" }}>
              <a href="#creative-direction" className="btn-primary">{h.cta1}</a>
              <a href="#ugc" className="btn-secondary">{h.cta2}</a>
            </motion.div>

            <motion.div {...up(0.55)} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--blue)", display: "block" }} />
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-text)" }}>{h.available}</span>
            </motion.div>
          </div>

          {/* PHOTO */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "center" }} className="hero-photo-col">
            <div style={{ position: "relative", display: "inline-block" }}>
              <div style={{ position: "absolute", top: "-10px", right: "-10px", width: "100%", height: "100%", border: "1px solid rgba(39,66,255,0.45)", pointerEvents: "none", zIndex: 0 }} />
              <div style={{ position: "relative", width: "clamp(240px, 28vw, 360px)", height: "clamp(320px, 38vw, 480px)", backgroundColor: "#111", overflow: "hidden", zIndex: 1 }}>
                <Image src="/images/nahuel-hero.jpg" alt="Nahuel Recabarren — Creative Director" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: "-14px", left: "-14px", padding: "0.75rem 1rem", backgroundColor: "var(--blue)", zIndex: 2 }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--white)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                  {h.available}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5rem", background: "linear-gradient(to bottom, transparent, var(--black))", pointerEvents: "none" }} />

      <style>{`
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr auto !important; gap: 4rem !important; }
          .hero-photo-col { justify-content: flex-end !important; }
        }
      `}</style>
    </section>
  );
}
