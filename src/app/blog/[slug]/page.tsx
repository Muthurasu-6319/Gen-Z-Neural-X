"use client";

import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <div className="page-hero" style={{ padding: "120px 0 60px" }}>
        <div className="container" style={{ position: "relative" }}>
          <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            <ArrowLeft size={14} /> Back to Blog
          </Link>
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
            Technology
          </span>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "900",
              color: "white",
              maxWidth: "700px",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            {title}
          </h1>
          <div style={{ display: "flex", gap: "24px", color: "rgba(255,255,255,0.55)", fontSize: "13px", flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <User size={13} /> Gen Z Neural-X Team
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Calendar size={13} /> June 2026
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={13} /> 5 min read
            </span>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "white" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div style={{ fontSize: "17px", color: "#2d3160", lineHeight: "1.9" }}>
            <p style={{ marginBottom: "24px" }}>
              Welcome to this article from Gen Z Neural-X. We publish regular insights, tutorials, and industry news to help you stay ahead in the technology world.
            </p>
            <p style={{ marginBottom: "24px" }}>
              Our team of experienced developers, designers, and marketers share practical knowledge based on real-world project experience. Whether you&apos;re a beginner or seasoned professional, our blog has something valuable for you.
            </p>

            <div
              style={{
                background: "var(--gray-50)",
                borderLeft: "4px solid #6366f1",
                borderRadius: "0 12px 12px 0",
                padding: "24px 28px",
                margin: "40px 0",
              }}
            >
              <p style={{ color: "#3730a3", fontSize: "16px", fontWeight: "500", fontStyle: "italic" }}>
                &quot;Technology is not just a tool. It can give learners a voice that they may not have had before.&quot;
              </p>
            </div>

            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", fontWeight: "700", color: "#0a0a0f", margin: "40px 0 16px" }}>
              Why This Matters
            </h2>
            <p style={{ marginBottom: "24px" }}>
              In today&apos;s fast-paced technology landscape, staying updated with the latest trends, tools, and best practices is essential for success. This article covers the key concepts you need to understand and apply in your work.
            </p>
            <p style={{ marginBottom: "24px" }}>
              We&apos;ll explore practical examples, real-world applications, and actionable insights that you can implement immediately in your projects.
            </p>

            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", fontWeight: "700", color: "#0a0a0f", margin: "40px 0 16px" }}>
              Key Takeaways
            </h2>
            <ul style={{ marginBottom: "24px", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Understand the fundamentals before diving into advanced topics",
                "Practice with real projects to solidify your learning",
                "Stay updated with community resources and documentation",
                "Network with other professionals in your field",
              ].map((item) => (
                <li key={item} style={{ color: "#4a4e7a" }}>{item}</li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", fontWeight: "700", color: "#0a0a0f", margin: "40px 0 16px" }}>
              Getting Started
            </h2>
            <p style={{ marginBottom: "24px" }}>
              The best way to learn is by doing. Start with small projects and gradually increase complexity. Join our courses for structured, mentor-guided learning that takes you from beginner to job-ready in months.
            </p>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "48px" }}>
            {["Technology", "Learning", "Career", "Development"].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "6px 14px",
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  borderRadius: "50px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#6366f1",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid var(--gray-100)",
              paddingTop: "48px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <p style={{ fontSize: "14px", color: "#9499c9", marginBottom: "8px" }}>Want to learn more?</p>
              <Link href="/courses" id="blog-post-courses-cta" className="btn-primary">
                Explore Our Courses
              </Link>
            </div>
            <Link
              href="/blog"
              style={{
                color: "#6366f1",
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <ArrowLeft size={14} /> More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
