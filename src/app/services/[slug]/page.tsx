"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight, Globe, Smartphone, Brain, Gamepad2, TrendingUp, Palette, Layers, Settings2, Zap, Factory, Radio, Cpu, Wifi, Activity, BarChart3, Database } from "lucide-react";
import { useParams } from "next/navigation";

import React from "react";

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
  // ─── Industrial Automation Solutions ───────────────────────────────────────
  "energy-management-system": {
    icon: Zap,
    title: "Energy Management System (EMS)",
    description: "Gen Z Neural-X delivers advanced Energy Management Systems (EMS) that help factories in Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar district slash energy costs by up to 30%. Our EMS solutions provide real-time monitoring of power consumption, automated load balancing, demand forecasting, and ISO 50001-compliant reporting — giving industrial facilities full control over their energy footprint.",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    hero: "Cut energy bills by up to 30% with intelligent EMS for your factory.",
    mediaUrl: "https://i.pinimg.com/736x/e1/b1/2c/e1b12c3b8d9e9f7e6a5d4c3b2a1f0e9d.jpg",
    mediaType: "image",
    features: [
      "Real-time Energy Monitoring (kWh, kVA, PF)",
      "Automated Demand & Load Management",
      "Power Quality Analysis",
      "Solar & Renewable Integration",
      "Carbon Footprint & Sustainability Reports",
      "ISO 50001 Compliance Dashboard",
      "Billing & Cost Allocation",
      "Mobile Alerts & Anomaly Detection",
    ],
    process: [
      { step: "01", title: "Energy Audit", desc: "Comprehensive assessment of current energy usage patterns, peak loads, and wastage points across your facility." },
      { step: "02", title: "System Design", desc: "Custom EMS architecture with metering points, communication protocols (Modbus, BACnet), and dashboard design." },
      { step: "03", title: "Installation & Integration", desc: "Hardware installation, PLC/SCADA integration, and cloud platform setup with data historian." },
      { step: "04", title: "Optimization & Support", desc: "Continuous monitoring, monthly energy reports, and 24/7 support from our team in Srivilliputtur." },
    ],
  },
  "manufacturing-execution-system": {
    icon: Factory,
    title: "Manufacturing Execution System (MES)",
    description: "Our Manufacturing Execution System (MES) solutions give factories in Sivakasi, Srivilliputtur, Rajapalayam, and across Virudhunagar district complete visibility and control over shop-floor operations. From production order management to quality control, OEE tracking, and ERP/SAP connectivity — we bridge the gap between your factory floor and your business systems.",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    hero: "Full shop-floor visibility and production control with MES.",
    mediaUrl: "https://i.pinimg.com/736x/a2/b3/c4/a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7.jpg",
    mediaType: "image",
    features: [
      "Production Order & Work Order Management",
      "Real-time Work-in-Progress Tracking",
      "Quality Control & Inspection (SPC)",
      "ERP / SAP / Tally Integration",
      "OEE (Availability, Performance, Quality) Calculation",
      "Material & Batch Traceability",
      "Downtime Cause Analysis",
      "Shift-wise Production Reports",
    ],
    process: [
      { step: "01", title: "Process Mapping", desc: "Document your production workflows, routing, and quality checkpoints to design the MES architecture." },
      { step: "02", title: "MES Configuration", desc: "Configure production modules, define products, BOMs, routings, and integrate with existing ERP systems." },
      { step: "03", title: "Shopfloor Integration", desc: "Connect PLCs, barcode scanners, machines, and operator terminals to the MES platform." },
      { step: "04", title: "Training & Go-Live", desc: "Operator and supervisor training, parallel run, then full go-live with ongoing support from our Srivilliputtur team." },
    ],
  },
  "scada-development": {
    icon: Radio,
    title: "SCADA Development",
    description: "Gen Z Neural-X designs and deploys custom SCADA (Supervisory Control and Data Acquisition) systems for industries across Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar district. Whether for water treatment, power distribution, chemical processing, or firecracker manufacturing — our SCADA solutions deliver 24/7 remote visibility, alarm management, and historical data logging that keeps your plant running safely.",
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444, #f97316)",
    hero: "24/7 plant visibility and remote control with custom SCADA.",
    mediaUrl: "https://i.pinimg.com/736x/f1/e2/d3/f1e2d3c4b5a6978899aabbccddeeff00.jpg",
    mediaType: "image",
    features: [
      "Custom HMI / SCADA Screen Design",
      "Remote Monitoring & Control (OPC-UA, Modbus)",
      "Multi-Level Alarm & Notification System",
      "Historical Data Logging & Trending",
      "Multi-site & Multi-plant Connectivity",
      "Role-Based Access Control",
      "Redundancy & Failover Architecture",
      "IEC 62443 Cybersecurity Compliance",
    ],
    process: [
      { step: "01", title: "Requirement Study", desc: "Analyze process P&IDs, control philosophy, and communication architecture for your plant." },
      { step: "02", title: "SCADA Design", desc: "Design HMI screens, database tags, alarm matrices, and network topology for reliable operation." },
      { step: "03", title: "Development & Testing", desc: "Factory Acceptance Testing (FAT) in our Srivilliputtur facility before site commissioning." },
      { step: "04", title: "Site Commissioning", desc: "On-site installation, Site Acceptance Testing (SAT), operator training, and handover documentation." },
    ],
  },
  "plc-programming": {
    icon: Cpu,
    title: "PLC Programming",
    description: "Our PLC programmers serve industries across Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar district with expert programming for Siemens, Allen-Bradley, Mitsubishi, and Delta platforms. From firecracker plant conveyors to textile machinery and chemical batch processes — we deliver safe, reliable, and well-documented PLC code on time.",
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    hero: "Reliable PLC programming for every automation challenge in Tamil Nadu.",
    mediaUrl: "https://i.pinimg.com/736x/c3/d4/e5/c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8.jpg",
    mediaType: "image",
    features: [
      "Siemens S7-300/400/1200/1500 (TIA Portal)",
      "Allen-Bradley / Rockwell (Studio 5000)",
      "Mitsubishi FX / Q / iQ-R Series",
      "Delta DVP & AS Series",
      "Ladder Logic, FBD, Structured Text",
      "Panel Design, BOM & Wiring Diagrams",
      "Safety PLC (SIL 2/3) Programming",
      "Commissioning, Testing & Documentation",
    ],
    process: [
      { step: "01", title: "Scope Definition", desc: "Review control philosophy, I/O lists, and machine sequences to plan the PLC program architecture." },
      { step: "02", title: "Panel Engineering", desc: "Panel layout design, BOM preparation, wiring diagrams, and UL/CE compliance documentation." },
      { step: "03", title: "Programming & FAT", desc: "PLC code development, HMI integration, and Factory Acceptance Testing at our Srivilliputtur workshop." },
      { step: "04", title: "Site Commissioning", desc: "On-site wiring, loop checks, commissioning, training, and as-built documentation delivery." },
    ],
  },
  "industrial-iot-solutions": {
    icon: Wifi,
    title: "Industrial IoT Solutions",
    description: "Gen Z Neural-X connects factory floors to the cloud with Industrial IoT (IIoT) solutions built for industries in Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar district. We integrate sensors, edge gateways, and cloud analytics platforms to enable predictive maintenance, remote asset management, and real-time operational intelligence — transforming physical machines into smart connected assets.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    hero: "Transform your factory floor into a smart, connected operation with IIoT.",
    mediaUrl: "https://i.pinimg.com/736x/d4/e5/f6/d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9.jpg",
    mediaType: "image",
    features: [
      "Industrial Sensor & Device Integration",
      "Edge Computing Gateways (Raspberry Pi, IPC)",
      "OPC-UA, MQTT, Modbus, PROFINET Protocols",
      "Cloud IoT Platform (AWS IoT, Azure IoT)",
      "Predictive Maintenance AI Models",
      "Remote Asset Monitoring & Management",
      "Digital Twin Development",
      "Cybersecurity & Firewall Configuration",
    ],
    process: [
      { step: "01", title: "IIoT Readiness Assessment", desc: "Evaluate existing machines, PLCs, and network infrastructure for IIoT connectivity potential." },
      { step: "02", title: "Architecture Design", desc: "Design edge-to-cloud data flow, select protocols, and plan cybersecurity measures." },
      { step: "03", title: "Deployment & Integration", desc: "Install edge gateways, configure data pipelines, and integrate with SCADA/MES/ERP systems." },
      { step: "04", title: "Analytics & Optimization", desc: "Deploy AI/ML models for predictive maintenance and continuously optimize with operational data." },
    ],
  },
  "machine-monitoring-systems": {
    icon: Activity,
    title: "Machine Monitoring Systems",
    description: "Our Machine Monitoring Systems keep factories in Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar running at peak efficiency. By continuously tracking vibration, temperature, current draw, and other health indicators, we detect faults before they become failures — minimizing downtime, reducing maintenance costs, and maximizing Overall Equipment Effectiveness (OEE).",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    hero: "Maximize OEE and eliminate unplanned downtime with smart machine monitoring.",
    mediaUrl: "https://i.pinimg.com/736x/e5/f6/a7/e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.jpg",
    mediaType: "image",
    features: [
      "Vibration, Temperature & Current Monitoring",
      "OEE (Availability × Performance × Quality)",
      "Real-Time Fault Detection & Alerting",
      "Planned vs. Unplanned Downtime Analysis",
      "Condition-Based Maintenance Scheduling",
      "Mobile Push Notifications",
      "Multi-machine & Multi-line Dashboard",
      "Historical Trend & Root Cause Reports",
    ],
    process: [
      { step: "01", title: "Machine Assessment", desc: "Identify critical machines, define monitoring points, and select appropriate sensors for each asset." },
      { step: "02", title: "Sensor Installation", desc: "Install non-intrusive sensors, wire to DAQ modules, and commission data collection at your facility." },
      { step: "03", title: "Dashboard Setup", desc: "Configure real-time dashboards, set alarm thresholds, and connect mobile notification channels." },
      { step: "04", title: "AI Tuning & Support", desc: "Fine-tune anomaly detection models over 30 days and provide ongoing maintenance support." },
    ],
  },
  "production-dashboards": {
    icon: BarChart3,
    title: "Production Dashboards",
    description: "Gen Z Neural-X builds custom production dashboards that give factories in Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar district instant visibility into manufacturing performance. From live plant-floor TV displays to executive mobile dashboards — every stakeholder gets the right KPIs in the right format, in real time.",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    hero: "Every decision maker gets the manufacturing data they need, instantly.",
    mediaUrl: "https://i.pinimg.com/736x/f6/a7/b8/f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1.jpg",
    mediaType: "image",
    features: [
      "Real-Time KPI Displays (OEE, Output, Scrap)",
      "Plant-Floor TV / Andon Board Dashboards",
      "Shift, Daily & Weekly Production Reports",
      "Multi-line / Multi-plant Consolidated Views",
      "Role-Based Access (Operator, Supervisor, Manager)",
      "Mobile-First Responsive Dashboards",
      "Drill-Down Analytics by Line / Machine / SKU",
      "Integration with ERP, MES & SCADA",
    ],
    process: [
      { step: "01", title: "KPI Definition", desc: "Workshop with management to define critical KPIs, report formats, and user personas for each dashboard." },
      { step: "02", title: "Data Architecture", desc: "Design data sources, integration layer, and real-time data pipeline from shop floor systems." },
      { step: "03", title: "Dashboard Development", desc: "Build interactive dashboards with drill-down capability, custom branding, and role-based views." },
      { step: "04", title: "Deployment & Training", desc: "Deploy on-premise or cloud, install plant-floor displays, and train all user levels." },
    ],
  },
  "industrial-data-analytics": {
    icon: Database,
    title: "Industrial Data Analytics & Reporting",
    description: "Gen Z Neural-X transforms raw industrial data into actionable intelligence for manufacturers across Sivakasi, Srivilliputtur, Rajapalayam, and Virudhunagar district. We build end-to-end data pipelines, analytics engines, and automated reporting systems that help plant managers make faster, smarter decisions — reducing waste, improving quality, and boosting profitability.",
    color: "#3730a3",
    gradient: "linear-gradient(135deg, #3730a3, #6366f1)",
    hero: "Turn raw factory data into measurable business improvements.",
    mediaUrl: "https://i.pinimg.com/736x/a7/b8/c9/a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2.jpg",
    mediaType: "image",
    features: [
      "Industrial Data Lake & Historian Architecture",
      "Statistical Process Control (SPC) Charts",
      "Root Cause Analysis (Pareto, Fishbone, 5-Why)",
      "Predictive Quality & Yield Models (ML)",
      "Custom Report Builder & Scheduler",
      "Power BI / Grafana / Tableau Integration",
      "Automated Email & WhatsApp Report Delivery",
      "Data Governance & Security",
    ],
    process: [
      { step: "01", title: "Data Discovery", desc: "Map all data sources (PLCs, SCADA, ERP, lab systems) and assess data quality and completeness." },
      { step: "02", title: "Data Engineering", desc: "Build ETL pipelines, data lake, and a unified analytics schema for reliable reporting." },
      { step: "03", title: "Analytics Development", desc: "Develop SPC charts, predictive models, and custom dashboards tailored to your KPIs." },
      { step: "04", title: "Insights & Iteration", desc: "Monthly insights review with your team and continuous model improvement based on new data." },
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
