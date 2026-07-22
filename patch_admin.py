import re
import sys

file_path = r'c:\Users\acer\OneDrive\Desktop\Gen Z Neural - X (1)\genzneural\src\app\admin\dashboard\page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Import Trophy
content = content.replace(
    'import { Briefcase, Send, LogOut, CheckCircle, MessageSquare, Edit, Trash2, FileText, GraduationCap, BookOpen } from "lucide-react";',
    'import { Briefcase, Send, LogOut, CheckCircle, MessageSquare, Edit, Trash2, FileText, GraduationCap, BookOpen, Trophy } from "lucide-react";'
)

# 2. Add State
state_code = """
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(false);
  const [editingPortfolioId, setEditingPortfolioId] = useState<string | null>(null);
  const [portfolioData, setPortfolioData] = useState({
    title: "", client: "", category: "Web Development", categoryColor: "#6366f1",
    description: "", tech: "", result: "", bgGradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    logoUrl: "", imageUrl: ""
  });
"""
content = content.replace(
    'const [courseData, setCourseData] = useState({',
    state_code + '\n  const [courseData, setCourseData] = useState({'
)

# 3. Add to useEffect
useEffect_code = """
    } else if (activeTab === "courses") {
      fetchCourses();
    } else if (activeTab === "portfolio") {
      fetchPortfolio();
    }
"""
content = content.replace(
    '} else if (activeTab === "courses") {\n      fetchCourses();\n    }',
    useEffect_code
)

# 4. Add fetch function
fetch_code = """
  const fetchPortfolio = async () => {
    setLoadingPortfolio(true);
    try {
      const res = await fetch('/api/portfolio', { cache: 'no-store' });
      const data = await res.json();
      if (data.portfolio) {
        const sorted = data.portfolio.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setPortfolioItems(sorted);
      }
    } catch (err) {
      console.error("Failed to fetch portfolio", err);
    } finally {
      setLoadingPortfolio(false);
    }
  };
"""
content = content.replace(
    'const fetchCourses = async () => {',
    fetch_code + '\n  const fetchCourses = async () => {'
)

# 5. Add handlers
handlers_code = """
  const handlePortfolioChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setPortfolioData({ ...portfolioData, [e.target.name]: e.target.value });
  };

  const handlePortfolioSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingPortfolioId) {
        const res = await fetch(`/api/portfolio/${editingPortfolioId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(portfolioData)
        });
        if (res.ok) { setSuccessMsg("Portfolio updated!"); setEditingPortfolioId(null); }
      } else {
        const res = await fetch('/api/portfolio', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(portfolioData)
        });
        if (res.ok) { setSuccessMsg("Portfolio published!"); }
      }
      setPortfolioData({ title: "", client: "", category: "Web Development", categoryColor: "#6366f1", description: "", tech: "", result: "", bgGradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", logoUrl: "", imageUrl: "" });
      fetchPortfolio();
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) { console.error(err); }
  };

  const handlePortfolioEdit = (item: any) => {
    setEditingPortfolioId(item.id || item.slug);
    setPortfolioData({
      title: item.title || "", client: item.client || "", category: item.category || "Web Development",
      categoryColor: item.categoryColor || "#6366f1", description: item.description || "", tech: item.tech || "",
      result: item.result || "", bgGradient: item.bgGradient || "linear-gradient(135deg, #6366f1, #8b5cf6)",
      logoUrl: item.logoUrl || "", imageUrl: item.imageUrl || ""
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePortfolioDelete = async (id: string) => {
    if (confirm("Delete this portfolio item?")) {
      await fetch(`/api/portfolio/${id}`, { method: 'DELETE' });
      fetchPortfolio();
    }
  };

  const cancelPortfolioEdit = () => {
    setEditingPortfolioId(null);
    setPortfolioData({ title: "", client: "", category: "Web Development", categoryColor: "#6366f1", description: "", tech: "", result: "", bgGradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", logoUrl: "", imageUrl: "" });
  };
"""
content = content.replace(
    'const handleCourseChange =',
    handlers_code + '\n  const handleCourseChange ='
)

# 6. Sidebar Tab
sidebar_tab = """
          <button 
            onClick={() => setActiveTab("portfolio")}
            style={{ 
              display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", 
              background: activeTab === "portfolio" ? "var(--primary-glow)" : "transparent",
              color: activeTab === "portfolio" ? "var(--primary-light)" : "var(--gray-600)",
              border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", transition: "all 0.2s"
            }}
          >
            <Trophy size={20} /> Portfolio
          </button>
"""
content = content.replace(
    '<BookOpen size={20} /> Courses\n          </button>',
    '<BookOpen size={20} /> Courses\n          </button>' + sidebar_tab
)

# 7. Main Area Headers
content = content.replace(
    'activeTab === "courses" ? <BookOpen size={24} />',
    'activeTab === "portfolio" ? <Trophy size={24} /> : activeTab === "courses" ? <BookOpen size={24} />'
).replace(
    'activeTab === "internships" ? <GraduationCap size={24} /> : <MessageSquare size={24} />',
    'activeTab === "internships" ? <GraduationCap size={24} /> : activeTab === "portfolio" ? <Trophy size={24} /> : <MessageSquare size={24} />'
)

content = content.replace(
    'activeTab === "courses" ? "Manage Courses"',
    'activeTab === "portfolio" ? "Manage Portfolio" : activeTab === "courses" ? "Manage Courses"'
).replace(
    'activeTab === "courses" ? "Publish and manage course listings"',
    'activeTab === "portfolio" ? "Manage your past work and case studies" : activeTab === "courses" ? "Publish and manage course listings"'
)

# 8. Portfolio Tab Content
portfolio_tab_content = """
          {/* Portfolio Tab */}
          {activeTab === "portfolio" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="card">
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "24px" }}>
                  {editingPortfolioId ? "Edit Portfolio Item" : "Add New Portfolio Item"}
                </h2>

                {successMsg && (
                  <div style={{ background: "#ecfdf5", color: "#10b981", padding: "16px", borderRadius: "12px", fontSize: "15px", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", border: "1px solid #d1fae5" }}>
                    <CheckCircle size={20} /> {successMsg}
                  </div>
                )}

                <form onSubmit={handlePortfolioSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Project Title</label>
                      <input type="text" name="title" className="form-input" placeholder="e.g. Dental Clinic Website" value={portfolioData.title} onChange={handlePortfolioChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Client Name</label>
                      <input type="text" name="client" className="form-input" placeholder="e.g. ABC Dental" value={portfolioData.client} onChange={handlePortfolioChange} required />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Category</label>
                      <select name="category" className="form-input" value={portfolioData.category} onChange={handlePortfolioChange} required>
                        <option value="Web Development">Web Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="SEO">SEO</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Custom Software">Custom Software</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Tech / Services Used</label>
                      <input type="text" name="tech" className="form-input" placeholder="e.g. Next.js, SEO, Facebook Ads (comma separated)" value={portfolioData.tech} onChange={handlePortfolioChange} required />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Client Logo URL (Optional)</label>
                      <input type="text" name="logoUrl" className="form-input" placeholder="https://.../logo.png" value={portfolioData.logoUrl} onChange={handlePortfolioChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Project Image URL (Optional)</label>
                      <input type="text" name="imageUrl" className="form-input" placeholder="https://.../project.png" value={portfolioData.imageUrl} onChange={handlePortfolioChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea name="description" className="form-textarea" placeholder="Briefly describe the project and what you did..." value={portfolioData.description} onChange={handlePortfolioChange} required style={{ minHeight: "100px" }} />
                  </div>

                  <div className="grid-3">
                    <div className="form-group">
                      <label className="form-label">Result / Impact</label>
                      <input type="text" name="result" className="form-input" placeholder="e.g. 200% traffic increase" value={portfolioData.result} onChange={handlePortfolioChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Category Color (Hex)</label>
                      <input type="text" name="categoryColor" className="form-input" placeholder="#6366f1" value={portfolioData.categoryColor} onChange={handlePortfolioChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Background Gradient (CSS)</label>
                      <input type="text" name="bgGradient" className="form-input" placeholder="linear-gradient(135deg, #6366f1, #8b5cf6)" value={portfolioData.bgGradient} onChange={handlePortfolioChange} required />
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "16px" }}>
                    <button type="submit" className="btn-primary" style={{ padding: "16px 32px" }}>
                      <Send size={18} /> {editingPortfolioId ? "Update Portfolio" : "Add Portfolio Item"}
                    </button>
                    {editingPortfolioId && (
                      <button type="button" onClick={cancelPortfolioEdit} className="btn-secondary" style={{ padding: "16px 32px", borderColor: "var(--gray-300)", color: "var(--gray-600)" }}>
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "16px", color: "var(--black)" }}>Portfolio Items</h3>
                {loadingPortfolio ? (
                  <p style={{ color: "var(--gray-500)" }}>Loading portfolio...</p>
                ) : portfolioItems.length === 0 ? (
                  <p style={{ color: "var(--gray-500)", background: "white", padding: "24px", borderRadius: "12px", border: "1px solid var(--gray-200)", textAlign: "center" }}>No portfolio items added yet.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {portfolioItems.map((item: any) => (
                      <div key={item.id} style={{ background: "white", padding: "20px", borderRadius: "12px", border: "1px solid var(--gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                          {item.logoUrl ? (
                            <img src={item.logoUrl} alt="logo" style={{ width: "50px", height: "50px", objectFit: "contain", borderRadius: "8px" }} />
                          ) : (
                            <div style={{ width: "50px", height: "50px", background: item.bgGradient || "var(--gray-200)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                              <Trophy size={24} />
                            </div>
                          )}
                          <div>
                            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "var(--black)", marginBottom: "4px" }}>{item.title}</h4>
                            <div style={{ display: "flex", gap: "12px", color: "var(--gray-500)", fontSize: "14px" }}>
                              <span>{item.client}</span> • 
                              <span>{item.category}</span>
                            </div>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: "12px" }}>
                          <button onClick={() => handlePortfolioEdit(item)} style={{ background: "var(--primary-glow)", color: "var(--primary)", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Edit size={18} />
                          </button>
                          <button onClick={() => handlePortfolioDelete(item.id)} style={{ background: "#fef2f2", color: "#ef4444", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
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
"""

content = content.replace(
    '{/* Responses Tab */}',
    portfolio_tab_content + '\n          {/* Responses Tab */}'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Dashboard patch completed")
