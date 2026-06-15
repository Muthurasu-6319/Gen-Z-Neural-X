"use client";

import Link from "next/link";
import { ArrowRight, ShoppingCart, Bot, GraduationCap, Utensils, TrendingUp, BookOpen, CheckCircle } from "lucide-react";

const projects = [
  {
    id: "ecom-platform",
    title: "E-Commerce Platform",
    client: "Fashion Brand",
    category: "Web Development",
    categoryColor: "#6366f1",
    description: "Built a complete e-commerce solution with inventory, payments, and order management, increasing sales by 200%.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    result: "200% increase in online sales",
    icon: ShoppingCart,
    bgGradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
  {
    id: "ai-chatbot-deploy",
    title: "AI Customer Support Bot",
    client: "SaaS Company",
    category: "AI/ML",
    categoryColor: "#8b5cf6",
    description: "Deployed an NLP-powered chatbot handling 90% of customer queries autonomously, reducing support cost by 60%.",
    tech: ["Python", "FastAPI", "OpenAI", "React"],
    result: "60% reduction in support costs",
    icon: Bot,
    bgGradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
  },
  {
    id: "school-mgmt-app",
    title: "School Management System",
    client: "Private School Chain",
    category: "Custom Software",
    categoryColor: "#10b981",
    description: "Complete school ERP covering 2000+ students, staff management, fee collection, and parent communication.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "SMS API"],
    result: "2000+ students managed daily",
    icon: GraduationCap,
    bgGradient: "linear-gradient(135deg, #10b981, #34d399)",
  },
  {
    id: "food-delivery-app",
    title: "Food Delivery Mobile App",
    client: "Restaurant Chain",
    category: "Mobile App",
    categoryColor: "#f59e0b",
    description: "Cross-platform mobile app for food ordering with real-time tracking, payments, and loyalty program.",
    tech: ["React Native", "Node.js", "MongoDB", "Razorpay"],
    result: "10,000+ downloads in first month",
    icon: Utensils,
    bgGradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
  },
  {
    id: "digital-mktg-campaign",
    title: "Digital Marketing Campaign",
    client: "Healthcare Startup",
    category: "Digital Marketing",
    categoryColor: "#f43f5e",
    description: "End-to-end digital marketing strategy including SEO, Google Ads, and social media growing organic traffic by 400%.",
    tech: ["Google Ads", "SEO", "Meta Ads", "Analytics"],
    result: "400% organic traffic growth",
    icon: TrendingUp,
    bgGradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
  },
  {
    id: "elearning-system",
    title: "Online Learning Platform",
    client: "EdTech Startup",
    category: "Web Development",
    categoryColor: "#6366f1",
    description: "Full-featured e-learning platform with video courses, quizzes, certification, and payment processing for 5000+ learners.",
    tech: ["Next.js", "Node.js", "AWS S3", "Stripe"],
    result: "5000+ active learners",
    icon: BookOpen,
    bgGradient: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            🏆 Our Work
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Portfolio & <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Case Studies</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Real projects, real results. See how we've helped businesses across industries achieve their digital goals.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="grid-3">
            {projects.map((project) => (
              <div
                key={project.id}
                id={`portfolio-${project.id}`}
                className="card"
                style={{ overflow: "hidden", padding: 0 }}
              >
                {/* Project Visual */}
                <div
                  style={{
                    background: project.bgGradient,
                    height: "180px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-30px",
                      right: "-30px",
                      width: "120px",
                      height: "120px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                    }}
                  />
                  <span style={{ position: "relative" }}><project.icon size={56} color="white" /></span>
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      padding: "4px 12px",
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "50px",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div style={{ padding: "28px" }}>
                  <p style={{ fontSize: "11px", color: "#9499c9", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
                    Client: {project.client}
                  </p>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "19px", fontWeight: "700", color: "#0a0a0f", marginBottom: "10px" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b6fa0", lineHeight: "1.7", marginBottom: "16px" }}>
                    {project.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{ padding: "3px 10px", background: "var(--gray-100)", borderRadius: "50px", fontSize: "11px", fontWeight: "600", color: "#4a4e7a" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 14px",
                      background: `${project.categoryColor}10`,
                      borderRadius: "10px",
                      marginBottom: "0",
                    }}
                  >
                    <CheckCircle size={16} color={project.categoryColor} />
                    <span style={{ fontSize: "13px", color: project.categoryColor, fontWeight: "600" }}>{project.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "64px" }}>
            <Link href="/contact" id="portfolio-contact-cta" className="btn-primary">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
