"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile App Dev", href: "/services/mobile-app-development" },
    { label: "AI/ML Solutions", href: "/services/ai-ml-solutions" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Game Development", href: "/services/game-development" },
  ],
  products: [
    { label: "AI Chatbot", href: "/products/ai-chatbot" },
    { label: "School Management", href: "/products/school-management" },
    { label: "ERP Software", href: "/products/erp-software" },
    { label: "CRM System", href: "/products/crm-system" },
    { label: "E-learning Platform", href: "/products/elearning-platform" },
  ],
  learn: [
    { label: "All Courses", href: "/courses" },
    { label: "Internships", href: "/internships" },
    { label: "Certifications", href: "/certifications" },
    { label: "MERN Stack", href: "/courses#mern" },
    { label: "AI/ML Course", href: "/courses#aiml" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

const socialLinks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
    href: "#",
    label: "Facebook",
    bg: "#1877f2",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
      </svg>
    ),
    href: "#",
    label: "Twitter",
    bg: "#000",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    href: "#",
    label: "LinkedIn",
    bg: "#0077b5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    href: "#",
    label: "Instagram",
    bg: "#e1306c",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ),
    href: "#",
    label: "YouTube",
    bg: "#ff0000",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      {/* CTA Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #0d0f2b 100%)",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6,182,212,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "rgba(255,255,255,0.6)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            Ready to Transform Your Business?
          </p>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "800",
              color: "white",
              marginBottom: "16px",
            }}
          >
            Let's Build Something Amazing
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px" }}>
            Partner with Gen Z Neural-X to accelerate your digital transformation with AI-powered solutions.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" id="footer-cta-contact" className="btn-white">
              Get Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/services" id="footer-cta-services" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ background: "#0d0f2b", padding: "80px 0 40px" }}>
        <div className="container">
          <div className="footer-grid" style={{ marginBottom: "64px" }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <Image 
                    src="/logo.png" 
                    alt="Gen Z Neural-X Logo" 
                    width={80} 
                    height={80} 
                    style={{ objectFit: 'contain' }}
                  />
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: "800", fontSize: "18px", color: "white" }}>
                    Gen Z Neural-X
                  </div>
                  <div style={{ fontSize: "11px", color: "#6366f1", fontWeight: "500" }}>Technology & Innovation</div>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: "1.8", marginBottom: "28px", maxWidth: "280px" }}>
                Empowering businesses and individuals with cutting-edge AI technology, digital solutions, and world-class training programs.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>
                  <Mail size={14} style={{ color: "#6366f1", flexShrink: 0 }} />
                  genzdevoff@gmail.com
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>
                  <Phone size={14} style={{ color: "#6366f1", flexShrink: 0 }} />
                  +91 81249 96319
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>
                  <MapPin size={14} style={{ color: "#6366f1", flexShrink: 0 }} />
                  Tamil Nadu, India
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    id={`footer-social-${social.label.toLowerCase()}`}
                    aria-label={social.label}
                    title={social.label}
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "13px",
                      fontWeight: "700",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = social.bg;
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.borderColor = social.bg;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <FooterColumn title="Company" links={footerLinks.company} />
            <FooterColumn title="Services" links={footerLinks.services} />
            <FooterColumn title="Products" links={footerLinks.products} />
            <FooterColumn title="Learn" links={footerLinks.learn} />
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
              © {currentYear} Gen Z Neural-X. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  id={`footer-legal-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "13px", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "14px",
          fontWeight: "700",
          color: "white",
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              id={`footer-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontSize: "14px",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#a5b4fc";
                e.currentTarget.style.paddingLeft = "6px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                e.currentTarget.style.paddingLeft = "0";
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
