import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>
}

// 1. THIS IS THE SEO MAGIC: Generate dynamic metadata for Google
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const docRef = doc(db, 'blogs', slug);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const blog = docSnap.data();
      
      return {
        title: blog.seoTitle || blog.title,
        description: blog.metaDescription || blog.excerpt,
        keywords: blog.keywords ? blog.keywords.split(',').map((k: string) => k.trim()) : ['Gen Z Neural-X', 'Technology', 'Blog'],
        openGraph: {
          title: blog.seoTitle || blog.title,
          description: blog.metaDescription || blog.excerpt,
          type: 'article',
          publishedTime: blog.createdAt,
          authors: [blog.author || 'Gen Z Neural-X Team'],
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata", error);
  }
  
  // Fallback if blog not found
  return {
    title: 'Blog | Gen Z Neural-X',
    description: 'Read the latest insights and technology news from Gen Z Neural-X.',
  };
}

// 2. THIS IS A SERVER COMPONENT: Renders HTML on the server for instant SEO indexing
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  let blog: any = null;
  
  try {
    const docRef = doc(db, 'blogs', slug);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      blog = { id: docSnap.id, ...docSnap.data() };
    }
  } catch (err) {
    console.error("Error fetching blog", err);
  }

  if (!blog) {
    return <div style={{ padding: "120px 0", textAlign: "center", color: "var(--primary)", fontWeight: "bold", fontSize: "24px" }}>Blog Not Found</div>;
  }

  const date = blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "June 2026";

  return (
    <>
      {/* JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.seoTitle || blog.title,
            "description": blog.metaDescription || blog.excerpt,
            "author": [{
              "@type": "Person",
              "name": blog.author || "Admin"
            }],
            "datePublished": blog.createdAt,
            "keywords": blog.keywords
          })
        }}
      />

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
            {blog.category || "Technology"}
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
            {blog.title}
          </h1>
          <div style={{ display: "flex", gap: "24px", color: "rgba(255,255,255,0.55)", fontSize: "13px", flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <User size={13} /> {blog.author || "Admin"}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Calendar size={13} /> {date}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={13} /> {blog.readTime || "5 min read"}
            </span>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "white" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <div style={{ fontSize: "17px", color: "#2d3160", lineHeight: "1.9" }}>
            
            <div style={{ whiteSpace: "pre-wrap" }}>
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
            
          </div>

          {/* Tags */}
          {blog.keywords && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "48px", marginTop: "40px" }}>
              {blog.keywords.split(',').map((tag: string, i: number) => (
                <span
                  key={i}
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
                  #{tag.trim()}
                </span>
              ))}
            </div>
          )}

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
