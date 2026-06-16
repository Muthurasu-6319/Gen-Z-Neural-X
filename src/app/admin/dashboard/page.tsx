"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Briefcase, Send, LogOut, CheckCircle, MessageSquare, Edit, Trash2 } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("careers");
  const [successMsg, setSuccessMsg] = useState("");
  
  const [responses, setResponses] = useState([]);
  const [loadingResponses, setLoadingResponses] = useState(false);

  const [careers, setCareers] = useState([]);
  const [loadingCareers, setLoadingCareers] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-Time",
    experience: "",
    description: "",
  });

  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") === "true") {
      setIsAuthenticated(true);
    } else {
      router.push("/admin");
    }
  }, [router]);

  useEffect(() => {
    if (activeTab === "responses") {
      fetchResponses();
    } else if (activeTab === "careers") {
      fetchCareers();
    }
  }, [activeTab]);

  const fetchResponses = async () => {
    setLoadingResponses(true);
    try {
      const res = await fetch('/api/responses');
      const data = await res.json();
      if (data.responses) {
        const sorted = data.responses.sort((a: any, b: any) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
        setResponses(sorted);
      }
    } catch (err) {
      console.error("Failed to fetch responses", err);
    } finally {
      setLoadingResponses(false);
    }
  };

  const fetchCareers = async () => {
    setLoadingCareers(true);
    try {
      const res = await fetch('/api/careers');
      const data = await res.json();
      if (data.careers) {
        const sorted = data.careers.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setCareers(sorted);
      }
    } catch (err) {
      console.error("Failed to fetch careers", err);
    } finally {
      setLoadingCareers(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
    router.push("/admin");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        const res = await fetch(`/api/careers/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          setSuccessMsg("Career successfully updated!");
          setEditingId(null);
        }
      } else {
        const res = await fetch('/api/careers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          setSuccessMsg("Career successfully posted!");
        }
      }
      
      setFormData({
        title: "",
        department: "",
        location: "",
        type: "Full-Time",
        experience: "",
        description: "",
      });
      fetchCareers();
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error("Error saving career", err);
    }
  };

  const handleEdit = (career: any) => {
    setEditingId(career.id);
    setFormData({
      title: career.title,
      department: career.department,
      location: career.location,
      type: career.type,
      experience: career.experience,
      description: career.description,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this career?")) {
      try {
        const res = await fetch(`/api/careers/${id}`, { method: 'DELETE' });
        if (res.ok) {
          fetchCareers();
        }
      } catch (err) {
        console.error("Error deleting career", err);
      }
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({
      title: "",
      department: "",
      location: "",
      type: "Full-Time",
      experience: "",
      description: "",
    });
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: "260px", background: "white", borderRight: "1px solid var(--gray-200)", padding: "24px 0", display: "flex", flexDirection: "column", position: "sticky", top: 0, height: "100vh" }}>
        <div style={{ padding: "0 24px", marginBottom: "32px" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "800", color: "var(--primary)" }}>Admin Portal</h2>
        </div>
        
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, padding: "0 16px" }}>
          <button 
            onClick={() => setActiveTab("careers")}
            style={{ 
              display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", 
              background: activeTab === "careers" ? "var(--primary-glow)" : "transparent",
              color: activeTab === "careers" ? "var(--primary-light)" : "var(--gray-600)",
              border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", transition: "all 0.2s"
            }}
          >
            <Briefcase size={20} /> Careers
          </button>
          <button 
            onClick={() => setActiveTab("responses")}
            style={{ 
              display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", 
              background: activeTab === "responses" ? "var(--primary-glow)" : "transparent",
              color: activeTab === "responses" ? "var(--primary-light)" : "var(--gray-600)",
              border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", transition: "all 0.2s"
            }}
          >
            <MessageSquare size={20} /> Responses
          </button>
        </nav>

        <div style={{ padding: "16px" }}>
          <button 
            onClick={handleLogout} 
            style={{ 
              display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", 
              width: "100%", background: "#fef2f2", color: "#ef4444",
              border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600"
            }}
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px", overflowY: "auto", height: "100vh" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <div style={{ marginBottom: "32px", display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "48px", height: "48px", background: "white", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-light)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              {activeTab === "careers" ? <Briefcase size={24} /> : <MessageSquare size={24} />}
            </div>
            <div>
              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "#0a0a0f" }}>
                {activeTab === "careers" ? "Manage Careers" : "Contact Responses"}
              </h1>
              <p style={{ color: "var(--gray-500)", fontSize: "15px" }}>
                {activeTab === "careers" ? "Post and manage job openings" : "View all form submissions from the website"}
              </p>
            </div>
          </div>

          {activeTab === "careers" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="card">
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "24px" }}>
                  {editingId ? "Edit Career Post" : "Post a New Career"}
                </h2>

                {successMsg && (
                  <div style={{ background: "#ecfdf5", color: "#10b981", padding: "16px", borderRadius: "12px", fontSize: "15px", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", border: "1px solid #d1fae5" }}>
                    <CheckCircle size={20} /> {successMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Job Title</label>
                      <input type="text" name="title" className="form-input" placeholder="e.g. Senior React Developer" value={formData.title} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Department</label>
                      <input type="text" name="department" className="form-input" placeholder="e.g. Engineering" value={formData.department} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid-3">
                    <div className="form-group">
                      <label className="form-label">Location</label>
                      <input type="text" name="location" className="form-input" placeholder="e.g. Remote / Chennai" value={formData.location} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Job Type</label>
                      <select name="type" className="form-input" value={formData.type} onChange={handleChange} required style={{ cursor: "pointer" }}>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Experience Required</label>
                      <input type="text" name="experience" className="form-input" placeholder="e.g. 2-4 Years" value={formData.experience} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Job Description</label>
                    <textarea name="description" className="form-textarea" placeholder="Enter full job description, requirements, and responsibilities..." value={formData.description} onChange={handleChange} required style={{ minHeight: "200px" }} />
                  </div>

                  <div style={{ display: "flex", gap: "16px" }}>
                    <button type="submit" className="btn-primary" style={{ padding: "16px 32px" }}>
                      <Send size={18} /> {editingId ? "Update Job Post" : "Publish Job Post"}
                    </button>
                    {editingId && (
                      <button type="button" onClick={cancelEdit} className="btn-secondary" style={{ padding: "16px 32px", borderColor: "var(--gray-300)", color: "var(--gray-600)" }}>
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "16px", color: "var(--black)" }}>Published Careers</h3>
                {loadingCareers ? (
                  <p style={{ color: "var(--gray-500)" }}>Loading careers...</p>
                ) : careers.length === 0 ? (
                  <p style={{ color: "var(--gray-500)", background: "white", padding: "24px", borderRadius: "12px", border: "1px solid var(--gray-200)", textAlign: "center" }}>No careers published yet.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {careers.map((career: any) => (
                      <div key={career.id} style={{ background: "white", padding: "20px", borderRadius: "12px", border: "1px solid var(--gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "var(--black)", marginBottom: "4px" }}>{career.title}</h4>
                          <div style={{ display: "flex", gap: "12px", color: "var(--gray-500)", fontSize: "14px" }}>
                            <span>{career.department}</span> • 
                            <span>{career.location}</span> • 
                            <span>{career.type}</span>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: "12px" }}>
                          <button onClick={() => handleEdit(career)} style={{ background: "var(--primary-glow)", color: "var(--primary)", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Edit size={18} />
                          </button>
                          <button onClick={() => handleDelete(career.id)} style={{ background: "#fef2f2", color: "#ef4444", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "responses" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {loadingResponses ? (
                <div style={{ textAlign: "center", padding: "40px", color: "var(--gray-500)" }}>Loading responses...</div>
              ) : responses.length === 0 ? (
                <div className="card" style={{ textAlign: "center", padding: "60px 20px" }}>
                  <div style={{ width: "64px", height: "64px", background: "var(--gray-100)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "var(--gray-400)" }}>
                    <MessageSquare size={32} />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", color: "var(--black)" }}>No responses yet</h3>
                  <p style={{ color: "var(--gray-500)", fontSize: "14px", marginTop: "8px" }}>When users fill out contact forms, they will appear here.</p>
                </div>
              ) : (
                responses.map((res: any, index: number) => (
                  <div key={index} className="card" style={{ padding: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid var(--gray-100)" }}>
                      <div>
                        <span className="badge badge-blue" style={{ marginBottom: "8px" }}>{res.formType || "Contact Form"}</span>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700" }}>{res.name || res.fullName || "Anonymous"}</h3>
                        {res.email && <p style={{ color: "var(--gray-500)", fontSize: "14px" }}>{res.email}</p>}
                        {res.phone && <p style={{ color: "var(--gray-500)", fontSize: "14px" }}>{res.phone}</p>}
                      </div>
                      <div style={{ fontSize: "13px", color: "var(--gray-400)", background: "var(--gray-50)", padding: "4px 12px", borderRadius: "50px" }}>
                        {new Date(res.submittedAt).toLocaleString()}
                      </div>
                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {Object.entries(res).map(([key, value]) => {
                        // Skip rendering standard keys already shown above
                        if (['id', 'formType', 'submittedAt', 'name', 'fullName', 'email', 'phone'].includes(key)) return null;
                        if (!value) return null;
                        
                        return (
                          <div key={key}>
                            <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--gray-400)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <p style={{ fontSize: "15px", color: "var(--black)", marginTop: "4px", background: "var(--gray-50)", padding: "12px", borderRadius: "8px" }}>
                              {value as string}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
