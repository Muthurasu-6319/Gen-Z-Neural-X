"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@genz.com" && password === "Naga@Muthu#2317") {
      sessionStorage.setItem("isAdmin", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div className="card" style={{ maxWidth: "450px", width: "100%", padding: "40px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ width: "64px", height: "64px", background: "rgba(99,102,241,0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "#6366f1" }}>
            <ShieldCheck size={32} />
          </div>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: "800", color: "#0a0a0f", marginBottom: "8px" }}>Admin Portal</h2>
          <p style={{ color: "#6b6fa0", fontSize: "14px" }}>Sign in to manage Gen Z Neural-X</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {error && (
            <div style={{ background: "#fef2f2", color: "#ef4444", padding: "12px", borderRadius: "8px", fontSize: "14px", textAlign: "center", fontWeight: "500", border: "1px solid #fee2e2" }}>
              {error}
            </div>
          )}
          
          <div className="form-group">
            <label className="form-label" style={{ display: "flex", alignItems: "center", gap: "8px" }}><Mail size={16} /> Email Address</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="admin@genz.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" style={{ display: "flex", alignItems: "center", gap: "8px" }}><Lock size={16} /> Password</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Enter password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "12px", padding: "16px" }}>
            Login to Dashboard <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
