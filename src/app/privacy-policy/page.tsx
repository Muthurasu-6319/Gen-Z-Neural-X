import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Gen Z Neural-X",
  description: "Read Gen Z Neural-X's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="page-hero" style={{ padding: "120px 0 60px" }}>
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", fontWeight: "900", color: "white", marginBottom: "16px" }}>Privacy Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px" }}>Last updated: June 15, 2026</p>
        </div>
      </div>

      <section className="section" style={{ background: "white" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {[
              {
                title: "1. Information We Collect",
                content: `We collect information you provide directly to us, such as when you:
• Fill out a contact form or inquiry
• Register for a course or internship
• Apply for a job
• Subscribe to our newsletter
• Use our products or services

The types of information we may collect include your name, email address, phone number, billing information, and any other information you choose to provide.`,
              },
              {
                title: "2. How We Use Your Information",
                content: `We use the information we collect to:
• Provide, maintain, and improve our services
• Process transactions and send related information
• Respond to your comments, questions, and requests
• Send marketing communications (with your consent)
• Monitor and analyze trends, usage, and activities
• Comply with legal obligations`,
              },
              {
                title: "3. Information Sharing",
                content: `We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except:
• With your consent
• To trusted third-party service providers who assist us in operating our website and conducting our business
• When required by law or to protect our rights
• In connection with a business transfer or merger`,
              },
              {
                title: "4. Data Security",
                content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.`,
              },
              {
                title: "5. Cookies",
                content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our website may not function properly without cookies.`,
              },
              {
                title: "6. Your Rights",
                content: `You have the right to:
• Access your personal data
• Correct inaccurate data
• Request deletion of your data
• Object to processing of your data
• Request restriction of processing
• Data portability

To exercise these rights, contact us at info@genzneuralx.com`,
              },
              {
                title: "7. Contact Us",
                content: `If you have any questions about this Privacy Policy, please contact us at:
Email: info@genzneuralx.com
Phone: +91 81249 96319, +91 86680 99358, +91 78718 03642
Address: Tamil Nadu, India`,
              },
            ].map((section, i) => (
              <div key={i} id={`privacy-section-${i}`}>
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
