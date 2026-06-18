import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import { Clock, Users, DollarSign, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ApplicationForm from "@/components/forms/ApplicationForm";
import ReactMarkdown from "react-markdown";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const docRef = doc(db, "internships", slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return { title: "Internship Not Found" };
  }

  const data = docSnap.data();
  return {
    title: data.seoTitle || `${data.title} | Internships | Gen Z Neural-X`,
    description: data.metaDescription || data.description?.substring(0, 160),
    keywords: data.keywords || `${data.title}, internship, Gen Z Neural`,
  };
}

export default async function InternshipDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const docRef = doc(db, "internships", slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return notFound();
  }

  const internship = docSnap.data();

  return (
    <div style={{ background: "var(--gray-50)", minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <Link href="/internships" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--primary)", fontWeight: "600", textDecoration: "none", marginBottom: "32px" }}>
          <ArrowLeft size={16} /> Back to Internships
        </Link>
        
        <div style={{ background: "white", borderRadius: "24px", padding: "40px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)", border: "1px solid var(--gray-100)", marginBottom: "40px" }}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
            <span style={{ padding: "6px 16px", background: "rgba(99,102,241,0.1)", color: "#6366f1", borderRadius: "50px", fontSize: "13px", fontWeight: "700" }}>{internship.category}</span>
            <span style={{ padding: "6px 16px", background: "rgba(16,185,129,0.1)", color: "#10b981", borderRadius: "50px", fontSize: "13px", fontWeight: "700" }}>{internship.slots}</span>
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "36px", fontWeight: "800", color: "#0a0a0f", marginBottom: "24px" }}>
            {internship.title}
          </h1>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "20px 0", borderTop: "1px solid var(--gray-100)", borderBottom: "1px solid var(--gray-100)", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gray-600)", fontWeight: "500" }}>
              <Clock size={18} style={{ color: "var(--primary)" }} /> {internship.duration}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gray-600)", fontWeight: "500" }}>
              <Users size={18} style={{ color: "var(--primary)" }} /> {internship.mode}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gray-600)", fontWeight: "500" }}>
              <DollarSign size={18} style={{ color: "var(--primary)" }} /> {internship.paidOrNot}
            </div>
          </div>

          <div className="prose" style={{ maxWidth: "none", color: "#4a4e7a", lineHeight: "1.8" }}>
            <ReactMarkdown>{internship.description}</ReactMarkdown>
          </div>
        </div>

        <div id="apply">
          <ApplicationForm jobTitle={internship.title} formType="Internship" />
        </div>
      </div>
    </div>
  );
}
