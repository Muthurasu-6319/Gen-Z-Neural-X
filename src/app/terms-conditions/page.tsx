import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Gen Z Neural-X",
  description: "Read Gen Z Neural-X's terms and conditions for using our services, products, and training programs.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <div className="page-hero" style={{ padding: "120px 0 60px" }}>
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", fontWeight: "900", color: "white", marginBottom: "16px" }}>Terms & Conditions</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px" }}>Last updated: June 15, 2026</p>
        </div>
      </div>

      <section className="section" style={{ background: "white" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing and using Gen Z Neural-X's website, services, products, or training programs, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
              },
              {
                title: "2. Services Description",
                content: `Gen Z Neural-X provides:
• Technology development services (web, mobile, AI/ML, etc.)
• Software products (ERP, CRM, School Management, etc.)
• Training and education programs (courses, internships)
• Digital marketing and design services

All services are subject to separate service agreements and pricing as agreed upon with each client.`,
              },
              {
                title: "3. Course & Training Terms",
                content: `For our educational programs:
• Course fees are non-transferable to other individuals
• Certificates are issued only upon successful completion
• Students must maintain attendance requirements
• Plagiarism or dishonest conduct may result in program termination
• Course materials remain the intellectual property of Gen Z Neural-X`,
              },
              {
                title: "4. Payment Terms",
                content: `• Payments for services must be made as per the agreed schedule
• Course fees must be paid before accessing course materials
• All prices are in Indian Rupees (INR) unless stated otherwise
• Payment via bank transfer, UPI, or other approved methods
• GST and applicable taxes are additional`,
              },
              {
                title: "5. Intellectual Property",
                content: `All content on this website, including text, graphics, logos, and software, is the property of Gen Z Neural-X and protected by Indian and international intellectual property laws. Custom software developed for clients becomes the client's property upon full payment.`,
              },
              {
                title: "6. Limitation of Liability",
                content: `Gen Z Neural-X shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.`,
              },
              {
                title: "7. Governing Law",
                content: `These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Tamil Nadu, India.`,
              },
              {
                title: "8. Contact",
                content: `For questions about these Terms, contact us at info@genzneuralx.com`,
              },
            ].map((section, i) => (
              <div key={i} id={`terms-section-${i}`}>
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
