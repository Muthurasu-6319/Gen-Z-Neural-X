import Link from "next/link";
import { Handshake, ArrowRight, Building2, Rocket, Layers, Sparkles } from "lucide-react";

export default function PartnersOverview() {
  return (
    <section className="section" style={{ background: "var(--gray-50)", position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", background: "rgba(99, 102, 241, 0.1)", color: "var(--primary)", borderRadius: "50px", fontWeight: "600", fontSize: "14px", marginBottom: "16px" }}>
            <Handshake size={16} /> Partner & Collaborate
          </div>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: "800", color: "var(--black)", marginBottom: "16px" }}>
            Grow Your Business With Our Engineering Expertise
          </h2>
          <p style={{ fontSize: "16px", color: "var(--gray-500)", maxWidth: "680px", margin: "0 auto" }}>
            Whether you are an agency scaling client delivery or a company looking to co-build high-impact products, we bring enterprise technology capabilities to your table.
          </p>
        </div>

        <div className="grid-2" style={{ gap: "32px" }}>
          {/* Card 1: Agency Partner Program */}
          <div style={{ 
            background: "white", 
            borderRadius: "24px", 
            padding: "40px", 
            border: "1px solid var(--gray-100)", 
            boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "120px", height: "120px", background: "rgba(99, 102, 241, 0.05)", borderRadius: "50%", zIndex: 0 }}></div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ width: "56px", height: "56px", background: "rgba(99, 102, 241, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "24px" }}>
                <Building2 size={28} />
              </div>
              <div style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary)", marginBottom: "8px" }}>
                For Marketing & Tech Agencies
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", fontWeight: "800", color: "var(--black)", marginBottom: "16px" }}>
                Agency Partner Program
              </h3>
              <p style={{ fontSize: "15px", color: "var(--gray-500)", lineHeight: "1.6", marginBottom: "24px" }}>
                Expand your agency's tech capabilities without hiring extra dev staff. We provide <strong>100% White-Label</strong> web, app, AI, and software development with attractive referral bonuses.
              </p>
              
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px", paddingLeft: 0, listStyle: "none" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--black)", fontWeight: "500" }}>
                  <span style={{ color: "#10b981", fontWeight: "700" }}>✓</span> 100% White-Label Client Delivery
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--black)", fontWeight: "500" }}>
                  <span style={{ color: "#10b981", fontWeight: "700" }}>✓</span> Lucrative Referral & Profit-Share Models
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--black)", fontWeight: "500" }}>
                  <span style={{ color: "#10b981", fontWeight: "700" }}>✓</span> Dedicated Lead Architect & Strict NDA
                </li>
              </ul>
            </div>

            <Link href="/partners?track=agency" className="btn-primary" style={{ display: "inline-flex", justifyContent: "center", padding: "14px 24px", width: "100%", gap: "8px" }}>
              Join Agency Network <ArrowRight size={18} />
            </Link>
          </div>

          {/* Card 2: Co-Build & Collaboration */}
          <div style={{ 
            background: "white", 
            borderRadius: "24px", 
            padding: "40px", 
            border: "1px solid var(--gray-100)", 
            boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "120px", height: "120px", background: "rgba(16, 185, 129, 0.05)", borderRadius: "50%", zIndex: 0 }}></div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ width: "56px", height: "56px", background: "rgba(16, 185, 129, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", marginBottom: "24px" }}>
                <Rocket size={28} />
              </div>
              <div style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#10b981", marginBottom: "8px" }}>
                For Companies & Founders
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", fontWeight: "800", color: "var(--black)", marginBottom: "16px" }}>
                Co-Build & Collaboration Studio
              </h3>
              <p style={{ fontSize: "15px", color: "var(--gray-500)", lineHeight: "1.6", marginBottom: "24px" }}>
                Have a breakthrough product idea or project? We partner with companies to co-create software, digital platforms, and industrial products as tech co-builders.
              </p>
              
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px", paddingLeft: 0, listStyle: "none" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--black)", fontWeight: "500" }}>
                  <span style={{ color: "#10b981", fontWeight: "700" }}>✓</span> End-to-End Tech Co-Founding & MVP Build
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--black)", fontWeight: "500" }}>
                  <span style={{ color: "#10b981", fontWeight: "700" }}>✓</span> Joint Ventures & Flexible Business Models
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--black)", fontWeight: "500" }}>
                  <span style={{ color: "#10b981", fontWeight: "700" }}>✓</span> Modern Stack: AI, SaaS, Cloud & Industrial IoT
                </li>
              </ul>
            </div>

            <Link href="/partners?track=cobuild" className="btn-secondary" style={{ display: "inline-flex", justifyContent: "center", padding: "14px 24px", width: "100%", gap: "8px" }}>
              Pitch Your Product Idea <Sparkles size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

