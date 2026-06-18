"use client";

import { Zap, Shield, HeadphonesIcon, Clock, Award, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We deliver projects on time, every time. Our agile process ensures rapid development without compromising quality.",
    color: "#f59e0b",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data and systems are protected with enterprise-grade security practices and compliance standards.",
    color: "#10b981",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock dedicated support to ensure your systems run smoothly without any downtime.",
    color: "#6366f1",
  },
  {
    icon: Clock,
    title: "Agile Methodology",
    description: "We use modern agile workflows for transparency, flexibility, and continuous improvement throughout development.",
    color: "#06b6d4",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Rigorous QA testing and code reviews ensure every product meets the highest quality standards.",
    color: "#8b5cf6",
  },
  {
    icon: TrendingUp,
    title: "Innovative Approach",
    description: "Our innovative approach and strict quality standards ensure we deliver excellence on every project.",
    color: "#f43f5e",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section" style={{ background: "white" }}>
      <div className="container">
        <div className="responsive-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Left content */}
          <div>
            <div className="section-tag" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Award size={14} /> Why Choose Us
            </div>
            <h2 className="section-title">
              The Gen Z Neural-X <span className="gradient-text">Advantage</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "40px" }}>
              We don&apos;t just build software — we build partnerships. Our team brings passion, precision, and expertise to every project.
            </p>

            {/* Key points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "Highly skilled team dedicated to cutting-edge technologies",
                "Transparent development process with regular updates",
                "Competitive pricing with no hidden costs",
                "Post-delivery support and maintenance included",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #3730a3, #6366f1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <span style={{ color: "white", fontSize: "12px", fontWeight: "700" }}>✓</span>
                  </div>
                  <p style={{ fontSize: "15px", color: "#2d3160", fontWeight: "500" }}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right grid */}
          <div className="responsive-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {reasons.map((reason, index) => (
              <div
                key={index}
                id={`why-card-${index}`}
                style={{
                  background: index % 2 === 0 ? "var(--gray-50)" : "white",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  border: "1px solid var(--gray-100)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(55,48,163,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: `${reason.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <reason.icon size={22} style={{ color: reason.color }} />
                </div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", fontWeight: "700", color: "#0a0a0f", marginBottom: "8px" }}>
                  {reason.title}
                </h4>
                <p style={{ fontSize: "13px", color: "#6b6fa0", lineHeight: "1.6" }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
