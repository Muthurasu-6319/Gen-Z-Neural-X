"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Trophy, ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch('/api/portfolio');
        const data = await res.json();
        if (data.portfolio && data.portfolio.length > 0) {
          // Sort by creation date
          const sorted = data.portfolio.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setProjects(sorted);
        } else {
          setProjects([]);
        }
      } catch (err) {
        console.error("Failed to fetch portfolio", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const handleCardClick = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            🏆 Our Work
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Portfolio & <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Case Studies</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Real projects, real results. See how we've helped businesses across industries achieve their digital goals.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)", minHeight: "60vh" }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: "center", padding: "100px 0", color: "var(--gray-500)" }}>
              <div className="animate-spin-slow" style={{ width: "40px", height: "40px", border: "4px solid var(--gray-300)", borderTopColor: "var(--primary)", borderRadius: "50%", margin: "0 auto 16px" }}></div>
              <p>Loading portfolio items...</p>
            </div>
          ) : projects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "100px 0", color: "var(--gray-500)" }}>
              <Trophy size={48} style={{ margin: "0 auto 16px", color: "var(--gray-300)" }} />
              <p style={{ fontSize: "18px", fontWeight: "600", color: "var(--gray-600)" }}>No portfolio items found.</p>
              <p>Projects added from the admin dashboard will appear here.</p>
            </div>
          ) : (
            <div className="grid-3">
              {projects.map((project) => {
                // Handle tech stack string to array conversion
                const techList = typeof project.tech === 'string' 
                  ? project.tech.split(',').map((t: string) => t.trim()) 
                  : Array.isArray(project.tech) ? project.tech : [];

                return (
                  <div
                    key={project.id}
                    id={`portfolio-${project.id}`}
                    className="card"
                    style={{ 
                      overflow: "hidden", 
                      padding: 0,
                      cursor: project.websiteUrl ? "pointer" : "default",
                      position: "relative"
                    }}
                    onClick={() => handleCardClick(project.websiteUrl)}
                  >
                    {/* Project Visual */}
                    <div
                      style={{
                        background: project.bgGradient || "var(--gradient-primary)",
                        height: "180px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          bottom: "-30px",
                          right: "-30px",
                          width: "120px",
                          height: "120px",
                          background: "rgba(255,255,255,0.1)",
                          borderRadius: "50%",
                        }}
                      />
                      
                      <span style={{ position: "relative", zIndex: 1 }}>
                        {project.imageUrl ? (
                          <img src={project.imageUrl} alt={project.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                        ) : project.logoUrl ? (
                          <img src={project.logoUrl} alt={project.client} style={{ width: "100px", height: "100px", objectFit: "contain", background: "white", padding: "10px", borderRadius: "12px" }} />
                        ) : (
                          <Trophy size={56} color="white" />
                        )}
                      </span>
                      
                      {!project.imageUrl && (
                        <span
                          style={{
                            position: "absolute",
                            top: "16px",
                            right: "16px",
                            padding: "4px 12px",
                            background: "rgba(255,255,255,0.2)",
                            borderRadius: "50px",
                            fontSize: "11px",
                            fontWeight: "600",
                            color: "white",
                          }}
                        >
                          {project.category}
                        </span>
                      )}
                    </div>

                    <div style={{ padding: "28px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <p style={{ fontSize: "11px", color: "#9499c9", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
                          Client: {project.client}
                        </p>
                        {project.websiteUrl && (
                          <ExternalLink size={16} color="var(--primary-light)" />
                        )}
                      </div>
                      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "19px", fontWeight: "700", color: "#0a0a0f", marginBottom: "10px" }}>
                        {project.title}
                      </h3>
                      <p style={{ fontSize: "13.5px", color: "#6b6fa0", lineHeight: "1.7", marginBottom: "16px" }}>
                        {project.description}
                      </p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                        {techList.map((t: string) => (
                          <span key={t} style={{ padding: "3px 10px", background: "var(--gray-100)", borderRadius: "50px", fontSize: "11px", fontWeight: "600", color: "#4a4e7a" }}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 14px",
                          background: `${project.categoryColor || '#6366f1'}10`,
                          borderRadius: "10px",
                          marginBottom: "0",
                        }}
                      >
                        <CheckCircle size={16} color={project.categoryColor || '#6366f1'} />
                        <span style={{ fontSize: "13px", color: project.categoryColor || '#6366f1', fontWeight: "600" }}>{project.result}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: "64px" }}>
            <Link href="/contact" id="portfolio-contact-cta" className="btn-primary">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
