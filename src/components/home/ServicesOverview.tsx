import Link from "next/link";
import { Globe, Smartphone, Brain, Gamepad2, TrendingUp, Palette, Layers, Settings2, ArrowRight, Zap } from "lucide-react";

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

export default function ServicesOverview() {
  return (
    <section id="services-overview" className="section" style={{ background: "white" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-tag">
            <Zap size={14} /> What We Do
          </div>
          <h2 className="section-title">
            Our <span className="gradient-text">Core Services</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            From concept to deployment, we deliver end-to-end technology solutions that drive real business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-4" style={{ marginBottom: "48px" }}>
          {services.map((service, index) => (
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
                {/* Top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: service.gradient,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  className="service-accent"
                />

                {/* Icon */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: `${service.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <service.icon size={26} style={{ color: service.color }} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#0a0a0f",
                    marginBottom: "10px",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b6fa0", lineHeight: "1.7", marginBottom: "16px" }}>
                  {service.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: service.color,
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link href="/services" id="services-view-all" className="btn-primary">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
