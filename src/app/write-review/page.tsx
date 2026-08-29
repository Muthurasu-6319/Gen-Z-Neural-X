"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Helper to get initials
const getInitials = (name: string) => {
  if (!name) return "U";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
};

// Helper for random color
const getRandomColor = () => {
  const colors = ["#6366f1", "#06b6d4", "#10b981", "#f59e0b", "#8b5cf6", "#f43f5e"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function WriteReviewPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 5,
    text: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const setRating = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    setIsSubmitting(true);
    try {
      const newReview = {
        name: formData.name,
        role: formData.role || "Client",
        avatar: getInitials(formData.name),
        color: getRandomColor(),
        rating: formData.rating,
        text: formData.text,
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, "reviews"), newReview);
      
      // Redirect back to home page after submission
      router.push("/#testimonials");
      
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--gray-50)" }}>
      <div className="container" style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px" }}>
        
        <div style={{
          background: "white", borderRadius: "16px", padding: "40px",
          width: "100%", maxWidth: "600px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}>
          
          <Link href="/#testimonials" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#64748b", textDecoration: "none", marginBottom: "24px", fontWeight: "500", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#0f172a"} onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px", color: "#0f172a" }}>Write a Review</h1>
          <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "32px" }}>We'd love to hear about your experience with Gen Z Neural-X.</p>
          
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px", color: "#334155" }}>Your Name <span style={{color:"#ef4444"}}>*</span></label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required
                style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", outline: "none", fontSize: "15px", transition: "border-color 0.2s" }}
                onFocus={(e) => e.target.style.borderColor = "#6366f1"}
                onBlur={(e) => e.target.style.borderColor = "#cbd5e1"}
                placeholder="e.g. John Doe"
              />
            </div>
            
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px", color: "#334155" }}>Role / Company (Optional)</label>
              <input 
                type="text" 
                name="role" 
                value={formData.role} 
                onChange={handleInputChange} 
                style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", outline: "none", fontSize: "15px", transition: "border-color 0.2s" }}
                onFocus={(e) => e.target.style.borderColor = "#6366f1"}
                onBlur={(e) => e.target.style.borderColor = "#cbd5e1"}
                placeholder="e.g. CEO at TechCorp or Internship Student"
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px", color: "#334155" }}>Rating <span style={{color:"#ef4444"}}>*</span></label>
              <div style={{ display: "flex", gap: "8px" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: "0" }}
                  >
                    <Star 
                      size={32} 
                      style={{ 
                        color: star <= formData.rating ? "#fbbf24" : "#e2e8f0", 
                        fill: star <= formData.rating ? "#fbbf24" : "transparent",
                        transition: "all 0.2s"
                      }} 
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px", color: "#334155" }}>Your Review <span style={{color:"#ef4444"}}>*</span></label>
              <textarea 
                name="text" 
                value={formData.text} 
                onChange={handleInputChange} 
                required
                rows={5}
                style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", outline: "none", fontSize: "15px", resize: "vertical", transition: "border-color 0.2s" }}
                onFocus={(e) => e.target.style.borderColor = "#6366f1"}
                onBlur={(e) => e.target.style.borderColor = "#cbd5e1"}
                placeholder="Tell us what you think about our services..."
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{ 
                marginTop: "16px", width: "100%", padding: "14px", borderRadius: "8px", 
                fontWeight: "600", border: "none", cursor: isSubmitting ? "not-allowed" : "pointer", 
                background: isSubmitting ? "#94a3b8" : "linear-gradient(135deg, #6366f1, #8b5cf6)", 
                color: "white", fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px",
                transition: "opacity 0.2s"
              }}
              onMouseEnter={(e) => {if(!isSubmitting) e.currentTarget.style.opacity = "0.9"}}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              {isSubmitting && <Loader2 className="animate-spin" size={18} />}
              {isSubmitting ? "Submitting Review..." : "Submit Review"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
