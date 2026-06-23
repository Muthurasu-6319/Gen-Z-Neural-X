"use client";

import Link from "next/link";
import { Globe, Smartphone, Brain, Gamepad2, TrendingUp, Palette, Layers, Settings2, ArrowRight, Zap, Factory, Radio, Cpu, Wifi, Activity, BarChart3, Database, ChevronRight } from "lucide-react";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Custom, high-performance websites and web applications built with modern technologies.",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    href: "/services/web-development",
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that users love.",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    href: "/services/mobile-app-development",
  },
  {
    id: "ai-ml-solutions",
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Intelligent AI and machine learning solutions to automate and supercharge your business.",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    href: "/services/ai-ml-solutions",
  },
  {
    id: "game-development",
    icon: Gamepad2,
    title: "Game Development",
    description: "Immersive 2D/3D games, mobile games, and interactive experiences.",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    href: "/services/game-development",
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your brand and maximize ROI.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    href: "/services/digital-marketing",
  },
  {
    id: "graphic-designing",
    icon: Palette,
    title: "Graphic Designing",
    description: "Stunning visual designs that communicate your brand story effectively.",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    href: "/services/graphic-designing",
  },
  {
    id: "ui-ux-design",
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centric designs that deliver exceptional digital experiences.",
    color: "#3730a3",
    gradient: "linear-gradient(135deg, #3730a3, #6366f1)",
    href: "/services/ui-ux-design",
  },
  {
    id: "custom-software",
    icon: Settings2,
    title: "Custom Software",
    description: "Tailored enterprise software solutions built for your unique business needs.",
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    href: "/services/custom-software",
  },
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

export default function ServicesOverview() {
  return (
    <>
      {/* ── Digital Services Section ── */}
      <section id="services-overview" className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="section-tag">
              <Zap size={14} /> What We Do
            </div>
            <h2 className="section-title">
              Our <span className="gradient-text">Core Services</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              From concept to deployment — end-to-end technology solutions for businesses in Sivakasi, Srivilliputtur, Rajapalayam and Virudhunagar district.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: "48px" }}>
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                id={`service-card-${service.id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="card"
                  style={{
                    height: "100%",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0,
                      height: "3px",
                      background: service.gradient,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    className="service-accent"
                  />
                  <div
                    style={{
                      width: "56px", height: "56px",
                      borderRadius: "14px",
                      background: `${service.color}15`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "20px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <service.icon size={26} style={{ color: service.color }} />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", fontWeight: "700", color: "#0a0a0f", marginBottom: "10px" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b6fa0", lineHeight: "1.7", marginBottom: "16px" }}>
                    {service.description}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: service.color, fontSize: "13px", fontWeight: "600" }}>
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/services" id="services-view-all" className="btn-primary">
              View All Digital Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Industrial Automation Section ── */}
      <section id="industrial-automation-overview" className="section" style={{ background: "linear-gradient(135deg, #0d0f2b 0%, #1a1d45 60%, #0f1629 100%)", position: "relative", overflow: "hidden" }}>
        {/* Background glow */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 15% 50%, rgba(251,191,36,0.08) 0%, transparent 45%), radial-gradient(circle at 85% 30%, rgba(239,68,68,0.06) 0%, transparent 45%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div className="section-tag" style={{ color: "rgba(251,191,36,0.9)", background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", margin: "0 auto 16px" }}>
              Industry 4.0 Solutions
            </div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: "900", color: "white", marginBottom: "16px" }}>
              Industrial Automation{" "}
              <span style={{ background: "linear-gradient(135deg, #fbbf24, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Solutions
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: "620px", margin: "0 auto", lineHeight: "1.7" }}>
              Powering factories in <strong style={{ color: "rgba(255,255,255,0.85)" }}>Sivakasi, Srivilliputtur, Rajapalayam</strong> and across{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>Virudhunagar district</strong> with EMS, MES, SCADA, PLC, IIoT and smart manufacturing solutions.
            </p>
          </div>

          {/* Industrial Services Grid */}
          <div className="grid-4" style={{ gap: "20px", marginBottom: "48px" }}>
            {industrialServices.map((svc) => (
              <Link key={svc.id} href={svc.href} id={`home-industrial-${svc.id}`} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "18px",
                    padding: "28px 20px",
                    height: "100%",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "rgba(255,255,255,0.08)";
                    el.style.borderColor = `${svc.color}50`;
                    el.style.transform = "translateY(-5px)";
                    el.style.boxShadow = `0 16px 32px ${svc.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.borderColor = "rgba(255,255,255,0.07)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "48px", height: "48px",
                      borderRadius: "13px",
                      background: svc.gradient,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "16px",
                      boxShadow: `0 6px 16px ${svc.color}35`,
                    }}
                  >
                    <svc.icon size={22} style={{ color: "white" }} />
                  </div>
                  <div style={{ display: "inline-block", padding: "2px 10px", background: `${svc.color}20`, borderRadius: "50px", fontSize: "11px", fontWeight: "700", color: svc.color, marginBottom: "8px", letterSpacing: "0.5px" }}>
                    {svc.short}
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", fontWeight: "700", color: "white", lineHeight: "1.4", marginBottom: "10px" }}>
                    {svc.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", color: svc.color, fontSize: "12px", fontWeight: "600" }}>
                    Explore <ChevronRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <Link href="/services/industrial-automation" id="home-industrial-view-all" className="btn-white" style={{ fontSize: "14px" }}>
              Explore All Industrial Solutions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
