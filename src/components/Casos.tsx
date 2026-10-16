"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { PERSONAL } from "@/lib/constants";

const casosData = {
  es: [
    {
      id: "apolo",
      cliente: "Apolo Centro Capilar",
      rubro: "Clínica capilar · La Plata",
      desafio: "Presencia inconsistente en redes. El contenido no reflejaba la calidad del servicio ni generaba confianza.",
      decision: "Redefiní la estética visual, creé un sistema de contenido mensual centrado en casos reales y testimonios, con dirección de rodaje in situ.",
      resultado: "Crecimiento orgánico sostenido, consultas desde redes y una identidad reconocible en su nicho.",
      metrics: [
        { label: "Alcance orgánico", value: "+3×" },
        { label: "Consultas desde IG", value: "+60%" },
      ],
      instagramUrl: "https://www.instagram.com/apolo.centrocapilar/",
    },
    {
      id: "casaazul",
      cliente: "Casa Azul",
      rubro: "Café de especialidad · La Plata",
      desafio: "Identidad visual genérica que no transmitía la experiencia del lugar ni diferenciaba al café de la competencia.",
      decision: "Construí una narrativa visual basada en luz, textura y ritmo. Dirección de rodaje para reels que muestran el ambiente y el proceso.",
      resultado: "Mayor reconocimiento de marca, aumento de visitas provenientes de redes sociales y comunidad comprometida.",
      metrics: [
        { label: "Seguidores nuevos", value: "+800" },
        { label: "Visitas desde IG", value: "+45%" },
      ],
      reelEmbed: "https://www.instagram.com/reel/placeholder/embed",
      instagramUrl: "https://www.instagram.com/casaazul.cafeteria/",
    },
  ],
  en: [
    {
      id: "apolo",
      cliente: "Apolo Centro Capilar",
      rubro: "Hair clinic · La Plata",
      desafio: "Inconsistent social media presence. Content didn't reflect service quality or build trust.",
      decision: "Redefined the visual aesthetic, built a monthly content system focused on real cases and testimonials, with on-site production direction.",
      resultado: "Sustained organic growth, leads from social media, and a recognizable identity in the niche.",
      metrics: [
        { label: "Organic reach", value: "+3×" },
        { label: "Inquiries from IG", value: "+60%" },
      ],
      instagramUrl: "https://www.instagram.com/apolo.centrocapilar/",
    },
    {
      id: "casaazul",
      cliente: "Casa Azul",
      rubro: "Specialty coffee · La Plata",
      desafio: "Generic visual identity that didn't convey the venue experience or differentiate the café from competitors.",
      decision: "Built a visual narrative based on light, texture and rhythm. Production direction for reels showing the atmosphere and process.",
      resultado: "Greater brand recognition, increased visits from social media and an engaged community.",
      metrics: [
        { label: "New followers", value: "+800" },
        { label: "Visits from IG", value: "+45%" },
      ],
      reelEmbed: "https://www.instagram.com/reel/placeholder/embed",
      instagramUrl: "https://www.instagram.com/casaazul.cafeteria/",
    },
  ],
};

export default function Casos() {
  const { lang, tr } = useLanguage();
  const c = tr.casos;
  const casos = casosData[lang];

  return (
    <section id="casos" className="section-padding" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="container-xl">
        <div className="section-label"><span>{c.sectionLabel}</span></div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="big-heading" style={{ marginBottom: "4rem" }}>
          {c.heading1}
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {casos.map((caso, i) => (
            <motion.div key={caso.id}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "3rem" }}>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "1rem", marginBottom: "2.5rem" }}>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--white)", letterSpacing: "0.03em" }}>{caso.cliente}</h3>
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)", border: "1px solid rgba(39,66,255,0.35)", padding: "0.3rem 0.7rem" }}>{caso.rubro}</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", marginBottom: "2rem" }} className="caso-grid">
                <div>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.625rem" }}>{c.desafio}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--gray-text)", lineHeight: 1.7 }}>{caso.desafio}</p>
                </div>
                <div>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.625rem" }}>{c.decision}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--gray-text)", lineHeight: 1.7 }}>{caso.decision}</p>
                </div>
                <div>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.625rem" }}>{c.resultado}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--gray-text)", lineHeight: 1.7 }}>{caso.resultado}</p>
                </div>
              </div>

              {/* Metrics */}
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginBottom: caso.reelEmbed ? "2rem" : "0" }}>
                {caso.metrics.map((m) => (
                  <div key={m.label} style={{ padding: "1rem 1.5rem", border: "1px solid rgba(255,255,255,0.08)", minWidth: "120px" }}>
                    <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "var(--blue)", letterSpacing: "0.04em", lineHeight: 1 }}>{m.value}</p>
                    <p style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-text)", marginTop: "0.25rem" }}>{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Reel embed placeholder for Casa Azul */}
              {caso.reelEmbed && (
                <div style={{ marginTop: "2rem", border: "1px solid rgba(255,255,255,0.08)", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "200px", backgroundColor: "rgba(255,255,255,0.02)" }}>
                  <a href={caso.instagramUrl} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    Ver en Instagram
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Small card — Voltia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginTop: "4rem", border: "1px solid rgba(255,255,255,0.08)", padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <div>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", color: "var(--white)", letterSpacing: "0.04em", marginBottom: "0.25rem" }}>Voltia</p>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-text)" }}>Movilidad eléctrica · San Juan</p>
          </div>
          <a href="https://www.instagram.com/voltia.sanjuan/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)", textDecoration: "none", border: "1px solid rgba(39,66,255,0.35)", padding: "0.5rem 1rem", whiteSpace: "nowrap" }}>
            Ver Instagram →
          </a>
        </motion.div>

        {/* También trabajé con */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginTop: "4rem", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "3rem" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gray-text)", marginBottom: "2rem" }}>
            También trabajé con
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {[
              { name: "Tierras Negras", rubro: "Eventos & Restó", url: "https://www.instagram.com/tneventosyresto/" },
              { name: "GRO Grupo Odontológico", rubro: "Odontología · San Juan", url: "https://www.instagram.com/gro.grupodontologico/" },
              { name: "UVT Voley", rubro: "Club deportivo · San Juan", url: "https://www.instagram.com/voley_uvt/" },
              { name: "Modo Gris", rubro: "Decoración · San Juan", url: "https://www.instagram.com/modogris.deco/" },
              { name: "Shark Ropa Deportiva", rubro: "Indumentaria · San Juan", url: "https://www.instagram.com/shark_ropadeportiva/" },
              { name: "Lusiva Studio", rubro: "Peluquería · San Juan", url: "https://www.instagram.com/lusivapeluqueria/" },
            ].map((cliente) => (
              <a key={cliente.name} href={cliente.url} target="_blank" rel="noopener noreferrer"
                style={{ padding: "0.75rem 1.25rem", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(39,66,255,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
                <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--white)", marginBottom: "0.2rem" }}>{cliente.name}</p>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-text)" }}>{cliente.rubro}</p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginTop: "4rem", textAlign: "center" }}>
          <a href={PERSONAL.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {c.cta} →
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .caso-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
