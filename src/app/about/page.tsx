"use client";

import Link from "next/link";
import { Users, Target, Eye, Award, ArrowRight, Trophy, Star, GraduationCap, Sparkles, Lightbulb, Handshake, BookOpen, Search, ShieldCheck } from "lucide-react";

const teamMembers = [
  { name: "Founder & CEO", initials: "CEO", role: "Technology Visionary & Business Strategist", color: "#6366f1" },
  { name: "CTO", initials: "CTO", role: "Full Stack & AI Architecture Lead", color: "#06b6d4" },
  { name: "Creative Director", initials: "CD", role: "UI/UX Design & Brand Strategy", color: "#8b5cf6" },
  { name: "Marketing Head", initials: "MH", role: "Growth & Digital Marketing Expert", color: "#10b981" },
  { name: "AI/ML Lead", initials: "AI", role: "Machine Learning & Data Science", color: "#f59e0b" },
  { name: "Training Head", initials: "TH", role: "Education Programs & Mentorship", color: "#f43f5e" },
];

const achievements = [
  { icon: Sparkles, title: "Next-Gen Tech", desc: "Focusing on modern AI & ML" },
  { icon: Target, title: "Vision 2026", desc: "Empowering 1000+ students" },
  { icon: Lightbulb, title: "Innovative Solutions", desc: "Custom software for startups" },
  { icon: Users, title: "Growing Community", desc: "Building a tech ecosystem" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            About Gen Z Neural-X
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            We Are the Future of
            <br />
            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Technology & Innovation
            </span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Founded with a vision to democratize technology, Gen Z Neural-X has grown into a full-service technology company serving clients across India.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section id="company-story" className="section" style={{ background: "white" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "80px" }}>
            <div>
              <div className="section-tag"><Star size={14} style={{display: 'inline'}} /> Our Story</div>
              <h2 className="section-title">
                Pioneering the Next Era of <span className="gradient-text">Innovation</span>
              </h2>
              <div className="divider" />
              <p style={{ color: "#4a4e7a", fontSize: "16px", lineHeight: "1.9", marginBottom: "20px" }}>
                Founded in 2025, Gen Z Neural-X was born out of a shared vision to bridge the gap between emerging technologies and practical, real-world applications.
              </p>
              <p style={{ color: "#4a4e7a", fontSize: "16px", lineHeight: "1.9", marginBottom: "20px" }}>
                As a dynamic and forward-thinking startup, we are building a strong foundation to offer state-of-the-art AI/ML solutions, robust web architectures, and transformative training programs.
              </p>
              <p style={{ color: "#4a4e7a", fontSize: "16px", lineHeight: "1.9", marginBottom: "32px" }}>
                Our journey has just begun, and we are committed to pushing the boundaries of what's possible, empowering the next generation of digital creators and businesses.
              </p>
              <Link href="/contact" id="about-cta" className="btn-primary">
                Work With Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="responsive-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {achievements.map((item, i) => (
                <div key={i} id={`achievement-${i}`} style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #f0f0ff, #e8f4ff)" : "white", borderRadius: "20px", padding: "32px 24px", textAlign: "center", border: "1px solid rgba(99,102,241,0.1)" }}>
                  <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center", color: "#6366f1" }}><item.icon size={36} /></div>
                  <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", fontWeight: "700", color: "#0a0a0f", marginBottom: "6px" }}>{item.title}</h4>
                  <p style={{ fontSize: "13px", color: "#6b6fa0" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: "32px" }}>
            <div style={{ background: "linear-gradient(135deg, #0d0f2b, #1e1b4b)", borderRadius: "24px", padding: "48px 40px", color: "white" }}>
              <div style={{ width: "56px", height: "56px", background: "rgba(99,102,241,0.2)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <Target size={28} style={{ color: "#a5b4fc" }} />
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", marginBottom: "16px" }}>Our Mission</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: "1.8" }}>
                To empower businesses and individuals through innovative technology solutions and world-class education, enabling them to thrive in the digital era and create meaningful impact.
              </p>
            </div>
            <div style={{ background: "linear-gradient(135deg, #3730a3, #6366f1)", borderRadius: "24px", padding: "48px 40px", color: "white" }}>
              <div style={{ width: "56px", height: "56px", background: "rgba(255,255,255,0.15)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <Eye size={28} style={{ color: "white" }} />
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", marginBottom: "16px" }}>Our Vision</h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", lineHeight: "1.8" }}>
                To become India&apos;s most trusted technology company, recognized globally for AI-driven innovation, exceptional client outcomes, and producing the next generation of tech leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="section-tag"><Users size={14} /> Our Team</div>
            <h2 className="section-title">Meet the <span className="gradient-text">Experts</span></h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>A passionate team of technologists, designers, and educators driving your success.</p>
          </div>
          <div className="grid-3">
            {teamMembers.map((member, i) => (
              <div key={i} id={`team-member-${i}`} className="card" style={{ textAlign: "center" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: `linear-gradient(135deg, ${member.color}, ${member.color}99)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontFamily: "'Outfit', sans-serif", fontWeight: "800", fontSize: "20px", color: "white", boxShadow: `0 8px 24px ${member.color}40` }}>
                  {member.initials}
                </div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "#0a0a0f", marginBottom: "6px" }}>{member.name}</h4>
                <p style={{ fontSize: "13px", color: "#6b6fa0" }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about-why-us" className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="section-tag"><Award size={14} /> Why Us</div>
            <h2 className="section-title">What Makes Us <span className="gradient-text">Different</span></h2>
          </div>
          <div className="grid-3">
            {[
              { title: "Innovation First", desc: "We embrace emerging technologies like AI, ML, and blockchain to deliver future-proof solutions.", icon: Lightbulb },
              { title: "Client-Centric", desc: "Every decision we make is driven by what's best for our clients and their end users.", icon: Handshake },
              { title: "Continuous Learning", desc: "Our team stays at the cutting edge through continuous training, certifications, and R&D.", icon: BookOpen },
              { title: "Quality Over Quantity", desc: "We take on fewer projects to deliver exceptional results — never compromising on quality.", icon: Sparkles },
              { title: "Transparent Process", desc: "Regular updates, clear communication, and complete transparency throughout your project.", icon: Search },
              { title: "Holistic Support", desc: "From ideation to launch and beyond — we're with you every step of the journey.", icon: ShieldCheck },
            ].map((item, i) => (
              <div key={i} id={`why-us-${i}`} className="card">
                <div style={{ marginBottom: "16px", color: "#6366f1" }}><item.icon size={36} /></div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "17px", fontWeight: "700", color: "#0a0a0f", marginBottom: "10px" }}>{item.title}</h4>
                <p style={{ fontSize: "14px", color: "#6b6fa0", lineHeight: "1.7" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
