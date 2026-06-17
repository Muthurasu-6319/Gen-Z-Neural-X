"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight, User, FileText, Monitor, Bot } from "lucide-react";

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs', { cache: 'no-store' });
        const data = await res.json();
        if (data.blogs) {
          const dynamicBlogs = data.blogs.map((b: any) => ({
            id: b.id,
            title: b.title,
            excerpt: b.excerpt,
            category: b.category,
            categoryColor: b.categoryColor || "#6366f1", // Default color
            author: b.author || "Admin",
            date: b.date || new Date(b.createdAt).toLocaleDateString(),
            readTime: b.readTime || "5 min read",
            featured: b.featured || false,
            dynamic: true
          }));
          
          setAllPosts(dynamicBlogs);
          
          // Compute unique categories
          const uniqueCats = Array.from(new Set(dynamicBlogs.map((b: any) => b.category)));
          setCategories(["All", ...(uniqueCats as string[])]);
        }
      } catch (e) {
        console.error("Error fetching dynamic blogs", e);
      }
    };
    fetchBlogs();
  }, []);

  const filteredPosts = activeCategory === "All" ? allPosts : allPosts.filter(p => p.category === activeCategory);

  const featured = filteredPosts.filter((p) => p.featured);
  const regular = filteredPosts.filter((p) => !p.featured);

  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            <FileText size={14} style={{ display: 'inline-block', marginRight: '6px' }} /> Insights & Tutorials
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Tech <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Blog</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Expert insights, tutorials, and industry news to keep you ahead in the technology world.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          {/* Category Filter */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "48px", justifyContent: "center" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`blog-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
                style={{
                  padding: "8px 20px",
                  borderRadius: "50px",
                  border: cat === activeCategory ? "none" : "1.5px solid var(--gray-200)",
                  background: cat === activeCategory ? "linear-gradient(135deg, #3730a3, #6366f1)" : "white",
                  color: cat === activeCategory ? "white" : "#4a4e7a",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="grid-2" style={{ marginBottom: "32px" }}>
            {featured.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} id={`blog-featured-${post.id}`} style={{ textDecoration: "none" }}>
                <div
                  className="card"
                  style={{ height: "100%", position: "relative", overflow: "hidden" }}
                >
                  <div
                    style={{
                      height: "200px",
                      background: "linear-gradient(135deg, #0d0f2b, #3730a3)",
                      borderRadius: "12px",
                      marginBottom: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.3) 0%, transparent 60%)" }} />
                    <span style={{ position: "relative", color: "white" }}>
                      {post.category === "Web Development" ? <Monitor size={48} /> : <Bot size={48} />}
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        padding: "4px 12px",
                        background: "rgba(255,255,255,0.15)",
                        borderRadius: "50px",
                        fontSize: "11px",
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      FEATURED
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <span style={{ padding: "4px 12px", background: `${post.categoryColor}15`, borderRadius: "50px", fontSize: "11px", fontWeight: "700", color: post.categoryColor }}>
                      {post.category}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "800", color: "#0a0a0f", marginBottom: "10px", lineHeight: "1.3" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6b6fa0", lineHeight: "1.7", marginBottom: "20px" }}>{post.excerpt}</p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#9499c9", fontSize: "12px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><User size={12} /> {post.author}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <ArrowRight size={16} style={{ color: post.categoryColor }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Regular Posts Grid */}
          <div className="grid-3">
            {regular.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} id={`blog-post-${post.id}`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                    <span style={{ padding: "4px 12px", background: `${post.categoryColor}15`, borderRadius: "50px", fontSize: "11px", fontWeight: "700", color: post.categoryColor }}>
                      {post.category}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "17px", fontWeight: "700", color: "#0a0a0f", marginBottom: "10px", lineHeight: "1.4" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b6fa0", lineHeight: "1.7", marginBottom: "16px" }}>{post.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid var(--gray-100)" }}>
                    <div style={{ color: "#9499c9", fontSize: "12px", display: "flex", gap: "12px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={11} /> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <ArrowRight size={14} style={{ color: post.categoryColor }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
