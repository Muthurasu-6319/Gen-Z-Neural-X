"use client";

import Link from "next/link";
import { Globe, Smartphone, Brain, Gamepad2, TrendingUp, Palette, Layers, Settings2, ArrowRight, CheckCircle, Zap, Factory, Radio, Cpu, Wifi, Activity, BarChart3, Database, ChevronRight } from "lucide-react";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "We create high-performance, scalable websites and web applications using the latest technologies. From e-commerce to enterprise portals, we handle it all.",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    href: "/services/web-development",
    features: ["React / Next.js", "Node.js / Express", "WordPress / CMS", "E-Commerce Stores", "REST APIs & GraphQL", "Performance Optimization"],
    deliverable: "Custom websites that convert visitors into customers.",
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms, built with React Native and Flutter for maximum performance.",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    href: "/services/mobile-app-development",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Submission", "Push Notifications", "Offline Support"],
    deliverable: "Apps that users download, use, and love.",
  },
  {
    id: "ai-ml-solutions",
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Leverage the power of artificial intelligence and machine learning to automate processes, gain insights, and build intelligent products.",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    href: "/services/ai-ml-solutions",
    features: ["Custom AI Models", "NLP & Chatbots", "Computer Vision", "Predictive Analytics", "Recommendation Systems", "MLOps & Deployment"],
    deliverable: "Intelligent systems that learn and improve over time.",
  },
  {
    id: "game-development",
    icon: Gamepad2,
    title: "Game Development",
    description: "Immersive 2D/3D games, educational games, and interactive experiences for web, mobile, and desktop platforms.",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    href: "/services/game-development",
    features: ["Unity 3D Games", "2D Mobile Games", "Web-based Games", "Educational Games", "AR/VR Experiences", "Game Design & Art"],
    deliverable: "Engaging games that players can't put down.",
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven digital marketing strategies to grow your online presence, increase traffic, and maximize return on investment.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    href: "/services/digital-marketing",
    features: ["SEO Optimization", "Google Ads / PPC", "Social Media Marketing", "Content Marketing", "Email Campaigns", "Analytics & Reporting"],
    deliverable: "More traffic, more leads, more revenue.",
  },
  {
    id: "graphic-designing",
    icon: Palette,
    title: "Graphic Designing",
    description: "Creative graphic design solutions that communicate your brand story, engage your audience, and stand out in the marketplace.",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    href: "/services/graphic-designing",
    features: ["Logo & Brand Identity", "Social Media Creatives", "Marketing Materials", "Brochures & Flyers", "Packaging Design", "Illustrations"],
    deliverable: "Visual identity that tells your brand story.",
  },
  {
    id: "ui-ux-design",
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centric design solutions that create intuitive, beautiful, and effective digital experiences for your users.",
    color: "#3730a3",
    gradient: "linear-gradient(135deg, #3730a3, #6366f1)",
    href: "/services/ui-ux-design",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Figma & Adobe XD"],
    deliverable: "Designs that users find intuitive and enjoyable.",
  },
  {
    id: "custom-software",
    icon: Settings2,
    title: "Custom Software Development",
    description: "Enterprise-grade custom software solutions tailored precisely to your business workflows, processes, and requirements.",
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    href: "/services/custom-software",
    features: ["Business Process Automation", "ERP Development", "CRM Solutions", "Inventory Systems", "Data Analytics Platforms", "Third-party Integrations"],
    deliverable: "Software built exactly the way your business needs it.",
  },
];

const industrialServices = [
  {
    id: "energy-management-system",
    icon: Zap,
    title: "Energy Management System (EMS)",
    description: "Advanced EMS solutions to monitor, control, and optimize energy consumption across your industrial facilities. Reduce costs and carbon footprint with real-time analytics.",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    href: "/services/energy-management-system",
    features: ["Real-time Energy Monitoring", "Demand Forecasting", "Automated Load Balancing", "Carbon Footprint Tracking", "Cost Optimization Reports", "ISO 50001 Compliance"],
    deliverable: "Cut energy bills by up to 30% with intelligent EMS.",
  },
  {
    id: "manufacturing-execution-system",
    icon: Factory,
    title: "Manufacturing Execution System (MES)",
    description: "End-to-end MES implementation for shop-floor visibility, production tracking, quality management, and seamless ERP integration across your manufacturing operations.",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    href: "/services/manufacturing-execution-system",
    features: ["Production Order Management", "Work-in-Progress Tracking", "Quality Control Integration", "ERP/SAP Connectivity", "OEE Calculation", "Traceability & Genealogy"],
    deliverable: "Full shop-floor visibility and production control.",
  },
  {
    id: "scada-development",
    icon: Radio,
    title: "SCADA Development",
    description: "Custom SCADA systems for supervisory control and data acquisition — designed for water treatment, power distribution, oil & gas, and manufacturing industries.",
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444, #f97316)",
    href: "/services/scada-development",
    features: ["Custom HMI Design", "Remote Monitoring & Control", "Alarm Management", "Historical Data Logging", "Multi-site Connectivity", "Cybersecurity Compliance"],
    deliverable: "24/7 plant visibility and remote control capability.",
  },
  {
    id: "plc-programming",
    icon: Cpu,
    title: "PLC Programming",
    description: "Expert PLC programming and panel engineering for Siemens, Allen-Bradley, Mitsubishi, and Delta platforms. From retrofit to greenfield automation projects.",
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    href: "/services/plc-programming",
    features: ["Siemens S7 / TIA Portal", "Allen-Bradley / Rockwell", "Mitsubishi & Delta PLCs", "Ladder & Structured Text", "Panel Design & Wiring", "Commissioning & Testing"],
    deliverable: "Reliable, maintainable PLC code for any automation challenge.",
  },
  {
    id: "industrial-iot-solutions",
    icon: Wifi,
    title: "Industrial IoT Solutions",
    description: "Connect your factory floor to the cloud with IIoT — sensor integration, edge computing, predictive maintenance, and live operational dashboards.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    href: "/services/industrial-iot-solutions",
    features: ["Sensor & Device Integration", "Edge Computing Gateways", "Cloud Data Platform", "Predictive Maintenance AI", "OPC-UA / MQTT Protocols", "Remote Asset Management"],
    deliverable: "Transform physical machines into smart, connected assets.",
  },
  {
    id: "machine-monitoring-systems",
    icon: Activity,
    title: "Machine Monitoring Systems",
    description: "Real-time machine health and performance monitoring solutions that detect faults early, minimize downtime, and maximize equipment effectiveness across your production lines.",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    href: "/services/machine-monitoring-systems",
    features: ["Vibration & Temperature Sensing", "OEE & Downtime Tracking", "Fault Alerting System", "Maintenance Scheduling", "Condition-Based Monitoring", "Mobile Alert Notifications"],
    deliverable: "Reduce unplanned downtime and maximize machine uptime.",
  },
  {
    id: "production-dashboards",
    icon: BarChart3,
    title: "Production Dashboards",
    description: "Custom production KPI dashboards — live plant-floor screens, management reports, and mobile-first views — giving every stakeholder real-time insight into manufacturing performance.",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    href: "/services/production-dashboards",
    features: ["Real-Time KPI Displays", "Shift & Daily Reports", "Multi-line / Multi-plant Views", "Role-Based Access", "Mobile Dashboards", "Drill-Down Analytics"],
    deliverable: "Every decision maker gets the data they need, instantly.",
  },
  {
    id: "industrial-data-analytics",
    icon: Database,
    title: "Data Analytics & Reporting",
    description: "Industrial big-data analytics — from raw sensor data to actionable insights. We build data pipelines, analytics engines, and reporting systems for smarter manufacturing.",
    color: "#3730a3",
    gradient: "linear-gradient(135deg, #3730a3, #6366f1)",
    href: "/services/industrial-data-analytics",
    features: ["Data Lake Architecture", "Statistical Process Control", "Root Cause Analysis Tools", "Predictive Quality Models", "Custom Report Builder", "BI Tool Integration"],
    deliverable: "Turn raw industrial data into measurable business improvements.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            What We Do
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Our <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Services</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            End-to-end technology solutions — from web & AI to industrial automation — designed to transform your business.
          </p>
        </div>
      </div>

      {/* Digital Services */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ marginBottom: "48px" }}>
            <div className="section-tag">Digital & Software</div>
            <h2 className="section-title">Web, AI & <span className="gradient-text">Digital Solutions</span></h2>
            <p className="section-subtitle">Cutting-edge technology services for businesses in Sivakasi, Srivilliputtur, Rajapalayam and across Virudhunagar district.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {services.map((service, index) => (
              <div
                key={service.id}
                id={`service-detail-${service.id}`}
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
                      width: "64px",
                      height: "64px",
                      borderRadius: "18px",
                      background: service.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      boxShadow: `0 8px 24px ${service.color}40`,
                    }}
                  >
                    <service.icon size={32} style={{ color: "white" }} />
                  </div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "#0a0a0f", marginBottom: "16px" }}>
                    {service.title}
                  </h2>
                  <p style={{ fontSize: "16px", color: "#4a4e7a", lineHeight: "1.8", marginBottom: "24px" }}>
                    {service.description}
                  </p>
                  <div
                    style={{
                      background: `${service.color}10`,
                      border: `1px solid ${service.color}30`,
                      borderRadius: "12px",
                      padding: "16px 20px",
                      marginBottom: "28px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <service.icon size={18} style={{ color: service.color, flexShrink: 0 }} />
                    <p style={{ fontSize: "14px", color: service.color, fontWeight: "600" }}>{service.deliverable}</p>
                  </div>
                  <Link href={service.href} id={`service-page-${service.id}`} className="btn-primary">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>

                <div style={{ order: index % 2 === 0 ? 1 : 0 }}>
                  <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", fontWeight: "700", color: "#0a0a0f", marginBottom: "20px" }}>
                    What&apos;s Included:
                  </h4>
                  <div className="responsive-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    {service.features.map((feat) => (
                      <div key={feat} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <CheckCircle size={16} style={{ color: service.color, flexShrink: 0 }} />
                        <span style={{ fontSize: "14px", color: "#2d3160", fontWeight: "500" }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Automation Section */}
      <section className="section" style={{ background: "linear-gradient(135deg, #0d0f2b 0%, #1a1d45 50%, #0a0a0f 100%)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", margin: "0 auto 16px" }}>
              Industry 4.0
            </div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", color: "white", marginBottom: "16px" }}>
              Industrial Automation <span style={{ background: "linear-gradient(135deg, #fbbf24, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Solutions</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", maxWidth: "650px", margin: "0 auto", lineHeight: "1.7" }}>
              Powering factories in Sivakasi, Srivilliputtur, Rajapalayam and Virudhunagar district with cutting-edge industrial automation, SCADA, PLC programming, EMS, MES and IIoT solutions.
            </p>
          </div>

          <div className="grid-4" style={{ gap: "24px" }}>
            {industrialServices.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                id={`industrial-service-${service.id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    padding: "32px 24px",
                    transition: "all 0.3s ease",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "rgba(255,255,255,0.08)";
                    el.style.borderColor = `${service.color}60`;
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = `0 20px 40px ${service.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: service.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      boxShadow: `0 6px 20px ${service.color}40`,
                    }}
                  >
                    <service.icon size={26} style={{ color: "white" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "17px", fontWeight: "700", color: "white", marginBottom: "10px", lineHeight: "1.3" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", marginBottom: "16px" }}>
                    {service.description.substring(0, 100)}...
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: service.color, fontSize: "13px", fontWeight: "600" }}>
                    Learn More <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <Link href="/services/industrial-automation" id="industrial-view-all" className="btn-white" style={{ fontSize: "15px" }}>
              View All Industrial Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
