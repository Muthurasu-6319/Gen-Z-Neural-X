"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Trophy, ExternalLink, ArrowUpRight } from "lucide-react";

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
  { id: 's18', title: 'E-Sevai', category: 'Software & Web Apps', url: 'https://e-sevai-apply-portal.vercel.app/', type: 'Running App' },
  { id: 's19', title: 'Virundhu Caterers', category: 'Software & Web Apps', url: 'https://clever-pixie-2df981.netlify.app/gallery', type: 'Running App' },
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
    <div style={{ backgroundColor: '#050508', minHeight: '100vh', color: 'white', paddingBottom: '100px' }}>
      
      {/* Hero Section */}
      <div style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '10%', left: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(60px)', zIndex: 0 }} />

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50px', marginBottom: '24px' }}>
            <Trophy size={16} color="#a5b4fc" />
            <span style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase', color: '#a5b4fc' }}>Selected Works</span>
          </div>
          
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: "800", lineHeight: "1.1", marginBottom: "24px", color: '#ffffff' }}>
            Crafting Digital <br/>
            <span style={{ background: "linear-gradient(to right, #818cf8, #c084fc, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Excellence.</span>
          </h1>
          
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "0 auto 40px", lineHeight: "1.6" }}>
            A curated showcase of our live web applications, e-commerce platforms, and digital solutions across various industries.
          </p>

          {/* Category Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? 'rgba(255,255,255,0.1)' : 'transparent',
                  border: `1px solid ${activeCategory === cat ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'}`,
                  color: activeCategory === cat ? 'white' : 'rgba(255,255,255,0.5)',
                  padding: '10px 24px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive List Design */}
      <section style={{ position: 'relative', zIndex: 1, padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleProjectClick(project.url)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '40px 20px',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  background: hoveredId === project.id ? 'rgba(255,255,255,0.02)' : 'transparent',
                  transform: hoveredId === project.id ? 'translateX(10px)' : 'translateX(0)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flex: 1 }}>
                  <span style={{ 
                    fontFamily: "'Outfit', sans-serif", 
                    fontSize: '16px', 
                    color: hoveredId === project.id ? '#a5b4fc' : 'rgba(255,255,255,0.3)',
                    transition: 'color 0.3s ease',
                    minWidth: '40px'
                  }}>
                    {project.type === 'Original' ? '★' : '01'}
                  </span>
                  
                  <div>
                    <h3 style={{ 
                      fontFamily: "'Outfit', sans-serif", 
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)", 
                      fontWeight: "700", 
                      margin: 0,
                      color: hoveredId === project.id ? '#ffffff' : 'rgba(255,255,255,0.7)',
                      transition: 'color 0.3s ease'
                    }}>
                      {project.title}
                    </h3>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      marginTop: '8px',
                      opacity: hoveredId === project.id ? 1 : 0.6,
                      transition: 'opacity 0.3s ease'
                    }}>
                      <span style={{ fontSize: '14px', color: '#818cf8', fontWeight: '500' }}>{project.category}</span>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{project.type}</span>
                    </div>
                  </div>
                </div>

                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: hoveredId === project.id ? 'white' : 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s ease',
                  transform: hoveredId === project.id ? 'scale(1)' : 'scale(0.8)'
                }}>
                  <ArrowUpRight 
                    size={24} 
                    color={hoveredId === project.id ? '#000' : 'rgba(255,255,255,0.5)'} 
                    style={{
                      transform: hoveredId === project.id ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: "center", padding: "100px 0", color: "rgba(255,255,255,0.5)" }}>
              <p>No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to action */}
      <div style={{ textAlign: "center", marginTop: "100px" }}>
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
