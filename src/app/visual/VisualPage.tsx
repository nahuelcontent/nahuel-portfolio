"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ─── Constantes ───────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "5492215956501";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Nahuel%2C%20vengo%20de%20Instagram%20por%20edici%C3%B3n`;
const IG_URL = "https://www.instagram.com/nahuelvisual/";

// ─── Íconos ───────────────────────────────────────────────────────────────────
const IconWA = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IconSun = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const IconScissors = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <path d="M8.5 6l11 11M8.5 18l4-4M15.5 11l4-4" />
  </svg>
);

const IconCaption = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M7 10h10M7 14h6" />
  </svg>
);

const IconPhone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <rect x="7" y="2" width="10" height="20" rx="1" />
    <circle cx="12" cy="18" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const IconMusic = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const IconImage = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
);

// ─── Before/After Slider ──────────────────────────────────────────────────────
function BeforeAfterSlider({
  label,
  antes,
  despues,
}: {
  label: string;
  antes: string | null;
  despues: string;
}) {
  const [value, setValue] = useState(antes ? 50 : 100);
  const hasAntes = antes !== null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "9/16",
        overflow: "hidden",
        backgroundColor: "#111",
        touchAction: "none",
      }}
    >
      {/* ANTES */}
      <div style={{ position: "absolute", inset: 0, background: "#181818", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {antes && (
          <img
            src={antes}
            alt={`Antes — ${label}`}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", inset: 0 }}
          />
        )}
      </div>

      {/* DESPUÉS (recortado) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `inset(0 ${100 - value}% 0 0)`,
        }}
      >
        <img
          src={despues}
          alt={`Después — ${label}`}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Línea divisoria — solo si hay antes */}
      {hasAntes && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${value}%`,
            width: "2px",
            background: "white",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      )}

      {/* Handle — solo si hay antes */}
      {hasAntes && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${value}%`,
            transform: "translate(-50%, -50%)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "white",
            boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 3,
          }}
          aria-hidden
        >
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M1 5H17M1 5L4.5 2M1 5L4.5 8M17 5L13.5 2M17 5L13.5 8" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      {/* Labels ANTES / DESPUÉS */}
      {hasAntes && (
        <span
          style={{
            position: "absolute",
            top: "0.875rem",
            left: "0.875rem",
            fontSize: "0.5rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            background: "rgba(0,0,0,0.55)",
            padding: "0.2rem 0.5rem",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          ANTES
        </span>
      )}
      <span
        style={{
          position: "absolute",
          top: "0.875rem",
          right: "0.875rem",
          fontSize: "0.5rem",
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--blue)",
          background: "rgba(0,0,0,0.55)",
          padding: "0.2rem 0.5rem",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {hasAntes ? "DESPUÉS" : "EDITADO"}
      </span>

      {/* Etiqueta de rubro */}
      <span
        style={{
          position: "absolute",
          bottom: "0.875rem",
          left: "0.875rem",
          fontSize: "0.55rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "white",
          background: "var(--blue)",
          padding: "0.2rem 0.65rem",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {label}
      </span>

      {/* Range input — solo activo si hay antes */}
      {hasAntes && (
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label={`Comparar antes y después — ${label}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: "col-resize",
            zIndex: 10,
            margin: 0,
            padding: 0,
          }}
        />
      )}
    </div>
  );
}

// ─── Datos ────────────────────────────────────────────────────────────────────
const CASES = [
  {
    label: "Constructora",
    antes: "/images/visual/antes-1.jpg",
    despues: "/images/visual/despues-1.png",
  },
  {
    label: "Café",
    antes: "/images/visual/antes-2.jpg",
    despues: "/images/visual/despues-2.png",
  },
  {
    label: "Apolo",
    antes: null,
    despues: "/images/visual/despues-3.png",
  },
];

const INCLUDES = [
  { label: "Color y luz", Icon: IconSun },
  { label: "Cortes y ritmo", Icon: IconScissors },
  { label: "Subtítulos", Icon: IconCaption },
  { label: "Formato para Reels/TikTok", Icon: IconPhone },
  { label: "Música y transiciones", Icon: IconMusic },
  { label: "Portadas", Icon: IconImage },
];

const SERVICES = [
  {
    title: "Solo edición",
    tagline: "Vos grabás, yo edito.",
    desc: "Mandame tu material en crudo y te lo devuelvo editado, con color, música y subtítulos.",
    featured: true,
  },
  {
    title: "Producción + edición",
    tagline: "Voy, grabo y te entrego todo listo.",
    desc: "Me encargo de la planificación, grabación y edición final.",
    featured: false,
  },
  {
    title: "Drone",
    tagline: "Tomas aéreas para locales, obras y eventos.",
    desc: "Fotografía y video aéreo profesional para mostrar tu espacio desde otro ángulo.",
    featured: false,
  },
];

const STEPS = [
  "Me escribís y me contás qué necesitás",
  "Me mandás el material o coordinamos la grabación",
  "Te entrego el contenido listo para publicar",
];

// ─── Componente principal ─────────────────────────────────────────────────────
export default function VisualPage() {
  return (
    <>
      {/* ── Nav mínima ─────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "rgba(8,8,8,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.875rem 1.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.1em",
            color: "var(--white)",
          }}
        >
          NV.
        </span>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: "0.5rem 1.1rem", fontSize: "0.6rem" }}
        >
          <IconWA /> Escribime
        </a>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--black)",
          padding: "4.5rem 1.5rem 5rem",
          minHeight: "90svh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "640px" }}>
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>
            <span>@nahuelvisual · Foto · Video · Edición</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="big-heading"
            style={{ marginBottom: "1.5rem" }}
          >
            Me pasás lo que<br />
            grabaste. Te lo<br />
            <span style={{ color: "var(--blue)" }}>devuelvo listo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontSize: "1rem",
              color: "var(--gray-text)",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: "500px",
            }}
          >
            Foto, video y edición para marcas y profesionales.
            Si ya grabás vos, yo me encargo de que se vea profesional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <IconWA /> Escribime por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Antes / Después ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "5rem 1.5rem" }}>
        <div className="container-xl" style={{ padding: 0, maxWidth: "1200px", margin: "0 auto", paddingLeft: "0", paddingRight: "0" }}>
          <div className="section-label">
            <span>Antes / Después</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="big-heading"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", marginBottom: "0.75rem" }}
          >
            ASÍ SE VE LA{" "}
            <span style={{ color: "var(--blue)" }}>DIFERENCIA.</span>
          </motion.h2>

          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--gray-text)",
              marginBottom: "2.5rem",
            }}
          >
            Arrastrá para comparar el material crudo con el editado.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }} className="visual-slider-grid">
            {CASES.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <BeforeAfterSlider label={c.label} antes={c.antes} despues={c.despues} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qué incluye ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--black)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="section-label">
            <span>Qué incluye la edición</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="big-heading"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", marginBottom: "3rem" }}
          >
            TODO LO QUE{" "}
            <span style={{ color: "var(--blue)" }}>NECESITÁS.</span>
          </motion.h2>

          {/* Grilla con separadores de 1px */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              border: "1px solid rgba(255,255,255,0.08)",
              gap: "1px",
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
            className="visual-includes-grid"
          >
            {INCLUDES.map(({ label, Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{
                  backgroundColor: "var(--black)",
                  padding: "1.75rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                <div style={{ color: "var(--blue)" }}>
                  <Icon />
                </div>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--white)",
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--gray-text)",
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            También trabajo con material grabado con celular.
          </p>
        </div>
      </section>

      {/* ── Servicios ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="section-label">
            <span>Servicios</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="big-heading"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", marginBottom: "3rem" }}
          >
            ¿QUÉ{" "}
            <span style={{ color: "var(--blue)" }}>NECESITÁS?</span>
          </motion.h2>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }}
            className="visual-services-grid"
          >
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  position: "relative",
                  border: s.featured
                    ? "1px solid rgba(39,66,255,0.5)"
                    : "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: s.featured
                    ? "rgba(39,66,255,0.05)"
                    : "transparent",
                  padding: "2.25rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                {s.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "2rem",
                      backgroundColor: "var(--blue)",
                      padding: "0.2rem 0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.5rem",
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--white)",
                      }}
                    >
                      Más pedido
                    </span>
                  </div>
                )}

                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    letterSpacing: "0.04em",
                    color: "var(--white)",
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: s.featured ? "var(--blue)" : "var(--white)",
                  }}
                >
                  {s.tagline}
                </p>

                <p
                  style={{
                    fontSize: "0.825rem",
                    color: "var(--gray-text)",
                    lineHeight: 1.75,
                    flex: 1,
                  }}
                >
                  {s.desc}
                </p>

                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.featured ? "btn-primary" : "btn-secondary"}
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  Pedir presupuesto
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo trabajo ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--black)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="section-label">
            <span>Cómo trabajo</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="big-heading"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", marginBottom: "3rem" }}
          >
            TRES PASOS.{" "}
            <span style={{ color: "var(--blue)" }}>SIN VUELTAS.</span>
          </motion.h2>

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                padding: "1.75rem 0",
                borderBottom:
                  i < STEPS.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2.75rem",
                  lineHeight: 1,
                  color: "var(--blue)",
                  flexShrink: 0,
                  width: "3rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontSize: "1rem",
                  color: "var(--white)",
                  lineHeight: 1.6,
                  paddingTop: "0.45rem",
                }}
              >
                {step}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Cierre ────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--blue)",
          padding: "5rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="big-heading"
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              color: "var(--white)",
              marginBottom: "1.25rem",
            }}
          >
            ¿YA TENÉS CONTENIDO GRABADO Y NO SABÉS QUÉ HACER CON ÉL?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "2.5rem",
              lineHeight: 1.7,
            }}
          >
            Mandame lo que tenés y lo transformamos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1rem 2.25rem",
                background: "var(--white)",
                color: "var(--black)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                clipPath:
                  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribime por WhatsApp
            </a>

            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              @nahuelvisual en Instagram →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Footer mínimo ─────────────────────────────────────────────── */}
      <footer
        style={{
          backgroundColor: "var(--black)",
          padding: "2rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1rem",
            letterSpacing: "0.1em",
            color: "var(--white)",
          }}
        >
          NV.
        </span>
        <span
          style={{ fontSize: "0.7rem", color: "var(--gray-text)", letterSpacing: "0.06em" }}
        >
          Foto · Video · Edición · Buenos Aires
        </span>
      </footer>

      {/* ── Botón flotante WA (mobile) ────────────────────────────────── */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="visual-wa-fab"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 200,
          boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
          textDecoration: "none",
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* ── Estilos responsivos ───────────────────────────────────────── */}
      <style>{`
        /* Slider: 1 col en mobile, 2 en tablet+ */
        @media (max-width: 480px) {
          .visual-slider-grid { grid-template-columns: 1fr !important; }
        }
        /* 3er slider ocupa fila completa en desktop */
        @media (min-width: 481px) {
          .visual-slider-grid > *:last-child:nth-child(odd) {
            grid-column: 1 / -1;
            max-width: 340px;
            margin: 0 auto;
          }
        }

        /* Includes: 2 col mobile → 3 col desktop */
        @media (min-width: 640px) {
          .visual-includes-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }

        /* Servicios: 1 col mobile → 3 col desktop */
        @media (min-width: 768px) {
          .visual-services-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }

        /* FAB solo en mobile */
        @media (min-width: 1024px) {
          .visual-wa-fab { display: none !important; }
        }

        /* range input: quitar outline en todos los browsers */
        input[type=range]:focus { outline: none; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 0; height: 0; }
        input[type=range]::-moz-range-thumb { width: 0; height: 0; border: none; }
      `}</style>
    </>
  );
}
