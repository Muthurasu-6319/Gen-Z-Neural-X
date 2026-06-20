"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Clock, Users, Award, BookOpen, Star, MessageCircle, Loader2, Search, Filter } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: string;
  rating: string;
  level: string;
  imageUrl: string;
  syllabus: string; // comma-separated string stored in Firestore
  mode: string;
  certification: boolean;
  whatsappMessage: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string;
  gradient?: string;
}

const levelColors: Record<string, string> = {
  Beginner: "#10b981",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444",
};

const levelBg: Record<string, string> = {
  Beginner: "rgba(16,185,129,0.12)",
  Intermediate: "rgba(245,158,11,0.12)",
  Advanced: "rgba(239,68,68,0.12)",
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/courses", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        if (d.courses) {
          const sorted = d.courses.sort(
            (a: Course, b: Course) => new Date(b as any).getTime() - new Date(a as any).getTime()
          );
          setCourses(sorted);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterLevel, setFilterLevel] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = filterLevel === "All" || course.level === filterLevel;
      return matchesSearch && matchesLevel;
    });
  }, [courses, searchQuery, filterLevel]);

  const handleViewDetails = (id: string) => {
    window.location.href = `/courses/${id}`;
  };

  return (
    <>
      {/* ── HERO ── */}
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            <BookOpen size={13} /> Training Programs
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Professional{" "}
            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Courses
            </span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Industry-ready programs designed by experts. Learn, build, and get certified to launch your tech career.
          </p>
        </div>
      </div>

      {/* ── COURSES GRID ── */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          {/* Search & Filter Bar */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", padding: "20px", background: "white", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
            <div style={{ position: "relative", flex: "1 1 300px" }}>
              <Search size={18} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: "100%", padding: "12px 16px 12px 44px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "15px", outline: "none", transition: "all 0.2s" }}
              />
            </div>
            <div style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "4px" }}>
              {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                <button
                  key={level}
                  onClick={() => setFilterLevel(level)}
                  style={{
                    padding: "8px 20px",
                    background: filterLevel === level ? "var(--primary)" : "var(--gray-50)",
                    color: filterLevel === level ? "white" : "#475569",
                    border: "1px solid",
                    borderColor: filterLevel === level ? "var(--primary)" : "#e2e8f0",
                    borderRadius: "50px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap"
                  }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "300px", flexDirection: "column", gap: 16 }}>
              <Loader2 size={40} style={{ color: "var(--primary-light)", animation: "spin 1s linear infinite" }} />
              <p style={{ color: "var(--gray-500)" }}>Loading courses...</p>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 20px", color: "var(--gray-500)" }}>
              <BookOpen size={48} style={{ margin: "0 auto 16px", opacity: 0.4 }} />
              <h3 style={{ fontSize: "20px", marginBottom: 8 }}>No Courses Found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid-3">
              {filteredCourses.map((course) => {
                const syllabusItems = typeof course.syllabus === "string"
                  ? course.syllabus.split(",").map((s) => s.trim()).filter(Boolean)
                  : [];
                const accentColor = levelColors[course.level] || "#6366f1";

                return (
                  <div
                    key={course.id}
                    id={`course-${course.id}`}
                    style={{
                      background: "white",
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(55,48,163,0.08)",
                      border: "1px solid var(--gray-100)",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 64px rgba(55,48,163,0.18)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(55,48,163,0.08)";
                    }}
                  >
                    {/* ── Card Image Header ── */}
                    <div style={{ position: "relative", width: "100%", height: "160px", background: "#0d0f2b", overflow: "hidden" }}>
                      {course.imageUrl ? (
                        <Image
                          src={course.imageUrl}
                          alt={course.title}
                          fill
                          style={{ objectFit: "cover", opacity: 0.85 }}
                          unoptimized
                        />
                      ) : (
                        <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#3730a3,#6366f1,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <BookOpen size={48} style={{ color: "rgba(255,255,255,0.3)" }} />
                        </div>
                      )}
                      {/* Overlay */}
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(13,15,43,0.55) 100%)" }} />

                      {/* Level + Rating badges on image */}
                      <div style={{ position: "absolute", top: 14, left: 14, right: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ padding: "4px 12px", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", borderRadius: "50px", fontSize: "11px", fontWeight: "700", color: "white", border: `1px solid ${accentColor}50` }}>
                          {course.level}
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", padding: "4px 10px", borderRadius: "50px" }}>
                          <Star size={11} style={{ fill: "#fbbf24", color: "#fbbf24" }} />
                          <span style={{ color: "white", fontSize: "12px", fontWeight: "700" }}>{course.rating || "4.9"}</span>
                        </div>
                      </div>

                      {/* Title on image */}
                      <div style={{ position: "absolute", bottom: 12, left: 14, right: 14 }}>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", fontWeight: "800", color: "white", marginBottom: 6, lineHeight: 1.2 }}>
                          {course.title}
                        </h3>
                        <div style={{ display: "flex", gap: "14px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.8)", fontSize: "11px" }}>
                            <Clock size={11} /> {course.duration}
                          </div>
                          {course.students && (
                            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.8)", fontSize: "11px" }}>
                              <Users size={11} /> {course.students} students
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* ── Card Body ── */}
                    <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <p style={{ 
                        fontSize: "13px", 
                        color: "#4a4e7a", 
                        lineHeight: "1.6", 
                        marginBottom: "16px",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}>
                        {course.description}
                      </p>

                      {/* Mode + Cert row */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px", padding: "12px 14px", background: "var(--gray-50)", borderRadius: "10px" }}>
                        <div>
                          <p style={{ fontSize: "11px", color: "#9499c9", marginBottom: "2px" }}>Mode</p>
                          <p style={{ fontSize: "13px", fontWeight: "600", color: "#2d3160" }}>{course.mode || "Online + Offline"}</p>
                        </div>
                        {course.certification && (
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <Award size={14} style={{ color: "#f59e0b" }} />
                            <span style={{ fontSize: "12px", color: "#4a4e7a", fontWeight: "500" }}>Certificate Included</span>
                          </div>
                        )}
                      </div>

                      {/* View Details Button */}
                      <button
                        id={`course-details-${course.id}`}
                        onClick={() => handleViewDetails(course.id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          width: "100%",
                          padding: "12px",
                          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                          color: "white",
                          border: "none",
                          borderRadius: "50px",
                          fontSize: "14px",
                          fontWeight: "700",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(99,102,241,0.45)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(99,102,241,0.3)";
                        }}
                      >
                        <BookOpen size={16} />
                        View Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}
