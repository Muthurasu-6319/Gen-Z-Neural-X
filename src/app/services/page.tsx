"use client";

import Link from "next/link";
import { Globe, Smartphone, Brain, Gamepad2, TrendingUp, Palette, Layers, Settings2, ArrowRight, CheckCircle } from "lucide-react";

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
            End-to-end technology solutions designed to transform your business and accelerate growth.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
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
    </>
  );
}
