import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Rocket } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="section" style={{ background: "white" }}>
      <div className="container">
        <div
          style={{
            background: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #1e1b4b 100%)",
            borderRadius: "32px",
            padding: "80px 64px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(99,102,241,0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(6,182,212,0.2) 0%, transparent 50%)
              `,
            }}
          />
          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "inline-flex",
                padding: "8px 20px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "24px",
                letterSpacing: "0.5px",
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Rocket size={14} /> Ready to Start?
              </div>
            </div>

            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: "900",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Have a Project in Mind?
              <br />
              <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Let&apos;s Build It Together.
              </span>
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.1rem",
                maxWidth: "500px",
                margin: "0 auto 48px",
                lineHeight: "1.7",
              }}
            >
              Get a free consultation and project estimate from our expert team. We respond within 24 hours.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" id="cta-contact-form" className="btn-white">
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/918124996319"
                id="cta-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a
                href="tel:+918124996319"
                id="cta-phone"
                className="btn-secondary"
                style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
