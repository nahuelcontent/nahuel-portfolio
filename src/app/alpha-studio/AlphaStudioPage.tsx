"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const WA_URL = "https://wa.me/5492215956501?text=Hola%20Nahuel%2C%20vi%20Alpha%20Studio%20y%20quiero%20hablar%20sobre%20mi%20proyecto";

const services = [
  { n: "01", title: "Dirección creativa", desc: "Concepto, estética e identidad visual para que tu marca sea reconocida de un vistazo." },
  { n: "02", title: "Estrategia de contenido", desc: "Sistema mensual de publicación: qué, para quién y con qué intención." },
  { n: "03", title: "Producción audiovisual", desc: "Dirección de rodaje, guiones y edición. Desde el concepto hasta el archivo listo para publicar." },
  { n: "04", title: "Posicionamiento", desc: "Tono de comunicación, mensaje diferenciador y presencia consistente en cada canal." },
];

const internalProjects = [
  {
    tag: "Sistemas",
    name: "Alpha System",
    desc: "Landings, CRMs y e-commerce. Convertí tus leads del caos de WhatsApp en un pipeline de ventas organizado.",
    url: "https://alphasystems.vercel.app/",
  },
  {
    tag: "Marketing",
    name: "InSync",
    desc: "Tu equipo de marketing externo. Meta Ads, landing pages y dirección creativa bajo un mismo techo. Facturación mensual, sin contrato largo.",
    url: "https://in-sync.vercel.app/",
  },
  {
    tag: "Training",
    name: "ProJump",
    desc: "Programa de salto vertical de 6 semanas para jugadores de vóley y básquet. Fuerza, potencia y pliometría estructurada.",
    url: "https://projump.vercel.app/",
  },
];

const labelStyle = {
  fontSize: "0.6rem" as const,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
  color: "var(--gray-text)",
  marginBottom: "1.25rem",
  display: "block",
};

export default function AlphaStudioPage() {
  return (
    <div style={{ backgroundColor: "var(--black)", minHeight: "100vh", color: "var(--white)" }}>

      {/* Nav strip */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", backgroundColor: "rgba(8,8,8,0.92)" }}>
        <Link href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.08em", color: "var(--gray-text)", textDecoration: "none" }}>
          ← NR<span style={{ color: "var(--blue)" }}>.</span>
        </Link>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", letterSpacing: "0.08em", color: "var(--white)" }}>
          ALPHA STUDIO<span style={{ color: "var(--blue)" }}>.</span>
        </span>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          style={{ padding: "0.5rem 1.1rem", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", backgroundColor: "var(--blue)", color: "var(--white)", textDecoration: "none" }}>
          Consultar
        </a>
      </div>

      <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>

        {/* Hero */}
        <section style={{ paddingTop: "10rem", paddingBottom: "6rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={labelStyle}>
            Agencia · Buenos Aires
          </motion.p>
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(4rem, 14vw, 11rem)", lineHeight: 0.85, letterSpacing: "0.01em", color: "var(--white)", marginBottom: "1.5rem" }}>
              ALPHA<br /><span style={{ color: "var(--blue)" }}>STUDIO.</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
            style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray-text)", maxWidth: "520px", marginBottom: "2.5rem" }}>
            Dirección creativa y producción para marcas que quieren posicionarse con intención. No solo publicar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Hablemos →</a>
            <a href="#servicios" className="btn-secondary">Ver servicios</a>
          </motion.div>
        </section>

        {/* Servicios */}
        <section id="servicios" style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={labelStyle}>Servicios</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.02em", color: "var(--white)", marginBottom: "3rem" }}>
            QUÉ HACEMOS
          </motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", border: "1px solid rgba(255,255,255,0.08)" }} className="as-services-grid">
            {services.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{ padding: "2rem", display: "flex", gap: "1.5rem", backgroundColor: "var(--black)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", color: "var(--blue)", flexShrink: 0, paddingTop: "0.1rem" }}>{s.n}</span>
                <div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "var(--white)", letterSpacing: "0.04em", marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--gray-text)", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Proyectos internos */}
        <section id="proyectos" style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={labelStyle}>Proyectos internos</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.02em", color: "var(--white)", marginBottom: "0.75rem" }}>
            MÁS ALLÁ DE LA DIRECCIÓN
          </motion.h2>
          <p style={{ fontSize: "0.875rem", color: "var(--gray-text)", lineHeight: 1.7, maxWidth: "480px", marginBottom: "3rem" }}>
            Dentro de Alpha Studio desarrollamos proyectos propios para cubrir necesidades que el mercado no resolvía bien.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="as-projects-grid">
            {internalProjects.map((p, i) => (
              <motion.a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "2rem", textDecoration: "none", display: "block", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(39,66,255,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.55rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--blue)", border: "1px solid rgba(39,66,255,0.3)", padding: "0.25rem 0.6rem" }}>{p.tag}</span>
                  <span style={{ fontSize: "0.7rem", color: "var(--gray-text)" }}>↗</span>
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "var(--white)", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>{p.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--gray-text)", lineHeight: 1.65 }}>{p.desc}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section style={{ paddingTop: "5rem", paddingBottom: "6rem", textAlign: "center" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "0.02em", color: "var(--white)", marginBottom: "1.25rem" }}>
            ¿TRABAJAMOS JUNTOS?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "0.9rem", color: "var(--gray-text)", marginBottom: "2rem" }}>
            Contanos en qué está tu marca y vemos cómo ayudarte.
          </motion.p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Hablar por WhatsApp →
          </a>
        </section>

        {/* Footer mini */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "2rem 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "var(--white)", letterSpacing: "0.05em" }}>
            ALPHA STUDIO<span style={{ color: "var(--blue)" }}>.</span>
          </p>
          <p style={{ fontSize: "0.7rem", color: "var(--gray-text)" }}>© {new Date().getFullYear()} Nahuel Recabarren</p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .as-services-grid { grid-template-columns: 1fr 1fr !important; }
          .as-projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
