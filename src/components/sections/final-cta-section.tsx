import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, PhoneCall } from "lucide-react";
import { brand } from "@/config/brand";

const guarantees = [
  "Respuesta en menos de 24h",
  "Sin compromiso de compra",
  "Asesoramiento técnico incluido",
  "Desde 1987 en Sevilla",
];

export function FinalCtaSection() {
  return (
    <section
      aria-label="Solicitar presupuesto"
      style={{
        background: "linear-gradient(135deg, #0a0f1a 0%, #111827 50%, #0c1520 100%)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #E8820C 0%, #ff6b00 50%, #E8820C 100%)",
        }}
      />
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#E8820C",
            marginBottom: "16px",
          }}
        >
          ¿Listo para empezar?
        </p>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          Cuéntanos qué necesitas.
          <br />
          <span style={{ color: "#E8820C" }}>Te respondemos en menos de 24 horas.</span>
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto 36px",
          }}
        >
          Presupuesto de producto, disponibilidad de alquiler, programa de revisión
          o consulta técnica: un solo equipo lo gestiona todo desde Sevilla.
        </p>

        {/* Guarantees */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px 24px",
            marginBottom: "40px",
          }}
        >
          {guarantees.map((g) => (
            <div
              key={g}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <CheckCircle2
                size={15}
                style={{ color: "#4ade80", flexShrink: 0 }}
                aria-hidden="true"
              />
              {g}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href="/presupuesto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 32px",
              background: "#E8820C",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "50px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            Solicitar presupuesto
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a
            href={`tel:${brand.phone.replaceAll(" ", "")}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 28px",
              background: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "50px",
              textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.2)",
              transition: "background 0.2s",
            }}
          >
            <PhoneCall size={18} aria-hidden="true" />
            {brand.phone}
          </a>
        </div>

        {/* Time indicator */}
        <div
          style={{
            marginTop: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <Clock size={13} aria-hidden="true" />
          Lunes a viernes 8:00–18:00 · info@tranluz.com
        </div>
      </div>
    </section>
  );
}
