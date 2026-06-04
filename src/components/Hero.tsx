"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PERSONAL } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const { tr } = useLanguage();
  const h = tr.hero;

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "var(--black)",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          pointerEvents: "none",
        }}
      />

      {/* Blue accent — top left */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "2px",
          width: "160px",
          backgroundColor: "var(--blue)",
          transformOrigin: "left",
        }}
      />

      <div className="container-xl" style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="hero-grid">

          {/* ── LEFT: Text ── */}
          <div style={{ maxWidth: "680px" }}>

            {/* Tag */}
            <motion.div {...fadeUp(0.15)} style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.5rem 1rem",
                  border: "1px solid rgba(39,66,255,0.3)",
                  backgroundColor: "rgba(39,66,255,0.06)",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--blue)", display: "block", flexShrink: 0 }} />
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>
                  {h.tag}
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.25)}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(5.5rem, 16vw, 12rem)",
                lineHeight: 0.9,
                letterSpacing: "0.01em",
                marginBottom: "1.75rem",
                color: "var(--white)",
              }}
            >
              {PERSONAL.name}
              <span style={{ color: "var(--blue)" }}>.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.38)}
              style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.6, color: "var(--white)", marginBottom: "0.875rem", maxWidth: "520px", fontWeight: 400 }}
            >
              {h.tagline}
            </motion.p>

            {/* Intro */}
            <motion.p
              {...fadeUp(0.48)}
              style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--gray-text)", marginBottom: "2.5rem", maxWidth: "460px" }}
            >
              {h.intro}
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.58)} style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2.5rem" }}>
              <a href={PERSONAL.cvUrl} download className="btn-primary">
                {h.viewCv}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">{h.contactMe}</a>
            </motion.div>

            {/* Location */}
            <motion.div {...fadeUp(0.65)} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--blue)", display: "block", flexShrink: 0 }} />
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-text)" }}>
                {PERSONAL.location}
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "center" }}
            className="hero-photo-col"
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* Blue offset frame */}
              <div style={{ position: "absolute", top: "-10px", right: "-10px", width: "100%", height: "100%", border: "1px solid rgba(39,66,255,0.45)", pointerEvents: "none", zIndex: 0 }} />

              {/* Photo */}
              <div style={{ position: "relative", width: "clamp(240px, 28vw, 360px)", height: "clamp(320px, 38vw, 480px)", backgroundColor: "#111", overflow: "hidden", zIndex: 1 }}>
                {/* PHOTO: drop nahuel-hero.jpg into /public/images/ */}
                <Image
                  src="/images/nahuel-hero.jpg"
                  alt="Nahuel Recabarren — Creative Strategist"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>

              {/* Badge */}
              <div style={{ position: "absolute", bottom: "-14px", left: "-14px", padding: "0.75rem 1rem", backgroundColor: "var(--blue)", zIndex: 2 }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--white)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                  {h.availableFor}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
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
