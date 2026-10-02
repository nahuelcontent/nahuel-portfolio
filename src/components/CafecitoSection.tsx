"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CafecitoSection() {
  return (
    <section style={{ backgroundColor: "#050505", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      {/* BG text */}
      <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(10rem, 22vw, 20rem)", color: "rgba(39,66,255,0.03)", userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap", lineHeight: 1, letterSpacing: "-0.03em" }}>
        CAFÉ
      </span>

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ border: "1px solid rgba(255,255,255,0.07)", padding: "3rem", display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", alignItems: "center" }} className="cafecito-banner-grid">

          {/* Left */}
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>
              // CAFECITOS CON NAHUEL
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95, color: "var(--white)", letterSpacing: "0.02em", marginBottom: "1.25rem" }}>
              RESEÑAS HONESTAS<br />
              <span style={{ color: "var(--blue)" }}>PARA CAFÉS</span><br />
              DE ESPECIALIDAD
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "var(--gray-text)", maxWidth: "420px" }}>
              Visitas reales a cafeterías. Producción visual cuidada. El tono honesto que la gente confía — y que termina cruzando la puerta de tu local.
            </motion.p>
          </div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "rgba(255,255,255,0.06)" }}>
              {[["1 REEL", "principal editado"], ["3 STORIES", "con etiqueta"], ["CANJE", "o mixto"], ["BA", "base de operación"]].map(([val, label]) => (
                <div key={val} style={{ backgroundColor: "#050505", padding: "1.25rem", textAlign: "center" }}>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "var(--white)", lineHeight: 1, marginBottom: "0.25rem" }}>{val}</p>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-text)" }}>{label}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/cafecito" className="btn-primary" style={{ fontSize: "0.75rem" }}>
                Ver propuesta completa →
              </Link>
              <a href="https://www.instagram.com/cafecitocon.nahuel/" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: "0.75rem" }}>
                @cafecitocon.nahuel
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .cafecito-banner-grid { grid-template-columns: 1.2fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
