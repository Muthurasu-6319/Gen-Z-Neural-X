import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Gen Z Neural-X",
  description: "Gen Z Neural-X's refund policy for courses, services, and products. Learn about our cancellation and refund procedures.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <div className="page-hero" style={{ padding: "120px 0 60px" }}>
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", fontWeight: "900", color: "white", marginBottom: "16px" }}>Refund Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px" }}>Last updated: June 15, 2026</p>
        </div>
      </div>

      <section className="section" style={{ background: "white" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          {/* Quick Reference */}
          <div
            style={{
              background: "rgba(99,102,241,0.06)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: "20px",
              padding: "32px",
              marginBottom: "48px",
            }}
          >
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "#0a0a0f", marginBottom: "20px" }}>
              Quick Reference — Refund Eligibility
            </h3>
            <div className="responsive-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { scenario: "Course cancelled by us", refund: "100% Refund", color: "#10b981" },
                { scenario: "Within 3 days of enrollment", refund: "100% Refund", color: "#10b981" },
                { scenario: "4-7 days after enrollment", refund: "50% Refund", color: "#f59e0b" },
                { scenario: "After 7 days / after access", refund: "No Refund", color: "#f43f5e" },
                { scenario: "Technical issues (our fault)", refund: "Full Refund", color: "#10b981" },
                { scenario: "Service project cancellation", refund: "Case-by-case", color: "#6366f1" },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", background: "white", borderRadius: "10px", border: "1px solid var(--gray-100)" }}>
                  <span style={{ fontSize: "13px", color: "#2d3160", fontWeight: "500" }}>{row.scenario}</span>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: row.color }}>{row.refund}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {[
              {
                title: "1. Course Refund Policy",
                content: `Our course refund policy is as follows:

Full Refund (100%):
• If the course is cancelled by Gen Z Neural-X
• If you request a refund within 3 days of enrollment and have not accessed more than 20% of the content

Partial Refund (50%):
• If you request a refund between 4-7 days of enrollment

No Refund:
• After 7 days of enrollment
• If more than 50% of course content has been accessed
• If a certificate has been issued

To request a refund, email us at genzdevoff@gmail.com with your order details and reason.`,
              },
              {
                title: "2. Service/Project Refund Policy",
                content: `For development and marketing services:

• Milestone-based refunds will be processed as per the project agreement
• If we fail to deliver as per the signed agreement, a proportional refund will be issued
• Deposits paid for project initiation are non-refundable once work has commenced
• Any refund disputes will be reviewed on a case-by-case basis

We recommend reviewing project proposals carefully before signing agreements.`,
              },
              {
                title: "3. Product Refund Policy",
                content: `For software products:

• A 14-day free trial is available for most products — evaluate before purchasing
• Annual subscription refunds are available within 7 days of purchase
• Monthly subscriptions are not refunded mid-cycle
• If a product is found to have critical bugs not mentioned in documentation, a full refund is issued`,
              },
              {
                title: "4. How to Request a Refund",
                content: `To request a refund:

1. Email us at genzdevoff@gmail.com with subject "Refund Request"
2. Include your order ID, name, and reason for refund
3. Our team will review and respond within 3-5 business days
4. Approved refunds are processed within 7-10 business days to the original payment method`,
              },
              {
                title: "5. Contact Us",
                content: `For refund inquiries, contact us at:
Email: genzdevoff@gmail.com
Phone: +91 63 1900 0000
Hours: Monday-Saturday, 9am-6pm IST`,
              },
            ].map((section, i) => (
              <div key={i} id={`refund-section-${i}`}>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", color: "#0a0a0f", marginBottom: "16px" }}>
                  {section.title}
                </h2>
                <p style={{ color: "#4a4e7a", fontSize: "15px", lineHeight: "1.9", whiteSpace: "pre-line" }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
