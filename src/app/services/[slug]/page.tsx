"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight, Globe, Smartphone, Brain, Gamepad2, TrendingUp, Palette, Layers, Settings2 } from "lucide-react";
import { useParams } from "next/navigation";

const serviceData: Record<string, {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  title: string;
  description: string;
  color: string;
  gradient: string;
  hero: string;
  mediaUrl?: string;
  mediaType?: 'video' | 'image';
  features: string[];
  process: { step: string; title: string; desc: string }[];
}> = {
  "web-development": {
    icon: Globe,
    title: "Web Development",
    description: "We build high-performance, visually stunning websites and web applications that drive business results. From landing pages to complex SaaS platforms, our team delivers scalable, secure, and SEO-optimized web solutions.",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    hero: "Transform your online presence with world-class web development.",
    mediaUrl: "https://v1-e.pinimg.com/videos/iht/720p/7d/c8/8d/7dc88d496e936db80ee8979924953a51.mp4",
    mediaType: "video",
    features: ["Custom React / Next.js Applications", "E-Commerce Development (Shopify, Custom)", "WordPress & CMS Solutions", "RESTful API & GraphQL Development", "Progressive Web Apps (PWA)", "Performance Optimization & Core Web Vitals", "SEO-First Development", "Responsive & Mobile-First Design"],
    process: [
      { step: "01", title: "Discovery", desc: "We understand your business goals, target audience, and technical requirements." },
      { step: "02", title: "Design", desc: "Our designers create wireframes and high-fidelity UI/UX prototypes for your approval." },
      { step: "03", title: "Development", desc: "Our developers build your solution using best practices and modern tech stack." },
      { step: "04", title: "Testing & Launch", desc: "Rigorous QA testing followed by a smooth, zero-downtime deployment." },
    ],
  },
  "mobile-app-development": {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "We create feature-rich, performant mobile applications for iOS and Android platforms. Whether you need a consumer app, enterprise tool, or marketplace, we deliver apps that users love.",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    hero: "Build mobile apps that users download, use, and recommend.",
    mediaUrl: "https://i.pinimg.com/736x/f6/cc/5b/f6cc5b3dc4db994b22c7a26c4f74d533.jpg",
    mediaType: "image",
    features: ["React Native Cross-Platform Apps", "Flutter Development", "Native iOS (Swift) & Android (Kotlin)", "App Store & Play Store Submission", "Push Notifications & Deep Linking", "Offline-First Architecture", "In-App Purchases & Subscriptions", "Mobile Analytics Integration"],
    process: [
      { step: "01", title: "Requirements", desc: "Define app scope, user flows, and platform strategy." },
      { step: "02", title: "UI/UX Design", desc: "Mobile-first design with native platform guidelines." },
      { step: "03", title: "Development", desc: "Agile sprints with regular demo builds for feedback." },
      { step: "04", title: "Launch & Support", desc: "App store submission, launch, and ongoing maintenance." },
    ],
  },
  "ai-ml-solutions": {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "We harness the power of Artificial Intelligence and Machine Learning to build intelligent systems that automate tasks, predict outcomes, and deliver actionable insights for your business.",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    hero: "Build intelligent systems that learn, adapt, and grow with your business.",
    mediaUrl: "https://v1.pinimg.com/videos/iht/expMp4/88/44/7b/88447b707f483e52ecf9d092efefed96_720w.mp4",
    mediaType: "video",
    features: ["Custom ML Model Development", "Natural Language Processing (NLP)", "Computer Vision Systems", "Predictive Analytics & Forecasting", "AI Chatbots & Virtual Assistants", "Recommendation Engines", "MLOps & Model Deployment", "Data Pipeline Engineering"],
    process: [
      { step: "01", title: "Data Analysis", desc: "Assess your data quality, quantity, and AI readiness." },
      { step: "02", title: "Model Design", desc: "Select and architect the right ML approach for your problem." },
      { step: "03", title: "Training", desc: "Train, validate, and optimize models on your data." },
      { step: "04", title: "Deploy & Monitor", desc: "Production deployment with monitoring and continuous improvement." },
    ],
  },
  "game-development": {
    icon: Gamepad2,
    title: "Game Development",
    description: "We create immersive, engaging games for mobile, web, and desktop platforms. From educational games to action-packed 3D experiences, our creative team brings your vision to life.",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    hero: "Create games that captivate, entertain, and educate.",
    mediaUrl: "https://v1.pinimg.com/videos/iht/h265-pt-mp4/af/bb/23/afbb23e6fac1ce0db9d4914149e9de22_720w_t2.mp4",
    mediaType: "video",
    features: ["Unity 3D Game Development", "2D Mobile Game Development", "Web-Based HTML5 Games", "Educational & Serious Games", "AR/VR Experiences", "Game Art & Animation", "Multiplayer & Backend Systems", "Game Monetization"],
    process: [
      { step: "01", title: "Concept", desc: "Game design document, mechanics definition, and art direction." },
      { step: "02", title: "Prototype", desc: "Rapid playable prototype for feedback and iteration." },
      { step: "03", title: "Development", desc: "Full production with regular milestone deliveries." },
      { step: "04", title: "Release", desc: "QA, performance optimization, and platform launch." },
    ],
  },
  "digital-marketing": {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "We drive measurable business growth through data-driven digital marketing strategies. From SEO to paid advertising, content marketing to social media — we grow your brand online.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    hero: "Grow your brand, reach more customers, and maximize ROI.",
    mediaUrl: "https://i.pinimg.com/736x/d4/0b/c4/d40bc4c718b5de3615f4ffc0a1a45749.jpg",
    mediaType: "image",
    features: ["Search Engine Optimization (SEO)", "Google Ads & PPC Management", "Facebook & Instagram Advertising", "Social Media Management", "Content Marketing & Blogging", "Email Marketing Campaigns", "Analytics & Reporting", "Conversion Rate Optimization"],
    process: [
      { step: "01", title: "Audit", desc: "Comprehensive audit of your current digital presence and competitors." },
      { step: "02", title: "Strategy", desc: "Custom marketing strategy tailored to your goals and budget." },
      { step: "03", title: "Execute", desc: "Campaign launch with creative assets and copy." },
      { step: "04", title: "Optimize", desc: "Data analysis, A/B testing, and continuous optimization." },
    ],
  },
  "graphic-designing": {
    icon: Palette,
    title: "Graphic Designing",
    description: "We create compelling visual experiences that communicate your brand story, engage your audience, and leave a lasting impression across all touchpoints.",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    hero: "Design that speaks louder than words.",
    mediaUrl: "https://v1.pinimg.com/videos/iht/av1Mp4-enabled-v2/d6/8e/9d/d68e9d9d8e47ce4ded9d7a5c4d67b251_720w.mp4",
    mediaType: "video",
    features: ["Logo & Brand Identity Design", "Social Media Creatives", "Marketing Materials & Collateral", "Brochures, Flyers & Banners", "Packaging Design", "Motion Graphics & Animations", "Infographic Design", "Print & Digital Illustrations"],
    process: [
      { step: "01", title: "Brief", desc: "Understand brand values, target audience, and design requirements." },
      { step: "02", title: "Concepts", desc: "Multiple creative concepts and mood boards for direction." },
      { step: "03", title: "Design", desc: "Refine chosen concept into polished, final designs." },
      { step: "04", title: "Delivery", desc: "All files in required formats for print and digital use." },
    ],
  },
  "ui-ux-design": {
    icon: Layers,
    title: "UI/UX Design",
    description: "We create user-centered digital experiences that are intuitive, beautiful, and effective. Our design process combines research, creativity, and testing to deliver exceptional interfaces.",
    color: "#3730a3",
    gradient: "linear-gradient(135deg, #3730a3, #6366f1)",
    hero: "Design experiences that users find intuitive and enjoyable.",
    mediaUrl: "https://v1.pinimg.com/videos/iht/expMp4/v2/37/b4/0a/37b40abb9e9e5b45d553428739bb7c78_720w.mp4",
    mediaType: "video",
    features: ["User Research & Personas", "Information Architecture", "Wireframing & Prototyping", "High-Fidelity UI Design", "Design Systems & Component Libraries", "Usability Testing", "Accessibility (WCAG) Compliance", "Figma, Adobe XD, Sketch"],
    process: [
      { step: "01", title: "Research", desc: "User interviews, surveys, and competitor analysis." },
      { step: "02", title: "Architecture", desc: "Information architecture, user flows, and wireframes." },
      { step: "03", title: "Design", desc: "High-fidelity designs and interactive prototypes." },
      { step: "04", title: "Validate", desc: "Usability testing and iteration based on feedback." },
    ],
  },
  "custom-software": {
    icon: Settings2,
    title: "Custom Software Development",
    description: "We build enterprise-grade custom software solutions tailored precisely to your business workflows. From internal tools to client-facing platforms, we deliver software that scales with your needs.",
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    hero: "Software built exactly the way your business needs it.",
    mediaUrl: "https://v1-c.pinimg.com/videos/iht/hevcMp4V2/e9/26/7b/e9267b8e087bacdd1097880063fb4be2_t3.mp4",
    mediaType: "video",
    features: ["Business Process Automation", "ERP & CRM Development", "Inventory & Order Management", "Document Management Systems", "Data Analytics Dashboards", "Third-party API Integrations", "Legacy System Modernization", "Cloud Migration"],
    process: [
      { step: "01", title: "Analysis", desc: "Deep-dive into your business processes and pain points." },
      { step: "02", title: "Architecture", desc: "System design, database schema, and technology selection." },
      { step: "03", title: "Build", desc: "Iterative development with weekly demos and feedback." },
      { step: "04", title: "Deploy", desc: "Testing, staff training, deployment, and support." },
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px", paddingTop: "80px" }}>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem" }}>Service not found</h1>
        <Link href="/services" className="btn-primary">Back to Services</Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <div style={{ background: service.gradient, padding: "140px 0 80px", position: "relative", overflow: "hidden" }}>
        {service.mediaType === "video" && service.mediaUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          >
            <source src={service.mediaUrl} type="video/mp4" />
          </video>
        ) : service.mediaType === "image" && service.mediaUrl ? (
          <img
            src={service.mediaUrl}
            alt=""
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          />
        ) : null}
        <div style={{ position: "absolute", inset: 0, background: service.mediaUrl ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.2)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Link href="/services" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            ← Back to Services
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
            <div style={{ width: "72px", height: "72px", background: "rgba(255,255,255,0.2)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={36} style={{ color: "white" }} />
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "4px" }}>Our Service</p>
              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", color: "white" }}>{service.title}</h1>
            </div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.2rem", maxWidth: "600px", lineHeight: "1.7" }}>{service.hero}</p>
        </div>
      </div>

      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start", gap: "80px" }}>
            <div>
              <h2 className="section-title">About This <span className="gradient-text">Service</span></h2>
              <p style={{ color: "#4a4e7a", fontSize: "16px", lineHeight: "1.9", marginBottom: "40px" }}>{service.description}</p>

              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", color: "#0a0a0f", marginBottom: "24px" }}>What&apos;s Included</h3>
              <div className="responsive-grid" style={{ gridTemplateColumns: "1fr", gap: "12px", marginBottom: "40px" }}>
                {service.features.map((feat) => (
                  <div key={feat} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle size={16} style={{ color: service.color, flexShrink: 0 }} />
                    <span style={{ fontSize: "15px", color: "#2d3160", fontWeight: "500" }}>{feat}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" id={`service-detail-cta-${slug}`} className="btn-primary">
                  Get a Quote <ArrowRight size={16} />
                </Link>
                <Link href="/portfolio" id={`service-portfolio-${slug}`} className="btn-secondary">
                  View Projects
                </Link>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", color: "#0a0a0f", marginBottom: "32px" }}>Our Process</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {service.process.map((step, i) => (
                  <div
                    key={i}
                    id={`process-step-${i}`}
                    style={{
                      display: "flex",
                      gap: "20px",
                      padding: "24px",
                      background: "var(--gray-50)",
                      borderRadius: "16px",
                      border: "1px solid var(--gray-100)",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: service.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: "800",
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", fontWeight: "700", color: "#0a0a0f", marginBottom: "6px" }}>{step.title}</h4>
                      <p style={{ fontSize: "14px", color: "#6b6fa0", lineHeight: "1.6" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Panel */}
              <div
                style={{
                  background: service.gradient,
                  borderRadius: "20px",
                  padding: "32px",
                  marginTop: "32px",
                  textAlign: "center",
                }}
              >
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", color: "white", marginBottom: "12px" }}>
                  Ready to Start?
                </h4>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", marginBottom: "20px" }}>
                  Get a free consultation and project estimate today.
                </p>
                <Link href="/contact" className="btn-white" style={{ fontSize: "14px" }}>
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
