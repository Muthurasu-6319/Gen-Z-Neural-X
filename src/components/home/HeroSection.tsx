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
        backgroundColor: "#050505",
        backgroundImage: "radial-gradient(circle at 50% 0%, #1a1a2e 0%, #050505 70%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "100px",
      }}
    >
      {/* Premium subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          animation: "gridPan 3s linear infinite",
        }}
      />

      {/* Elegant Glowing Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "20%",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 60%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "pulseOrb 8s ease-in-out infinite",
        }}
      />


      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          
          {/* Announcement Pill */}
          <div 
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "6px 16px",
              borderRadius: "100px",
              marginBottom: "32px",
              animation: "fadeInUp 0.6s ease 0s forwards",
              opacity: 0,
            }}
          >
            <span style={{ display: "flex", height: "8px", width: "8px", borderRadius: "50%", background: "#6366f1", boxShadow: "0 0 10px #6366f1" }}></span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px" }}>
              Elevating Digital Experiences
            </span>
          </div>

          {/* Premium Typography Heading */}
          <h1
            style={{
              fontFamily: "'Inter', 'Outfit', sans-serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: "800",
              color: "#ffffff",
              lineHeight: "1.1",
              letterSpacing: "-1px",
              marginBottom: "24px",
              animation: "fadeInUp 0.6s ease 0.1s forwards",
              opacity: 0,
            }}
          >
            We Build{" "}
            <span
              style={{
                display: "inline-block",
                minWidth: "280px",
                textAlign: "left",
                background: "linear-gradient(to right, #a5b4fc, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {displayText}
              <span
                style={{
                  display: "inline-block",
                  width: "4px",
                  height: "0.8em",
                  background: "#818cf8",
                  marginLeft: "4px",
                  verticalAlign: "middle",
                  opacity: 1,
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.9)" }}>That Matters.</span>
          </h1>

          <style>
            {`
              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }
              @keyframes gridPan {
                0% { background-position: 0 0; }
                100% { background-position: 0 40px; }
              }
              @keyframes pulseOrb {
                0%, 100% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.1); opacity: 1; }
              }
              @keyframes floatBadge {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-4px); }
              }
            `}
          </style>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.5)",
              lineHeight: "1.7",
              marginBottom: "32px",
              maxWidth: "640px",
              margin: "0 auto 32px",
              animation: "fadeInUp 0.6s ease 0.2s forwards",
              opacity: 0,
              fontWeight: "400",
            }}
          >
            Gen Z Neural-X is a forward-thinking, Gen Z-led technology company founded in 2025. We build custom AI/ML integrations, premium full-stack web/mobile applications, and smart Industry 4.0 automation systems.
          </p>

          {/* Service Badges */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "48px",
              animation: "fadeInUp 0.6s ease 0.25s forwards",
              opacity: 0,
            }}
          >
            {floatingCards.map((card, idx) => (
              <div key={idx} style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "8px 16px",
                borderRadius: "100px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                animation: `floatBadge 4s ease-in-out ${idx * 0.4}s infinite`
              }}>
                <card.icon size={14} style={{ color: card.color }} />
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", fontWeight: "500" }}>{card.label}</span>
              </div>
            ))}
          </div>

          {/* Refined CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "72px",
              animation: "fadeInUp 0.6s ease 0.3s forwards",
              opacity: 0,
            }}
          >
            <Link 
              href="/services" 
              id="hero-cta-services" 
              style={{ 
                background: "white",
                color: "black",
                fontSize: "15px", 
                fontWeight: "600",
                padding: "16px 36px",
                borderRadius: "100px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 14px rgba(255,255,255,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,255,255,0.25)";
              }}
            >
              Explore Services <ArrowRight size={18} />
            </Link>
            <Link 
              href="/about" 
              id="hero-cta-about" 
              style={{ 
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white", 
                fontSize: "15px", 
                fontWeight: "500",
                padding: "16px 36px",
                borderRadius: "100px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              <Play size={16} style={{ fill: "white" }} /> Watch Our Story
            </Link>
          </div>

          {/* Tech stack moved to absolute bottom */}
        </div>
      </div>
      


      {/* Clean border bottom transition instead of wave */}
      <div 
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          zIndex: 21,
        }}
      />
    </section>
  );
}
