"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "genzdevoff@gmail.com",
    sub: "We reply within 24 hours",
    href: "mailto:genzdevoff@gmail.com",
    color: "#6366f1",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 81249 96319",
    sub: "Mon-Sat, 9am to 6pm IST",
    href: "tel:+918124996319",
    color: "#10b981",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "+91 81249 96319",
    sub: "Chat with us directly",
    href: "https://wa.me/918124996319",
    color: "#25d366",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Tamil Nadu, India",
    sub: "Appointment recommended",
    href: "#",
    color: "#f43f5e",
  },
];

const socialLinks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    href: "#",
    label: "LinkedIn",
    color: "#0077b5"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    href: "#",
    label: "Instagram",
    color: "#e1306c"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
    href: "#",
    label: "Facebook",
    color: "#1877f2"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
      </svg>
    ),
    href: "#",
    label: "Twitter/X",
    color: "#000"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ),
    href: "#",
    label: "YouTube",
    color: "#ff0000"
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'Contact Page', ...formData }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", service: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            <Mail size={13} /> Get In Touch
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Contact <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Us</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Have a project idea? Want to enroll in a course? Or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          {/* Contact Info Cards */}
          <div className="grid-4" style={{ marginBottom: "64px" }}>
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                id={`contact-info-${i}`}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="card"
                  style={{ textAlign: "center", cursor: "pointer" }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: `${item.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", fontWeight: "700", color: "#0a0a0f", marginBottom: "6px" }}>{item.title}</h4>
                  <p style={{ fontSize: "14px", color: "#2d3160", fontWeight: "600", marginBottom: "4px" }}>{item.detail}</p>
                  <p style={{ fontSize: "12px", color: "#9499c9" }}>{item.sub}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid-2" style={{ alignItems: "start" }}>
            {/* Contact Form */}
            <div>
              <div style={{ marginBottom: "32px" }}>
                <h2 className="section-title">Send Us a <span className="gradient-text">Message</span></h2>
                <p style={{ color: "#6b6fa0", fontSize: "15px" }}>Fill out the form and we'll get back to you within 24 hours.</p>
              </div>

              {submitted && (
                <div
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    marginBottom: "24px",
                    color: "#065f46",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  ✅ Thank you! Your message has been sent. We'll get back to you shortly.
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Full Name *</label>
                    <input id="contact-name" type="text" className="form-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email *</label>
                    <input id="contact-email" type="email" className="form-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">Phone</label>
                    <input id="contact-phone" type="tel" className="form-input" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-service">Service Interested In</label>
                    <select id="contact-service" className="form-input" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                      <option value="">Select a service</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>AI/ML Solutions</option>
                      <option>Digital Marketing</option>
                      <option>UI/UX Design</option>
                      <option>Courses & Training</option>
                      <option>Internship</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Subject *</label>
                  <input id="contact-subject" type="text" className="form-input" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="What's this about?" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message *</label>
                  <textarea id="contact-message" className="form-textarea" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project or inquiry..." style={{ minHeight: "150px" }} required />
                </div>
                <button id="contact-submit-btn" type="submit" className="btn-primary" style={{ justifyContent: "center", fontSize: "16px" }}>
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div>
              {/* Business Hours */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0d0f2b, #1e1b4b)",
                  borderRadius: "24px",
                  padding: "40px",
                  color: "white",
                  marginBottom: "24px",
                }}
              >
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "22px", fontWeight: "700", marginBottom: "24px" }}>Business Hours</h3>
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "12px 0",
                      borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>{h.day}</span>
                    <span style={{ color: "white", fontSize: "14px", fontWeight: "600" }}>{h.time}</span>
                  </div>
                ))}
                <div
                  style={{
                    marginTop: "24px",
                    padding: "16px",
                    background: "rgba(99,102,241,0.2)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Clock size={16} style={{ color: "#a5b4fc" }} />
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>Response time: Within 24 hours</span>
                </div>
              </div>

              {/* Social Links */}
              <div
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "40px",
                  border: "1px solid var(--gray-100)",
                  boxShadow: "0 4px 16px rgba(55,48,163,0.08)",
                }}
              >
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "22px", fontWeight: "700", color: "#0a0a0f", marginBottom: "24px" }}>Follow Us</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      id={`contact-social-${social.label.toLowerCase().replace(/\//g, "-")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "12px 16px",
                        borderRadius: "12px",
                        textDecoration: "none",
                        background: "var(--gray-50)",
                        border: "1px solid var(--gray-100)",
                        transition: "all 0.2s ease",
                        color: "#0a0a0f",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${social.color}10`;
                        e.currentTarget.style.borderColor = `${social.color}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "var(--gray-50)";
                        e.currentTarget.style.borderColor = "var(--gray-100)";
                      }}
                    >
                      <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `${social.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "700", color: social.color, flexShrink: 0 }}>
                        {social.icon}
                      </div>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
