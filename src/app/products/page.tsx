"use client";

import Link from "next/link";
import { Bot, GraduationCap, BarChart3, Users, BookOpen, Package, CheckCircle, ArrowRight } from "lucide-react";

const products = [
  {
    id: "ai-chatbot",
    icon: Bot,
    title: "AI Chatbot",
    tagline: "Intelligent Conversational AI",
    description: "Deploy a powerful AI chatbot that handles customer support, lead qualification, appointment booking, and more — 24/7 without human intervention.",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    href: "/products/ai-chatbot",
    features: ["Natural Language Processing", "Multi-platform deployment", "CRM integration", "Analytics dashboard", "Multi-language support", "Custom training on your data"],
    pricing: "Starting from ₹15,000/month",
    badge: "Most Popular",
  },
  {
    id: "school-management",
    icon: GraduationCap,
    title: "School Management System",
    tagline: "Complete Digital School Solution",
    description: "A comprehensive school management platform covering admissions, attendance, academics, fees, communication, and reporting in one unified system.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    href: "/products/school-management",
    features: ["Student & Staff Management", "Fee Collection & Receipts", "Attendance Tracking", "Grade & Report Cards", "Parent Communication Portal", "Timetable Management"],
    pricing: "Starting from ₹25,000/year",
    badge: "EdTech",
  },
  {
    id: "erp-software",
    icon: BarChart3,
    title: "ERP Software",
    tagline: "Enterprise Resource Planning",
    description: "A modular ERP system that connects all your business functions — from inventory and finance to HR and procurement — in a single, integrated platform.",
    color: "#3730a3",
    gradient: "linear-gradient(135deg, #3730a3, #6366f1)",
    href: "/products/erp-software",
    features: ["Inventory Management", "Financial Accounting", "HR & Payroll", "Purchase & Sales Orders", "Multi-branch Support", "Custom Reports & KPIs"],
    pricing: "Starting from ₹50,000/year",
    badge: "Enterprise",
  },
  {
    id: "crm-system",
    icon: Users,
    title: "CRM System",
    tagline: "Customer Relationship Manager",
    description: "Manage your entire sales pipeline, customer interactions, and team performance with our intuitive CRM built for growing businesses.",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    href: "/products/crm-system",
    features: ["Lead & Deal Management", "Pipeline Visualization", "Email & WhatsApp Integration", "Task & Follow-up Reminders", "Sales Analytics", "Team Performance Tracking"],
    pricing: "Starting from ₹10,000/month",
    badge: "Sales",
  },
  {
    id: "elearning-platform",
    icon: BookOpen,
    title: "E-learning Platform",
    tagline: "Complete Online Learning Solution",
    description: "Launch your own branded online learning platform with courses, quizzes, live sessions, certificates, and payment integrations ready out of the box.",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    href: "/products/elearning-platform",
    features: ["Video Course Hosting", "Quiz & Assignments", "Live Session Integration", "Certificate Generation", "Payment Gateway", "Progress Tracking"],
    pricing: "Starting from ₹30,000/year",
    badge: "EdTech",
  },
  {
    id: "saas-products",
    icon: Package,
    title: "SaaS Products",
    tagline: "Cloud-based Business Solutions",
    description: "Subscription-based SaaS tools designed for modern businesses — scalable, secure, and accessible from anywhere.",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    href: "/products/saas-products",
    features: ["Multi-tenant Architecture", "Subscription Management", "Cloud Hosting Included", "API Access", "Role-based Access Control", "Regular Updates & Support"],
    pricing: "Custom pricing available",
    badge: "Cloud",
  },
];

export default function ProductsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            Our Products
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Software <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Products</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Battle-tested, ready-to-deploy software products that solve real business problems — deployable in days, not months.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="grid-3">
            {products.map((product) => (
              <div
                key={product.id}
                id={`product-detail-${product.id}`}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(55,48,163,0.08)",
                  border: "1px solid var(--gray-100)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 24px 64px rgba(55,48,163,0.16)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(55,48,163,0.08)";
                }}
              >
                {/* Header */}
                <div
                  style={{
                    background: product.gradient,
                    padding: "40px 32px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-30px",
                      right: "-30px",
                      width: "120px",
                      height: "120px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "50%",
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ width: "52px", height: "52px", background: "rgba(255,255,255,0.2)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <product.icon size={26} style={{ color: "white" }} />
                    </div>
                    <span style={{ padding: "4px 12px", background: "rgba(255,255,255,0.2)", borderRadius: "50px", fontSize: "11px", fontWeight: "700", color: "white", textTransform: "uppercase" }}>
                      {product.badge}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "22px", fontWeight: "800", color: "white", marginTop: "20px", marginBottom: "6px" }}>
                    {product.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", fontWeight: "500" }}>{product.tagline}</p>
                </div>

                {/* Body */}
                <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ fontSize: "14px", color: "#4a4e7a", lineHeight: "1.7", marginBottom: "24px" }}>
                    {product.description}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px", flex: 1 }}>
                    {product.features.map((feat) => (
                      <div key={feat} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <CheckCircle size={14} style={{ color: product.color, flexShrink: 0 }} />
                        <span style={{ fontSize: "13.5px", color: "#2d3160" }}>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      background: `${product.color}10`,
                      borderRadius: "10px",
                      padding: "12px 16px",
                      marginBottom: "20px",
                    }}
                  >
                    <p style={{ fontSize: "13px", color: product.color, fontWeight: "700" }}>{product.pricing}</p>
                  </div>

                  <div style={{ display: "flex", gap: "12px" }}>
                    <Link href={product.href} id={`product-page-${product.id}`} className="btn-primary" style={{ flex: 1, justifyContent: "center", padding: "12px 20px", fontSize: "14px" }}>
                      View Details <ArrowRight size={14} />
                    </Link>
                    <Link href="/contact" id={`product-demo-${product.id}`} className="btn-secondary" style={{ padding: "12px 20px", fontSize: "14px" }}>
                      Demo
                    </Link>
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
