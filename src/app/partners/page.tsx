"use client";

import Link from "next/link";
import { Handshake, Building2, Rocket, TrendingUp, Globe2, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    interest: "White-Label",
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
        body: JSON.stringify({
          formType: 'Partnership Inquiry',
          ...formData
        })
      });
      
      if (res.ok) {
        setStatus("success");
        setFormData({ companyName: "", contactPerson: "", email: "", interest: "White-Label", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.9)", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", margin: "0 auto 24px" }}>
            <Handshake size={16} style={{ display: "inline-block", marginRight: "8px", verticalAlign: "middle" }} /> Ecosystem Partnerships
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Agency Network & <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Co-Build Studio</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.15rem", maxWidth: "680px", margin: "0 auto", lineHeight: "1.7" }}>
            We empower marketing agencies to scale client delivery through 100% white-label software engineering, while co-building groundbreaking products with forward-thinking companies.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "36px", fontWeight: "800", color: "var(--black)", marginBottom: "16px" }}>
              Two Strategic Ways To Collaborate
            </h2>
            <p style={{ fontSize: "16px", color: "var(--gray-500)", maxWidth: "620px", margin: "0 auto" }}>
              Select the partnership track that matches your business goals — whether you need client fulfillment execution or product co-founding.
            </p>
          </div>

          {/* Dual Tracks Section */}
          <div className="grid-2" style={{ gap: "32px", marginBottom: "64px" }}>
            {/* Track 1: Agency Partner Network */}
            <div className="partner-card" style={{ background: "white", borderRadius: "24px", border: "1px solid var(--gray-100)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <div style={{ width: "64px", height: "64px", background: "rgba(99, 102, 241, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "24px" }}>
                <Building2 size={32} />
              </div>
              <div style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary)", marginBottom: "8px" }}>
                Track 01 — Agency Growth
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "var(--black)", marginBottom: "16px" }}>
                Agency Partner Program
              </h3>
              <p style={{ fontSize: "15px", color: "var(--gray-500)", lineHeight: "1.7", marginBottom: "24px" }}>
                Are you a digital, marketing, or UI agency getting client inquiries for Web, Mobile Apps, AI, or Custom Software? Partner with us to handle complete technical execution under your agency's banner.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ color: "var(--black)", display: "block", fontSize: "15px" }}>100% White-Label Fulfillment</strong>
                    <span style={{ fontSize: "14px", color: "var(--gray-500)" }}>We work in the background. Code, demos, and updates are presented under your agency branding.</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ color: "var(--black)", display: "block", fontSize: "15px" }}>Referral & Revenue Share</strong>
                    <span style={{ fontSize: "14px", color: "var(--gray-500)" }}>Earn attractive 10-20% recurring commissions for client introductions and tech referrals.</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ color: "var(--black)", display: "block", fontSize: "15px" }}>Dedicated Tech Leads & Strict NDA</strong>
                    <span style={{ fontSize: "14px", color: "var(--gray-500)" }}>Guaranteed SLA, sprint updates, and strict non-compete agreements to protect your client accounts.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Track 2: Product Co-Building Studio */}
            <div className="partner-card" style={{ background: "white", borderRadius: "24px", border: "1px solid var(--gray-100)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <div style={{ width: "64px", height: "64px", background: "rgba(16, 185, 129, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", marginBottom: "24px" }}>
                <Rocket size={32} />
              </div>
              <div style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#10b981", marginBottom: "8px" }}>
                Track 02 — Product Collaboration
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "var(--black)", marginBottom: "16px" }}>
                Co-Build & Venture Studio
              </h3>
              <p style={{ fontSize: "15px", color: "var(--gray-500)", lineHeight: "1.7", marginBottom: "24px" }}>
                Have a proprietary product idea, SaaS concept, or enterprise solution? We partner with companies to co-create, engineer, and launch high-impact digital products.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ color: "var(--black)", display: "block", fontSize: "15px" }}>Tech Co-Founding & Architecture</strong>
                    <span style={{ fontSize: "14px", color: "var(--gray-500)" }}>We act as your dedicated engineering arm from prototype wireframes to enterprise scale.</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ color: "var(--black)", display: "block", fontSize: "15px" }}>Flexible Equity & Commercial Models</strong>
                    <span style={{ fontSize: "14px", color: "var(--gray-500)" }}>Co-development, profit-share, sweat-equity, or hybrid retainer models customized to your vision.</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ color: "var(--black)", display: "block", fontSize: "15px" }}>Next-Gen Tech Capabilities</strong>
                    <span style={{ fontSize: "14px", color: "var(--gray-500)" }}>Deep expertise in Next.js, Cloud Architectures, AI/ML models, IoT, and Industrial Automation.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Value Proposition Banner */}
          <div className="partner-banner" style={{ background: "white", borderRadius: "24px", display: "flex", flexWrap: "wrap", gap: "48px", border: "1px solid var(--gray-100)", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>
            <div className="partner-flex-item">
              <div style={{ display: "inline-block", padding: "8px 16px", background: "rgba(99,102,241,0.1)", color: "var(--primary)", borderRadius: "50px", fontWeight: "600", fontSize: "13px", marginBottom: "16px" }}>
                Get In Touch
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.75rem, 4vw, 2rem)", fontWeight: "800", color: "var(--black)", marginBottom: "20px" }}>
                Let's Discuss How We Can Partner
              </h3>
              <p style={{ fontSize: "15px", color: "var(--gray-500)", lineHeight: "1.7", marginBottom: "32px" }}>
                Fill out the partnership inquiry form and our Head of Strategic Alliances will set up a discovery call with your leadership team within 24 hours.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "44px", height: "44px", background: "rgba(99,102,241,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", flexShrink: 0 }}>
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "var(--black)" }}>Enterprise Assurance</div>
                    <div style={{ fontSize: "13px", color: "var(--gray-500)" }}>Strict NDA signed before discussing sensitive project code or IP.</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "44px", height: "44px", background: "rgba(16,185,129,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", flexShrink: 0 }}>
                    <TrendingUp size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "var(--black)" }}>Fast Onboarding</div>
                    <div style={{ fontSize: "13px", color: "var(--gray-500)" }}>Plug dev resources into your pipeline within 48 hours.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="partner-flex-item partner-form-box" style={{ background: "var(--gray-50)", borderRadius: "20px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "20px", color: "var(--black)" }}>Partnership Request Form</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                {status === "success" && (
                  <div style={{ background: "#ecfdf5", color: "#10b981", padding: "14px", borderRadius: "10px", marginBottom: "20px", fontSize: "14px", fontWeight: "600" }}>
                    ✓ Thank you! Your partnership request has been submitted. Our team will contact you shortly.
                  </div>
                )}
                {status === "error" && (
                  <div style={{ background: "#fef2f2", color: "#ef4444", padding: "14px", borderRadius: "10px", marginBottom: "20px", fontSize: "14px", fontWeight: "600" }}>
                    Oops! Something went wrong. Please check your network and try again.
                  </div>
                )}
                <div className="form-group">
                  <label className="form-label">Company / Agency Name</label>
                  <input type="text" className="form-input" placeholder="e.g. Apex Digital Media" required value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Person & Title</label>
                  <input type="text" className="form-input" placeholder="e.g. Alex Morgan, CEO" required value={formData.contactPerson} onChange={e => setFormData({...formData, contactPerson: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Work Email Address</label>
                  <input type="email" className="form-input" placeholder="alex@company.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Partnership Track Interest</label>
                  <select className="form-input" required value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})}>
                    <option value="Agency White-Label">Agency White-Label Development (We build under your brand)</option>
                    <option value="Agency Referral">Agency Referral Partner (Earn commission on client leads)</option>
                    <option value="Co-Build Product">Product Co-Building / Joint Venture (Build a project together)</option>
                    <option value="Strategic Collaboration">Strategic Tech Collaboration</option>
                    <option value="Other">Other Partnership Idea</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Project / Collaboration Details</label>
                  <textarea className="form-textarea" placeholder="Tell us about your agency needs or product idea..." rows={4} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: "15px" }} disabled={status === "submitting"}>
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

