"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "AI/ML Solutions", href: "/services/ai-ml-solutions" },
      { label: "Game Development", href: "/services/game-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Graphic Designing", href: "/services/graphic-designing" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Custom Software", href: "/services/custom-software" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "AI Chatbot", href: "/products/ai-chatbot" },
      { label: "School Management", href: "/products/school-management" },
      { label: "ERP Software", href: "/products/erp-software" },
      { label: "CRM System", href: "/products/crm-system" },
      { label: "E-learning Platform", href: "/products/elearning-platform" },
      { label: "SaaS Products", href: "/products/saas-products" },
    ],
  },
  {
    label: "Learn",
    href: "#",
    children: [
      { label: "Courses", href: "/courses" },
      { label: "Internships", href: "/internships" },
      { label: "Certifications", href: "/certifications" },
      { label: "Final Year Project", href: "/learn/final-year-project" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar-sticky ${scrolled ? "navbar-scrolled" : "bg-transparent"}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          {/* Logo */}
          <Link href="/" id="nav-logo" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ position: "relative", width: "100px", height: "100px" }}>
                <Image 
                  src="/logo.png" 
                  alt="Gen Z Neural-X Logo" 
                  width={100} 
                  height={100} 
                  style={{ objectFit: 'contain' }}
                />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: "800",
                  fontSize: "18px",
                  color: scrolled ? "#0a0a0f" : "white",
                  lineHeight: "1",
                  transition: "color 0.3s ease",
                }}
              >
                Gen Z Neural-X
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: scrolled ? "#6366f1" : "rgba(255,255,255,0.7)",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                  transition: "color 0.3s ease",
                }}
              >
                Technology & Innovation
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{ alignItems: "center", gap: "4px" }}
            className="hidden lg:flex"
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    id={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "8px 14px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: scrolled ? "#2d3160" : "rgba(255,255,255,0.9)",
                      borderRadius: "8px",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {item.label}
                    <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: activeDropdown === item.label ? "rotate(180deg)" : "none" }} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    id={`nav-${item.label.toLowerCase()}`}
                    style={{
                      padding: "8px 14px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: scrolled ? "#2d3160" : "rgba(255,255,255,0.9)",
                      textDecoration: "none",
                      borderRadius: "8px",
                      display: "block",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "white",
                      borderRadius: "16px",
                      padding: "12px",
                      boxShadow: "0 20px 60px rgba(55,48,163,0.15), 0 4px 16px rgba(0,0,0,0.08)",
                      minWidth: "220px",
                      border: "1px solid rgba(99,102,241,0.1)",
                      zIndex: 1000,
                      animation: "fadeInUp 0.2s ease",
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        id={`nav-child-${child.label.toLowerCase().replace(/\s/g, "-")}`}
                        style={{
                          display: "block",
                          padding: "10px 14px",
                          color: "#2d3160",
                          textDecoration: "none",
                          fontSize: "14px",
                          fontWeight: "500",
                          borderRadius: "10px",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(99,102,241,0.08)";
                          e.currentTarget.style.color = "#3730a3";
                          e.currentTarget.style.paddingLeft = "20px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#2d3160";
                          e.currentTarget.style.paddingLeft = "14px";
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ alignItems: "center", gap: "12px" }} className="hidden lg:flex">
            <Link href="/contact" id="nav-cta" className="btn-primary" style={{ padding: "10px 24px", fontSize: "14px" }}>
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "#0a0a0f" : "white",
              padding: "8px",
            }}
            className="lg:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: "white",
            borderTop: "1px solid rgba(99,102,241,0.1)",
            padding: "16px 24px 24px",
            maxHeight: "80vh",
            overflowY: "auto",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          {navItems.map((item) => (
            <div key={item.label} style={{ borderBottom: "1px solid #f1f2fc" }}>
              {item.children ? (
                <>
                  <button
                    id={`mobile-nav-${item.label.toLowerCase()}`}
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "14px 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#0a0a0f",
                    }}
                  >
                    {item.label}
                    <ChevronDown size={16} style={{ transition: "transform 0.2s", transform: mobileExpanded === item.label ? "rotate(180deg)" : "none" }} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div style={{ paddingBottom: "8px", paddingLeft: "16px" }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          id={`mobile-child-${child.label.toLowerCase().replace(/\s/g, "-")}`}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            display: "block",
                            padding: "10px 0",
                            color: "#3730a3",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  id={`mobile-nav-link-${item.label.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "14px 0",
                    color: "#0a0a0f",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div style={{ marginTop: "20px" }}>
            <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setMobileOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
