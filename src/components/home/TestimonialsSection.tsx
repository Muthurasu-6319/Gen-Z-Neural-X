import { Star, Quote, MessageCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Krishnamurthy",
    role: "CEO, TechVenture India",
    avatar: "AK",
    color: "#6366f1",
    rating: 5,
    text: "Gen Z Neural-X transformed our entire digital infrastructure. Their AI solutions reduced our operational costs by 40% and the team was exceptional throughout the project.",
  },
  {
    id: 2,
    name: "Priya Sundaram",
    role: "Founder, EduSpark",
    avatar: "PS",
    color: "#06b6d4",
    rating: 5,
    text: "We partnered with them for our e-learning platform and the results exceeded all expectations. The platform handles 5000+ users daily without any hiccups.",
  },
  {
    id: 3,
    name: "Rahul Venkatesh",
    role: "CTO, RetailMax",
    avatar: "RV",
    color: "#10b981",
    rating: 5,
    text: "Their MERN stack course is incredibly well-structured. I went from knowing nothing to landing a full-time developer job in just 4 months. Absolutely worth it!",
  },
  {
    id: 4,
    name: "Sneha Iyer",
    role: "Digital Marketing Head",
    avatar: "SI",
    color: "#f59e0b",
    rating: 5,
    text: "The digital marketing strategies they implemented tripled our online leads within 3 months. Professional, data-driven, and highly responsive team.",
  },
  {
    id: 5,
    name: "Karthik Rajan",
    role: "Internship Graduate",
    avatar: "KR",
    color: "#8b5cf6",
    rating: 5,
    text: "The internship program gave me real-world experience that no other company could offer. I built production-level projects and got my certificate which helped me land a great job.",
  },
  {
    id: 6,
    name: "Meena Devi",
    role: "Principal, Lakshmi Academy",
    avatar: "MD",
    color: "#f43f5e",
    rating: 5,
    text: "Their School Management System completely digitized our school operations. Parent communication, fees, attendance — everything is now automated and seamless.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-tag">
            <MessageCircle size={14} /> Testimonials
          </div>
          <h2 className="section-title">
            What Our Clients <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Real feedback from real clients and students who have experienced the Gen Z Neural-X difference.
          </p>
        </div>

        <div className="grid-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="card"
              style={{ position: "relative" }}
            >
              <Quote
                size={40}
                style={{
                  color: `${t.color}20`,
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  fill: `${t.color}15`,
                }}
              />
              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
                ))}
              </div>

              <p style={{ fontSize: "14.5px", color: "#4a4e7a", lineHeight: "1.8", marginBottom: "24px" }}>
                &quot;{t.text}&quot;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: "700",
                    fontSize: "15px",
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: "600", fontSize: "14px", color: "#0a0a0f" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "#9499c9" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
