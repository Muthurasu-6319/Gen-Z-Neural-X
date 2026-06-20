"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText, BookOpen, Mic, CheckCircle, Users, User,
  GraduationCap, Cpu, BarChart3, Shield, Send, Loader2,
  Code2, Database, BrainCircuit, ClipboardList,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={28} />,
    title: "Project Development",
    desc: "Full implementation support for your final year project — frontend, backend, database, and deployment.",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    icon: <FileText size={28} />,
    title: "Documentation & Report",
    desc: "IEEE-format project reports, abstract writing, system analysis, diagrams (ER, UML, DFD), and full documentation.",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "Synopsis & PPT",
    desc: "Professional synopsis preparation and stunning PowerPoint presentations tailored for your panel review.",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
  },
  {
    icon: <Mic size={28} />,
    title: "Viva Preparation",
    desc: "Mock viva sessions, Q&A drills, and expert coaching to help you confidently defend your project.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI & ML Projects",
    desc: "Specialized support for AI/ML-based projects — model training, dataset handling, and result analysis.",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    icon: <Database size={28} />,
    title: "Database Design",
    desc: "Complete ER diagram, schema design, normalization, and optimized SQL/NoSQL database setup.",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
  },
];

const steps = [
  { no: "01", title: "Submit Your Request", desc: "Fill the form below with your project details." },
  { no: "02", title: "Team Review", desc: "Our experts review your requirements within 24 hours." },
  { no: "03", title: "Kickoff Call", desc: "We schedule a call to align on scope and deliverables." },
  { no: "04", title: "Delivery & Viva Prep", desc: "You receive complete project + documentation + viva coaching." },
];

const initialForm = {
  fullName: "",
  phoneNumber: "",
  email: "",
  whatsappNumber: "",
  collegeName: "",
  department: "",
  projectTitle: "",
  projectType: "",
  referredBy: "",
};

type FormData = typeof initialForm;

export default function FinalYearProjectPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/final-year-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (json.success) {
        setSuccess(true);
        setForm(initialForm);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "var(--white)" }}>
      {/* ── HERO ── */}
      <section className="page-hero" style={{ position: "relative", overflow: "hidden", paddingBottom: "0" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid-2" style={{ gap: "64px", alignItems: "center", paddingBottom: "64px" }}>
            <div>
              <div className="section-tag">
                <GraduationCap size={14} />
                Final Year Project Support
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "white", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
                We Build Your{" "}
                <span style={{ background: "linear-gradient(90deg,#a78bfa,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Final Year Project
                </span>{" "}
                End-to-End
              </h1>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "32px", maxWidth: "520px" }}>
                From project development & documentation to viva preparation — our expert team handles everything so you can graduate with confidence.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {["✔ IEEE Report", "✔ Source Code", "✔ PPT", "✔ Viva Coaching"].map((t) => (
                  <span key={t} style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)", color: "white", padding: "6px 16px", borderRadius: "50px", fontSize: "13px", fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
              <Image
                src="/final-year-project-hero.png"
                alt="Final Year Project Support – Gen Z Neural-X"
                width={600}
                height={420}
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                priority
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(13,15,43,0.6) 100%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>
              <BookOpen size={14} /> What We Offer
            </div>
            <h2 className="section-title">Complete Project Support Package</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Everything you need from ideation to submission — handled by our experienced technical team.
            </p>
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <div key={s.title} className="card" style={{ textAlign: "left" }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: 10, color: "var(--black)" }}>{s.title}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "14px", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section dark-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-tag" style={{ justifyContent: "center", background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.2)" }}>
              <BarChart3 size={14} /> How It Works
            </div>
            <h2 className="section-title" style={{ color: "white" }}>Simple 4-Step Process</h2>
          </div>
          <div className="grid-4">
            {steps.map((s, i) => (
              <div key={s.no} style={{ textAlign: "center", padding: "32px 20px", background: "rgba(255,255,255,0.05)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
                {i < steps.length - 1 && (
                  <div style={{ display: "none" }} />
                )}
                <div style={{ fontSize: "42px", fontWeight: 900, background: "linear-gradient(135deg,#6366f1,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 16 }}>{s.no}</div>
                <h3 style={{ color: "white", fontSize: "17px", fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "64px", alignItems: "center" }}>
            <div>
              <div className="section-tag"><Shield size={14} /> Why Gen Z Neural-X?</div>
              <h2 className="section-title">Trusted by 100+ Engineering Students</h2>
              <p style={{ color: "var(--gray-500)", lineHeight: 1.8, marginBottom: 32 }}>
                We understand the pressure of final year projects. Our team of experienced developers and academics ensure quality, timely delivery, and full viva support.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "End-to-end project development in your preferred technology stack",
                  "IEEE-standard documentation with plagiarism-free content",
                  "1-on-1 viva preparation with mock Q&A sessions",
                  "Dedicated WhatsApp support throughout the process",
                  "Confidential & secure — your project stays private",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <CheckCircle size={18} style={{ color: "#10b981", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "var(--gray-600)", fontSize: "15px" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { icon: <Users size={24} />, label: "Students Helped", value: "100+" },
                { icon: <Cpu size={24} />, label: "Tech Stacks", value: "20+" },
                { icon: <FileText size={24} />, label: "Reports Written", value: "150+" },
                { icon: <GraduationCap size={24} />, label: "Success Rate", value: "98%" },
              ].map((stat) => (
                <div key={stat.label} className="card" style={{ textAlign: "center", padding: "28px 20px" }}>
                  <div style={{ color: "var(--primary-light)", marginBottom: 12, display: "flex", justifyContent: "center" }}>{stat.icon}</div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.value}</div>
                  <div style={{ color: "var(--gray-500)", fontSize: "13px", marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REGISTRATION FORM ── */}
      <section className="section" style={{ background: "var(--gray-50)" }} id="register">
        <div className="container">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="section-tag" style={{ justifyContent: "center" }}>
                <Send size={14} /> Register Now
              </div>
              <h2 className="section-title">Start Your Final Year Project</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Fill in your details below and our team will reach out within 24 hours.
              </p>
            </div>

            {success ? (
              <div style={{ textAlign: "center", padding: "64px 32px", background: "white", borderRadius: 24, boxShadow: "var(--shadow-lg)", border: "1px solid rgba(16,185,129,0.2)" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: "#10b981" }}>
                  <CheckCircle size={40} />
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--black)", marginBottom: 12 }}>Request Submitted Successfully!</h3>
                <p style={{ color: "var(--gray-500)", marginBottom: 28, lineHeight: 1.7 }}>
                  Thank you! Our team will review your request and contact you via WhatsApp / Email within 24 hours.
                </p>
                <button className="btn-primary" onClick={() => setSuccess(false)}>Submit Another Request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "white", borderRadius: 24, padding: "48px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--gray-100)" }}>
                {/* Row 1 */}
                <div className="grid-2" style={{ marginBottom: 24 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fyp-fullName">
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}><User size={14} /> Full Name *</span>
                    </label>
                    <input id="fyp-fullName" name="fullName" required className="form-input" placeholder="Enter your full name" value={form.fullName} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fyp-phoneNumber">
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>📞 Phone Number *</span>
                    </label>
                    <input id="fyp-phoneNumber" name="phoneNumber" required type="tel" className="form-input" placeholder="10-digit mobile number" value={form.phoneNumber} onChange={handleChange} />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid-2" style={{ marginBottom: 24 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fyp-email">
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>✉️ Email ID *</span>
                    </label>
                    <input id="fyp-email" name="email" required type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fyp-whatsappNumber">
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>💬 WhatsApp Number *</span>
                    </label>
                    <input id="fyp-whatsappNumber" name="whatsappNumber" required type="tel" className="form-input" placeholder="WhatsApp number" value={form.whatsappNumber} onChange={handleChange} />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid-2" style={{ marginBottom: 24 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fyp-collegeName">
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}><GraduationCap size={14} /> College Name *</span>
                    </label>
                    <input id="fyp-collegeName" name="collegeName" required className="form-input" placeholder="Your college / university" value={form.collegeName} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fyp-department">
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}><BookOpen size={14} /> Department *</span>
                    </label>
                    <input id="fyp-department" name="department" required className="form-input" placeholder="e.g. CSE, ECE, IT, MCA" value={form.department} onChange={handleChange} />
                  </div>
                </div>

                {/* Row 4 */}
                <div className="form-group" style={{ marginBottom: 24 }}>
                  <label className="form-label" htmlFor="fyp-projectTitle">
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Cpu size={14} /> Project Title *</span>
                  </label>
                  <input id="fyp-projectTitle" name="projectTitle" required className="form-input" placeholder="Enter your project title or topic idea" value={form.projectTitle} onChange={handleChange} />
                </div>

                {/* Row 5 */}
                <div className="grid-2" style={{ marginBottom: 24 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fyp-projectType">
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Users size={14} /> Individual or Team Project? *</span>
                    </label>
                    <select id="fyp-projectType" name="projectType" required className="form-input" value={form.projectType} onChange={handleChange} style={{ cursor: "pointer" }}>
                      <option value="">Select type</option>
                      <option value="Individual">Individual Project</option>
                      <option value="Team (2 members)">Team – 2 Members</option>
                      <option value="Team (3 members)">Team – 3 Members</option>
                      <option value="Team (4+ members)">Team – 4+ Members</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fyp-referredBy">
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>🤝 Referred By</span>
                    </label>
                    <input id="fyp-referredBy" name="referredBy" className="form-input" placeholder="Student / Ambassador who referred you" value={form.referredBy} onChange={handleChange} />
                    <span style={{ fontSize: "12px", color: "var(--gray-400)", marginTop: 4 }}>Enter the name of the student/ambassador who referred you.</span>
                  </div>
                </div>

                {error && (
                  <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 16px", color: "#ef4444", fontSize: 14, marginBottom: 24 }}>
                    {error}
                  </div>
                )}

                <button type="submit" className="btn-primary" disabled={loading} style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "16px 32px", opacity: loading ? 0.7 : 1 }}>
                  {loading ? (
                    <><Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> Submitting…</>
                  ) : (
                    <><Send size={18} /> Submit My Project Request</>
                  )}
                </button>

                <p style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "var(--gray-400)" }}>
                  🔒 Your information is confidential and will only be used to contact you about your project.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
