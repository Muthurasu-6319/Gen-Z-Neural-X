"use client";

import Link from "next/link";
import { BookOpen, Briefcase, Award, Clock, Users, Star, ArrowRight, GraduationCap } from "lucide-react";

const courses = [
  { id: "mern", title: "MERN Stack", duration: "4 Months", students: "120+", rating: "4.9", color: "#10b981" },
  { id: "python", title: "Python Programming", duration: "3 Months", students: "200+", rating: "4.8", color: "#f59e0b" },
  { id: "aiml", title: "AI/ML", duration: "6 Months", students: "80+", rating: "4.9", color: "#8b5cf6" },
  { id: "data-science", title: "Data Science", duration: "5 Months", students: "90+", rating: "4.7", color: "#3730a3" },
  { id: "full-stack", title: "Full Stack Dev", duration: "6 Months", students: "150+", rating: "4.8", color: "#06b6d4" },
  { id: "digital-marketing", title: "Digital Marketing", duration: "2 Months", students: "300+", rating: "4.7", color: "#f43f5e" },
];

const internships = [
  { title: "Frontend Developer Intern", duration: "3 Months", stipend: "Certificate + Experience" },
  { title: "AI/ML Intern", duration: "3-6 Months", stipend: "Certificate + Experience" },
  { title: "Digital Marketing Intern", duration: "2 Months", stipend: "Certificate + Experience" },
  { title: "Mobile App Intern", duration: "3 Months", stipend: "Certificate + Experience" },
];

export default function LearnHighlights() {
  return (
    <section id="learn-highlights" className="section" style={{ background: "white" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-tag">
            <GraduationCap size={14} /> Training & Education
          </div>
          <h2 className="section-title">
            Launch Your Tech <span className="gradient-text">Career</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Industry-ready courses, hands-on internships, and professional certifications to fast-track your career.
          </p>
        </div>

        <div className="grid-2" style={{ marginBottom: "48px", alignItems: "start" }}>
          {/* Courses Panel */}
          <div
            style={{
              background: "linear-gradient(135deg, #0d0f2b 0%, #1a1d45 100%)",
              borderRadius: "24px",
              padding: "40px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
              <div style={{ width: "40px", height: "40px", background: "rgba(99,102,241,0.2)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BookOpen size={20} style={{ color: "#a5b4fc" }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700" }}>Our Courses</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>6 professional programs</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses#${course.id}`}
                  id={`learn-course-${course.id}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "12px",
                    padding: "14px 18px",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(99,102,241,0.15)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: course.color }} />
                    <span style={{ color: "white", fontSize: "14px", fontWeight: "500" }}>{course.title}</span>
                  </div>
                  <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>
                      <Clock size={11} /> {course.duration}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#fbbf24", fontSize: "12px" }}>
                      <Star size={11} style={{ fill: "#fbbf24" }} /> {course.rating}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/courses" id="learn-all-courses" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Explore All Courses <ArrowRight size={16} />
            </Link>
          </div>

          {/* Internships Panel */}
          <div>
            <div
              style={{
                background: "linear-gradient(135deg, #f0f0ff 0%, #e8f4ff 100%)",
                borderRadius: "24px",
                padding: "40px",
                marginBottom: "24px",
                border: "1px solid rgba(99,102,241,0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                <div style={{ width: "40px", height: "40px", background: "rgba(99,102,241,0.15)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Briefcase size={20} style={{ color: "#3730a3" }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", color: "#0a0a0f" }}>Internships</h3>
                  <p style={{ fontSize: "13px", color: "#6b6fa0" }}>Real-world experience programs</p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                {internships.map((intern, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "white",
                      borderRadius: "12px",
                      padding: "14px 18px",
                      border: "1px solid rgba(99,102,241,0.1)",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#0a0a0f" }}>{intern.title}</span>
                    <span style={{ fontSize: "12px", color: "#6b6fa0", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={11} /> {intern.duration}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/internships" id="learn-internships" className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                Apply for Internship <ArrowRight size={16} />
              </Link>
            </div>

            {/* Certification highlight */}
            <div
              style={{
                background: "linear-gradient(135deg, #3730a3, #6366f1)",
                borderRadius: "24px",
                padding: "32px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div style={{ width: "56px", height: "56px", background: "rgba(255,255,255,0.15)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Award size={28} style={{ color: "white" }} />
              </div>
              <div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "white", marginBottom: "6px" }}>
                  Get Certified
                </h4>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "12px" }}>
                  Industry-recognized certificates to boost your career.
                </p>
                <Link href="/certifications" id="learn-certifications" style={{ color: "white", fontSize: "13px", fontWeight: "600", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
                  View Certificates <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
