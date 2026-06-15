const stats = [
  { value: "200+", label: "Projects Delivered", icon: "🚀", description: "Across diverse industries" },
  { value: "50+", label: "Happy Clients", icon: "😊", description: "Worldwide customer base" },
  { value: "8+", label: "Core Services", icon: "⚡", description: "End-to-end solutions" },
  { value: "500+", label: "Students Trained", icon: "🎓", description: "Career transformations" },
  { value: "95%", label: "Client Retention", icon: "❤️", description: "Long-term partnerships" },
  { value: "3+", label: "Years Experience", icon: "🏆", description: "Industry expertise" },
];

export default function StatsSection() {
  return (
    <section id="stats" style={{ background: "white", padding: "0 0 80px" }}>
      <div className="container">
        <div
          style={{
            background: "linear-gradient(135deg, #0d0f2b 0%, #1e1b4b 50%, #0a0a0f 100%)",
            borderRadius: "32px",
            padding: "64px 48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                radial-gradient(circle at 10% 50%, rgba(99,102,241,0.15) 0%, transparent 40%),
                radial-gradient(circle at 90% 50%, rgba(6,182,212,0.1) 0%, transparent 40%)
              `,
            }}
          />
          <div className="responsive-grid" style={{ position: "relative" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                id={`stat-item-${index}`}
                style={{ textAlign: "center", padding: "8px" }}
              >
                <div style={{ fontSize: "32px", marginBottom: "8px" }}>{stat.icon}</div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "3rem",
                    fontWeight: "900",
                    background: "linear-gradient(135deg, #a5b4fc, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1",
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "white",
                    marginBottom: "4px",
                  }}
                >
                  {stat.label}
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
