"use client";

import { Handshake, Building2, Rocket, TrendingUp, ShieldCheck, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import wintechLogo from "../../asset/wintech.png";

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    interest: "Agency White-Label",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'Partnership Inquiry', ...formData })
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ companyName: "", contactPerson: "", email: "", interest: "Agency White-Label", message: "" });
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.9)", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            <Handshake size={15} style={{ display: "inline-block", marginRight: "8px", verticalAlign: "middle" }} />
            Ecosystem Partnerships
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px", lineHeight: 1.1 }}>
            Agency Network &{" "}
            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Co-Build Studio
            </span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: "640px", margin: "0 auto", lineHeight: 1.75 }}>
            We empower marketing agencies to scale client delivery through 100% white-label engineering, and co-build breakthrough products with forward-thinking companies.
          </p>


        </div>
      </div>

      {/* ── OUR PARTNERS ──────────────────────────────── */}
      <section className="section" style={{ background: "white", padding: "60px 0", borderBottom: "1px solid var(--gray-100)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem", fontWeight: "700", color: "var(--gray-600)", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "1px" }}>
            Our Trusted Partners
          </h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", opacity: 0.8, transition: "opacity 0.3s ease", cursor: "pointer" }} onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}>
              <div style={{ position: "relative", width: "160px", height: "80px" }}>
                <Image src={wintechLogo} alt="Win Tech Digital Partner" fill style={{ objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--black)" }}>Win Tech Digital Partner</span>
            </div>
            {/* Add more partners here in the future */}
          </div>
        </div>
      </section>

      {/* ── SECTION ──────────────────────────────────── */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">

          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 14px 5px 8px", background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)", borderRadius: "50px", fontSize: "12px", fontWeight: "700", color: "#6366f1" }}>
                <Building2 size={14} /> Agency Partner Network
              </div>
              <div style={{ width: "24px", height: "1.5px", background: "var(--gray-200)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 14px 5px 8px", background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: "50px", fontSize: "12px", fontWeight: "700", color: "#10b981" }}>
                <Rocket size={14} /> Co-Build Studio
              </div>
            </div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: "800", color: "var(--black)", marginBottom: "14px", lineHeight: 1.15 }}>
              Two Strategic Ways To Collaborate
            </h2>
            <p style={{ fontSize: "16px", color: "var(--gray-500)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.75 }}>
              Choose the track that fits your business goals — agency tech fulfillment or product co-founding.
            </p>
          </div>


          {/* ── TRACK CARDS ──────────────────────────── */}
          <div className="partner-track-grid">

            {/* Card 1 — Agency */}
            <div className="partner-track-card" style={{ border: "1.5px solid rgba(99,102,241,0.15)", boxShadow: "0 8px 32px rgba(99,102,241,0.08)" }}>
              <div style={{ height: "4px", background: "linear-gradient(90deg, #6366f1, #a5b4fc)", flexShrink: 0 }} />
              <div className="partner-card">
                <div style={{ width: "56px", height: "56px", background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(99,102,241,0.04))", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#6366f1", marginBottom: "18px", border: "1px solid rgba(99,102,241,0.12)", flexShrink: 0 }}>
                  <Building2 size={26} />
                </div>
                <div style={{ fontSize: "10px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1.5px", color: "#6366f1", marginBottom: "6px" }}>Track 01 — Agency Growth</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.35rem, 2vw, 1.65rem)", fontWeight: "800", color: "var(--black)", marginBottom: "12px", lineHeight: 1.2 }}>Agency Partner Program</h3>
                <p style={{ fontSize: "14px", color: "var(--gray-500)", lineHeight: 1.75, marginBottom: "24px" }}>
                  Are you a digital, marketing, or UI agency getting client inquiries for Web, Mobile, AI, or Custom Software? We handle full technical execution under your brand.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px", flex: 1 }}>
                  {[
                    { title: "100% White-Label Fulfillment", desc: "Delivered entirely under your agency branding — clients never see us." },
                    { title: "Referral & Revenue Share", desc: "Earn 10-20% recurring commissions on client introductions." },
                    { title: "Dedicated Tech Leads & NDA", desc: "Strict NDA, guaranteed SLA, and a personal project lead for every engagement." },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px 14px", background: "rgba(99,102,241,0.04)", borderRadius: "10px", border: "1px solid rgba(99,102,241,0.07)" }}>
                      <CheckCircle2 size={17} color="#6366f1" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <div>
                        <strong style={{ color: "var(--black)", display: "block", fontSize: "13.5px", marginBottom: "2px" }}>{item.title}</strong>
                        <span style={{ fontSize: "12.5px", color: "var(--gray-500)", lineHeight: 1.55 }}>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Card 2 — Co-Build */}
            <div className="partner-track-card" style={{ border: "1.5px solid rgba(16,185,129,0.18)", boxShadow: "0 8px 32px rgba(16,185,129,0.07)" }}>
              <div style={{ height: "4px", background: "linear-gradient(90deg, #10b981, #34d399)", flexShrink: 0 }} />
              <div className="partner-card">
                <div style={{ width: "56px", height: "56px", background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(16,185,129,0.04))", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", marginBottom: "18px", border: "1px solid rgba(16,185,129,0.12)", flexShrink: 0 }}>
                  <Rocket size={26} />
                </div>
                <div style={{ fontSize: "10px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1.5px", color: "#10b981", marginBottom: "6px" }}>Track 02 — Product Collaboration</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.35rem, 2vw, 1.65rem)", fontWeight: "800", color: "var(--black)", marginBottom: "12px", lineHeight: 1.2 }}>Co-Build & Venture Studio</h3>
                <p style={{ fontSize: "14px", color: "var(--gray-500)", lineHeight: 1.75, marginBottom: "24px" }}>
                  Have a SaaS concept or enterprise product idea? We partner as your tech co-founders — from architecture and MVP to scale and launch.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px", flex: 1 }}>
                  {[
                    { title: "Tech Co-Founding & Architecture", desc: "We design, architect, and build from wireframes all the way to enterprise scale." },
                    { title: "Flexible Equity & Commercial Models", desc: "Choose from co-dev, profit-share, sweat-equity, or hybrid retainer." },
                    { title: "Next-Gen Tech Stack", desc: "Next.js, AI/ML, Cloud, Industrial IoT — we bring modern capabilities to your vision." },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "14px", background: "rgba(16,185,129,0.04)", borderRadius: "12px", border: "1px solid rgba(16,185,129,0.08)" }}>
                      <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <div>
                        <strong style={{ color: "var(--black)", display: "block", fontSize: "14px", marginBottom: "3px" }}>{item.title}</strong>
                        <span style={{ fontSize: "13px", color: "var(--gray-500)", lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </div>

          {/* ── FORM + TRUST SECTION ─────────────────── */}
          <div className="partner-banner" style={{ background: "white", borderRadius: "24px", display: "flex", flexWrap: "wrap", gap: "48px", border: "1px solid var(--gray-100)", boxShadow: "0 12px 48px rgba(0,0,0,0.06)" }}>

            {/* Left: Trust signals */}
            <div className="partner-flex-item">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 16px", background: "rgba(99,102,241,0.08)", color: "var(--primary)", borderRadius: "50px", fontWeight: "700", fontSize: "12px", marginBottom: "20px", border: "1px solid rgba(99,102,241,0.12)" }}>
                <Zap size={13} /> Get In Touch
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "800", color: "var(--black)", marginBottom: "16px", lineHeight: 1.2 }}>
                Let's Discuss How We Can Partner
              </h3>
              <p style={{ fontSize: "15px", color: "var(--gray-500)", lineHeight: 1.75, marginBottom: "36px" }}>
                Fill out the inquiry form and our Head of Strategic Alliances will schedule a discovery call within 24 hours.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { icon: ShieldCheck, color: "#6366f1", bg: "rgba(99,102,241,0.08)", label: "Enterprise Assurance", desc: "Strict NDA signed before any sensitive project discussion." },
                  { icon: TrendingUp, color: "#10b981", bg: "rgba(16,185,129,0.08)", label: "Fast Onboarding", desc: "Dev team plugged into your workflow within 48 hours." },
                  { icon: Handshake, color: "#f59e0b", bg: "rgba(245,158,11,0.08)", label: "Trusted by 50+ Partners", desc: "Agencies and founders across India, US, and UK." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", background: "var(--gray-50)", borderRadius: "14px", border: "1px solid var(--gray-100)" }}>
                    <div style={{ width: "44px", height: "44px", background: item.bg, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: item.color, flexShrink: 0 }}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "700", color: "var(--black)", marginBottom: "2px" }}>{item.label}</div>
                      <div style={{ fontSize: "13px", color: "var(--gray-500)" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="partner-flex-item partner-form-box" style={{ background: "linear-gradient(145deg, #f8f9ff, #f1f2fc)", borderRadius: "20px", border: "1px solid var(--gray-200)" }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "800", marginBottom: "6px", color: "var(--black)" }}>Partnership Request Form</h3>
              <p style={{ fontSize: "13px", color: "var(--gray-500)", marginBottom: "24px" }}>We respond within 24 business hours.</p>

              <form className="contact-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {status === "success" && (
                  <div style={{ background: "#ecfdf5", color: "#059669", padding: "14px 16px", borderRadius: "12px", fontSize: "14px", fontWeight: "600", border: "1px solid rgba(16,185,129,0.2)" }}>
                    ✓ Request submitted! We'll reach out within 24 hours.
                  </div>
                )}
                {status === "error" && (
                  <div style={{ background: "#fef2f2", color: "#dc2626", padding: "14px 16px", borderRadius: "12px", fontSize: "14px", fontWeight: "600", border: "1px solid rgba(239,68,68,0.2)" }}>
                    Something went wrong. Please try again.
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">Company / Agency Name</label>
                  <input type="text" className="form-input" placeholder="e.g. Apex Digital Media" required value={formData.companyName} onChange={e => setFormData({ ...formData, companyName: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Person & Title</label>
                  <input type="text" className="form-input" placeholder="e.g. Alex Morgan, CEO" required value={formData.contactPerson} onChange={e => setFormData({ ...formData, contactPerson: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Work Email Address</label>
                  <input type="email" className="form-input" placeholder="alex@company.com" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Partnership Track</label>
                  <select className="form-input" required value={formData.interest} onChange={e => setFormData({ ...formData, interest: e.target.value })}>
                    <option value="Agency White-Label">Agency White-Label Development</option>
                    <option value="Agency Referral">Agency Referral Partner</option>
                    <option value="Co-Build Product">Product Co-Building / Joint Venture</option>
                    <option value="Strategic Collaboration">Strategic Tech Collaboration</option>
                    <option value="Other">Other Partnership Idea</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Project / Collaboration Details</label>
                  <textarea className="form-textarea" placeholder="Tell us about your agency needs or product idea..." rows={4} required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "15px", fontSize: "15px", borderRadius: "14px" }} disabled={status === "submitting"}>
                  {status === "submitting" ? "Submitting Request..." : "Submit Partnership Inquiry"} <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

