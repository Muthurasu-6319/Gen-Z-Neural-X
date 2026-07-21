"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { ArrowUp } from "lucide-react";

interface BlogClientProps {
  content: string;
}

export default function BlogClient({ content }: BlogClientProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Extract headings from markdown content
    const extractedHeadings: { id: string; text: string; level: number }[] = [];
    const headingLines = content.split('\n').filter(line => line.startsWith('##'));
    
    headingLines.forEach(line => {
      const level = line.match(/^#+/)?.[0].length || 2;
      if (level === 2 || level === 3) {
        const text = line.replace(/^#+\s/, '').trim();
        // create slug same way rehype-slug does
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        extractedHeadings.push({ id, text, level });
      }
    });
    setHeadings(extractedHeadings);

    const handleScroll = () => {
      if (window.scrollY > 300) setShowScrollTop(true);
      else setShowScrollTop(false);

      // Simple scroll spy
      const headingElements = extractedHeadings.map(h => document.getElementById(h.id)).filter(Boolean);
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveId(element.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }} className="blog-layout">
      
      {/* Markdown Content */}
      <div style={{ fontSize: "17px", color: "#2d3160", lineHeight: "1.9" }}>
        <div className="markdown-content">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeSlug]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Sidebar TOC */}
      <div className="toc-sidebar">
        <div style={{
          position: "sticky",
          top: "100px",
          background: "#f8f9ff",
          border: "1px solid #e4e6f5",
          borderRadius: "16px",
          padding: "24px"
        }}>
          <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px", color: "#0a0a0f" }}>
            In this article
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {headings.map((h, i) => (
              <li key={i} style={{ paddingLeft: h.level === 3 ? "16px" : "0" }}>
                <button
                  onClick={() => scrollToHeading(h.id)}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: activeId === h.id ? "#3730a3" : "#6b6fa0",
                    fontWeight: activeId === h.id ? "600" : "400",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3730a3")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = activeId === h.id ? "#3730a3" : "#6b6fa0")}
                >
                  {h.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "#3730a3",
          color: "white",
          display: showScrollTop ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          boxShadow: "0 4px 12px rgba(55,48,163,0.3)",
          cursor: "pointer",
          zIndex: 999,
          transition: "all 0.3s"
        }}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
