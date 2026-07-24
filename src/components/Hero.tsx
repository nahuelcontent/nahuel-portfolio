"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { PERSONAL } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { tr } = useLanguage();
  const h = tr.hero;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", backgroundColor: "var(--black)", overflow: "hidden" }}>

      {/* Animated grid */}
      <motion.div style={{ y, position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      {/* Blue accent lines */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "absolute", top: 0, left: 0, height: "1px", width: "40vw", background: "linear-gradient(to right, var(--blue), transparent)", transformOrigin: "left" }} />
      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "absolute", top: 0, left: 0, width: "1px", height: "40vh", background: "linear-gradient(to bottom, var(--blue), transparent)", transformOrigin: "top" }} />

      {/* Glowing orb */}
      <div style={{ position: "absolute", right: "5%", top: "20%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(39,66,255,0.12) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(40px)" }} />

      <motion.div style={{ opacity, width: "100%", maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center", paddingTop: "6rem", paddingBottom: "4rem" }} className="hero-grid">

          {/* TEXT */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ marginBottom: "2rem", display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--blue)", boxShadow: "0 0 12px var(--blue)" }} />
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gray-text)" }}>{h.tag}</span>
            </motion.div>

            {/* Headline — clip-path reveal */}
            <div style={{ marginBottom: "1.5rem", overflow: "hidden" }}>
              <motion.p
                initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", color: "var(--gray-text)", letterSpacing: "0.06em", lineHeight: 1 }}>
                {h.headingLine1}
              </motion.p>
            </div>

            <div style={{ marginBottom: "0.25rem", overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(5.5rem, 16vw, 13rem)", lineHeight: 0.85, letterSpacing: "0.01em", color: "var(--white)" }}>
                {h.headingLine2}
              </motion.h1>
            </div>

            <div style={{ overflow: "hidden", marginBottom: "2.5rem" }}>
              <motion.p
                initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.5rem, 10vw, 8rem)", lineHeight: 1, letterSpacing: "0.01em" }}
              >
                <span style={{ color: "var(--blue)", textShadow: "0 0 60px rgba(39,66,255,0.5)" }}>{h.headingLine3}</span>
              </motion.p>
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}
              style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--gray-text)", marginBottom: "2.5rem", maxWidth: "420px" }}>
              {h.tagline}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
              <a href="#creative-direction" className="btn-primary">{h.cta1}</a>
              <a href="#ugc" className="btn-secondary">{h.cta2}</a>
            </motion.div>
          </div>

          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", justifyContent: "center" }} className="hero-photo-col">
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* Animated border */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
                style={{ position: "absolute", inset: "-1px", background: "linear-gradient(135deg, var(--blue), transparent, var(--blue))", borderRadius: "0", padding: "1px", zIndex: 0 }}>
                <div style={{ width: "100%", height: "100%", backgroundColor: "var(--black)" }} />
              </motion.div>

              <div style={{ position: "relative", width: "clamp(240px, 26vw, 340px)", height: "clamp(320px, 36vw, 460px)", overflow: "hidden", zIndex: 1, margin: "1px" }}>
                <Image src="/images/nahuel-hero.jpg" alt="Nahuel Recabarren" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
                {/* Overlay gradient */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.4) 0%, transparent 50%)" }} />
              </div>

              {/* Blue badge */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                style={{ position: "absolute", bottom: "1rem", left: "-1.5rem", padding: "0.625rem 1rem", backgroundColor: "var(--blue)", zIndex: 2, boxShadow: "0 0 30px rgba(39,66,255,0.5)" }}>
                <p style={{ fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--white)", lineHeight: 1.5 }}>
                  {h.available}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--blue), transparent)" }} />
      </motion.div>

      {/* Bottom gradient */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "8rem", background: "linear-gradient(to bottom, transparent, var(--black))", pointerEvents: "none" }} />

      <style>{`
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr auto !important; gap: 5rem !important; }
          .hero-photo-col { justify-content: flex-end !important; }
        }
      `}</style>
    </section>
  );
}
