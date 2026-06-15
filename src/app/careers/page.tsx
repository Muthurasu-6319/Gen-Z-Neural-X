"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Clock, Briefcase, Users, ArrowRight, Send } from "lucide-react";

const openings = [
  {
    id: "react-dev",
    title: "React.js Developer",
    department: "Engineering",
    location: "Tamil Nadu / Remote",
    type: "Full-time",
    experience: "1-3 years",
    color: "#6366f1",
    skills: ["React.js", "TypeScript", "REST APIs", "Git"],
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    department: "AI & Data Science",
    location: "Tamil Nadu / Remote",
    type: "Full-time",
    experience: "2-4 years",
    color: "#8b5cf6",
    skills: ["Python", "TensorFlow", "PyTorch", "ML Ops"],
  },
  {
    id: "digital-marketer",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Tamil Nadu / Hybrid",
    type: "Full-time",
    experience: "1-2 years",
    color: "#10b981",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
  },
  {
    id: "uiux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Tamil Nadu / Remote",
    type: "Full-time",
    experience: "1-3 years",
    color: "#f43f5e",
    skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
  },
  {
    id: "node-backend",
    title: "Node.js Backend Developer",
    department: "Engineering",
    location: "Tamil Nadu / Remote",
    type: "Full-time",
    experience: "2-4 years",
    color: "#06b6d4",
    skills: ["Node.js", "Express", "MongoDB", "AWS"],
  },
  {
    id: "freelance-dev",
    title: "Freelance Developer (Ongoing)",
    department: "Freelance",
    location: "Remote",
    type: "Freelance",
    experience: "Any",
    color: "#f59e0b",
    skills: ["Any Stack", "Project-based", "Flexible hours", "Remote"],
  },
];

export default function CareersPage() {
  const [applyForm, setApplyForm] = useState({ name: "", email: "", phone: "", role: "", linkedin: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          formType: 'Career Application', 
          ...applyForm 
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setApplyForm({ name: "", email: "", phone: "", role: "", linkedin: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
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
            <Briefcase size={13} /> Join Our Team
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Career <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Opportunities</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Join a passionate team of innovators building the future of technology. We're always looking for talented individuals.
          </p>
        </div>
      </div>

      {/* Job Openings */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Current <span className="gradient-text">Openings</span></h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              We&apos;re hiring talented professionals across multiple roles. Apply now!
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "80px" }}>
            {openings.map((job) => (
              <div
                key={job.id}
                id={`job-${job.id}`}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "28px 32px",
                  border: "1px solid var(--gray-100)",
                  boxShadow: "0 2px 12px rgba(55,48,163,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "20px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(55,48,163,0.12)";
                  e.currentTarget.style.borderColor = `${job.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(55,48,163,0.06)";
                  e.currentTarget.style.borderColor = "var(--gray-100)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: 1 }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${job.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Briefcase size={22} style={{ color: job.color }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "#0a0a0f", marginBottom: "4px" }}>{job.title}</h3>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "13px", color: "#6b6fa0", display: "flex", alignItems: "center", gap: "4px" }}><MapPin size={12} /> {job.location}</span>
                      <span style={{ fontSize: "13px", color: "#6b6fa0", display: "flex", alignItems: "center", gap: "4px" }}><Clock size={12} /> {job.experience}</span>
                      <span style={{ fontSize: "13px", color: "#6b6fa0", display: "flex", alignItems: "center", gap: "4px" }}><Users size={12} /> {job.department}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  {job.skills.slice(0, 3).map((skill) => (
                    <span key={skill} style={{ padding: "4px 12px", background: `${job.color}10`, borderRadius: "50px", fontSize: "12px", fontWeight: "600", color: job.color }}>
                      {skill}
                    </span>
                  ))}
                  <span style={{ padding: "4px 12px", background: job.type === "Full-time" ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)", borderRadius: "50px", fontSize: "12px", fontWeight: "700", color: job.type === "Full-time" ? "#10b981" : "#f59e0b" }}>
                    {job.type}
                  </span>
                  <button
                    id={`apply-job-${job.id}`}
                    onClick={() => setApplyForm((prev) => ({ ...prev, role: job.title }))}
                    className="btn-primary"
                    style={{ padding: "10px 20px", fontSize: "13px" }}
                  >
                    Apply <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 className="section-title">Apply <span className="gradient-text">Now</span></h2>
            </div>

            {submitted && (
              <div style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "12px", padding: "16px 20px", marginBottom: "24px", color: "#065f46", fontSize: "14px", fontWeight: "500" }}>
                ✅ Application submitted! We&apos;ll review and contact you within 3-5 business days.
              </div>
            )}

            <form id="career-apply-form" onSubmit={handleSubmit} style={{ background: "white", borderRadius: "24px", padding: "48px", boxShadow: "0 8px 32px rgba(55,48,163,0.1)", border: "1px solid var(--gray-100)" }}>
              <div className="grid-2" style={{ marginBottom: "20px" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="career-name">Full Name *</label>
                  <input id="career-name" type="text" className="form-input" value={applyForm.name} onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })} placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="career-email">Email *</label>
                  <input id="career-email" type="email" className="form-input" value={applyForm.email} onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })} placeholder="your@email.com" required />
                </div>
              </div>
              <div className="grid-2" style={{ marginBottom: "20px" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="career-phone">Phone *</label>
                  <input id="career-phone" type="tel" className="form-input" value={applyForm.phone} onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="career-linkedin">LinkedIn / Portfolio</label>
                  <input id="career-linkedin" type="url" className="form-input" value={applyForm.linkedin} onChange={(e) => setApplyForm({ ...applyForm, linkedin: e.target.value })} placeholder="https://linkedin.com/in/..." />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label className="form-label" htmlFor="career-role">Position *</label>
                <select id="career-role" className="form-input" value={applyForm.role} onChange={(e) => setApplyForm({ ...applyForm, role: e.target.value })} required>
                  <option value="">Select a position</option>
                  {openings.map((j) => <option key={j.id} value={j.title}>{j.title}</option>)}
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: "32px" }}>
                <label className="form-label" htmlFor="career-message">Cover Letter / Message</label>
                <textarea id="career-message" className="form-textarea" value={applyForm.message} onChange={(e) => setApplyForm({ ...applyForm, message: e.target.value })} placeholder="Tell us about yourself, your experience, and why you want to join Gen Z Neural-X..." />
              </div>
              <button id="career-submit-btn" type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "16px" }}>
                Submit Application <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
