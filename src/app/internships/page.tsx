"use client";

import { useState } from "react";
import Link from "next/link";
import { Briefcase, Clock, Users, CheckCircle, ArrowRight, Send } from "lucide-react";

const internships = [
  {
    id: "frontend-intern",
    title: "Frontend Developer Intern",
    department: "Development",
    duration: "3 Months",
    mode: "Hybrid",
    spots: "5 spots",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    description: "Work on real client projects building responsive web interfaces using React.js and modern CSS frameworks.",
    requirements: ["Basic HTML, CSS, JavaScript", "Knowledge of React.js", "Good problem-solving skills", "Passionate about design"],
    benefits: ["Hands-on project experience", "Industry mentorship", "Certificate of completion", "Letter of recommendation", "Job placement assistance"],
  },
  {
    id: "aiml-intern",
    title: "AI/ML Engineer Intern",
    department: "AI & Data Science",
    duration: "3-6 Months",
    mode: "Hybrid",
    spots: "3 spots",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    description: "Work alongside our AI team to build and deploy machine learning models, data pipelines, and intelligent systems.",
    requirements: ["Python programming", "Basic ML knowledge", "Familiarity with pandas/numpy", "Analytical mindset"],
    benefits: ["Work on live AI projects", "Research opportunities", "Certificate + recommendation", "Open source contributions", "Job placement assistance"],
  },
  {
    id: "marketing-intern",
    title: "Digital Marketing Intern",
    department: "Marketing",
    duration: "2 Months",
    mode: "Remote",
    spots: "4 spots",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    description: "Learn and execute digital marketing campaigns across SEO, social media, Google Ads, and content marketing.",
    requirements: ["Interest in digital marketing", "Good written communication", "Social media familiarity", "Creative thinking"],
    benefits: ["Run real ad campaigns", "Analytics training", "Certificate + recommendation", "Portfolio building", "Flexible remote work"],
  },
  {
    id: "mobile-intern",
    title: "Mobile App Developer Intern",
    department: "Development",
    duration: "3 Months",
    mode: "Hybrid",
    spots: "3 spots",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    description: "Build cross-platform mobile apps using React Native, contributing to real apps on the App Store and Play Store.",
    requirements: ["JavaScript fundamentals", "React knowledge preferred", "Interest in mobile development", "Team player"],
    benefits: ["Ship real mobile apps", "App store submission experience", "Certificate + recommendation", "Tech exposure", "Job placement assistance"],
  },
  {
    id: "uiux-intern",
    title: "UI/UX Design Intern",
    department: "Design",
    duration: "2-3 Months",
    mode: "Hybrid",
    spots: "3 spots",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    description: "Create user-centered designs, wireframes, prototypes, and design systems for web and mobile products.",
    requirements: ["Figma or Adobe XD knowledge", "Eye for design", "Understanding of UX principles", "Portfolio welcome"],
    benefits: ["Real product design work", "Design system creation", "Certificate + recommendation", "Portfolio projects", "Mentorship from designers"],
  },
];

export default function InternshipsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    role: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          formType: 'Internship Application', 
          ...formData 
        }),
      });
      if (response.ok) {
        alert("Application submitted! We will contact you within 2-3 business days.");
        setFormData({ name: "", email: "", phone: "", college: "", role: "", message: "" });
      } else {
        alert("Failed to send application. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            <Briefcase size={13} /> Career Development
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Internship <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Programs</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Gain real-world experience, build your portfolio, and jumpstart your career with Gen Z Neural-X.
          </p>
        </div>
      </div>

      {/* Internships Grid */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="grid-3" style={{ marginBottom: "80px" }}>
            {internships.map((intern) => (
              <div
                key={intern.id}
                id={`internship-${intern.id}`}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(55,48,163,0.08)",
                  border: "1px solid var(--gray-100)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ background: intern.gradient, padding: "28px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "80px", height: "80px", background: "rgba(255,255,255,0.1)", borderRadius: "50%" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <span style={{ padding: "4px 12px", background: "rgba(255,255,255,0.2)", borderRadius: "50px", fontSize: "11px", fontWeight: "600", color: "white" }}>
                      {intern.department}
                    </span>
                    <span style={{ padding: "4px 12px", background: "rgba(255,255,255,0.15)", borderRadius: "50px", fontSize: "11px", fontWeight: "600", color: "rgba(255,255,255,0.9)" }}>
                      {intern.spots}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "800", color: "white", marginBottom: "12px" }}>
                    {intern.title}
                  </h3>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>
                      <Clock size={12} /> {intern.duration}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>
                      <Users size={12} /> {intern.mode}
                    </div>
                  </div>
                </div>

                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ fontSize: "13.5px", color: "#4a4e7a", lineHeight: "1.7", marginBottom: "20px" }}>{intern.description}</p>

                  <div style={{ marginBottom: "16px" }}>
                    <h5 style={{ fontSize: "12px", fontWeight: "700", color: "#0a0a0f", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Requirements</h5>
                    {intern.requirements.map((req) => (
                      <div key={req} style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginBottom: "6px" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: intern.color, flexShrink: 0, marginTop: "6px" }} />
                        <span style={{ fontSize: "13px", color: "#4a4e7a" }}>{req}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ flex: 1, marginBottom: "20px" }}>
                    <h5 style={{ fontSize: "12px", fontWeight: "700", color: "#0a0a0f", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Benefits</h5>
                    {intern.benefits.map((benefit) => (
                      <div key={benefit} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                        <CheckCircle size={13} style={{ color: intern.color, flexShrink: 0 }} />
                        <span style={{ fontSize: "13px", color: "#4a4e7a" }}>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#apply-form"
                    id={`apply-${intern.id}`}
                    className="btn-primary"
                    style={{ justifyContent: "center" }}
                    onClick={() => setFormData((prev) => ({ ...prev, role: intern.title }))}
                  >
                    Apply Now <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div id="apply-form" style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div className="section-tag">📝 Apply Now</div>
              <h2 className="section-title">Submit Your <span className="gradient-text">Application</span></h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>Fill in the details below and our team will get back to you within 2-3 business days.</p>
            </div>

            <form
              id="internship-application-form"
              onSubmit={handleSubmit}
              style={{ background: "white", borderRadius: "24px", padding: "48px", boxShadow: "0 8px 32px rgba(55,48,163,0.1)", border: "1px solid var(--gray-100)" }}
            >
              <div className="grid-2" style={{ marginBottom: "20px" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="intern-name">Full Name *</label>
                  <input id="intern-name" type="text" className="form-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="intern-email">Email *</label>
                  <input id="intern-email" type="email" className="form-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required />
                </div>
              </div>
              <div className="grid-2" style={{ marginBottom: "20px" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="intern-phone">Phone *</label>
                  <input id="intern-phone" type="tel" className="form-input" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="intern-college">College / University *</label>
                  <input id="intern-college" type="text" className="form-input" value={formData.college} onChange={(e) => setFormData({ ...formData, college: e.target.value })} placeholder="Your college name" required />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label className="form-label" htmlFor="intern-role">Internship Role *</label>
                <select id="intern-role" className="form-input" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} required>
                  <option value="">Select a role</option>
                  {internships.map((i) => <option key={i.id} value={i.title}>{i.title}</option>)}
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: "32px" }}>
                <label className="form-label" htmlFor="intern-message">Why do you want to intern with us?</label>
                <textarea id="intern-message" className="form-textarea" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about yourself, your skills, and why you're interested..." />
              </div>
              <button id="intern-submit-btn" type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "16px" }}>
                Submit Application <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
