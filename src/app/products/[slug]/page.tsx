"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight, Bot, GraduationCap, BarChart3, Users, BookOpen, Package, Send } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const productData: Record<string, {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  title: string;
  tagline: string;
  description: string;
  color: string;
  gradient: string;
  mediaUrl?: string;
  mediaType?: 'video' | 'image';
  features: { title: string; desc: string }[];
  pricing: { plan: string; price: string; features: string[] }[];
}> = {
  "ai-chatbot": {
    icon: Bot,
    title: "AI Chatbot",
    tagline: "Intelligent Conversational AI",
    description: "Deploy an AI-powered chatbot that handles customer queries 24/7, qualifies leads, books appointments, and integrates seamlessly with your existing CRM and helpdesk tools.",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    mediaUrl: "https://v1.pinimg.com/videos/iht/expMp4/26/13/64/261364e84ef5ca86aedf4a96907519da_720w.mp4",
    mediaType: "video",
    features: [
      { title: "Natural Language Processing", desc: "Understands user intent and responds naturally in multiple languages." },
      { title: "Multi-Platform Deployment", desc: "Deploy on your website, WhatsApp, Telegram, and Facebook Messenger." },
      { title: "CRM Integration", desc: "Connects with popular CRMs to log conversations and update records." },
      { title: "Analytics Dashboard", desc: "Track conversations, drop-offs, and conversion metrics." },
      { title: "Custom Training", desc: "Train on your product FAQs, policies, and data." },
      { title: "Human Handoff", desc: "Seamlessly escalate to human agents when needed." },
    ],
    pricing: [
      { plan: "Starter", price: "₹15,000/mo", features: ["Up to 1,000 conversations/mo", "1 Platform", "Basic Analytics", "Email Support"] },
      { plan: "Professional", price: "₹35,000/mo", features: ["Up to 10,000 conversations/mo", "3 Platforms", "Advanced Analytics", "CRM Integration", "Priority Support"] },
      { plan: "Enterprise", price: "Custom", features: ["Unlimited conversations", "All platforms", "Custom training", "Dedicated support", "SLA guarantee"] },
    ],
  },
  "school-management": {
    icon: GraduationCap,
    title: "School Management System",
    tagline: "Complete Digital School Solution",
    description: "A comprehensive school management platform that digitizes every aspect of school operations — from admissions to academics, fees to parent communication.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    features: [
      { title: "Student Management", desc: "Complete student profiles, attendance, and academic records." },
      { title: "Fee Management", desc: "Online fee collection, receipts, and defaulter reports." },
      { title: "Academic Module", desc: "Timetable, grades, report cards, and exam management." },
      { title: "Parent Portal", desc: "Mobile app for parents to track attendance and communicate with teachers." },
      { title: "Staff HR Module", desc: "Staff profiles, payroll, leave management, and appraisals." },
      { title: "Reports & Analytics", desc: "Comprehensive reports for management decision-making." },
    ],
    pricing: [
      { plan: "Basic", price: "₹25,000/yr", features: ["Up to 500 students", "Core modules", "Email support", "Data backup"] },
      { plan: "Standard", price: "₹50,000/yr", features: ["Up to 2000 students", "All modules", "Mobile app", "Priority support"] },
      { plan: "Premium", price: "Custom", features: ["Unlimited students", "All modules", "Custom branding", "Dedicated server"] },
    ],
  },
  "erp-software": {
    icon: BarChart3,
    title: "ERP Software",
    tagline: "Enterprise Resource Planning",
    description: "A modular ERP system that connects all your business functions in a single, integrated platform — from inventory to finance, HR to procurement.",
    color: "#3730a3",
    gradient: "linear-gradient(135deg, #3730a3, #6366f1)",
    mediaUrl: "https://v1.pinimg.com/videos/iht/expMp4/10/78/6f/10786f0093b83b318439da657c90b98a_540w.mp4",
    mediaType: "video",
    features: [
      { title: "Inventory Management", desc: "Real-time stock tracking, reorder alerts, and warehouse management." },
      { title: "Financial Accounting", desc: "GST-compliant accounting, invoicing, and financial reports." },
      { title: "HR & Payroll", desc: "Employee management, attendance, payroll, and leave tracking." },
      { title: "Purchase & Sales", desc: "PO management, vendor tracking, and sales order processing." },
      { title: "Multi-branch Support", desc: "Manage multiple locations from a single dashboard." },
      { title: "Custom Reports", desc: "Build and schedule custom reports and KPI dashboards." },
    ],
    pricing: [
      { plan: "SME", price: "₹50,000/yr", features: ["Up to 25 users", "Core modules", "Email support", "Training included"] },
      { plan: "Business", price: "₹1,00,000/yr", features: ["Up to 100 users", "All modules", "Priority support", "Customization"] },
      { plan: "Enterprise", price: "Custom", features: ["Unlimited users", "All modules", "Dedicated team", "On-premise option"] },
    ],
  },
  "crm-system": {
    icon: Users,
    title: "CRM System",
    tagline: "Customer Relationship Manager",
    description: "Manage your entire sales pipeline, customer interactions, and team performance with an intuitive CRM built for growing businesses.",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    mediaUrl: "https://v1-e.pinimg.com/videos/mc/720p/d9/3e/d3/d93ed371d67ffcf0ba39eba36359085a.mp4",
    mediaType: "video",
    features: [
      { title: "Lead Management", desc: "Capture, assign, and track leads through your sales pipeline." },
      { title: "Deal Pipeline", desc: "Visual Kanban board to manage deals at every stage." },
      { title: "Email & WhatsApp", desc: "Send emails and WhatsApp messages directly from CRM." },
      { title: "Task & Reminders", desc: "Automated follow-up reminders and task management." },
      { title: "Sales Analytics", desc: "Revenue forecasting, conversion rates, and team performance." },
      { title: "Mobile App", desc: "Access your CRM on the go with a full-featured mobile app." },
    ],
    pricing: [
      { plan: "Starter", price: "₹10,000/mo", features: ["5 users", "Pipeline management", "Email integration", "Basic reports"] },
      { plan: "Growth", price: "₹25,000/mo", features: ["20 users", "All features", "WhatsApp integration", "Advanced analytics"] },
      { plan: "Scale", price: "Custom", features: ["Unlimited users", "Custom workflows", "API access", "Dedicated support"] },
    ],
  },
  "elearning-platform": {
    icon: BookOpen,
    title: "E-learning Platform",
    tagline: "Complete Online Learning Solution",
    description: "Launch your own branded online learning platform with video courses, live sessions, quizzes, certificates, and payment integrations out of the box.",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    features: [
      { title: "Video Course Hosting", desc: "Upload and stream HD video lessons with progress tracking." },
      { title: "Quiz & Assessments", desc: "Create quizzes, assignments, and graded assessments." },
      { title: "Live Sessions", desc: "Integrate Zoom or Google Meet for live classes." },
      { title: "Certificate Generation", desc: "Auto-generate and email certificates upon completion." },
      { title: "Payment Gateway", desc: "Accept payments via Razorpay, Stripe, or UPI." },
      { title: "Student Analytics", desc: "Track engagement, completion rates, and learning progress." },
    ],
    pricing: [
      { plan: "Startup", price: "₹30,000/yr", features: ["50 courses", "500 students", "Basic features", "Email support"] },
      { plan: "Business", price: "₹60,000/yr", features: ["Unlimited courses", "5000 students", "All features", "Custom domain"] },
      { plan: "White-label", price: "Custom", features: ["Your branding", "Custom features", "API access", "Dedicated support"] },
    ],
  },
  "saas-products": {
    icon: Package,
    title: "SaaS Products",
    tagline: "Cloud-based Business Solutions",
    description: "Subscription-based SaaS tools built for modern businesses — scalable, secure, cloud-hosted, and accessible from anywhere.",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    mediaUrl: "https://v1.pinimg.com/videos/iht/expMp4/ae/7c/0f/ae7c0f2126aca9e204d6f46d06e001b5_720w.mp4",
    mediaType: "video",
    features: [
      { title: "Multi-tenant Architecture", desc: "Single codebase serving multiple customers with data isolation." },
      { title: "Subscription Management", desc: "Automated billing, renewals, and subscription tier management." },
      { title: "Cloud Hosting", desc: "Hosted on AWS/GCP with 99.9% uptime SLA." },
      { title: "API-First Design", desc: "Full REST API access for integration with your existing tools." },
      { title: "Role-Based Access", desc: "Granular user permissions and access control." },
      { title: "Regular Updates", desc: "Continuous feature updates and security patches included." },
    ],
    pricing: [
      { plan: "Starter", price: "From ₹5,000/mo", features: ["Basic features", "Up to 5 users", "Community support", "Monthly billing"] },
      { plan: "Professional", price: "From ₹15,000/mo", features: ["All features", "Up to 50 users", "Priority support", "Annual billing discount"] },
      { plan: "Enterprise", price: "Custom", features: ["Custom features", "Unlimited users", "Dedicated support", "Custom SLA"] },
    ],
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = productData[slug];
  const [demoName, setDemoName] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [demoPhone, setDemoPhone] = useState("");
  const [demoSent, setDemoSent] = useState(false);

  if (!product) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px", paddingTop: "80px" }}>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem" }}>Product not found</h1>
        <Link href="/products" className="btn-primary">Back to Products</Link>
      </div>
    );
  }

  const Icon = product.icon;

  const [demoLoading, setDemoLoading] = useState(false);

  const handleDemo = async (e: React.FormEvent) => {
    e.preventDefault();
    setDemoLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          formType: 'Product Demo Request', 
          product: product.title,
          name: demoName,
          email: demoEmail,
          phone: demoPhone
        }),
      });
      if (response.ok) {
        setDemoSent(true);
        setDemoName(""); setDemoEmail(""); setDemoPhone("");
        setTimeout(() => setDemoSent(false), 4000);
      } else {
        alert("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send request. Please try again.");
    } finally {
      setDemoLoading(false);
    }
  };

  return (
    <>
      <div style={{ background: product.gradient, padding: "140px 0 80px", position: "relative", overflow: "hidden" }}>
        {product.mediaType === "video" && product.mediaUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          >
            <source src={product.mediaUrl} type="video/mp4" />
          </video>
        ) : product.mediaType === "image" && product.mediaUrl ? (
          <img
            src={product.mediaUrl}
            alt=""
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          />
        ) : null}
        <div style={{ position: "absolute", inset: 0, background: product.mediaUrl ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Link href="/products" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            ← Back to Products
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "16px" }}>
            <div style={{ width: "72px", height: "72px", background: "rgba(255,255,255,0.2)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={36} style={{ color: "white" }} />
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "4px" }}>{product.tagline}</p>
              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", color: "white" }}>{product.title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: "80px", alignItems: "start" }}>
            <div>
              <h2 className="section-title">Key <span className="gradient-text">Features</span></h2>
              <p style={{ color: "#4a4e7a", fontSize: "16px", lineHeight: "1.9", marginBottom: "40px" }}>{product.description}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {product.features.map((feat, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `${product.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CheckCircle size={16} style={{ color: product.color }} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", fontWeight: "700", color: "#0a0a0f", marginBottom: "4px" }}>{feat.title}</h4>
                      <p style={{ fontSize: "14px", color: "#6b6fa0" }}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Request */}
            <div>
              <div style={{ background: "linear-gradient(135deg, #0d0f2b, #1e1b4b)", borderRadius: "24px", padding: "40px", color: "white" }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Request a Free Demo</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", marginBottom: "28px" }}>See this product in action with a live walkthrough.</p>
                {demoSent ? (
                  <div style={{ background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.4)", borderRadius: "12px", padding: "16px", color: "#6ee7b7", fontSize: "14px", textAlign: "center" }}>
                    ✅ Demo request sent! We will contact you within 24 hours.
                  </div>
                ) : (
                  <form onSubmit={handleDemo} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <input id={`demo-name-${slug}`} type="text" value={demoName} onChange={e => setDemoName(e.target.value)} placeholder="Your Name" required style={{ padding: "12px 16px", background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.15)", borderRadius: "10px", color: "white", fontSize: "14px", fontFamily: "'Inter', sans-serif", outline: "none" }} />
                    <input id={`demo-email-${slug}`} type="email" value={demoEmail} onChange={e => setDemoEmail(e.target.value)} placeholder="Your Email" required style={{ padding: "12px 16px", background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.15)", borderRadius: "10px", color: "white", fontSize: "14px", fontFamily: "'Inter', sans-serif", outline: "none" }} />
                    <input id={`demo-phone-${slug}`} type="tel" value={demoPhone} onChange={e => setDemoPhone(e.target.value)} placeholder="Phone Number" style={{ padding: "12px 16px", background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.15)", borderRadius: "10px", color: "white", fontSize: "14px", fontFamily: "'Inter', sans-serif", outline: "none" }} />
                    <button id={`demo-request-${slug}`} type="submit" className="btn-white" style={{ width: "100%", justifyContent: "center" }}>
                      Book Demo <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Simple <span className="gradient-text">Pricing</span></h2>
          </div>
          <div className="grid-3">
            {product.pricing.map((plan, i) => (
              <div
                key={i}
                id={`pricing-plan-${i}`}
                style={{
                  background: i === 1 ? product.gradient : "white",
                  borderRadius: "24px",
                  padding: "40px 32px",
                  border: i !== 1 ? "1px solid var(--gray-100)" : "none",
                  boxShadow: i === 1 ? `0 20px 60px ${product.color}30` : "0 4px 16px rgba(55,48,163,0.06)",
                  transform: i === 1 ? "scale(1.05)" : "none",
                }}
              >
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", color: i === 1 ? "white" : "#0a0a0f", marginBottom: "8px" }}>{plan.plan}</h3>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "900", color: i === 1 ? "white" : product.color, marginBottom: "24px" }}>{plan.price}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                  {plan.features.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <CheckCircle size={14} style={{ color: i === 1 ? "rgba(255,255,255,0.9)" : product.color, flexShrink: 0 }} />
                      <span style={{ fontSize: "14px", color: i === 1 ? "rgba(255,255,255,0.85)" : "#2d3160" }}>{feat}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  id={`pricing-cta-${plan.plan.toLowerCase()}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    background: i === 1 ? "rgba(255,255,255,0.2)" : product.gradient,
                    color: "white",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    border: i === 1 ? "1px solid rgba(255,255,255,0.3)" : "none",
                  }}
                >
                  Get Started <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
