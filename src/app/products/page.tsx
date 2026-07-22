"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Package, CheckCircle } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (data.products && data.products.length > 0) {
          const sorted = data.products.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setProducts(sorted);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Failed to fetch products", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            Our Products
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Software <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Products</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Battle-tested, ready-to-deploy software products that solve real business problems — deployable in days, not months.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)", minHeight: "60vh" }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: "center", padding: "100px 0", color: "var(--gray-500)" }}>
              <div className="animate-spin-slow" style={{ width: "40px", height: "40px", border: "4px solid var(--gray-300)", borderTopColor: "var(--primary)", borderRadius: "50%", margin: "0 auto 16px" }}></div>
              <p>Loading products...</p>
            </div>
          ) : products.length === 0 ? (
            <div style={{ textAlign: "center", padding: "100px 0", color: "var(--gray-500)" }}>
              <Package size={48} style={{ margin: "0 auto 16px", color: "var(--gray-300)" }} />
              <p style={{ fontSize: "18px", fontWeight: "600", color: "var(--gray-600)" }}>No products found.</p>
              <p>Products added from the admin dashboard will appear here.</p>
            </div>
          ) : (
            <div className="grid-3">
              {products.map((product) => {
                const featureList = typeof product.features === 'string' 
                  ? product.features.split(',').map((f: string) => f.trim()) 
                  : Array.isArray(product.features) ? product.features : [];

                return (
                  <div
                    key={product.id}
                    id={`product-${product.id}`}
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
                    <div
                      style={{
                        height: "200px",
                        background: "var(--gray-100)",
                        position: "relative",
                        overflow: "hidden"
                      }}
                    >
                      {product.imageUrl ? (
                        <img src={product.imageUrl} alt={product.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
                          <Package size={48} color="white" />
                        </div>
                      )}
                      <span
                        style={{
                          position: "absolute",
                          top: "16px",
                          right: "16px",
                          padding: "4px 12px",
                          background: "var(--primary)",
                          borderRadius: "50px",
                          fontSize: "11px",
                          fontWeight: "700",
                          color: "white",
                          textTransform: "uppercase"
                        }}
                      >
                        {product.category || "Software"}
                      </span>
                    </div>

                    <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column" }}>
                      {product.seoTitle && (
                         <h2 style={{ display: "none" }}>{product.seoTitle}</h2>
                      )}
                      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "22px", fontWeight: "800", color: "var(--black)", marginBottom: "12px" }}>
                        {product.title}
                      </h3>
                      
                      <p style={{ fontSize: "14px", color: "#4a4e7a", lineHeight: "1.7", marginBottom: "24px" }}>
                        {product.description}
                      </p>

                      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px", flex: 1 }}>
                        {featureList.map((feat: string, i: number) => (
                          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                            <CheckCircle size={16} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                            <span style={{ fontSize: "13.5px", color: "#2d3160" }}>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
                        <Link href="/contact" className="btn-primary" style={{ flex: 1, justifyContent: "center", padding: "12px 20px", fontSize: "14px" }}>
                          Inquire Now <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
