"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { useParams } from "next/navigation";
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (res.ok) {
          const data = await res.json();
          if (data.blog) {
            setBlog(data.blog);
          }
        }
      } catch (err) {
        console.error("Error fetching blog", err);
      } finally {
        setLoading(false);
      }
    };
    
    // If it's a dynamic slug from the API
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return <div style={{ padding: "120px 0", textAlign: "center", color: "var(--primary)", fontWeight: "bold" }}>Loading Blog...</div>;
  }

  // Fallback for static posts or not found
  const title = blog ? blog.title : slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
  const category = blog ? blog.category : "Technology";
  const author = blog ? blog.author : "Gen Z Neural-X Team";
  const readTime = blog ? blog.readTime : "5 min read";
  const date = blog ? new Date(blog.createdAt).toLocaleDateString() : "June 2026";
  const content = blog ? blog.content : "Welcome to this article from Gen Z Neural-X. We publish regular insights, tutorials, and industry news to help you stay ahead in the technology world.\n\nOur team of experienced developers, designers, and marketers share practical knowledge based on real-world project experience. Whether you're a beginner or seasoned professional, our blog has something valuable for you.\n\n**Why This Matters**\nIn today's fast-paced technology landscape, staying updated with the latest trends, tools, and best practices is essential for success. This article covers the key concepts you need to understand and apply in your work.";

  return (
    <>
      <div className="page-hero" style={{ padding: "120px 0 60px" }}>
        <div className="container" style={{ position: "relative" }}>
          <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            <ArrowLeft size={14} /> Back to Blog
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
            {category}
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
              <User size={13} /> {author}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Calendar size={13} /> {date}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={13} /> {readTime}
            </span>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "white" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div style={{ fontSize: "17px", color: "#2d3160", lineHeight: "1.9" }}>
            
            {/* Render markdown or text content directly */}
            {blog && blog.content ? (
              <div style={{ whiteSpace: "pre-wrap" }}>
                <ReactMarkdown>{blog.content}</ReactMarkdown>
              </div>
            ) : (
              <div style={{ whiteSpace: "pre-wrap" }}>
                {content}
              </div>
            )}
            
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "48px", marginTop: "40px" }}>
            {[category, "Learning", "Career", "Development"].map((tag) => (
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
