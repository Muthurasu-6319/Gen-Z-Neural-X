import Link from "next/link";
import { Bot, GraduationCap, BarChart3, Users, BookOpen, Package, ArrowRight, ExternalLink, Rocket } from "lucide-react";

const products = [
  {
    id: "ai-chatbot",
    icon: Bot,
    title: "AI Chatbot",
    description: "Intelligent conversational AI for customer support and lead generation.",
    badge: "AI-Powered",
    badgeColor: "#8b5cf6",
    href: "/products/ai-chatbot",
    features: ["NLP Processing", "Multi-platform", "Analytics Dashboard"],
  },
  {
    id: "school-management",
    icon: GraduationCap,
    title: "School Management System",
    description: "Complete digital solution for managing students, staff, fees, and academics.",
    badge: "EdTech",
    badgeColor: "#10b981",
    href: "/products/school-management",
    features: ["Student Portal", "Fee Management", "Reports & Analytics"],
  },
  {
    id: "erp-software",
    icon: BarChart3,
    title: "ERP Software",
    description: "Enterprise Resource Planning to streamline all your business operations.",
    badge: "Enterprise",
    badgeColor: "#3730a3",
    href: "/products/erp-software",
    features: ["Inventory", "Finance", "HR Module"],
  },
  {
    id: "crm-system",
    icon: Users,
    title: "CRM System",
    description: "Customer relationship management to boost sales and retain clients.",
    badge: "Sales",
    badgeColor: "#f59e0b",
    href: "/products/crm-system",
    features: ["Lead Tracking", "Pipeline", "Email Integration"],
  },
  {
    id: "elearning-platform",
    icon: BookOpen,
    title: "E-learning Platform",
    description: "Full-featured online learning platform with courses, quizzes, and certificates.",
    badge: "EdTech",
    badgeColor: "#06b6d4",
    href: "/products/elearning-platform",
    features: ["Video Courses", "Quizzes", "Certifications"],
  },
  {
    id: "saas-products",
    icon: Package,
    title: "SaaS Products",
    description: "Cloud-based subscription software solutions for modern businesses.",
    badge: "Cloud",
    badgeColor: "#f43f5e",
    href: "/products/saas-products",
    features: ["Multi-tenant", "Scalable", "API-first"],
  },
];

export default function ProductsOverview() {
  return (
    <section id="products-overview" className="section" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-tag">
            <Rocket size={14} /> Our Products
          </div>
          <h2 className="section-title">
            Ready-to-Deploy <span className="gradient-text">Software Products</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Battle-tested software products designed for real-world business challenges, deployable in days.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: "48px" }}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              id={`product-card-${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card" style={{ height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: `${product.badgeColor}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <product.icon size={24} style={{ color: product.badgeColor }} />
                  </div>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: "50px",
                      fontSize: "11px",
                      fontWeight: "700",
                      background: `${product.badgeColor}15`,
                      color: product.badgeColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "#0a0a0f", marginBottom: "10px" }}>
                  {product.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#6b6fa0", lineHeight: "1.7", marginBottom: "20px" }}>
                  {product.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                  {product.features.map((feat) => (
                    <span
                      key={feat}
                      style={{
                        padding: "4px 12px",
                        background: "var(--gray-100)",
                        borderRadius: "50px",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#4a4e7a",
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: product.badgeColor, fontSize: "13px", fontWeight: "600" }}>
                  View Details <ExternalLink size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/products" id="products-view-all" className="btn-secondary">
            Explore All Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
