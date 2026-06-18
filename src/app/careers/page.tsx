import Link from "next/link";
import { MapPin, Clock, Briefcase, Users, ArrowRight } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Career Opportunities | Gen Z Neural-X",
  description: "Join a passionate team of innovators building the future of technology.",
};

export default async function CareersPage() {
  let careers: any[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, "careers"));
    careers = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    careers.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
  } catch (err) {
    console.error("Failed to load careers", err);
  }

  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            <Briefcase size={13} /> Join Our Team
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Career <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Opportunities</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Join a passionate team of innovators building the future of technology. We're always looking for talented individuals.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)", minHeight: "60vh" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Current <span className="gradient-text">Openings</span></h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              We&apos;re hiring talented professionals across multiple roles. Apply now!
            </p>
          </div>

          {careers.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <h3 style={{ fontSize: "20px", color: "var(--gray-500)", fontFamily: "'Outfit', sans-serif" }}>No career openings right now. Check back later!</h3>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "80px" }}>
              {careers.map((job) => (
                <div
                  key={job.id}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    padding: "28px 32px",
                    border: "1px solid var(--gray-100)",
                    boxShadow: "0 2px 12px rgba(55,48,163,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "20px",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: 1 }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(99,102,241,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Briefcase size={22} style={{ color: "#6366f1" }} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "#0a0a0f", marginBottom: "4px" }}>{job.title}</h3>
                      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "13px", color: "#6b6fa0", display: "flex", alignItems: "center", gap: "4px" }}><MapPin size={12} /> {job.location}</span>
                        <span style={{ fontSize: "13px", color: "#6b6fa0", display: "flex", alignItems: "center", gap: "4px" }}><Clock size={12} /> {job.experience}</span>
                        <span style={{ fontSize: "13px", color: "#6b6fa0", display: "flex", alignItems: "center", gap: "4px" }}><Users size={12} /> {job.department}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ padding: "4px 12px", background: job.type === "Full-Time" ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)", borderRadius: "50px", fontSize: "12px", fontWeight: "700", color: job.type === "Full-Time" ? "#10b981" : "#f59e0b" }}>
                      {job.type}
                    </span>
                    <Link href={`/careers/${job.id}`} className="btn-primary" style={{ padding: "10px 20px", fontSize: "13px", textDecoration: "none" }}>
                      View & Apply <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
