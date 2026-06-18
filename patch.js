const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'app', 'admin', 'dashboard', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Add GraduationCap to lucide-react imports
content = content.replace(
  'Briefcase, Send, LogOut, CheckCircle, MessageSquare, Edit, Trash2, FileText',
  'Briefcase, Send, LogOut, CheckCircle, MessageSquare, Edit, Trash2, FileText, GraduationCap'
);

// 2. Add state for internships and update careers
const stateCode = `
  const [internships, setInternships] = useState<any[]>([]);
  const [loadingInternships, setLoadingInternships] = useState(false);
  const [editingInternshipId, setEditingInternshipId] = useState<string | null>(null);

  const [internshipData, setInternshipData] = useState({
    title: "",
    category: "",
    slots: "",
    duration: "",
    mode: "Hybrid",
    paidOrNot: "Unpaid",
    description: "",
    seoTitle: "",
    metaDescription: "",
    keywords: ""
  });

  const [blogs, setBlogs] = useState<any[]>([]);`;
content = content.replace('  const [blogs, setBlogs] = useState([]);', stateCode);

// Add SEO fields to formData (careers)
content = content.replace(
  `  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-Time",
    experience: "",
    description: "",
  });`,
  `  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-Time",
    experience: "",
    description: "",
    seoTitle: "",
    metaDescription: "",
    keywords: ""
  });`
);

// 3. Add to useEffect
const useEffectCode = `    } else if (activeTab === "blogs") {
      fetchBlogs();
    } else if (activeTab === "internships") {
      fetchInternships();
    }
  }, [activeTab]);`;
content = content.replace(
  `    } else if (activeTab === "blogs") {
      fetchBlogs();
    }
  }, [activeTab]);`,
  useEffectCode
);

// 4. Add fetchInternships
const fetchCode = `  const fetchInternships = async () => {
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

  const fetchBlogs = async () => {`;
content = content.replace('  const fetchBlogs = async () => {', fetchCode);

// 5. Add handlers
const handlersCode = `  const handleInternshipChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInternshipData({ ...internshipData, [e.target.name]: e.target.value });
  };

  const handleInternshipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingInternshipId) {
        const res = await fetch(\`/api/internships/\${editingInternshipId}\`, {
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
        title: "", category: "", slots: "", duration: "", mode: "Hybrid", paidOrNot: "Unpaid", description: "", seoTitle: "", metaDescription: "", keywords: ""
      });
      fetchInternships();
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error("Error saving internship", err);
    }
  };

  const handleInternshipEdit = (internship: any) => {
    setEditingInternshipId(internship.id || internship.slug);
    setInternshipData({
      title: internship.title || "",
      category: internship.category || "",
      slots: internship.slots || "",
      duration: internship.duration || "",
      mode: internship.mode || "Hybrid",
      paidOrNot: internship.paidOrNot || "Unpaid",
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
        const res = await fetch(\`/api/internships/\${id}\`, { method: 'DELETE' });
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
      title: "", category: "", slots: "", duration: "", mode: "Hybrid", paidOrNot: "Unpaid", description: "", seoTitle: "", metaDescription: "", keywords: ""
    });
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {`;
content = content.replace('  const handleBlogSubmit = async (e: React.FormEvent) => {', handlersCode);

// update handleEdit to include SEO fields
content = content.replace(
  `    setFormData({
      title: career.title,
      department: career.department,
      location: career.location,
      type: career.type,
      experience: career.experience,
      description: career.description,
    });`,
  `    setFormData({
      title: career.title || "",
      department: career.department || "",
      location: career.location || "",
      type: career.type || "Full-Time",
      experience: career.experience || "",
      description: career.description || "",
      seoTitle: career.seoTitle || "",
      metaDescription: career.metaDescription || "",
      keywords: career.keywords || ""
    });`
);

content = content.replace(
  `      setFormData({
        title: "",
        department: "",
        location: "",
        type: "Full-Time",
        experience: "",
        description: "",
      });`,
  `      setFormData({
        title: "",
        department: "",
        location: "",
        type: "Full-Time",
        experience: "",
        description: "",
        seoTitle: "",
        metaDescription: "",
        keywords: ""
      });`
);

content = content.replace(
  `      setFormData({
      title: "",
      department: "",
      location: "",
      type: "Full-Time",
      experience: "",
      description: "",
    });`,
  `      setFormData({
      title: "",
      department: "",
      location: "",
      type: "Full-Time",
      experience: "",
      description: "",
      seoTitle: "",
      metaDescription: "",
      keywords: ""
    });`
);

// 6. Sidebar Tab
const sidebarCode = `          <button 
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
          </button>`;
content = content.replace(
  `<button 
            onClick={() => setActiveTab("blogs")}
            style={{ 
              display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", 
              background: activeTab === "blogs" ? "var(--primary-glow)" : "transparent",
              color: activeTab === "blogs" ? "var(--primary-light)" : "var(--gray-600)",
              border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", transition: "all 0.2s"
            }}
          >
            <FileText size={20} /> Blogs
          </button>`,
  sidebarCode
);

// 7. Header Text
const headerCode = `            <div style={{ width: "48px", height: "48px", background: "white", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-light)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              {activeTab === "careers" ? <Briefcase size={24} /> : activeTab === "blogs" ? <FileText size={24} /> : activeTab === "internships" ? <GraduationCap size={24} /> : <MessageSquare size={24} />}
            </div>
            <div>
              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "#0a0a0f" }}>
                {activeTab === "careers" ? "Manage Careers" : activeTab === "blogs" ? "Manage Blog Posts" : activeTab === "internships" ? "Manage Internships" : "Contact Responses"}
              </h1>
              <p style={{ color: "var(--gray-500)", fontSize: "15px" }}>
                {activeTab === "careers" ? "Post and manage job openings" : activeTab === "blogs" ? "Publish and edit SEO optimized blog articles" : activeTab === "internships" ? "Post internship opportunities" : "View all form submissions from the website"}
              </p>
            </div>`;
content = content.replace(
  `<div style={{ width: "48px", height: "48px", background: "white", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-light)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              {activeTab === "careers" ? <Briefcase size={24} /> : activeTab === "blogs" ? <FileText size={24} /> : <MessageSquare size={24} />}
            </div>
            <div>
              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "#0a0a0f" }}>
                {activeTab === "careers" ? "Manage Careers" : activeTab === "blogs" ? "Manage Blog Posts" : "Contact Responses"}
              </h1>
              <p style={{ color: "var(--gray-500)", fontSize: "15px" }}>
                {activeTab === "careers" ? "Post and manage job openings" : activeTab === "blogs" ? "Publish and edit SEO optimized blog articles" : "View all form submissions from the website"}
              </p>
            </div>`,
  headerCode
);

// Add career SEO fields to the career form
const careerSEO = `                  <div style={{ background: "rgba(99,102,241,0.05)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(99,102,241,0.1)", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: "700", color: "var(--primary)", margin: 0 }}>SEO Settings</h3>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">SEO Title</label>
                      <input type="text" name="seoTitle" className="form-input" value={formData.seoTitle} onChange={handleChange} required />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Meta Description</label>
                      <input type="text" name="metaDescription" className="form-input" value={formData.metaDescription} onChange={handleChange} required />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">SEO Keywords</label>
                      <input type="text" name="keywords" className="form-input" value={formData.keywords} onChange={handleChange} required />
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "16px" }}>`;
content = content.replace(
  `                  <div style={{ display: "flex", gap: "16px" }}>
                    <button type="submit" className="btn-primary" style={{ padding: "16px 32px" }}>
                      <Send size={18} /> {editingId ? "Update Job Post" : "Publish Job Post"}`,
  careerSEO + `\n                    <button type="submit" className="btn-primary" style={{ padding: "16px 32px" }}>
                      <Send size={18} /> {editingId ? "Update Job Post" : "Publish Job Post"}`
);

// 8. Internships Tab Content
const internshipTabCode = `          {/* Internships Tab */}
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
                      <label className="form-label">Category</label>
                      <input type="text" name="category" className="form-input" placeholder="e.g. Development" value={internshipData.category} onChange={handleInternshipChange} required />
                    </div>
                  </div>

                  <div className="grid-3">
                    <div className="form-group">
                      <label className="form-label">Duration</label>
                      <input type="text" name="duration" className="form-input" placeholder="e.g. 3 Months" value={internshipData.duration} onChange={handleInternshipChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Available Slots</label>
                      <input type="text" name="slots" className="form-input" placeholder="e.g. 5 spots" value={internshipData.slots} onChange={handleInternshipChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Work Mode</label>
                      <select name="mode" className="form-input" value={internshipData.mode} onChange={handleInternshipChange} required>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Remote">Remote</option>
                        <option value="On-site">On-site</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Paid / Unpaid</label>
                    <select name="paidOrNot" className="form-input" value={internshipData.paidOrNot} onChange={handleInternshipChange} required>
                      <option value="Unpaid">Unpaid</option>
                      <option value="Paid">Paid</option>
                      <option value="Stipend Based">Stipend Based</option>
                    </select>
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
                      <input type="text" name="metaDescription" className="form-input" placeholder="Search engine description" value={internshipData.metaDescription} onChange={handleInternshipChange} required />
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
                      <div key={intern.id || intern.slug} style={{ background: "white", padding: "20px", borderRadius: "12px", border: "1px solid var(--gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <span className="badge badge-blue" style={{ marginBottom: "8px" }}>{intern.category}</span>
                          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "var(--black)", marginBottom: "4px" }}>{intern.title}</h4>
                          <p style={{ color: "var(--gray-500)", fontSize: "14px" }}>{intern.duration} • {intern.mode} • {intern.paidOrNot}</p>
                        </div>
                        <div style={{ display: "flex", gap: "12px" }}>
                          <button onClick={() => handleInternshipEdit(intern)} style={{ background: "var(--primary-glow)", color: "var(--primary)", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Edit size={18} />
                          </button>
                          <button onClick={() => handleInternshipDelete(intern.id || intern.slug)} style={{ background: "#fef2f2", color: "#ef4444", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
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

          {/* Responses Tab */}`;
content = content.replace('          {/* Responses Tab */}', internshipTabCode);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('SUCCESS');
