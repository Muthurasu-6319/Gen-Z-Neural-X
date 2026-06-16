"use client";

import Link from "next/link";
import { ArrowRight, Play, Code2, Brain, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";

const typingTexts = [
  "Web Development",
  "AI/ML Solutions",
  "Mobile Apps",
  "Game Development",
  "Digital Marketing",
];

const floatingCards = [
  { icon: Code2, label: "Web Dev", color: "#6366f1", top: "20%", left: "5%" },
  { icon: Brain, label: "AI/ML", color: "#06b6d4", top: "60%", left: "2%" },
  { icon: Smartphone, label: "Mobile", color: "#8b5cf6", top: "35%", right: "3%" },
];

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = typingTexts[currentText];
    const speed = isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < target.length) {
          setDisplayText(target.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentText]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d0f2b 0%, #1a1d45 40%, #0a0a0f 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.18) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(55, 48, 163, 0.1) 0%, transparent 70%)
          `,
        }}
      />

      {/* Animated grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="animate-float"
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          animation: "float 6s ease-in-out infinite reverse",
        }}
      />

      {/* Floating Cards - Desktop */}
      {floatingCards.map((card, index) => (
        <div
          key={index}
          className="animate-float hidden lg:flex"
          style={{
            position: "absolute",
            top: card.top,
            left: card.left,
            right: card.right,
            animationDelay: `${index * 1.5}s`,
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              background: `${card.color}22`,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: card.color,
            }}
          >
            <card.icon size={18} />
          </div>
          <span style={{ color: "white", fontSize: "13px", fontWeight: "600" }}>{card.label}</span>
        </div>
      ))}

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: "900",
              color: "white",
              lineHeight: "1.05",
              marginBottom: "24px",
              animation: "fadeInUp 0.6s ease 0.1s forwards",
              opacity: 0,
            }}
          >
            We Build
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a5b4fc, #6366f1, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {displayText}
              <span
                style={{
                  WebkitTextFillColor: "#6366f1",
                  opacity: 1,
                  animation: "pulse 1s infinite",
                }}
              >
                |
              </span>
            </span>
            <br />
            That Matters
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: "1.8",
              marginBottom: "48px",
              maxWidth: "600px",
              margin: "0 auto 48px",
              animation: "fadeInUp 0.6s ease 0.2s forwards",
              opacity: 0,
            }}
          >
            Gen Z Neural-X is your technology partner for AI-powered solutions, digital transformation, and world-class training programs.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "64px",
              animation: "fadeInUp 0.6s ease 0.3s forwards",
              opacity: 0,
            }}
          >
            <Link href="/services" id="hero-cta-services" className="btn-primary" style={{ fontSize: "16px", padding: "16px 36px" }}>
              Explore Services <ArrowRight size={18} />
            </Link>
            <Link href="/about" id="hero-cta-about" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.3)", color: "white", fontSize: "16px", padding: "16px 36px" }}>
              <Play size={16} style={{ fill: "white" }} /> Watch Our Story
            </Link>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              flexWrap: "wrap",
              animation: "fadeInUp 0.6s ease 0.4s forwards",
              opacity: 0,
            }}
          >
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "8+", label: "Core Services" },
              { value: "3+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "2rem",
                    fontWeight: "900",
                    background: "linear-gradient(135deg, #a5b4fc, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1",
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: "#6b6fa0", fontSize: "14px", fontWeight: "600" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "white",
          clipPath: "ellipse(55% 100% at 50% 100%)",
        }}
      />
    </section>
  );
}
