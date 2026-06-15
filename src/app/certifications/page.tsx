"use client";

import Link from "next/link";
import { Award, CheckCircle, Shield, ArrowRight, Monitor, Code, Bot, BarChart3, Zap, Smartphone, Building } from "lucide-react";

const certificates = [
  { id: "mern-cert", course: "MERN Stack Development", duration: "4 Months", color: "#10b981", icon: Monitor },
  { id: "python-cert", course: "Python Programming", duration: "3 Months", color: "#f59e0b", icon: Code },
  { id: "aiml-cert", course: "AI/ML Engineering", duration: "6 Months", color: "#8b5cf6", icon: Bot },
  { id: "ds-cert", course: "Data Science", duration: "5 Months", color: "#3730a3", icon: BarChart3 },
  { id: "fullstack-cert", course: "Full Stack Development", duration: "6 Months", color: "#06b6d4", icon: Zap },
  { id: "dm-cert", course: "Digital Marketing", duration: "2 Months", color: "#f43f5e", icon: Smartphone },
  { id: "intern-cert", course: "Internship Completion", duration: "2-6 Months", color: "#6366f1", icon: Building },
];

export default function CertificationsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            <Award size={13} /> Certifications
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Industry-Recognized <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Certificates</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Earn credentials that employers trust. Our certificates validate your skills and accelerate your career.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          {/* Certificate Cards */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Our <span className="gradient-text">Certificates</span></h2>
          </div>

          <div className="grid-3" style={{ marginBottom: "80px" }}>
            {certificates.map((cert) => (
              <div
                key={cert.id}
                id={`cert-${cert.id}`}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(55,48,163,0.08)",
                  border: "1px solid var(--gray-100)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(55,48,163,0.14)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(55,48,163,0.08)"; }}
              >
                {/* Certificate Preview */}
                <div
                  style={{
                    background: `linear-gradient(135deg, #0d0f2b, ${cert.color}80)`,
                    padding: "40px 32px",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: "center",
                  }}
                >
                  <div style={{ position: "absolute", top: "10px", left: "10px", right: "10px", bottom: "10px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "0", right: "-30px", width: "100px", height: "100px", background: `${cert.color}20`, borderRadius: "50%", filter: "blur(30px)" }} />

                  <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}><cert.icon size={40} color="white" /></div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      marginBottom: "8px",
                    }}
                  >
                    Certificate of Completion
                  </div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "16px",
                      fontWeight: "800",
                      color: "white",
                      marginBottom: "8px",
                    }}
                  >
                    {cert.course}
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>Gen Z Neural-X</div>

                  <div
                    style={{
                      marginTop: "16px",
                      padding: "6px 16px",
                      background: cert.color,
                      borderRadius: "50px",
                      display: "inline-block",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: "white",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Verified
                  </div>
                </div>

                <div style={{ padding: "24px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#0a0a0f" }}>{cert.course}</span>
                    <span style={{ fontSize: "12px", color: "#6b6fa0" }}>{cert.duration}</span>
                  </div>
                  {["Industry recognized", "Shareable on LinkedIn", "Verified QR code", "Digitally signed"].map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <CheckCircle size={13} style={{ color: cert.color }} />
                      <span style={{ fontSize: "13px", color: "#4a4e7a" }}>{feat}</span>
                    </div>
                  ))}
                  <Link href="/courses" id={`cert-enroll-${cert.id}`} className="btn-primary" style={{ marginTop: "16px", width: "100%", justifyContent: "center", padding: "10px", fontSize: "13px" }}>
                    Earn This Certificate <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Verification Section */}
          <div
            style={{
              background: "linear-gradient(135deg, #0d0f2b, #1e1b4b)",
              borderRadius: "24px",
              padding: "60px",
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <div style={{ width: "64px", height: "64px", background: "rgba(99,102,241,0.2)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <Shield size={32} style={{ color: "#a5b4fc" }} />
            </div>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "white", marginBottom: "16px" }}>
              Verify a Certificate
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
              Enter a certificate ID to verify its authenticity. All Gen Z Neural-X certificates are digitally verifiable.
            </p>
            <div style={{ display: "flex", gap: "12px", maxWidth: "480px", margin: "0 auto" }}>
              <input
                id="cert-verify-input"
                type="text"
                placeholder="Enter Certificate ID (e.g. GZN-2026-XXXXX)"
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  borderRadius: "12px",
                  color: "white",
                  fontSize: "14px",
                  fontFamily: "'Inter', sans-serif",
                  outline: "none",
                }}
              />
              <button id="cert-verify-btn" className="btn-white" style={{ flexShrink: 0 }}>
                Verify
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
