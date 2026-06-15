"use client";

import Link from "next/link";
import { Clock, Users, Award, CheckCircle, ArrowRight, BookOpen, Star } from "lucide-react";

const courses = [
  {
    id: "mern",
    title: "MERN Stack Development",
    description: "Master MongoDB, Express.js, React, and Node.js to build full-stack web applications from scratch.",
    duration: "4 Months",
    fee: "₹15,000",
    students: "120+",
    rating: "4.9",
    level: "Intermediate",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    syllabus: ["HTML/CSS/JavaScript Fundamentals", "React.js & Redux", "Node.js & Express.js", "MongoDB & Mongoose", "REST APIs & Authentication", "Deployment on AWS/Vercel", "Real-world Project Building", "Interview Preparation"],
    certification: true,
    mode: "Online + Offline",
  },
  {
    id: "python",
    title: "Python Programming",
    description: "From basics to advanced Python — covering OOP, data structures, web scraping, automation, and Django.",
    duration: "3 Months",
    fee: "₹10,000",
    students: "200+",
    rating: "4.8",
    level: "Beginner",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    syllabus: ["Python Fundamentals", "OOP Concepts", "Data Structures & Algorithms", "File Handling & Modules", "Django Web Framework", "Database Integration", "Automation & Scripting", "Final Project"],
    certification: true,
    mode: "Online + Offline",
  },
  {
    id: "aiml",
    title: "AI/ML Engineering",
    description: "Comprehensive AI/ML training covering machine learning algorithms, deep learning, NLP, and computer vision.",
    duration: "6 Months",
    fee: "₹25,000",
    students: "80+",
    rating: "4.9",
    level: "Advanced",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    syllabus: ["Python for Data Science", "Statistics & Probability", "Machine Learning Algorithms", "Deep Learning & Neural Networks", "Natural Language Processing", "Computer Vision", "Model Deployment", "Capstone Project"],
    certification: true,
    mode: "Online + Offline",
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Learn to extract insights from data using Python, pandas, visualization tools, and machine learning.",
    duration: "5 Months",
    fee: "₹20,000",
    students: "90+",
    rating: "4.7",
    level: "Intermediate",
    color: "#3730a3",
    gradient: "linear-gradient(135deg, #3730a3, #6366f1)",
    syllabus: ["Python & NumPy", "Pandas & Data Wrangling", "Data Visualization", "SQL & Databases", "Exploratory Data Analysis", "Machine Learning Basics", "Business Analytics", "Industry Projects"],
    certification: true,
    mode: "Online + Offline",
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    description: "Become a full-stack developer with expertise in both frontend and backend technologies.",
    duration: "6 Months",
    fee: "₹22,000",
    students: "150+",
    rating: "4.8",
    level: "Intermediate",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    syllabus: ["HTML, CSS, JavaScript", "React.js Frontend", "Node.js Backend", "Databases (SQL & NoSQL)", "API Development", "Authentication & Security", "DevOps Basics", "Portfolio Projects"],
    certification: true,
    mode: "Online + Offline",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master SEO, social media marketing, Google Ads, content strategy, and analytics to grow brands online.",
    duration: "2 Months",
    fee: "₹8,000",
    students: "300+",
    rating: "4.7",
    level: "Beginner",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    syllabus: ["Digital Marketing Fundamentals", "SEO & Content Marketing", "Social Media Strategy", "Google Ads & PPC", "Facebook & Instagram Ads", "Email Marketing", "Analytics & Reporting", "Brand Strategy"],
    certification: true,
    mode: "Online + Offline",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "#10b981",
  Intermediate: "#f59e0b",
  Advanced: "#f43f5e",
};

export default function CoursesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            <BookOpen size={13} /> Training Programs
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Professional <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Courses</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Industry-ready programs designed by experts. Learn, build, and get certified to launch your tech career.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="grid-3">
            {courses.map((course) => (
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
              >
                {/* Header */}
                <div style={{ background: course.gradient, padding: "32px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "100px", height: "100px", background: "rgba(255,255,255,0.08)", borderRadius: "50%" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ padding: "4px 12px", background: "rgba(255,255,255,0.2)", borderRadius: "50px", fontSize: "11px", fontWeight: "700", color: "white" }}>
                      {course.level}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.9)", fontSize: "13px", fontWeight: "600" }}>
                      <Star size={13} style={{ fill: "rgba(255,255,255,0.9)" }} /> {course.rating}
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "800", color: "white", marginBottom: "8px" }}>
                    {course.title}
                  </h3>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>
                      <Clock size={12} /> {course.duration}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>
                      <Users size={12} /> {course.students} students
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ fontSize: "14px", color: "#4a4e7a", lineHeight: "1.7", marginBottom: "20px" }}>
                    {course.description}
                  </p>

                  <h5 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: "700", color: "#0a0a0f", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Syllabus Highlights
                  </h5>
                  <div className="responsive-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "24px", flex: 1 }}>
                    {course.syllabus.slice(0, 6).map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                        <CheckCircle size={12} style={{ color: course.color, flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "12px", color: "#4a4e7a" }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "16px", background: "var(--gray-50)", borderRadius: "12px" }}>
                    <div>
                      <p style={{ fontSize: "12px", color: "#9499c9", marginBottom: "4px" }}>Course Fee</p>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "22px", fontWeight: "800", color: course.color }}>{course.fee}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontSize: "12px", color: "#9499c9", marginBottom: "4px" }}>Mode</p>
                      <p style={{ fontSize: "13px", fontWeight: "600", color: "#2d3160" }}>{course.mode}</p>
                    </div>
                  </div>

                  {course.certification && (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                      <Award size={14} style={{ color: "#f59e0b" }} />
                      <span style={{ fontSize: "13px", color: "#4a4e7a", fontWeight: "500" }}>Certificate of Completion Included</span>
                    </div>
                  )}

                  <Link href="/contact" id={`course-enroll-${course.id}`} className="btn-primary" style={{ justifyContent: "center" }}>
                    Enroll Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
