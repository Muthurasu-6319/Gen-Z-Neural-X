"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Target, Eye, Award, ArrowRight, Trophy, Star, GraduationCap, Sparkles, Lightbulb, Handshake, BookOpen, Search, ShieldCheck, Zap, Factory, Radio, Cpu, Wifi, Activity, BarChart3, Database, ChevronRight, MapPin, HelpCircle, ChevronDown, Plus, Minus } from "lucide-react";

const teamMembers = [
  { name: "Founder & CEO", initials: "CEO", role: "Technology Visionary & Business Strategist", color: "#6366f1" },
  { name: "CTO", initials: "CTO", role: "Full Stack & AI Architecture Lead", color: "#06b6d4" },
  { name: "Creative Director", initials: "CD", role: "UI/UX Design & Brand Strategy", color: "#8b5cf6" },
  { name: "Marketing Head", initials: "MH", role: "Growth & Digital Marketing Expert", color: "#10b981" },
  { name: "AI/ML Lead", initials: "AI", role: "Machine Learning & Data Science", color: "#f59e0b" },
  { name: "Training Head", initials: "TH", role: "Education Programs & Mentorship", color: "#f43f5e" },
  { name: "Automation Lead", initials: "AL", role: "SCADA, PLC & IIoT Engineering", color: "#0891b2" },
];

const achievements = [
  { icon: Sparkles, title: "Next-Gen Tech", desc: "Focusing on modern AI & ML" },
  { icon: Target, title: "Vision 2026", desc: "Empowering 1000+ students" },
  { icon: Lightbulb, title: "Innovative Solutions", desc: "Custom software for startups" },
  { icon: Users, title: "Growing Community", desc: "Building a tech ecosystem" },
];

const industrialServices = [
  { id: "energy-management-system", icon: Zap, title: "Energy Management System", short: "EMS", color: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)", href: "/services/energy-management-system" },
  { id: "manufacturing-execution-system", icon: Factory, title: "Manufacturing Execution System", short: "MES", color: "#6366f1", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", href: "/services/manufacturing-execution-system" },
  { id: "scada-development", icon: Radio, title: "SCADA Development", short: "SCADA", color: "#ef4444", gradient: "linear-gradient(135deg, #ef4444, #f97316)", href: "/services/scada-development" },
  { id: "plc-programming", icon: Cpu, title: "PLC Programming", short: "PLC", color: "#0891b2", gradient: "linear-gradient(135deg, #0891b2, #06b6d4)", href: "/services/plc-programming" },
  { id: "industrial-iot-solutions", icon: Wifi, title: "Industrial IoT Solutions", short: "IIoT", color: "#10b981", gradient: "linear-gradient(135deg, #10b981, #34d399)", href: "/services/industrial-iot-solutions" },
  { id: "machine-monitoring-systems", icon: Activity, title: "Machine Monitoring Systems", short: "MMS", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)", href: "/services/machine-monitoring-systems" },
  { id: "production-dashboards", icon: BarChart3, title: "Production Dashboards", short: "KPI", color: "#f43f5e", gradient: "linear-gradient(135deg, #f43f5e, #fb7185)", href: "/services/production-dashboards" },
  { id: "industrial-data-analytics", icon: Database, title: "Data Analytics & Reporting", short: "Analytics", color: "#3730a3", gradient: "linear-gradient(135deg, #3730a3, #6366f1)", href: "/services/industrial-data-analytics" },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "650px", margin: "0 auto" }}>
            Founded with a vision to democratize technology, Gen Z Neural-X is a next-generation technology and industrial automation company delivering custom software and Industry 4.0 solutions across Sivakasi, Srivilliputtur, Rajapalayam, Virudhunagar district, and all of Tamil Nadu.
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
                Founded in 2025, Gen Z Neural-X is a next-generation technology company built from the ground up by a team of passionate Gen Z software developers, AI engineers, and industrial automation specialists. Being tech-natives, we were born out of a shared vision to bridge the gap between rapidly evolving modern technologies and practical, real-world industry applications.
              </p>
              <p style={{ color: "#4a4e7a", fontSize: "16px", lineHeight: "1.9", marginBottom: "20px" }}>
                Serving businesses and industries across <strong>Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar district</strong>, we deliver high-performance AI/ML solutions, full-stack web & mobile development, digital marketing, and a complete suite of industrial automation services including EMS, MES, SCADA, PLC programming, IIoT, machine monitoring, and production dashboards.
              </p>
              <p style={{ color: "#4a4e7a", fontSize: "16px", lineHeight: "1.9", marginBottom: "32px" }}>
                As a team of young Gen Z creators and tech professionals, we bring agility, fresh perspectives, and a deep understanding of modern tech architectures to the table, empowering businesses and manufacturers across Tamil Nadu and beyond.
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

      {/* Industrial Automation Showcase */}
      <section id="about-industrial" className="section" style={{ background: "linear-gradient(135deg, #0d0f2b 0%, #1a1d45 60%, #0f1629 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(251,191,36,0.07) 0%, transparent 45%), radial-gradient(circle at 80% 30%, rgba(99,102,241,0.07) 0%, transparent 45%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid-2" style={{ alignItems: "center", gap: "80px", marginBottom: "0px" }}>
            <div>
              <div className="section-tag" style={{ color: "rgba(251,191,36,0.9)", background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", marginBottom: "20px" }}>
                Industry 4.0
              </div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: "900", color: "white", marginBottom: "20px", lineHeight: "1.15" }}>
                Industrial Automation{" "}
                <span style={{ background: "linear-gradient(135deg, #fbbf24, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Experts</span>
                {" "}in Tamil Nadu
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                Beyond software, Gen Z Neural-X is Tamil Nadu&apos;s emerging leader in industrial automation — delivering EMS, MES, SCADA, PLC programming, IIoT, machine monitoring, and smart dashboards to manufacturers across{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar district</strong>.
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "32px" }}>
                From firecracker factories in Sivakasi to textile mills in Srivilliputtur and chemical plants in Virudhunagar — we bring Industry 4.0 to every factory floor in Tamil Nadu.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/services/industrial-automation" id="about-industrial-cta" className="btn-primary" style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)" }}>
                  View All Solutions <ArrowRight size={16} />
                </Link>
                <Link href="/contact" id="about-industrial-contact" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}>
                  Get Free Assessment
                </Link>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <MapPin size={16} style={{ color: "#fbbf24" }} />
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Serving Sivakasi · Srivilliputtur · Rajapalayam · Virudhunagar</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {industrialServices.map((svc) => (
                  <Link key={svc.id} href={svc.href} id={`about-industrial-${svc.id}`} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "14px",
                        padding: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        transition: "all 0.25s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "rgba(255,255,255,0.08)";
                        el.style.borderColor = `${svc.color}50`;
                        el.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "rgba(255,255,255,0.04)";
                        el.style.borderColor = "rgba(255,255,255,0.07)";
                        el.style.transform = "translateX(0)";
                      }}
                    >
                      <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: svc.gradient, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svc.icon size={18} style={{ color: "white" }} />
                      </div>
                      <div>
                        <div style={{ fontSize: "10px", fontWeight: "700", color: svc.color, letterSpacing: "0.5px", marginBottom: "2px" }}>{svc.short}</div>
                        <div style={{ fontSize: "12px", fontWeight: "600", color: "rgba(255,255,255,0.85)", lineHeight: "1.3" }}>{svc.title}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
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

      {/* FAQ Section for SEO / AEO / GEO Optimization */}
      <section id="faq" className="section" style={{ background: "white" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-tag" style={{ margin: "0 auto 16px" }}>
              <HelpCircle size={14} style={{ display: 'inline', marginRight: '4px' }} /> FAQ
            </div>
            <h2 className="section-title">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "600px" }}>
              Quick answers about Gen Z Neural-X, our technology expertise, and services to help you make informed decisions.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                q: "Who is Gen Z Neural-X?",
                a: "Gen Z Neural-X is a dynamic technology company founded in 2025 by a team of tech-native Gen Z software engineers, AI developers, and industrial automation experts. We deliver custom software development, artificial intelligence integrations, MERN stack web applications, mobile apps, and advanced Industry 4.0 automation systems (EMS, MES, SCADA, PLC programming, and Industrial IoT)."
              },
              {
                q: "What makes Gen Z Neural-X unique compared to legacy technology firms?",
                a: "As a team composed entirely of Gen Z developers and engineers, we are true tech-natives. We write clean, modern, modular code using modern frameworks (such as Next.js, React, Node.js, TailwindCSS) and AI-driven methodologies. This allows us to deliver products with remarkable speed, security, and scalability compared to traditional development agencies."
              },
              {
                q: "What industrial automation solutions do you provide?",
                a: "We are pioneers in bridging the gap between digital systems and the factory floor. Our specialized team delivers complete Energy Management Systems (EMS), Manufacturing Execution Systems (MES), custom SCADA/HMI developments, expert PLC programming (Siemens, Allen Bradley, Delta), real-time OEE machine monitoring systems, and responsive production dashboards to optimize industrial outputs."
              },
              {
                q: "Which areas do you serve in Tamil Nadu?",
                a: "While our core team operates from Srivilliputtur, we provide full on-site and remote technology services, automation setups, and engineering training programs for businesses, factories, and students across Sivakasi, Srivilliputtur, Rajapalayam, and the surrounding Virudhunagar district."
              },
              {
                q: "Does Gen Z Neural-X offer internship and career-building courses?",
                a: "Yes! We run professional courses and hands-on internship programs focusing on MERN Stack Development, AI/ML, and Industrial Automation. Additionally, we provide comprehensive support for final year engineering students, covering project code development, IEEE-format documentation, synopsis and presentation design, and viva voce preparation."
              }
            ].map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  id={`faq-item-${i}`}
                  style={{
                    background: isOpen ? "#f8f9ff" : "white",
                    border: isOpen ? "1px solid rgba(99,102,241,0.2)" : "1px solid var(--gray-100)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    boxShadow: isOpen ? "0 4px 20px rgba(99,102,241,0.06)" : "none",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "none",
                      border: "none",
                      outline: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      gap: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                        color: isOpen ? "#3730a3" : "#0a0a0f",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {faq.q}
                    </span>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: isOpen ? "#6366f1" : "var(--gray-50)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isOpen ? "white" : "#4a4e7a",
                        transition: "all 0.3s ease",
                        flexShrink: 0,
                      }}
                    >
                      <ChevronDown
                        size={16}
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? "300px" : "0",
                      opacity: isOpen ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <p
                      style={{
                        padding: "0 24px 24px",
                        color: "#4a4e7a",
                        fontSize: "14.5px",
                        lineHeight: "1.8",
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
