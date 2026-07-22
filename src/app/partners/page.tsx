"use client";

import Link from "next/link";
import { Handshake, Target, TrendingUp, Globe2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Head from "next/head";

import { useState } from "react";

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    interest: "",
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
        setFormData({ companyName: "", contactPerson: "", email: "", interest: "", message: "" });
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
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            🤝 Partner With Us
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Let's Build the <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Future Together</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            We believe in the power of collaboration. Join Gen Z Neural-X's partner ecosystem to co-create, innovate, and grow your business with our cutting-edge IT solutions.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "36px", fontWeight: "800", color: "var(--black)", marginBottom: "16px" }}>
              Why Partner With Gen Z Neural-X?
            </h2>
            <p style={{ fontSize: "16px", color: "var(--gray-500)", maxWidth: "600px", margin: "0 auto" }}>
              Whether you are an agency looking to outsource, a SaaS company needing integrations, or a consultant — we have a partnership model for you.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: "64px" }}>
            {[
              {
                icon: ShieldCheck,
                title: "Reliable Tech Execution",
                desc: "Our team of expert developers ensures your client projects are delivered with enterprise-grade quality and strict timelines.",
                color: "#6366f1"
              },
              {
                icon: TrendingUp,
                title: "Revenue Growth",
                desc: "Unlock new revenue streams through our referral programs and white-label development services.",
                color: "#10b981"
              },
              {
                icon: Globe2,
                title: "Expand Your Offerings",
                desc: "Add AI/ML, Industrial Automation, and advanced custom software to your service catalog without hiring in-house.",
                color: "#f59e0b"
              }
            ].map((feature, i) => (
              <div key={i} style={{ background: "white", padding: "40px", borderRadius: "24px", border: "1px solid var(--gray-100)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                <div style={{ width: "64px", height: "64px", background: `${feature.color}15`, borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  <feature.icon size={32} color={feature.color} />
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "var(--black)" }}>{feature.title}</h3>
                <p style={{ fontSize: "15px", color: "var(--gray-500)", lineHeight: "1.6" }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "white", borderRadius: "24px", padding: "64px", display: "flex", flexWrap: "wrap", gap: "48px", border: "1px solid var(--gray-100)", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>
            <div style={{ flex: "1 1 400px" }}>
              <div style={{ display: "inline-block", padding: "8px 16px", background: "rgba(99,102,241,0.1)", color: "var(--primary)", borderRadius: "50px", fontWeight: "600", fontSize: "13px", marginBottom: "16px" }}>
                Partnership Models
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "32px", fontWeight: "800", color: "var(--black)", marginBottom: "24px" }}>
                How we can work together
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0, fontWeight: "700" }}>1</div>
                  <div>
                    <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px", color: "var(--black)" }}>White-Label Partnership</h4>
                    <p style={{ fontSize: "14px", color: "var(--gray-500)", lineHeight: "1.6" }}>We act as your backend technology team. You handle the client relationship, and we deliver the code entirely under your brand.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0, fontWeight: "700" }}>2</div>
                  <div>
                    <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px", color: "var(--black)" }}>Referral Partners</h4>
                    <p style={{ fontSize: "14px", color: "var(--gray-500)", lineHeight: "1.6" }}>Introduce us to companies that need advanced IT solutions. We handle the sales and execution, and you earn an attractive commission.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0, fontWeight: "700" }}>3</div>
                  <div>
                    <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px", color: "var(--black)" }}>Strategic Co-creation</h4>
                    <p style={{ fontSize: "14px", color: "var(--gray-500)", lineHeight: "1.6" }}>Combine your industry expertise with our tech capabilities to build and launch new products or SaaS platforms together.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ flex: "1 1 400px", background: "var(--gray-50)", borderRadius: "16px", padding: "40px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "24px", color: "var(--black)" }}>Start a Conversation</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                {status === "success" && (
                  <div style={{ background: "#ecfdf5", color: "#10b981", padding: "12px", borderRadius: "8px", marginBottom: "16px", fontSize: "14px", fontWeight: "500" }}>
                    Thank you! Your partnership request has been sent successfully.
                  </div>
                )}
                {status === "error" && (
                  <div style={{ background: "#fef2f2", color: "#ef4444", padding: "12px", borderRadius: "8px", marginBottom: "16px", fontSize: "14px", fontWeight: "500" }}>
                    Oops! Something went wrong. Please try again.
                  </div>
                )}
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-input" placeholder="Your Company Ltd" required value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Person</label>
                  <input type="text" className="form-input" placeholder="John Doe" required value={formData.contactPerson} onChange={e => setFormData({...formData, contactPerson: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="john@company.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Partnership Interest</label>
                  <select className="form-input" required value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})}>
                    <option value="">Select an option</option>
                    <option value="White-Label">White-Label Development</option>
                    <option value="Referral">Referral / Affiliate</option>
                    <option value="Co-creation">Strategic Co-creation</option>
                    <option value="Other">Other Integration</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" placeholder="Tell us about your ideas..." rows={4} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px" }} disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending..." : "Submit Partnership Request"} <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
