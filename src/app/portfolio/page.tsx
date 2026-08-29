"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Trophy, ExternalLink } from "lucide-react";

// Our Static Featured Projects
const staticProjects = [
  // Education & Learning
  { id: 's1', title: 'VNET Distance University', category: 'Education & Learning', url: 'https://www.vnetdistaanceuniversity.com/', type: 'Original' },
  { id: 's2', title: 'Gemini AI Student', category: 'Education & Learning', url: 'https://geminiai-student.netlify.app/', type: 'Running App' },
  { id: 's3', title: 'Next Skill Technologies', category: 'Education & Learning', url: 'https://next-skill-technologies.vercel.app/', type: 'Running App' },
  
  // Business & Corporate
  { id: 's4', title: 'Gen Z Neural-X', category: 'Business & Corporate', url: 'https://genzneuralx.com/', type: 'Original' },
  { id: 's5', title: 'JSA Finance', category: 'Business & Corporate', url: 'https://jsa-finance.vercel.app/', type: 'Running App' },
  { id: 's7', title: 'Nuts Website', category: 'Business & Corporate', url: 'https://nuts-website-gamma.vercel.app/', type: 'Running App' },
  { id: 's21', title: 'GoCabz Travels', category: 'Business & Corporate', url: 'http://gocabz.in/', type: 'Original' },
  
  // Sports & Community
  { id: 's8', title: 'Pumpa Squash Academy', category: 'Sports & Community', url: 'https://pumpa-squash-academy.vercel.app/', type: 'Running App' },
  { id: 's9', title: 'Spark X Dance Studio', category: 'Sports & Community', url: 'https://spark-x-eta.vercel.app/', type: 'Running App' },
  { id: 's10', title: 'GASC Srivilliputhur', category: 'Sports & Community', url: 'https://gasc-srivilliputhur.vercel.app/', type: 'Running App' },
  { id: 's11', title: 'GenSaaS Community', category: 'Sports & Community', url: 'https://community.gensaas.com/', type: 'Original' },
  
  // E-Commerce & Retail
  { id: 's12', title: 'AK Crackers', category: 'E-Commerce & Retail', url: 'https://akcrackers.genzneuralx.com/shop', type: 'Original' },
  { id: 's13', title: 'Sakthi Mobile', category: 'E-Commerce & Retail', url: 'https://sakthimobile.vercel.app/', type: 'Running App' },
  
  // Software & Web Applications
  { id: 's15', title: 'GenZ Blogs', category: 'Software & Web Apps', url: 'https://genzblogs.genzneuralx.com/', type: 'Original' },
  { id: 's16', title: 'Mobile Election', category: 'Software & Web Apps', url: 'https://moblie-election.vercel.app/', type: 'Running App' },
  { id: 's17', title: 'Online Yoga Class', category: 'Software & Web Apps', url: 'https://onlineyoga-pearl.vercel.app/', type: 'Running App' },
  { id: 's18', title: 'E-Sevai Maiyam', category: 'Software & Web Apps', url: 'https://e-sevai-apply-portal.vercel.app/', type: 'Running App' },
  { id: 's19', title: 'Virundhu Caterers', category: 'Software & Web Apps', url: 'https://clever-pixie-2df981.netlify.app/gallery', type: 'Running App' },
  
  // Multimedia & Assets
  { id: 's20', title: 'DS3 Studio', category: 'Multimedia & Assets', url: 'https://www.ds3studio.in/', type: 'Original' },
];

export default function PortfolioPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(staticProjects.map(p => p.category)))];

  const filteredProjects = activeCategory === "All" 
    ? staticProjects 
    : staticProjects.filter(p => p.category === activeCategory);

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#0f172a', paddingBottom: '100px' }}>
      
      {/* Hero Section */}
      <div style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Glow Effects (Soft for light theme) */}
        <div style={{ position: 'absolute', top: '10%', left: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(40px)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(236,72,153,0.05) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(60px)', zIndex: 0 }} />

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '50px', marginBottom: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <Trophy size={16} color="#6366f1" />
            <span style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#6366f1' }}>Selected Works</span>
          </div>
          
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: "800", lineHeight: "1.1", marginBottom: "24px", color: '#0a0a0f' }}>
            Crafting Digital <br/>
            <span style={{ background: "linear-gradient(to right, #4f46e5, #9333ea, #db2777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Excellence.</span>
          </h1>
          
          <p style={{ fontSize: "1.1rem", color: "#475569", maxWidth: "600px", margin: "0 auto 40px", lineHeight: "1.6" }}>
            A curated showcase of our live web applications, e-commerce platforms, and digital solutions across various industries.
          </p>

          {/* Category Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? '#6366f1' : 'white',
                  border: `1px solid ${activeCategory === cat ? '#6366f1' : '#cbd5e1'}`,
                  color: activeCategory === cat ? 'white' : '#475569',
                  padding: '10px 24px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: activeCategory === cat ? '0 4px 14px 0 rgba(99, 102, 241, 0.39)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Box Design (No Images) */}
      <section style={{ position: 'relative', zIndex: 1, padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '24px' 
          }}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleProjectClick(project.url)}
                style={{
                  background: 'white',
                  border: `1px solid ${hoveredId === project.id ? '#a5b4fc' : '#e2e8f0'}`,
                  borderRadius: '16px',
                  padding: '32px 24px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: hoveredId === project.id ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredId === project.id ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent Top Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: hoveredId === project.id 
                    ? 'linear-gradient(to right, #6366f1, #a855f7)' 
                    : 'transparent',
                  transition: 'background 0.3s ease'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                  <div style={{ 
                    padding: '6px 12px', 
                    borderRadius: '50px', 
                    background: '#f1f5f9', 
                    color: '#6366f1', 
                    fontSize: '12px', 
                    fontWeight: '700',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {project.category}
                  </div>
                  
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: hoveredId === project.id ? '#6366f1' : '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    color: hoveredId === project.id ? '#ffffff' : '#94a3b8',
                    border: hoveredId === project.id ? 'none' : '1px solid #e2e8f0'
                  }}>
                    <ExternalLink size={18} />
                  </div>
                </div>
                
                <div style={{ marginTop: 'auto' }}>
                  <h3 style={{ 
                    fontFamily: "'Outfit', sans-serif", 
                    fontSize: "22px", 
                    fontWeight: "700", 
                    margin: "0 0 12px 0",
                    color: hoveredId === project.id ? '#6366f1' : '#0f172a',
                    transition: 'color 0.3s ease'
                  }}>
                    {project.title}
                  </h3>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    color: '#64748b',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    <span style={{ 
                      color: project.type === 'Original' ? '#ec4899' : '#64748b',
                      fontWeight: project.type === 'Original' ? '700' : '500' 
                    }}>
                      {project.type}
                    </span>
                    <span>•</span>
                    <span>Live Project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: "center", padding: "100px 0", color: "#64748b" }}>
              <p>No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to action */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <Link 
          href="/contact" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(135deg, #4f46e5, #9333ea)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '16px',
            textDecoration: 'none',
            boxShadow: '0 10px 25px -5px rgba(99,102,241,0.4)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(99,102,241,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(99,102,241,0.4)';
          }}
        >
          Start Your Project <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
