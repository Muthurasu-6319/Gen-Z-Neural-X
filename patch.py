import os

file_path = r'c:\Users\acer\OneDrive\Desktop\Gen Z Neural - X (1)\genzneural\src\app\admin\dashboard\page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add GraduationCap to lucide-react imports
content = content.replace('Briefcase, Send, LogOut, CheckCircle, MessageSquare, Edit, Trash2, FileText', 'Briefcase, Send, LogOut, CheckCircle, MessageSquare, Edit, Trash2, FileText, GraduationCap')

# 2. Add state
state_code = '''
  const [internships, setInternships] = useState([]);
  const [loadingInternships, setLoadingInternships] = useState(false);
  const [editingInternshipId, setEditingInternshipId] = useState<string | null>(null);

  const [internshipData, setInternshipData] = useState({
    title: "",
    duration: "",
    stipend: "",
    location: "",
    description: "",
    seoTitle: "",
    metaDescription: "",
    keywords: ""
  });

  const [blogs, setBlogs] = useState([]);'''
content = content.replace('  const [blogs, setBlogs] = useState([]);', state_code)

# 3. Add to useEffect
use_effect_code = '''    } else if (activeTab === "blogs") {
      fetchBlogs();
    } else if (activeTab === "internships") {
      fetchInternships();
    }
  }, [activeTab]);'''
content = content.replace('''    } else if (activeTab === "blogs") {
      fetchBlogs();
    }
  }, [activeTab]);''', use_effect_code)

# 4. Add fetchInternships
fetch_code = '''  const fetchInternships = async () => {
    setLoadingInternships(true);
    try {
      const res = await fetch('/api/internships', { cache: 'no-store' });
      const data = await res.json();
      if (data.internships) {
        const sorted = data.internships.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setInternships(sorted);
      }
    } catch (err) {
      console.error("Failed to fetch internships", err);
    } finally {
      setLoadingInternships(false);
    }
  };

  const fetchBlogs = async () => {'''
content = content.replace('  const fetchBlogs = async () => {', fetch_code)

# 5. Add handlers
handlers_code = '''  const handleInternshipChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInternshipData({ ...internshipData, [e.target.name]: e.target.value });
  };

  const handleInternshipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingInternshipId) {
        const res = await fetch(`/api/internships/${editingInternshipId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(internshipData)
        });
        if (res.ok) {
          setSuccessMsg("Internship successfully updated!");
          setEditingInternshipId(null);
        }
      } else {
        const res = await fetch('/api/internships', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(internshipData)
        });
        if (res.ok) {
          setSuccessMsg("Internship successfully posted!");
        }
      }
      
      setInternshipData({
        title: "", duration: "", stipend: "", location: "", description: "", seoTitle: "", metaDescription: "", keywords: ""
      });
      fetchInternships();
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error("Error saving internship", err);
    }
  };

  const handleInternshipEdit = (internship: any) => {
    setEditingInternshipId(internship.id);
    setInternshipData({
      title: internship.title || "",
      duration: internship.duration || "",
      stipend: internship.stipend || "",
      location: internship.location || "",
      description: internship.description || "",
      seoTitle: internship.seoTitle || "",
      metaDescription: internship.metaDescription || "",
      keywords: internship.keywords || ""
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInternshipDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this internship post?")) {
      try {
        const res = await fetch(`/api/internships/${id}`, { method: 'DELETE' });
        if (res.ok) {
          fetchInternships();
        }
      } catch (err) {
        console.error("Error deleting internship", err);
      }
    }
  };

  const cancelInternshipEdit = () => {
    setEditingInternshipId(null);
    setInternshipData({
      title: "", duration: "", stipend: "", location: "", description: "", seoTitle: "", metaDescription: "", keywords: ""
    });
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {'''
content = content.replace('  const handleBlogSubmit = async (e: React.FormEvent) => {', handlers_code)

# 6. Sidebar Tab
sidebar_code = '''          <button 
            onClick={() => setActiveTab("blogs")}
            style={{ 
              display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", 
              background: activeTab === "blogs" ? "var(--primary-glow)" : "transparent",
              color: activeTab === "blogs" ? "var(--primary-light)" : "var(--gray-600)",
              border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", transition: "all 0.2s"
            }}
          >
            <FileText size={20} /> Blogs
          </button>
          <button 
            onClick={() => setActiveTab("internships")}
            style={{ 
              display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", 
              background: activeTab === "internships" ? "var(--primary-glow)" : "transparent",
              color: activeTab === "internships" ? "var(--primary-light)" : "var(--gray-600)",
              border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", transition: "all 0.2s"
            }}
          >
            <GraduationCap size={20} /> Internships
          </button>'''
content = content.replace('''          <button 
            onClick={() => setActiveTab("blogs")}
            style={{ 
              display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", 
              background: activeTab === "blogs" ? "var(--primary-glow)" : "transparent",
              color: activeTab === "blogs" ? "var(--primary-light)" : "var(--gray-600)",
              border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", transition: "all 0.2s"
            }}
          >
            <FileText size={20} /> Blogs
          </button>''', sidebar_code)

# 7. Header Text
header_code = '''            <div style={{ width: "48px", height: "48px", background: "white", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-light)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              {activeTab === "careers" ? <Briefcase size={24} /> : activeTab === "blogs" ? <FileText size={24} /> : activeTab === "internships" ? <GraduationCap size={24} /> : <MessageSquare size={24} />}
            </div>
            <div>
              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "#0a0a0f" }}>
                {activeTab === "careers" ? "Manage Careers" : activeTab === "blogs" ? "Manage Blog Posts" : activeTab === "internships" ? "Manage Internships" : "Contact Responses"}
              </h1>
              <p style={{ color: "var(--gray-500)", fontSize: "15px" }}>
                {activeTab === "careers" ? "Post and manage job openings" : activeTab === "blogs" ? "Publish and edit SEO optimized blog articles" : activeTab === "internships" ? "Post internship opportunities" : "View all form submissions from the website"}
              </p>
            </div>'''
content = content.replace('''            <div style={{ width: "48px", height: "48px", background: "white", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-light)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              {activeTab === "careers" ? <Briefcase size={24} /> : activeTab === "blogs" ? <FileText size={24} /> : <MessageSquare size={24} />}
            </div>
            <div>
              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "#0a0a0f" }}>
                {activeTab === "careers" ? "Manage Careers" : activeTab === "blogs" ? "Manage Blog Posts" : "Contact Responses"}
              </h1>
              <p style={{ color: "var(--gray-500)", fontSize: "15px" }}>
                {activeTab === "careers" ? "Post and manage job openings" : activeTab === "blogs" ? "Publish and edit SEO optimized blog articles" : "View all form submissions from the website"}
              </p>
            </div>''', header_code)

# 8. Internships Tab Content
internship_tab_code = '''          {/* Internships Tab */}
          {activeTab === "internships" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="card">
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "24px" }}>
                  {editingInternshipId ? "Edit Internship" : "Create New Internship"}
                </h2>

                {successMsg && (
                  <div style={{ background: "#ecfdf5", color: "#10b981", padding: "16px", borderRadius: "12px", fontSize: "15px", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", border: "1px solid #d1fae5" }}>
                    <CheckCircle size={20} /> {successMsg}
                  </div>
                )}

                <form onSubmit={handleInternshipSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Internship Title</label>
                      <input type="text" name="title" className="form-input" placeholder="e.g. Frontend Developer Intern" value={internshipData.title} onChange={handleInternshipChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Duration</label>
                      <input type="text" name="duration" className="form-input" placeholder="e.g. 3 Months" value={internshipData.duration} onChange={handleInternshipChange} required />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Stipend / Benefits</label>
                      <input type="text" name="stipend" className="form-input" placeholder="e.g. Certificate + Experience" value={internshipData.stipend} onChange={handleInternshipChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Location</label>
                      <input type="text" name="location" className="form-input" placeholder="e.g. Remote / On-site" value={internshipData.location} onChange={handleInternshipChange} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Full Description (Markdown / Text)</label>
                    <textarea name="description" className="form-textarea" placeholder="Write full internship details..." value={internshipData.description} onChange={handleInternshipChange} required style={{ minHeight: "200px" }} />
                  </div>

                  {/* SEO Settings Section */}
                  <div style={{ background: "rgba(99,102,241,0.05)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(99,102,241,0.1)", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: "700", color: "var(--primary)", margin: 0 }}>SEO Settings (Important for Google)</h3>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">SEO Title</label>
                      <input type="text" name="seoTitle" className="form-input" placeholder="e.g. Frontend Internship in Sivakasi" value={internshipData.seoTitle} onChange={handleInternshipChange} required />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Meta Description</label>
                      <input type="text" name="metaDescription" className="form-input" placeholder="Search engine description (150-160 characters)" value={internshipData.metaDescription} onChange={handleInternshipChange} required />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">SEO Keywords</label>
                      <input type="text" name="keywords" className="form-input" placeholder="e.g. Internships, React, Sivakasi" value={internshipData.keywords} onChange={handleInternshipChange} required />
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "16px" }}>
                    <button type="submit" className="btn-primary" style={{ padding: "16px 32px" }}>
                      <Send size={18} /> {editingInternshipId ? "Update Internship" : "Publish Internship"}
                    </button>
                    {editingInternshipId && (
                      <button type="button" onClick={cancelInternshipEdit} className="btn-secondary" style={{ padding: "16px 32px", borderColor: "var(--gray-300)", color: "var(--gray-600)" }}>
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "16px", color: "var(--black)" }}>Published Internships</h3>
                {loadingInternships ? (
                  <p style={{ color: "var(--gray-500)" }}>Loading internships...</p>
                ) : internships.length === 0 ? (
                  <p style={{ color: "var(--gray-500)", background: "white", padding: "24px", borderRadius: "12px", border: "1px solid var(--gray-200)", textAlign: "center" }}>No internships published yet.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {internships.map((intern: any) => (
                      <div key={intern.id} style={{ background: "white", padding: "20px", borderRadius: "12px", border: "1px solid var(--gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "var(--black)", marginBottom: "4px" }}>{intern.title}</h4>
                          <p style={{ color: "var(--gray-500)", fontSize: "14px" }}>{intern.duration} • {intern.stipend}</p>
                        </div>
                        <div style={{ display: "flex", gap: "12px" }}>
                          <button onClick={() => handleInternshipEdit(intern)} style={{ background: "var(--primary-glow)", color: "var(--primary)", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Edit size={18} />
                          </button>
                          <button onClick={() => handleInternshipDelete(intern.id)} style={{ background: "#fef2f2", color: "#ef4444", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
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

          {/* Responses Tab */}'''
content = content.replace('          {/* Responses Tab */}', internship_tab_code)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("SUCCESS")
