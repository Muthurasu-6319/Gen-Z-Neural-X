"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Briefcase, Send, LogOut, CheckCircle, MessageSquare, Edit, Trash2, FileText, GraduationCap, BookOpen } from "lucide-react";

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

  const [blogs, setBlogs] = useState<any[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);

  const [courses, setCourses] = useState<any[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [editingCourseSlug, setEditingCourseSlug] = useState<string | null>(null);
  const [courseData, setCourseData] = useState({
    title: "", description: "", duration: "", students: "", rating: "",
    level: "Beginner", imageUrl: "", syllabus: "", mode: "Online + Offline",
    certification: true, whatsappMessage: "",
    seoTitle: "", metaDescription: "", keywords: ""
  });

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-Time",
    experience: "",
    description: "",
    seoTitle: "",
    metaDescription: "",
    keywords: ""
  });

  const [blogData, setBlogData] = useState({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    author: "Admin",
    readTime: "5 min",
    seoTitle: "",
    metaDescription: "",
    keywords: ""
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
    } else if (activeTab === "blogs") {
      fetchBlogs();
    } else if (activeTab === "internships") {
      fetchInternships();
    } else if (activeTab === "courses") {
      fetchCourses();
    }
  }, [activeTab]);

  const fetchResponses = async () => {
    setLoadingResponses(true);
    try {
      const res = await fetch('/api/responses', { cache: 'no-store' });
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
      const res = await fetch('/api/careers', { cache: 'no-store' });
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

  const fetchInternships = async () => {
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

  const fetchBlogs = async () => {
    setLoadingBlogs(true);
    try {
      const res = await fetch('/api/blogs', { cache: 'no-store' });
      const data = await res.json();
      if (data.blogs) {
        const sorted = data.blogs.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setBlogs(sorted);
      }
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    } finally {
      setLoadingBlogs(false);
    }
  };

  const fetchCourses = async () => {
    setLoadingCourses(true);
    try {
      const res = await fetch('/api/courses', { cache: 'no-store' });
      const data = await res.json();
      if (data.courses) setCourses(data.courses);
    } catch (err) {
      console.error("Failed to fetch courses", err);
    } finally {
      setLoadingCourses(false);
    }
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setCourseData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleCourseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let res;
      if (editingCourseSlug) {
        res = await fetch(`/api/courses/${editingCourseSlug}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(courseData)
        });
        if (res.ok) { setSuccessMsg("Course updated successfully!"); setEditingCourseSlug(null); }
      } else {
        res = await fetch('/api/courses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(courseData)
        });
        if (res.ok) { setSuccessMsg("Course published successfully!"); }
      }
      setCourseData({ title: "", description: "", duration: "", students: "", rating: "", level: "Beginner", imageUrl: "", syllabus: "", mode: "Online + Offline", certification: true, whatsappMessage: "", seoTitle: "", metaDescription: "", keywords: "" });
      fetchCourses();
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) { console.error(err); }
  };

  const handleCourseEdit = (c: any) => {
    setEditingCourseSlug(c.id);
    setCourseData({
      title: c.title || "",
      description: c.description || "",
      duration: c.duration || "",
      students: c.students || "",
      rating: c.rating || "",
      level: c.level || "Beginner",
      imageUrl: c.imageUrl || "",
      syllabus: c.syllabus || "",
      mode: c.mode || "Online + Offline",
      certification: c.certification !== false,
      whatsappMessage: c.whatsappMessage || "",
      seoTitle: c.seoTitle || "",
      metaDescription: c.metaDescription || "",
      keywords: c.keywords || ""
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelCourseEdit = () => {
    setEditingCourseSlug(null);
    setCourseData({ title: "", description: "", duration: "", students: "", rating: "", level: "Beginner", imageUrl: "", syllabus: "", mode: "Online + Offline", certification: true, whatsappMessage: "", seoTitle: "", metaDescription: "", keywords: "" });
  };

  const handleCourseDelete = async (slug: string) => {
    if (confirm("Delete this course?")) {
      await fetch(`/api/courses/${slug}`, { method: 'DELETE' });
      fetchCourses();
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

  const handleBlogChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
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
        seoTitle: "",
        metaDescription: "",
        keywords: ""
      });
      fetchCareers();
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error("Error saving career", err);
    }
  };

  const handleInternshipChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      title: "", category: "", slots: "", duration: "", mode: "Hybrid", paidOrNot: "Unpaid", description: "", seoTitle: "", metaDescription: "", keywords: ""
    });
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingBlogId) {
        const res = await fetch(`/api/blogs/${editingBlogId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(blogData)
        });
        if (res.ok) {
          setSuccessMsg("Blog successfully updated!");
          setEditingBlogId(null);
        }
      } else {
        const res = await fetch('/api/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(blogData)
        });
        if (res.ok) {
          setSuccessMsg("Blog successfully posted!");
        }
      }
      
      setBlogData({
        title: "",
        category: "",
        excerpt: "",
        content: "",
        author: "Admin",
        readTime: "5 min",
        seoTitle: "",
        metaDescription: "",
        keywords: ""
      });
      fetchBlogs();
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error("Error saving blog", err);
    }
  };

  const handleEdit = (career: any) => {
    setEditingId(career.id);
    setFormData({
      title: career.title || "",
      department: career.department || "",
      location: career.location || "",
      type: career.type || "Full-Time",
      experience: career.experience || "",
      description: career.description || "",
      seoTitle: career.seoTitle || "",
      metaDescription: career.metaDescription || "",
      keywords: career.keywords || ""
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogEdit = (blog: any) => {
    setEditingBlogId(blog.id);
    setBlogData({
      title: blog.title || "",
      category: blog.category || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      author: blog.author || "Admin",
      readTime: blog.readTime || "5 min",
      seoTitle: blog.seoTitle || "",
      metaDescription: blog.metaDescription || "",
      keywords: blog.keywords || ""
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

  const handleBlogDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      try {
        const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
        if (res.ok) {
          fetchBlogs();
        }
      } catch (err) {
        console.error("Error deleting blog", err);
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
      seoTitle: "",
      metaDescription: "",
      keywords: ""
    });
  };

  const cancelBlogEdit = () => {
    setEditingBlogId(null);
    setBlogData({
      title: "",
      category: "",
      excerpt: "",
      content: "",
      author: "Admin",
      readTime: "5 min",
      seoTitle: "",
      metaDescription: "",
      keywords: ""
    });
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div style={{ padding: "0 24px", marginBottom: "20px" }}>
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
          </button>
          <button 
            onClick={() => setActiveTab("courses")}
            style={{ 
              display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", 
              background: activeTab === "courses" ? "var(--primary-glow)" : "transparent",
              color: activeTab === "courses" ? "var(--primary-light)" : "var(--gray-600)",
              border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", transition: "all 0.2s"
            }}
          >
            <BookOpen size={20} /> Courses
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
      <div className="admin-main">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <div style={{ marginBottom: "32px", display: "flex", alignItems: "center", gap: "16px" }}>
                        <div style={{ width: "48px", height: "48px", background: "white", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-light)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              {activeTab === "careers" ? <Briefcase size={24} /> : activeTab === "blogs" ? <FileText size={24} /> : activeTab === "internships" ? <GraduationCap size={24} /> : <MessageSquare size={24} />}
            </div>
            <div>
              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "#0a0a0f" }}>
                {activeTab === "careers" ? "Manage Careers" : activeTab === "blogs" ? "Manage Blog Posts" : activeTab === "internships" ? "Manage Internships" : activeTab === "courses" ? "Manage Courses" : "Contact Responses"}
              </h1>
              <p style={{ color: "var(--gray-500)", fontSize: "15px" }}>
                {activeTab === "careers" ? "Post and manage job openings" : activeTab === "blogs" ? "Publish and edit SEO optimized blog articles" : activeTab === "internships" ? "Post internship opportunities" : activeTab === "courses" ? "Publish and manage course listings" : "View all form submissions from the website"}
              </p>
            </div>
          </div>

          {/* Careers Tab */}
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

                  <div style={{ background: "rgba(99,102,241,0.05)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(99,102,241,0.1)", display: "flex", flexDirection: "column", gap: "16px" }}>
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

          {/* Blogs Tab */}
          {activeTab === "blogs" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="card">
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "24px" }}>
                  {editingBlogId ? "Edit Blog Post" : "Create New Blog Post"}
                </h2>

                {successMsg && (
                  <div style={{ background: "#ecfdf5", color: "#10b981", padding: "16px", borderRadius: "12px", fontSize: "15px", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", border: "1px solid #d1fae5" }}>
                    <CheckCircle size={20} /> {successMsg}
                  </div>
                )}

                <form onSubmit={handleBlogSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Blog Title</label>
                      <input type="text" name="title" className="form-input" placeholder="e.g. Top IT Career Opportunities in Sivakasi" value={blogData.title} onChange={handleBlogChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Category</label>
                      <input type="text" name="category" className="form-input" placeholder="e.g. Technology / Internships" value={blogData.category} onChange={handleBlogChange} required />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Author Name</label>
                      <input type="text" name="author" className="form-input" placeholder="e.g. Naga Muthu" value={blogData.author} onChange={handleBlogChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Short Excerpt (Summary)</label>
                      <input type="text" name="excerpt" className="form-input" placeholder="Brief 1-2 sentence summary..." value={blogData.excerpt} onChange={handleBlogChange} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Full Blog Content (Markdown / Text)</label>
                    <textarea name="content" className="form-textarea" placeholder="Write your full SEO optimized blog post here..." value={blogData.content} onChange={handleBlogChange} required style={{ minHeight: "300px" }} />
                  </div>

                  {/* SEO Settings Section */}
                  <div style={{ background: "rgba(99,102,241,0.05)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(99,102,241,0.1)", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: "700", color: "var(--primary)", margin: 0 }}>SEO Settings (Important for Google)</h3>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">SEO Title (Appears in Google Search)</label>
                      <input type="text" name="seoTitle" className="form-input" placeholder="e.g. Best IT Jobs in Sivakasi 2026 | Gen Z Neural" value={blogData.seoTitle} onChange={handleBlogChange} required />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Meta Description</label>
                      <input type="text" name="metaDescription" className="form-input" placeholder="Search engine description (150-160 characters)" value={blogData.metaDescription} onChange={handleBlogChange} required />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">SEO Keywords</label>
                      <input type="text" name="keywords" className="form-input" placeholder="e.g. IT jobs, React developer, Sivakasi software jobs (comma separated)" value={blogData.keywords} onChange={handleBlogChange} required />
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "16px" }}>
                    <button type="submit" className="btn-primary" style={{ padding: "16px 32px" }}>
                      <Send size={18} /> {editingBlogId ? "Update Blog Post" : "Publish Blog Post"}
                    </button>
                    {editingBlogId && (
                      <button type="button" onClick={cancelBlogEdit} className="btn-secondary" style={{ padding: "16px 32px", borderColor: "var(--gray-300)", color: "var(--gray-600)" }}>
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "16px", color: "var(--black)" }}>Published Blogs</h3>
                {loadingBlogs ? (
                  <p style={{ color: "var(--gray-500)" }}>Loading blogs...</p>
                ) : blogs.length === 0 ? (
                  <p style={{ color: "var(--gray-500)", background: "white", padding: "24px", borderRadius: "12px", border: "1px solid var(--gray-200)", textAlign: "center" }}>No blogs published yet.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {blogs.map((blog: any) => (
                      <div key={blog.id} style={{ background: "white", padding: "20px", borderRadius: "12px", border: "1px solid var(--gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <span className="badge badge-blue" style={{ marginBottom: "8px" }}>{blog.category}</span>
                          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "var(--black)", marginBottom: "4px" }}>{blog.title}</h4>
                          <p style={{ color: "var(--gray-500)", fontSize: "14px" }}>Published: {new Date(blog.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div style={{ display: "flex", gap: "12px" }}>
                          <button onClick={() => handleBlogEdit(blog)} style={{ background: "var(--primary-glow)", color: "var(--primary)", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Edit size={18} />
                          </button>
                          <button onClick={() => handleBlogDelete(blog.id)} style={{ background: "#fef2f2", color: "#ef4444", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
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

          {/* Internships Tab */}
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

          {/* Courses Tab */}
          {activeTab === "courses" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="card">
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "24px" }}>{editingCourseSlug ? "Edit Course" : "Publish a New Course"}</h2>
                {successMsg && (
                  <div style={{ background: "#ecfdf5", color: "#10b981", padding: "16px", borderRadius: "12px", fontSize: "15px", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", border: "1px solid #d1fae5" }}>
                    <CheckCircle size={20} /> {successMsg}
                  </div>
                )}
                <form onSubmit={handleCourseSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Course Title *</label>
                      <input type="text" name="title" className="form-input" placeholder="e.g. MERN Stack Development" value={courseData.title} onChange={handleCourseChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Level *</label>
                      <select name="level" className="form-input" value={courseData.level} onChange={handleCourseChange} style={{ cursor: "pointer" }}>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Course Description *</label>
                    <textarea name="description" className="form-textarea" placeholder="Brief description of the course..." value={courseData.description} onChange={handleCourseChange} required style={{ minHeight: "100px" }} />
                  </div>
                  <div className="grid-3">
                    <div className="form-group">
                      <label className="form-label">Duration</label>
                      <input type="text" name="duration" className="form-input" placeholder="e.g. 4 Months" value={courseData.duration} onChange={handleCourseChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Students Enrolled</label>
                      <input type="text" name="students" className="form-input" placeholder="e.g. 120+" value={courseData.students} onChange={handleCourseChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Rating</label>
                      <input type="text" name="rating" className="form-input" placeholder="e.g. 4.9" value={courseData.rating} onChange={handleCourseChange} />
                    </div>
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Mode</label>
                      <select name="mode" className="form-input" value={courseData.mode} onChange={handleCourseChange} style={{ cursor: "pointer" }}>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                        <option value="Online + Offline">Online + Offline</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Certification Included?</label>
                      <select name="certification" className="form-input" value={courseData.certification ? "true" : "false"} onChange={(e) => setCourseData(prev => ({ ...prev, certification: e.target.value === "true" }))} style={{ cursor: "pointer" }}>
                        <option value="true">Yes – Certificate Included</option>
                        <option value="false">No Certificate</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">🖼️ Course Image URL *</label>
                    <input type="url" name="imageUrl" className="form-input" placeholder="https://example.com/course-image.jpg" value={courseData.imageUrl} onChange={handleCourseChange} required />
                    <span style={{ fontSize: "12px", color: "var(--gray-400)", marginTop: 4 }}>This image will show on the course card instead of the green area.</span>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Syllabus Highlights (comma separated)</label>
                    <input type="text" name="syllabus" className="form-input" placeholder="HTML/CSS, React.js, Node.js, MongoDB, REST APIs, Deployment" value={courseData.syllabus} onChange={handleCourseChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">💬 WhatsApp Enroll Message Template *</label>
                    <textarea name="whatsappMessage" className="form-textarea" placeholder="Hi! I'm interested in the MERN Stack course. Please share the fee details and batch schedule." value={courseData.whatsappMessage} onChange={handleCourseChange} required style={{ minHeight: "100px" }} />
                    <span style={{ fontSize: "12px", color: "var(--gray-400)", marginTop: 4 }}>This message will be auto-sent on WhatsApp when a student clicks "Enroll via WhatsApp".</span>
                  </div>
                  <div style={{ background: "rgba(99,102,241,0.05)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(99,102,241,0.1)", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: "700", color: "var(--primary)", margin: 0 }}>SEO Settings</h3>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">SEO Title</label>
                      <input type="text" name="seoTitle" className="form-input" placeholder="e.g. MERN Stack Course in Sivakasi | Gen Z Neural-X" value={courseData.seoTitle} onChange={handleCourseChange} />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Meta Description</label>
                      <input type="text" name="metaDescription" className="form-input" placeholder="150-160 character description for Google" value={courseData.metaDescription} onChange={handleCourseChange} />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Keywords</label>
                      <input type="text" name="keywords" className="form-input" placeholder="MERN stack, web development, Sivakasi (comma separated)" value={courseData.keywords} onChange={handleCourseChange} />
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <button type="submit" className="btn-primary" style={{ padding: "16px 32px" }}>
                      <Send size={18} /> {editingCourseSlug ? "Update Course" : "Publish Course"}
                    </button>
                    {editingCourseSlug && (
                      <button type="button" onClick={cancelCourseEdit} className="btn-secondary" style={{ padding: "16px 32px", borderColor: "var(--gray-300)", color: "var(--gray-600)" }}>
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "16px", color: "var(--black)" }}>Published Courses</h3>
                {loadingCourses ? (
                  <p style={{ color: "var(--gray-500)" }}>Loading...</p>
                ) : courses.length === 0 ? (
                  <p style={{ color: "var(--gray-500)", background: "white", padding: "24px", borderRadius: "12px", border: "1px solid var(--gray-200)", textAlign: "center" }}>No courses published yet.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {courses.map((c: any) => (
                      <div key={c.id} style={{ background: "white", padding: "20px", borderRadius: "12px", border: "1px solid var(--gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                            <span className="badge badge-blue">{c.level}</span>
                            {c.mode && <span className="badge badge-cyan">{c.mode}</span>}
                          </div>
                          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "var(--black)", marginBottom: "4px" }}>{c.title}</h4>
                          <p style={{ color: "var(--gray-500)", fontSize: "13px" }}>{c.duration} • {c.students || "—"} students</p>
                        </div>
                        <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                          <button onClick={() => handleCourseEdit(c)} style={{ background: "var(--primary-glow)", color: "var(--primary)", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Edit size={18} />
                          </button>
                          <button onClick={() => handleCourseDelete(c.id)} style={{ background: "#fef2f2", color: "#ef4444", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
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

          {/* Responses Tab */}
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
