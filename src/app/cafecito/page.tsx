"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } };

const DIFERENCIADORES = [
  { n: "i.", title: "Reseña honesta, no publicidad disfrazada", desc: "Cuento la experiencia real. La gente lo nota — y por eso confía en lo que recomiendo. Esa confianza es la que termina cruzando la puerta de tu local." },
  { n: "ii.", title: "Producción visual de calidad", desc: "Clips estéticos, bien iluminados, con ritmo. No grabo con una mano mientras tomo el café con la otra. Cada reel está pensado para que tu cafetería se vea como se merece." },
  { n: "iii.", title: "Más humano, menos guión", desc: "Hablo como hablo. Sin frases de manual, sin listas genéricas. Cuento la historia del lugar — porque a la gente le interesa el lugar, no las palabras de moda." },
];

const PACK = [
  { n: "01", title: "1 Reel principal", desc: "Editado, con clips de calidad, mostrando la experiencia completa: ambiente, café, atención." },
  { n: "02", title: "3 Historias", desc: "Con etiqueta a tu cuenta, repartidas estratégicamente para amplificar el alcance." },
  { n: "03", title: "Reseña honesta", desc: "El tono real que mi audiencia ya conoce — y que es lo que la hace efectiva." },
];

const MODALIDADES = [
  { tag: "CANJE", desc: "Cubrís consumo en el local. Ideal para conocernos y empezar." },
  { tag: "MIXTO", desc: "Combinación de canje + monto a coordinar. Pensado para colaboraciones más completas." },
  { tag: "A MEDIDA", desc: "Apertura, lanzamiento, evento. Lo charlamos sin compromiso." },
];

const PROCESO = [
  { n: "01", title: "Me escribís por DM", desc: "Me contás de tu cafetería, dónde están, qué tipo de café trabajan, qué buscan comunicar." },
  { n: "02", title: "Acordamos modalidad", desc: "Definimos si es canje, mixto, o algo a medida. Y coordinamos el día de la visita." },
  { n: "03", title: "Visito el local", desc: "Llego, vivo la experiencia, la grabo. Sin intervenir tu funcionamiento normal." },
  { n: "04", title: "Publico y etiqueto", desc: "En pocos días el reel está al aire, con las stories de apoyo y tu cuenta etiquetada." },
];

const BENEFICIOS = [
  { n: "— uno", title: "Audiencia real, no inflada", desc: "Mi cuenta crece con gente que de verdad consume café de especialidad y se mueve a buscarlo." },
  { n: "— dos", title: "Contenido reutilizable", desc: "El reel y las fotos te quedan a vos también. Usalo en tus redes, carta digital, publicidad." },
  { n: "— tres", title: "Mostrás el lugar como es", desc: "Sin maquillaje. La gente que llega después ya sabe lo que va a encontrar." },
  { n: "— cuatro", title: "Posicionamiento como especialidad", desc: "Aparecer en una cuenta enfocada en café de especialidad te ubica en ese segmento." },
];

export default function CafecitoPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main style={{ backgroundColor: "var(--black)", color: "var(--white)", fontFamily: "inherit" }}>

        {/* ─── HERO ─── */}
        <section style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 0 5rem", position: "relative", overflow: "hidden", backgroundColor: "#050505" }}>
          {/* BG watermark */}
          <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(12rem, 30vw, 28rem)", lineHeight: 1, color: "rgba(255,255,255,0.025)", userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap", letterSpacing: "-0.03em" }}>
            CAFÉ
          </span>

          <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1.5rem" }}>
              // RESEÑAS HONESTAS · BUENOS AIRES
            </motion.p>

            <div style={{ overflow: "hidden", marginBottom: "0.5rem" }}>
              <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(4rem, 12vw, 10rem)", lineHeight: 0.9, letterSpacing: "-0.01em", color: "var(--white)" }}>
                CAFECITOS
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "3rem" }}>
              <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(4rem, 12vw, 10rem)", lineHeight: 0.9, letterSpacing: "-0.01em", color: "var(--blue)", textShadow: "0 0 80px rgba(39,66,255,0.3)" }}>
                CON NAHUEL
              </motion.h1>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
              <a href="https://www.instagram.com/cafecitocon.nahuel/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Trabajemos juntos →
              </a>
              <span style={{ fontSize: "0.75rem", color: "var(--gray-text)" }}>@cafecitocon.nahuel</span>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
            style={{ position: "absolute", bottom: "2rem", right: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray-text)", writingMode: "vertical-rl" }}>scroll</span>
            <div style={{ width: "1px", height: "3rem", backgroundColor: "rgba(255,255,255,0.15)" }} />
          </motion.div>
        </section>

        {/* ─── INTRO ─── */}
        <section className="section-padding" style={{ backgroundColor: "#0a0a0a" }}>
          <div className="container-xl">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "start" }} className="cafecito-intro-grid">

              <motion.div {...fadeUp} style={{ paddingLeft: "2rem", borderLeft: "2px solid var(--blue)" }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05, color: "var(--white)", letterSpacing: "0.02em" }}>
                  No pruebo cafés.<br />
                  <span style={{ color: "var(--gray-text)" }}>Analizo experiencias.</span>
                </p>
              </motion.div>

              <motion.div {...fadeUp} style={{ ...fadeUp.initial }}>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "var(--gray-text)", marginBottom: "2rem" }}>
                  Visitas reales a cafeterías de especialidad. Reseñas honestas con producción visual cuidada, contadas desde el lugar de alguien que de verdad ama el café — no desde el guión publicitario de siempre.
                </p>
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                  {[["ENTREGABLE", "1 reel + 3 stories"], ["MODALIDAD", "Canje o mixto"], ["BASE", "Buenos Aires"], ["ENFOQUE", "Especialidad"]].map(([label, val]) => (
                    <div key={label}>
                      <p style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-text)", marginBottom: "0.25rem" }}>{label}</p>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--white)" }}>{val}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── MANIFIESTO ─── */}
        <section className="section-padding" style={{ backgroundColor: "#050505", position: "relative", overflow: "hidden" }}>
          <span style={{ position: "absolute", bottom: "-2rem", right: "-1rem", fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(6rem, 14vw, 12rem)", color: "rgba(255,255,255,0.02)", userSelect: "none", pointerEvents: "none", lineHeight: 1 }}>NAHUEL</span>
          <div className="container-xl">
            <div className="section-label"><span>// EL MANIFIESTO</span></div>
            <motion.blockquote {...fadeUp} style={{ ...fadeUp.initial, maxWidth: "680px", margin: "2rem 0 3rem", fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.75, color: "var(--white)", fontStyle: "italic", paddingLeft: "2rem", borderLeft: "1px solid rgba(255,255,255,0.15)" }}>
              "Empecé porque me cansé de ver reseñas que no decían nada. El café de especialidad merece que alguien lo cuente bien — sin filtros falsos, sin promesas vacías."
              <footer style={{ marginTop: "1.25rem", fontStyle: "normal", fontSize: "0.75rem", color: "var(--gray-text)", letterSpacing: "0.08em" }}>— Nahuel · Fundador, Cafecitos con Nahuel</footer>
            </motion.blockquote>
            <motion.p {...fadeUp} style={{ ...fadeUp.initial, fontSize: "0.875rem", lineHeight: 1.85, color: "var(--gray-text)", maxWidth: "600px" }}>
              Soy fanático del café de especialidad desde mucho antes de tener una cuenta. Recorría cafecitos los fines de semana solo por el gusto de descubrir lugares que nadie estaba mostrando. De ahí salió Cafecitos con Nahuel: un espacio para dar a conocer cafeterías que por ahí no son las más conocidas, pero que se la bancan tanto o más que las de siempre.
            </motion.p>
          </div>
        </section>

        {/* ─── POR QUÉ SOY DISTINTO ─── */}
        <section className="section-padding" style={{ backgroundColor: "#0a0a0a" }}>
          <div className="container-xl">
            <div className="section-label"><span>// POR QUÉ SOY DISTINTO</span></div>
            <motion.h2 {...fadeUp} style={{ ...fadeUp.initial, fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1, color: "var(--white)", marginBottom: "4rem", letterSpacing: "0.02em" }}>
              No es otra cuenta más<br /><span style={{ color: "var(--blue)" }}>mostrando lattes con filtro.</span>
            </motion.h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "rgba(255,255,255,0.06)" }} className="cd-grid">
              {DIFERENCIADORES.map((d, i) => (
                <motion.div key={d.n} {...fadeUp} transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ backgroundColor: "#0a0a0a", padding: "2.5rem", position: "relative", overflow: "hidden", transition: "background-color 0.25s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#111"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#0a0a0a"; }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.9rem", letterSpacing: "0.1em", color: "var(--blue)", display: "block", marginBottom: "0.75rem" }}>{d.n}</span>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "var(--white)", lineHeight: 1.1, letterSpacing: "0.02em", marginBottom: "0.75rem" }}>{d.title}</h3>
                  <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "var(--gray-text)", maxWidth: "320px" }}>{d.desc}</p>
                  <div style={{ position: "absolute", bottom: 0, left: 0, height: "1px", width: "0", backgroundColor: "var(--blue)", transition: "width 0.5s ease" }} className="cd-line" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PACK ─── */}
        <section className="section-padding" style={{ backgroundColor: "#050505" }}>
          <div className="container-xl">
            <div className="section-label"><span>// LO QUE ENTREGO</span></div>
            <motion.h2 {...fadeUp} style={{ ...fadeUp.initial, fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1, color: "var(--white)", marginBottom: "1rem", letterSpacing: "0.02em" }}>
              PACK BASE<br /><span style={{ color: "var(--blue)" }}>VISITA CAFECITOS</span>
            </motion.h2>
            <motion.p {...fadeUp} style={{ ...fadeUp.initial, fontSize: "0.75rem", letterSpacing: "0.08em", color: "var(--gray-text)", marginBottom: "3.5rem", textTransform: "uppercase" }}>una experiencia, contenido completo</motion.p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "rgba(255,255,255,0.06)", marginBottom: "3rem" }} className="cd-grid">
              {PACK.map((p, i) => (
                <motion.div key={p.n} {...fadeUp} transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ backgroundColor: "#050505", padding: "2.5rem", display: "flex", gap: "1.5rem", alignItems: "flex-start", transition: "background-color 0.25s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#0d0d0d"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#050505"; }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", lineHeight: 1, color: "rgba(39,66,255,0.4)", flexShrink: 0 }}>{p.n}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "var(--white)", letterSpacing: "0.03em", marginBottom: "0.5rem" }}>{p.title}</h3>
                    <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--gray-text)" }}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Modalidades */}
            <motion.div {...fadeUp} style={{ ...fadeUp.initial, display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }} className="modal-grid">
              {MODALIDADES.map((m, i) => (
                <motion.div key={m.tag} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "1.5rem 2rem", transition: "border-color 0.25s, background-color 0.25s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(39,66,255,0.4)"; e.currentTarget.style.backgroundColor = "rgba(39,66,255,0.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.backgroundColor = "transparent"; }}>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--blue)", marginBottom: "0.5rem" }}>{m.tag}</p>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--gray-text)" }}>{m.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── PROCESO ─── */}
        <section className="section-padding" style={{ backgroundColor: "#0a0a0a" }}>
          <div className="container-xl">
            <div className="section-label"><span>// EL PROCESO</span></div>
            <motion.h2 {...fadeUp} style={{ ...fadeUp.initial, fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1, color: "var(--white)", marginBottom: "4rem", letterSpacing: "0.02em" }}>
              Cuatro pasos.<br /><span style={{ color: "var(--blue)" }}>Sin vueltas.</span>
            </motion.h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {PROCESO.map((p, i) => (
                <motion.div key={p.n} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "2rem", padding: "2rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)", alignItems: "start" }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", lineHeight: 1, color: "rgba(255,255,255,0.08)" }}>{p.n}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "var(--white)", letterSpacing: "0.03em", marginBottom: "0.5rem" }}>{p.title}</h3>
                    <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--gray-text)" }}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BENEFICIOS ─── */}
        <section className="section-padding" style={{ backgroundColor: "#050505" }}>
          <div className="container-xl">
            <div className="section-label"><span>// POR QUÉ TE CONVIENE</span></div>
            <motion.h2 {...fadeUp} style={{ ...fadeUp.initial, fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1, color: "var(--white)", marginBottom: "4rem", letterSpacing: "0.02em" }}>
              Lo que ganás cuando<br /><span style={{ color: "var(--blue)" }}>trabajamos juntos.</span>
            </motion.h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "rgba(255,255,255,0.06)" }} className="cd-grid">
              {BENEFICIOS.map((b, i) => (
                <motion.div key={b.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                  style={{ backgroundColor: "#050505", padding: "2rem 2.5rem", transition: "background-color 0.25s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#0d0d0d"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#050505"; }}>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "var(--blue)", marginBottom: "0.75rem" }}>{b.n}</p>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "var(--white)", letterSpacing: "0.03em", marginBottom: "0.5rem" }}>{b.title}</h3>
                  <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--gray-text)" }}>{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA FINAL ─── */}
        <section className="section-padding" style={{ backgroundColor: "#050505", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(8rem, 20vw, 18rem)", color: "rgba(39,66,255,0.04)", userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap", lineHeight: 1 }}>CAFÉ</span>
          <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
            <motion.h2 {...fadeUp} style={{ ...fadeUp.initial, fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1, color: "var(--white)", letterSpacing: "0.02em", marginBottom: "1.5rem" }}>
              Tomemos un<br /><span style={{ color: "var(--blue)" }}>cafecito.</span>
            </motion.h2>
            <motion.p {...fadeUp} style={{ ...fadeUp.initial, fontSize: "0.875rem", color: "var(--gray-text)", lineHeight: 1.75, maxWidth: "480px", margin: "0 auto 3rem" }}>
              Mandame un DM contándome de tu café y vemos cómo podemos trabajar juntos. Sin compromiso, sin vueltas.
            </motion.p>
            <motion.div {...fadeUp} style={{ ...fadeUp.initial, display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
              <a href="https://www.instagram.com/cafecitocon.nahuel/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.8rem" }}>
                Escribime por Instagram →
              </a>
              <span style={{ fontSize: "0.7rem", color: "var(--gray-text)" }}>o buscame como @cafecitocon.nahuel</span>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "center" }}>
              <Link href="/" style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-text)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--white)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--gray-text)"; }}>
                ← Volver a nahuelcontent.store
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (min-width: 900px) {
          .cafecito-intro-grid { grid-template-columns: 1fr 1fr !important; }
          .modal-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (min-width: 768px) {
          .cd-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .cd-card:hover .cd-line { width: 100% !important; }
      `}</style>
    </LanguageProvider>
  );
}
