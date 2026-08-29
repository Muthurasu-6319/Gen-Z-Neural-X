"use client";

import { useState, useEffect } from "react";
import { Star, Quote, MessageCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

// Removed static fallback testimonials

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch from Firebase
  const fetchReviews = async () => {
    try {
      const reviewsRef = collection(db, "reviews");
      const q = query(reviewsRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      
      const fetchedReviews = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setReviews(fetchedReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section id="testimonials" className="section" style={{ background: "var(--gray-50)", position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag">
            <MessageCircle size={14} /> Testimonials
          </div>
          <h2 className="section-title">
            What Our Clients <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto 24px" }}>
            Real feedback from real clients and students who have experienced the Gen Z Neural-X difference.
          </p>
          <Link 
            href="/write-review"
            className="btn btn-primary"
            style={{ display: "inline-block", padding: "10px 24px", fontSize: "15px", borderRadius: "8px", fontWeight: "600", textDecoration: "none", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white" }}
          >
            Write a Review
          </Link>
        </div>

        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
            <Loader2 className="animate-spin" size={32} color="#6366f1" />
          </div>
        ) : reviews.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px", color: "#64748b", background: "white", borderRadius: "16px", border: "1px dashed #cbd5e1" }}>
            <p style={{ fontSize: "16px", marginBottom: "16px" }}>No reviews yet. Be the first to share your experience!</p>
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: "50px" }}
          >
            {reviews.map((t) => (
              <SwiperSlide key={t.id} style={{ height: "auto" }}>
                <div
                  className="card"
                  style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}
                >
                  <Quote
                    size={40}
                    style={{
                      color: `${t.color}20`,
                      position: "absolute",
                      top: "24px",
                      right: "24px",
                      fill: `${t.color}15`,
                    }}
                  />
                  {/* Stars */}
                  <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <Star key={i} size={14} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
                    ))}
                  </div>

                  <p style={{ fontSize: "14.5px", color: "#4a4e7a", lineHeight: "1.8", marginBottom: "24px", flexGrow: 1 }}>
                    &quot;{t.text}&quot;
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "auto" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: "700",
                        fontSize: "15px",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{ fontWeight: "600", fontSize: "14px", color: "#0a0a0f" }}>{t.name}</div>
                      <div style={{ fontSize: "12px", color: "#9499c9" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
