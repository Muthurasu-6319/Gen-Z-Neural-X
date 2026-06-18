import Link from "next/link";
import { Briefcase, Clock, Users, ArrowRight, DollarSign } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Internship Programs | Gen Z Neural-X",
  description: "Gain real-world experience, build your portfolio, and jumpstart your career with our exclusive internship programs.",
};

export default async function InternshipsPage() {
  let internships: any[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, "internships"));
    internships = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    internships.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
  } catch (err) {
    console.error("Failed to load internships", err);
  }

  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", margin: "0 auto 24px" }}>
            <Briefcase size={13} /> Career Development
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "white", marginBottom: "20px" }}>
            Internship <span style={{ background: "linear-gradient(135deg, #a5b4fc, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Programs</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Gain real-world experience, build your portfolio, and jumpstart your career with Gen Z Neural-X.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--gray-50)", minHeight: "60vh" }}>
        <div className="container">
          {internships.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <h2 style={{ fontSize: "24px", color: "var(--gray-500)", fontFamily: "'Outfit', sans-serif" }}>No internship openings right now. Check back later!</h2>
            </div>
          ) : (
            <div className="grid-3" style={{ marginBottom: "80px" }}>
              {internships.map((intern) => (
                <div
                  key={intern.id}
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
                  <div style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", padding: "28px", position: "relative", overflow: "hidden" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                      <span style={{ padding: "4px 12px", background: "rgba(255,255,255,0.2)", borderRadius: "50px", fontSize: "11px", fontWeight: "600", color: "white" }}>
                        {intern.category}
                      </span>
                      <span style={{ padding: "4px 12px", background: "rgba(255,255,255,0.15)", borderRadius: "50px", fontSize: "11px", fontWeight: "600", color: "rgba(255,255,255,0.9)" }}>
                        {intern.slots}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "800", color: "white", marginBottom: "12px" }}>
                      {intern.title}
                    </h3>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>
                        <Clock size={12} /> {intern.duration}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>
                        <Users size={12} /> {intern.mode}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>
                        <DollarSign size={12} /> {intern.paidOrNot}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <p style={{ fontSize: "13.5px", color: "#4a4e7a", lineHeight: "1.7", marginBottom: "20px", flex: 1 }}>
                      {intern.description?.substring(0, 150)}{intern.description?.length > 150 ? "..." : ""}
                    </p>

                    <Link href={`/internships/${intern.id}`} className="btn-primary" style={{ justifyContent: "center", textDecoration: "none" }}>
                      View Details & Apply <ArrowRight size={14} />
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
