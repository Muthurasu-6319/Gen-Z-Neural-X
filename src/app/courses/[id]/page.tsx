"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, Users, Award, BookOpen, Star, MessageCircle, Loader2, X, MapPin, GraduationCap, User, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: string;
  rating: string;
  level: string;
  imageUrl: string;
  syllabus: string;
  mode: string;
  certification: boolean;
  whatsappMessage: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string;
}

const levelColors: Record<string, string> = {
  Beginner: "#10b981",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444",
};

export default function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  const router = useRouter();

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [college, setCollege] = useState("");

  useEffect(() => {
    fetch(`/api/courses/${id}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        if (d.course) {
          setCourse(d.course);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const handleEnrollClick = () => {
    setShowModal(true);
  };

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) return;

    let baseMsg = course.whatsappMessage || `Hi! I'm interested in the *${course.title}* course at Gen Z Neural-X.`;
    
    let userDetails = `\n\n*My Details:*`;
    userDetails += `\nName: ${name}`;
    userDetails += `\nLocation: ${location}`;
    if (college) {
      userDetails += `\nCollege Name: ${college}`;
    }
    
    const finalMsg = baseMsg + userDetails;
    const encoded = encodeURIComponent(finalMsg);
    window.open(`https://wa.me/918124996319?text=${encoded}`, "_blank");
    setShowModal(false);
  };

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh", flexDirection: "column", gap: 16 }}>
        <Loader2 size={40} style={{ color: "var(--primary-light)", animation: "spin 1s linear infinite" }} />
        <p style={{ color: "var(--gray-500)" }}>Loading course details...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px", color: "var(--gray-500)", minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <BookOpen size={48} style={{ margin: "0 auto 16px", opacity: 0.4 }} />
        <h3 style={{ fontSize: "20px", marginBottom: 8 }}>Course Not Found</h3>
        <button onClick={() => router.push("/courses")} style={{ marginTop: 16, padding: "8px 16px", background: "var(--primary)", color: "white", borderRadius: "8px", border: "none", cursor: "pointer" }}>Back to Courses</button>
      </div>
    );
  }

  const syllabusItems = typeof course.syllabus === "string"
    ? course.syllabus.split(",").map((s) => s.trim()).filter(Boolean)
    : [];
  const accentColor = levelColors[course.level] || "#6366f1";

  return (
    <>
      {/* ── HERO ── */}
      <div className="page-hero" style={{ padding: "120px 0 60px" }}>
        <div className="container" style={{ position: "relative" }}>
          <Link href="/courses" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            <ArrowLeft size={14} /> Back to Courses
          </Link>
          <br/>
          <span
            style={{
              padding: "6px 16px",
              background: "rgba(99,102,241,0.3)",
              border: "1px solid rgba(99,102,241,0.4)",
              borderRadius: "50px",
              fontSize: "12px",
              fontWeight: "700",
              color: "#a5b4fc",
              display: "inline-block",
              marginBottom: "16px",
            }}
          >
            {course.level} Level
          </span>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: "900", color: "white", marginBottom: "20px", maxWidth: "800px", lineHeight: "1.2" }}>
            {course.title}
          </h1>
          <div style={{ display: "flex", gap: "24px", color: "rgba(255,255,255,0.7)", fontSize: "14px", flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Clock size={16} /> {course.duration}</span>
            {course.students && <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Users size={16} /> {course.students} students</span>}
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Star size={16} style={{ color: "#fbbf24" }} /> {course.rating || "4.9"}</span>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "white", padding: "0 0 80px 0" }}>
        {/* Full Width Image (Container width) */}
        <div className="container" style={{ position: "relative", marginTop: "-40px", marginBottom: "60px", zIndex: 10 }}>
          <div style={{ position: "relative", width: "100%", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)", background: "#0d0f2b" }}>
            {course.imageUrl ? (
              <img src={course.imageUrl} alt={course.title} style={{ width: "100%", height: "auto", display: "block" }} />
            ) : (
              <div style={{ width: "100%", height: "400px", background: "linear-gradient(135deg,#3730a3,#6366f1,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BookOpen size={64} style={{ color: "rgba(255,255,255,0.3)" }} />
              </div>
            )}
          </div>
        </div>

        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Content */}
          <div style={{ fontSize: "17px", color: "#2d3160", lineHeight: "1.9" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "#1e1b4b", marginBottom: 20 }}>About this Course</h2>
            <p style={{ fontSize: "17px", color: "#4a4e7a", lineHeight: "1.9", marginBottom: 40 }}>{course.description}</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
                <div style={{ padding: "16px", background: "var(--gray-50)", borderRadius: "12px" }}>
                  <p style={{ fontSize: "12px", color: "#64748b", marginBottom: 4 }}>Mode</p>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#0f172a" }}>{course.mode || "Online + Offline"}</p>
                </div>
                <div style={{ padding: "16px", background: "var(--gray-50)", borderRadius: "12px" }}>
                  <p style={{ fontSize: "12px", color: "#64748b", marginBottom: 4 }}>Certification</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Award size={16} style={{ color: "#f59e0b" }} />
                    <p style={{ fontSize: "15px", fontWeight: "600", color: "#0f172a" }}>{course.certification ? "Included" : "Not Included"}</p>
                  </div>
                </div>
              </div>

              {syllabusItems.length > 0 && (
                <div style={{ marginBottom: 40 }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "800", color: "#1e1b4b", marginBottom: 16 }}>Syllabus</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {syllabusItems.map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px", background: "var(--gray-50)", borderRadius: "8px" }}>
                        <span style={{ width: 24, height: 24, borderRadius: "50%", background: `${accentColor}20`, color: accentColor, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{idx + 1}</span>
                        <span style={{ fontSize: "15px", color: "#334155" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid var(--gray-100)", display: "flex", justifyContent: "center" }}>
                <button
                  onClick={handleEnrollClick}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                    maxWidth: "400px",
                    padding: "18px",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    fontSize: "18px",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 24px rgba(99,102,241,0.3)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(99,102,241,0.4)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.3)"; }}
                >
                  <MessageCircle size={22} />
                  Enroll Now via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

      {/* Modal */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          {/* Overlay */}
          <div 
            style={{ position: "absolute", inset: 0, background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(4px)" }}
            onClick={() => setShowModal(false)}
          />
          
          {/* Modal Content */}
          <div style={{ position: "relative", width: "100%", maxWidth: "450px", background: "white", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)", overflow: "hidden", animation: "slideUp 0.3s ease-out" }}>
            <div style={{ padding: "24px 24px 16px", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", color: "#0f172a" }}>Enroll in Course</h3>
              <button onClick={() => setShowModal(false)} style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer", padding: 4 }}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleWhatsappSubmit} style={{ padding: "24px" }}>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#475569", marginBottom: 6 }}>Full Name *</label>
                <div style={{ position: "relative" }}>
                  <User size={16} style={{ position: "absolute", left: 14, top: 12, color: "#94a3b8" }} />
                  <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%", padding: "12px 14px 12px 38px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "14px", outline: "none", transition: "border-color 0.2s" }} 
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#475569", marginBottom: 6 }}>Location *</label>
                <div style={{ position: "relative" }}>
                  <MapPin size={16} style={{ position: "absolute", left: 14, top: 12, color: "#94a3b8" }} />
                  <input 
                    type="text" 
                    required 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{ width: "100%", padding: "12px 14px 12px 38px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "14px", outline: "none", transition: "border-color 0.2s" }} 
                    placeholder="Enter your city"
                  />
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#475569", marginBottom: 6 }}>College Name (Optional)</label>
                <div style={{ position: "relative" }}>
                  <GraduationCap size={16} style={{ position: "absolute", left: 14, top: 12, color: "#94a3b8" }} />
                  <input 
                    type="text" 
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    style={{ width: "100%", padding: "12px 14px 12px 38px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "14px", outline: "none", transition: "border-color 0.2s" }} 
                    placeholder="Enter your college"
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "14px",
                  background: "linear-gradient(135deg,#25D366,#20ba56)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(37,211,102,0.3)",
                }}
              >
                <MessageCircle size={18} />
                Enroll Now via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </>
  );
}
