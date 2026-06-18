"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ApplicationForm({ jobTitle, formType }: { jobTitle: string, formType: 'Internship' | 'Career' }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    location: "",
    resumeLink: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: `${formType} Application`,
          role: jobTitle,
          ...formData
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", college: "", location: "", resumeLink: "", message: "" });
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "16px", padding: "32px", textAlign: "center", color: "#065f46" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
        <h3 style={{ fontSize: "24px", fontWeight: "700", fontFamily: "'Outfit', sans-serif", marginBottom: "8px" }}>Application Submitted!</h3>
        <p>Thank you for applying for the <strong>{jobTitle}</strong> role. Our team will review your profile and get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: "white", borderRadius: "24px", padding: "40px", boxShadow: "0 8px 32px rgba(55,48,163,0.06)", border: "1px solid var(--gray-100)" }}>
      <h3 style={{ fontSize: "24px", fontWeight: "700", fontFamily: "'Outfit', sans-serif", marginBottom: "24px", color: "var(--black)" }}>Apply for this Role</h3>
      
      <div className="grid-2" style={{ marginBottom: "20px" }}>
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input type="text" className="form-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" required />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input type="email" className="form-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required />
        </div>
      </div>
      
      <div className="grid-2" style={{ marginBottom: "20px" }}>
        <div className="form-group">
          <label className="form-label">Phone Number *</label>
          <input type="tel" className="form-input" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" required />
        </div>
        <div className="form-group">
          <label className="form-label">Location (City, State) *</label>
          <input type="text" className="form-input" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="e.g. Chennai, Tamil Nadu" required />
        </div>
      </div>

      <div className="form-group" style={{ marginBottom: "20px" }}>
        <label className="form-label">College / University (or Current Company) *</label>
        <input type="text" className="form-input" value={formData.college} onChange={(e) => setFormData({ ...formData, college: e.target.value })} placeholder="Your institution or workplace" required />
      </div>

      <div className="form-group" style={{ marginBottom: "20px" }}>
        <label className="form-label">Resume / Portfolio Link (Optional but highly recommended)</label>
        <input type="url" className="form-input" value={formData.resumeLink} onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })} placeholder="Google Drive, LinkedIn, or Portfolio URL" />
      </div>

      <div className="form-group" style={{ marginBottom: "32px" }}>
        <label className="form-label">Cover Letter / Message</label>
        <textarea className="form-textarea" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us why you are a great fit for this role..." style={{ minHeight: "120px" }} />
      </div>

      <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "16px", padding: "16px" }} disabled={loading}>
        {loading ? "Submitting..." : "Submit Application"} <Send size={16} />
      </button>
    </form>
  );
}
