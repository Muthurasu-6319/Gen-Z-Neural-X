"use client";

import Link from "next/link";
import { Zap, Factory, Radio, Cpu, Wifi, Activity, BarChart3, Database, ArrowRight, CheckCircle, ChevronRight, MapPin, Phone, Shield } from "lucide-react";

const industrialServices = [
  {
    id: "energy-management-system",
    icon: Zap,
    title: "Energy Management System (EMS)",
    shortTitle: "EMS",
    description: "Advanced EMS solutions to monitor, control, and optimize energy consumption across your industrial facilities in Sivakasi, Srivilliputtur, and Virudhunagar district.",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    href: "/services/energy-management-system",
    features: ["Real-time Energy Monitoring", "Demand Forecasting", "Automated Load Balancing", "Carbon Footprint Tracking", "Cost Optimization Reports", "ISO 50001 Compliance"],
  },
  {
    id: "manufacturing-execution-system",
    icon: Factory,
    title: "Manufacturing Execution System (MES)",
    shortTitle: "MES",
    description: "End-to-end MES for shop-floor visibility, production tracking, quality management, and ERP integration across manufacturing plants in Tamil Nadu.",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    href: "/services/manufacturing-execution-system",
    features: ["Production Order Management", "Work-in-Progress Tracking", "Quality Control Integration", "ERP/SAP Connectivity", "OEE Calculation", "Traceability & Genealogy"],
  },
  {
    id: "scada-development",
    icon: Radio,
    title: "SCADA Development",
    shortTitle: "SCADA",
    description: "Custom SCADA systems for supervisory control and data acquisition — built for industries in Rajapalayam, Sivakasi, and the Virudhunagar industrial belt.",
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444, #f97316)",
    href: "/services/scada-development",
    features: ["Custom HMI Design", "Remote Monitoring & Control", "Alarm Management", "Historical Data Logging", "Multi-site Connectivity", "Cybersecurity Compliance"],
  },
  {
    id: "plc-programming",
    icon: Cpu,
    title: "PLC Programming",
    shortTitle: "PLC",
    description: "Expert PLC programming for Siemens, Allen-Bradley, Mitsubishi, and Delta platforms. Serving firecracker, textile, and chemical industries in Sivakasi & Srivilliputtur.",
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    href: "/services/plc-programming",
    features: ["Siemens S7 / TIA Portal", "Allen-Bradley / Rockwell", "Mitsubishi & Delta PLCs", "Ladder & Structured Text", "Panel Design & Wiring", "Commissioning & Testing"],
  },
  {
    id: "industrial-iot-solutions",
    icon: Wifi,
    title: "Industrial IoT Solutions",
    shortTitle: "IIoT",
    description: "Connect factory floors to the cloud — sensor integration, edge computing, predictive maintenance, and live operational dashboards for Tamil Nadu industries.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    href: "/services/industrial-iot-solutions",
    features: ["Sensor & Device Integration", "Edge Computing Gateways", "Cloud Data Platform", "Predictive Maintenance AI", "OPC-UA / MQTT Protocols", "Remote Asset Management"],
  },
  {
    id: "machine-monitoring-systems",
    icon: Activity,
    title: "Machine Monitoring Systems",
    shortTitle: "MMS",
    description: "Real-time machine health and performance monitoring to detect faults early, minimize downtime, and maximize OEE in your production facilities.",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    href: "/services/machine-monitoring-systems",
    features: ["Vibration & Temperature Sensing", "OEE & Downtime Tracking", "Fault Alerting System", "Maintenance Scheduling", "Condition-Based Monitoring", "Mobile Alert Notifications"],
  },
  {
    id: "production-dashboards",
    icon: BarChart3,
    title: "Production Dashboards",
    shortTitle: "Dashboards",
    description: "Custom production KPI dashboards — live plant-floor screens, management reports, and mobile-first views for factories across Virudhunagar district.",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    href: "/services/production-dashboards",
    features: ["Real-Time KPI Displays", "Shift & Daily Reports", "Multi-line / Multi-plant Views", "Role-Based Access", "Mobile Dashboards", "Drill-Down Analytics"],
  },
  {
    id: "industrial-data-analytics",
    icon: Database,
    title: "Data Analytics & Reporting",
    shortTitle: "Analytics",
    description: "Industrial big-data analytics — from raw sensor data to actionable insights for smarter manufacturing decisions across Tamil Nadu industries.",
    color: "#3730a3",
    gradient: "linear-gradient(135deg, #3730a3, #6366f1)",
    href: "/services/industrial-data-analytics",
    features: ["Data Lake Architecture", "Statistical Process Control", "Root Cause Analysis Tools", "Predictive Quality Models", "Custom Report Builder", "BI Tool Integration"],
  },
];

const stats = [
  { value: "Free", label: "Site Assessment & Consultation" },
  { value: "100%", label: "Custom-Built Solutions" },
  { value: "Local", label: "Tamil Nadu Based Team" },
  { value: "24/7", label: "Support Commitment" },
];

const industries = [
  "Firecracker Manufacturing (Sivakasi)",
  "Textile & Garment (Srivilliputtur)",
  "Chemical & Pharma (Virudhunagar)",
  "Paper & Printing (Rajapalayam)",
  "Food & Beverage Processing",
  "Plastic & Rubber Industries",
  "Engineering & Fabrication",
  "Power & Utilities",
];

export default function IndustrialAutomationPage() {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d0f2b 0%, #1a1d45 50%, #0f172a 100%)",
          padding: "140px 0 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(251,191,36,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(239,68,68,0.08) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Link
            href="/services"
            style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}
          >
            ← Back to Services
          </Link>
          <div className="section-tag" style={{ color: "rgba(251,191,36,0.9)", background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", marginBottom: "24px" }}>
            Industry 4.0 Solutions
          </div>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: "900",
              color: "white",
              marginBottom: "24px",
              lineHeight: "1.1",
            }}
          >
            Industrial Automation{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fbbf24, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Solutions
            </span>
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.2rem",
              maxWidth: "680px",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Transforming factories in{" "}
            <strong style={{ color: "rgba(255,255,255,0.9)" }}>Sivakasi, Srivilliputtur, Rajapalayam</strong>{" "}
            and across <strong style={{ color: "rgba(255,255,255,0.9)" }}>Virudhunagar district, Tamil Nadu</strong> with
            cutting-edge EMS, MES, SCADA, PLC, IIoT, and smart manufacturing solutions.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" id="industrial-hero-cta" className="btn-primary" style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)" }}>
              Get Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="#services-grid" id="industrial-explore" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}>
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section style={{ background: "#fbbf2415", borderBottom: "1px solid rgba(251,191,36,0.1)" }}>
        <div className="container">
          <div className="grid-4" style={{ padding: "40px 0", gap: "32px" }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: "900",
                    background: "linear-gradient(135deg, #f59e0b, #f97316)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "14px", color: "#4a4e7a", fontWeight: "500", marginTop: "4px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="section-tag">8 Specialized Services</div>
            <h2 className="section-title">
              Complete Industrial <span className="gradient-text">Automation Suite</span>
            </h2>
            <p className="section-subtitle">
              From energy management to data analytics — every solution your factory needs to thrive in the Industry 4.0 era.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {industrialServices.map((service, index) => (
              <div
                key={service.id}
                id={`industrial-${service.id}`}
                className="service-row"
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "48px",
                  border: "1px solid var(--gray-100)",
                  gridTemplateColumns: index % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr",
                  gap: "60px",
                  alignItems: "center",
                  boxShadow: "0 4px 16px rgba(55,48,163,0.06)",
                }}
              >
                <div style={{ order: index % 2 === 0 ? 0 : 1 }}>
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "20px",
                      background: service.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      boxShadow: `0 8px 24px ${service.color}40`,
                    }}
                  >
                    <service.icon size={36} style={{ color: "white" }} />
                  </div>
                  <div className="section-tag" style={{ marginBottom: "16px", color: service.color, background: `${service.color}15`, borderColor: `${service.color}30` }}>
                    {service.shortTitle}
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "28px",
                      fontWeight: "800",
                      color: "#0a0a0f",
                      marginBottom: "16px",
                    }}
                  >
                    {service.title}
                  </h2>
                  <p style={{ fontSize: "16px", color: "#4a4e7a", lineHeight: "1.8", marginBottom: "28px" }}>
                    {service.description}
                  </p>
                  <Link href={service.href} id={`industrial-cta-${service.id}`} className="btn-primary" style={{ background: service.gradient }}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>

                <div style={{ order: index % 2 === 0 ? 1 : 0 }}>
                  <h4
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#0a0a0f",
                      marginBottom: "20px",
                    }}
                  >
                    Key Capabilities:
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {service.features.map((feat) => (
                      <div key={feat} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <CheckCircle size={16} style={{ color: service.color, flexShrink: 0 }} />
                        <span style={{ fontSize: "15px", color: "#2d3160", fontWeight: "500" }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section" style={{ background: "linear-gradient(135deg, #0d0f2b 0%, #1a1d45 100%)" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "80px" }}>
            <div>
              <div className="section-tag" style={{ color: "rgba(251,191,36,0.9)", background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", marginBottom: "20px" }}>
                Sectors We Serve
              </div>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: "900",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                Industries We <span style={{ background: "linear-gradient(135deg, #fbbf24, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Automate</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "32px" }}>
                We specialize in automation solutions tailored to the unique industrial landscape of Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar — home to Tamil Nadu&apos;s largest firecracker, textile, and chemical manufacturing clusters.
              </p>
              <Link href="/contact" id="industries-cta" className="btn-primary" style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)" }}>
                Discuss Your Industry <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {industries.map((industry) => (
                  <div
                    key={industry}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      padding: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <ChevronRight size={14} style={{ color: "#fbbf24", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", fontWeight: "500" }}>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us + Location */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div className="section-tag">Local Expertise, Global Standards</div>
            <h2 className="section-title">
              Why Choose Gen Z Neural-X for{" "}
              <span className="gradient-text">Industrial Automation?</span>
            </h2>
          </div>
          <div className="grid-3" style={{ gap: "28px", marginBottom: "60px" }}>
            {[
              {
                icon: MapPin,
                title: "Local Presence",
                desc: "Based in Srivilliputtur with on-site support across Sivakasi, Rajapalayam, and Virudhunagar district — we understand local industrial needs.",
                color: "#6366f1",
              },
              {
                icon: Shield,
                title: "Industry 4.0 Ready",
                desc: "Our solutions are built on open standards (OPC-UA, MQTT, REST) for seamless integration with ERP systems and cloud platforms.",
                color: "#10b981",
              },
              {
                icon: Phone,
                title: "24/7 Support",
                desc: "Round-the-clock technical support, remote monitoring, and rapid on-site response for all installed automation systems.",
                color: "#f59e0b",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "18px",
                    background: `${item.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <item.icon size={28} style={{ color: item.color }} />
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", color: "#0a0a0f", marginBottom: "12px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#4a4e7a", lineHeight: "1.7" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div
            style={{
              background: "linear-gradient(135deg, #f59e0b, #f97316, #ef4444)",
              borderRadius: "24px",
              padding: "60px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "2rem",
                fontWeight: "800",
                color: "white",
                marginBottom: "16px",
              }}
            >
              Ready to Automate Your Factory?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
              Get a free industrial automation assessment for your plant in Sivakasi, Srivilliputtur, Rajapalayam or anywhere in Virudhunagar district.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" id="industrial-final-cta" className="btn-white">
                Get Free Assessment <ArrowRight size={16} />
              </Link>
              <Link href="tel:+918124996319" className="btn-white" style={{ background: "transparent", border: "2px solid white", color: "white" }}>
                Call +91 81249 96319
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
