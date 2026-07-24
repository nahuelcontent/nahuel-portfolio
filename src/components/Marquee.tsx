"use client";

const words = ["Creative Direction", "Brand Positioning", "UGC Content", "Content Strategy", "Visual Direction", "Performance Content", "Alpha Studio", "Creative Direction", "Brand Positioning", "UGC Content", "Content Strategy", "Visual Direction", "Performance Content", "Alpha Studio"];

export default function Marquee() {
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", padding: "1rem 0", backgroundColor: "#0a0a0a" }}>
      <div className="marquee-track">
        {words.concat(words).map((w, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "2rem", paddingRight: "2rem", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: i % 2 === 0 ? "var(--gray-text)" : "var(--blue)", whiteSpace: "nowrap" }}>
            {w}
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "currentColor", display: "block" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
