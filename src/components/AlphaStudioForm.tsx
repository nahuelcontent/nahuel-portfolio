"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

type FormData = {
  servicio: string;
  nombre: string;
  marca: string;
  negocio: string;
  instagram: string;
  whatsapp: string;
  email: string;
  presenciaRedes: string;
  identidadVisual: string;
  estrategia: string;
  obstaculo: string;
  intentoPrevio: string;
  tiempoProblema: string;
  urgencia: string;
  presupuesto: string;
  mensaje: string;
};

const SERVICIOS = [
  { id: "Alpha Studio", label: "Alpha Studio", desc: "Creación y producción de contenido para tu marca" },
  { id: "Alpha Systems", label: "Alpha Systems", desc: "Automatización, CRM y sistemas para negocios digitales" },
  { id: "UGC Creator", label: "UGC Creator", desc: "Videos UGC auténticos para campañas y ads" },
  { id: "Dirección Creativa", label: "Dirección Creativa", desc: "Dirección de contenido, narrativa y estética de marca" },
];

const empty: FormData = {
  servicio: "", nombre: "", marca: "", negocio: "", instagram: "", whatsapp: "", email: "",
  presenciaRedes: "", identidadVisual: "", estrategia: "",
  obstaculo: "", intentoPrevio: "", tiempoProblema: "",
  urgencia: "", presupuesto: "", mensaje: "",
};

const stepFields = [
  ["servicio"],
  ["nombre", "marca", "negocio", "instagram", "whatsapp", "email"],
  ["presenciaRedes", "identidadVisual", "estrategia"],
  ["obstaculo", "intentoPrevio", "tiempoProblema"],
  ["urgencia", "presupuesto", "mensaje"],
];

function ChipGroup({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          style={{
            padding: "0.75rem 1rem",
            textAlign: "left",
            fontSize: "0.85rem",
            lineHeight: 1.4,
            border: `1px solid ${value === opt ? "var(--blue)" : "rgba(255,255,255,0.1)"}`,
            backgroundColor: value === opt ? "rgba(39,66,255,0.12)" : "transparent",
            color: value === opt ? "var(--white)" : "var(--gray-text)",
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", required = true }: {
  label: string; name: string; value: string;
  onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>
        {label}{required && <span style={{ color: "var(--blue)", marginLeft: "0.25rem" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        style={{
          padding: "0.875rem 1rem",
          backgroundColor: "transparent",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "var(--white)",
          fontSize: "0.875rem",
          outline: "none",
          transition: "border-color 0.2s",
          fontFamily: "inherit",
          width: "100%",
          boxSizing: "border-box",
        }}
        onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; }}
        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)"; }}
      />
    </div>
  );
}

export default function AlphaStudioForm() {
  const { tr } = useLanguage();
  const f = tr.alphaStudioForm;

  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (field: keyof FormData) => (val: string) => setData((d) => ({ ...d, [field]: val }));

  const canNext = () => stepFields[step].filter((f) => f !== "instagram" && f !== "mensaje").every((f) => data[f as keyof FormData] !== "");

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("success"); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <section id="alpha-studio" className="section-padding" style={{ backgroundColor: "var(--black)" }}>
      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }} className="form-layout">

          {/* LEFT — Problem statement */}
          <div>
            <div className="section-label"><span>{f.sectionLabel}</span></div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="big-heading" style={{ marginBottom: "2rem" }}>
              {f.heading1}<br /><span style={{ color: "var(--blue)" }}>{f.heading2}</span>
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p style={{ fontSize: "1.05rem", fontWeight: 500, lineHeight: 1.6, color: "var(--white)" }}>{f.problem}</p>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--gray-text)" }}>{f.problemDesc}</p>

              <div style={{ marginTop: "1rem", padding: "1.5rem", border: "1px solid rgba(39,66,255,0.2)", backgroundColor: "rgba(39,66,255,0.04)" }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", letterSpacing: "0.05em", color: "var(--white)", marginBottom: "0.25rem" }}>
                  NAHUELCONTENT<span style={{ color: "var(--blue)" }}>.</span>
                </p>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-text)" }}>
                  Alpha Studio · Alpha Systems · UGC · Creative Direction
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>

            {status === "success" ? (
              <div style={{ padding: "3rem", border: "1px solid rgba(39,66,255,0.3)", backgroundColor: "rgba(39,66,255,0.05)", textAlign: "center", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(39,66,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "var(--white)" }}>{f.successTitle}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--gray-text)", lineHeight: 1.65 }}>{f.successMsg}</p>
              </div>
            ) : (
              <div style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "2rem" }}>
                {/* Step header */}
                <div style={{ marginBottom: "2rem" }}>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.5rem", fontWeight: 500 }}>
                    {step + 1} / {f.steps.length} — {f.steps[step]}
                  </p>
                  <div style={{ height: "2px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "1px" }}>
                    <div style={{ height: "100%", width: `${((step + 1) / f.steps.length) * 100}%`, backgroundColor: "var(--blue)", transition: "width 0.4s ease", borderRadius: "1px" }} />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
                  >
                    {step === 0 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500, marginBottom: "0.25rem" }}>
                          ¿Con qué servicio querés trabajar? <span style={{ color: "var(--blue)" }}>*</span>
                        </label>
                        {SERVICIOS.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => set("servicio")(s.id)}
                            style={{
                              padding: "1rem 1.25rem",
                              textAlign: "left",
                              border: `1px solid ${data.servicio === s.id ? "var(--blue)" : "rgba(255,255,255,0.1)"}`,
                              backgroundColor: data.servicio === s.id ? "rgba(39,66,255,0.1)" : "transparent",
                              color: "var(--white)",
                              cursor: "pointer",
                              transition: "all 0.15s",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.3rem",
                            }}
                          >
                            <span style={{ fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.04em" }}>{s.label}</span>
                            <span style={{ fontSize: "0.75rem", color: "var(--gray-text)", lineHeight: 1.4 }}>{s.desc}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 1 && (<>
                      <Field label="Nombre" name="nombre" value={data.nombre} onChange={set("nombre")} />
                      <Field label="Marca o negocio" name="marca" value={data.marca} onChange={set("marca")} />
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>
                          ¿A qué se dedica tu negocio? <span style={{ color: "var(--blue)" }}>*</span>
                        </label>
                        <ChipGroup value={data.negocio} onChange={set("negocio")} options={["Marca personal / emprendimiento", "Agencia o estudio", "Negocio local o comercio", "Empresa o pyme con equipo", "E-commerce / tienda online", "Otro"]} />
                      </div>
                      <Field label="Instagram o web (opcional)" name="instagram" value={data.instagram} onChange={set("instagram")} required={false} />
                      <Field label="WhatsApp" name="whatsapp" value={data.whatsapp} onChange={set("whatsapp")} />
                      <Field label="Email" name="email" value={data.email} onChange={set("email")} type="email" />
                    </>)}

                    {step === 2 && (<>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>¿Tu marca tiene presencia en redes sociales? <span style={{ color: "var(--blue)" }}>*</span></label>
                        <ChipGroup value={data.presenciaRedes} onChange={set("presenciaRedes")} options={["Sí, activa y constante", "Sí, pero publico de forma irregular", "Tengo perfil pero casi no publico", "No tengo presencia en redes todavía"]} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>¿Tu marca tiene una identidad visual definida? <span style={{ color: "var(--blue)" }}>*</span></label>
                        <ChipGroup value={data.identidadVisual} onChange={set("identidadVisual")} options={["Sí, tengo logo, paleta y estilo claro", "Algo tengo pero no es consistente", "No tengo identidad visual definida"]} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>¿Tenés claro qué publicar y por qué? <span style={{ color: "var(--blue)" }}>*</span></label>
                        <ChipGroup value={data.estrategia} onChange={set("estrategia")} options={["Sí, tengo estrategia y calendario de contenido", "Publico, pero sin una estrategia clara detrás", "No sé qué publicar ni cómo comunicarme", "No publico nada todavía"]} />
                      </div>
                    </>)}

                    {step === 3 && (<>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>¿Cuál es el mayor obstáculo de tu marca ahora mismo? <span style={{ color: "var(--blue)" }}>*</span></label>
                        <ChipGroup value={data.obstaculo} onChange={set("obstaculo")} options={["No sé qué contenido crear o qué decir", "Publico pero no genera consultas ni ventas", "No tengo tiempo para gestionar el contenido", "Mi marca no se ve profesional ni coherente", "No sé cómo diferenciarme de la competencia", "Todo lo anterior aplica"]} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>¿Intentaste resolverlo antes? <span style={{ color: "var(--blue)" }}>*</span></label>
                        <ChipGroup value={data.intentoPrevio} onChange={set("intentoPrevio")} options={["No, nunca trabajé con nadie en esto", "Sí, lo intenté solo y no me funcionó", "Sí, contraté a alguien y no fue lo que esperaba"]} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>¿Cuánto tiempo lleva tu marca con este problema? <span style={{ color: "var(--blue)" }}>*</span></label>
                        <ChipGroup value={data.tiempoProblema} onChange={set("tiempoProblema")} options={["Recién estoy empezando", "Menos de 6 meses", "Entre 6 meses y 1 año", "Más de 1 año"]} />
                      </div>
                    </>)}

                    {step === 4 && (<>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>¿Qué tan urgente es resolver esto? <span style={{ color: "var(--blue)" }}>*</span></label>
                        <ChipGroup value={data.urgencia} onChange={set("urgencia")} options={["Lo necesito ya, es prioridad ahora mismo", "Quiero arrancar este mes", "En los próximos meses", "Solo estoy viendo opciones por ahora"]} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>¿Estarías dispuesto a invertir en tu marca si la propuesta tiene sentido? <span style={{ color: "var(--blue)" }}>*</span></label>
                        <ChipGroup value={data.presupuesto} onChange={set("presupuesto")} options={["Sí, tengo presupuesto y lo tengo claro", "Sí, si la propuesta tiene sentido", "Depende mucho del precio", "Por ahora no estoy en posición de invertir"]} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-text)", fontWeight: 500 }}>¿Hay algo más que quieras contarnos?</label>
                        <textarea
                          value={data.mensaje}
                          onChange={(e) => set("mensaje")(e.target.value)}
                          rows={3}
                          style={{ padding: "0.875rem 1rem", backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "var(--white)", fontSize: "0.875rem", outline: "none", fontFamily: "inherit", resize: "vertical", boxSizing: "border-box", width: "100%" }}
                          onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.12)"; }}
                        />
                      </div>
                    </>)}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginTop: "2rem" }}>
                  {step > 0 ? (
                    <button onClick={() => setStep(s => s - 1)} type="button"
                      style={{ padding: "0.875rem 1.5rem", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "transparent", color: "var(--gray-text)", cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--white)"; e.currentTarget.style.color = "var(--white)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "var(--gray-text)"; }}
                    >
                      ← Atrás
                    </button>
                  ) : <div />}

                  {step < f.steps.length - 1 ? (
                    <button onClick={() => canNext() && setStep(s => s + 1)} type="button"
                      style={{ padding: "0.875rem 1.75rem", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", backgroundColor: canNext() ? "var(--blue)" : "rgba(39,66,255,0.3)", color: "var(--white)", border: "none", cursor: canNext() ? "pointer" : "not-allowed", transition: "background-color 0.2s", fontFamily: "inherit" }}
                      onMouseEnter={(e) => { if (canNext()) e.currentTarget.style.backgroundColor = "#1a2de0"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = canNext() ? "var(--blue)" : "rgba(39,66,255,0.3)"; }}
                    >
                      Siguiente →
                    </button>
                  ) : (
                    <button onClick={handleSubmit} type="button" disabled={!canNext() || status === "sending"}
                      style={{ padding: "0.875rem 1.75rem", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", backgroundColor: canNext() ? "var(--blue)" : "rgba(39,66,255,0.3)", color: "var(--white)", border: "none", cursor: canNext() ? "pointer" : "not-allowed", fontFamily: "inherit" }}>
                      {status === "sending" ? f.sending : f.submit}
                    </button>
                  )}
                </div>

                {status === "error" && (
                  <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "#ff6b6b", textAlign: "center" }}>{f.errorMsg}</p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) { .form-layout { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
