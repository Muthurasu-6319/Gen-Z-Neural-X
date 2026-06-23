"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Zap, Factory, Radio, Cpu, Wifi, Activity, BarChart3, Database } from "lucide-react";

// Digital services — simple list
const digitalServices = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "AI/ML Solutions", href: "/services/ai-ml-solutions" },
  { label: "Game Development", href: "/services/game-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Graphic Designing", href: "/services/graphic-designing" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Custom Software", href: "/services/custom-software" },
];

// Industrial services — with icons
const industrialServices = [
  { label: "Energy Management System", href: "/services/energy-management-system", icon: Zap },
  { label: "Manufacturing Execution System", href: "/services/manufacturing-execution-system", icon: Factory },
  { label: "SCADA Development", href: "/services/scada-development", icon: Radio },
  { label: "PLC Programming", href: "/services/plc-programming", icon: Cpu },
  { label: "Industrial IoT Solutions", href: "/services/industrial-iot-solutions", icon: Wifi },
  { label: "Machine Monitoring Systems", href: "/services/machine-monitoring-systems", icon: Activity },
  { label: "Production Dashboards", href: "/services/production-dashboards", icon: BarChart3 },
  { label: "Data Analytics & Reporting", href: "/services/industrial-data-analytics", icon: Database },
];

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
    isMega: true, // ← signals mega-menu render
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

  const linkStyle = (isScrolled: boolean) => ({
    padding: "8px 14px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    fontWeight: "500" as const,
    color: isScrolled ? "#2d3160" : "rgba(255,255,255,0.9)",
    textDecoration: "none",
    borderRadius: "8px",
    display: "block",
    transition: "all 0.2s ease",
  });

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
                onMouseEnter={() => (item.children || item.isMega) && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children || item.isMega ? (
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
                    style={linkStyle(scrolled)}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Standard Dropdown */}
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

                {/* ── Services MEGA MENU ── */}
                {item.isMega && activeDropdown === item.label && (
                  <div
                    style={{
                      position: "fixed",
                      top: "80px",
                      left: 0,
                      right: 0,
                      background: "white",
                      boxShadow: "0 20px 60px rgba(55,48,163,0.15), 0 4px 16px rgba(0,0,0,0.08)",
                      borderTop: "1px solid rgba(99,102,241,0.1)",
                      zIndex: 1000,
                      animation: "fadeInUp 0.2s ease",
                      padding: "32px 0 24px",
                    }}
                  >
                    <div className="container">
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>

                        {/* Column 1 — Digital Services */}
                        <div>
                          <div style={{ fontSize: "11px", fontWeight: "700", color: "#6366f1", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "14px", paddingLeft: "12px" }}>
                            Digital & Software Services
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                            {digitalServices.map((svc) => (
                              <Link
                                key={svc.label}
                                href={svc.href}
                                id={`nav-mega-digital-${svc.href.split("/").pop()}`}
                                style={{
                                  display: "block",
                                  padding: "9px 12px",
                                  color: "#2d3160",
                                  textDecoration: "none",
                                  fontSize: "13.5px",
                                  fontWeight: "500",
                                  borderRadius: "10px",
                                  transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = "rgba(99,102,241,0.08)";
                                  e.currentTarget.style.color = "#3730a3";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = "transparent";
                                  e.currentTarget.style.color = "#2d3160";
                                }}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {svc.label}
                              </Link>
                            ))}
                          </div>
                          <div style={{ marginTop: "12px", paddingLeft: "12px" }}>
                            <Link
                              href="/services"
                              id="nav-mega-all-services"
                              style={{ fontSize: "12px", color: "#6366f1", fontWeight: "600", textDecoration: "none" }}
                              onClick={() => setActiveDropdown(null)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>

                        {/* Column 2 — Industrial Automation */}
                        <div style={{ borderLeft: "1px solid rgba(99,102,241,0.1)", paddingLeft: "48px" }}>
                          <div style={{ fontSize: "11px", fontWeight: "700", color: "#f59e0b", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "14px" }}>
                            Industrial Automation (Industry 4.0)
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                            {industrialServices.map((svc) => (
                              <Link
                                key={svc.label}
                                href={svc.href}
                                id={`nav-mega-industrial-${svc.href.split("/").pop()}`}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  padding: "9px 12px",
                                  color: "#2d3160",
                                  textDecoration: "none",
                                  fontSize: "13.5px",
                                  fontWeight: "500",
                                  borderRadius: "10px",
                                  transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = "rgba(245,158,11,0.08)";
                                  e.currentTarget.style.color = "#d97706";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = "transparent";
                                  e.currentTarget.style.color = "#2d3160";
                                }}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <svc.icon size={14} style={{ color: "#f59e0b", flexShrink: 0 }} />
                                {svc.label}
                              </Link>
                            ))}
                          </div>
                          <div style={{ marginTop: "12px" }}>
                            <Link
                              href="/services/industrial-automation"
                              id="nav-mega-all-industrial"
                              style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "600", textDecoration: "none" }}
                              onClick={() => setActiveDropdown(null)}
                            >
                              View All Industrial Solutions →
                            </Link>
                          </div>
                        </div>

                      </div>

                      {/* Bottom Need Help bar */}
                      <div style={{ borderTop: "1px solid rgba(99,102,241,0.08)", marginTop: "24px", paddingTop: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div>
                          <div style={{ fontSize: "14px", fontWeight: "600", color: "#0a0a0f", marginBottom: "2px" }}>Need Help Choosing?</div>
                          <div style={{ fontSize: "12px", color: "#6b6fa0" }}>Our experts can help you find the right solution for your business.</div>
                        </div>
                        <div style={{ display: "flex", gap: "12px" }}>
                          <Link href="/contact" id="nav-mega-consultation" style={{ fontSize: "13px", color: "#6366f1", fontWeight: "600", textDecoration: "none" }} onClick={() => setActiveDropdown(null)}>
                            Get Consultation
                          </Link>
                          <Link href="/services" id="nav-mega-view-all" className="btn-primary" style={{ padding: "8px 20px", fontSize: "13px" }} onClick={() => setActiveDropdown(null)}>
                            View All Services
                          </Link>
                        </div>
                      </div>
                    </div>
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
              {item.children || item.isMega ? (
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
                    <div style={{ paddingBottom: "12px", paddingLeft: "12px" }}>
                      {item.isMega ? (
                        <>
                          {/* Digital */}
                          <div style={{ fontSize: "11px", fontWeight: "700", color: "#6366f1", letterSpacing: "0.8px", textTransform: "uppercase", padding: "8px 0 4px" }}>Digital Services</div>
                          {digitalServices.map((svc) => (
                            <Link key={svc.label} href={svc.href} id={`mobile-digital-${svc.href.split("/").pop()}`} onClick={() => setMobileOpen(false)}
                              style={{ display: "block", padding: "9px 0", color: "#3730a3", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>
                              {svc.label}
                            </Link>
                          ))}
                          {/* Industrial */}
                          <div style={{ fontSize: "11px", fontWeight: "700", color: "#f59e0b", letterSpacing: "0.8px", textTransform: "uppercase", padding: "12px 0 4px" }}>Industrial Automation</div>
                          {industrialServices.map((svc) => (
                            <Link key={svc.label} href={svc.href} id={`mobile-industrial-${svc.href.split("/").pop()}`} onClick={() => setMobileOpen(false)}
                              style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 0", color: "#d97706", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>
                              <svc.icon size={13} />
                              {svc.label}
                            </Link>
                          ))}
                        </>
                      ) : (
                        item.children!.map((child) => (
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
                        ))
                      )}
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
