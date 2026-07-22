const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'admin', 'dashboard', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Import Package icon for Products
content = content.replace(
    'Trophy } from "lucide-react";',
    'Trophy, Package } from "lucide-react";'
);

// 2. Add State for Products
const stateCode = `
  const [products, setProducts] = useState<any[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [productData, setProductData] = useState({
    title: "", description: "", imageUrl: "", features: "", category: "Software",
    seoTitle: "", metaDescription: "", keywords: ""
  });
`;
content = content.replace(
    'const [portfolioData, setPortfolioData] = useState({',
    stateCode + '\n  const [portfolioData, setPortfolioData] = useState({'
);

// 3. Add to useEffect
const useEffectCode = `
    } else if (activeTab === "portfolio") {
      fetchPortfolio();
    } else if (activeTab === "products") {
      fetchProducts();
    }
`;
content = content.replace(
    '} else if (activeTab === "portfolio") {\n      fetchPortfolio();\n    }',
    useEffectCode
);

// 4. Add fetch function
const fetchCode = `
  const fetchProducts = async () => {
    setLoadingProducts(true);
    try {
      const res = await fetch('/api/products', { cache: 'no-store' });
      const data = await res.json();
      if (data.products) {
        const sorted = data.products.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setProducts(sorted);
      }
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setLoadingProducts(false);
    }
  };
`;
content = content.replace(
    'const fetchPortfolio = async () => {',
    fetchCode + '\n  const fetchPortfolio = async () => {'
);

// 5. Add handlers
const handlersCode = `
  const handleProductChange = (e: any) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleProductSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (editingProductId) {
        const res = await fetch(\`/api/products/\${editingProductId}\`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData)
        });
        if (res.ok) { setSuccessMsg("Product updated!"); setEditingProductId(null); }
      } else {
        const res = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData)
        });
        if (res.ok) { setSuccessMsg("Product published!"); }
      }
      setProductData({ title: "", description: "", imageUrl: "", features: "", category: "Software", seoTitle: "", metaDescription: "", keywords: "" });
      fetchProducts();
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) { console.error(err); }
  };

  const handleProductEdit = (item: any) => {
    setEditingProductId(item.id || item.slug);
    setProductData({
      title: item.title || "", description: item.description || "", imageUrl: item.imageUrl || "", 
      features: item.features || "", category: item.category || "Software",
      seoTitle: item.seoTitle || "", metaDescription: item.metaDescription || "", keywords: item.keywords || ""
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductDelete = async (id: string) => {
    if (confirm("Delete this product?")) {
      await fetch(\`/api/products/\${id}\`, { method: 'DELETE' });
      fetchProducts();
    }
  };

  const cancelProductEdit = () => {
    setEditingProductId(null);
    setProductData({ title: "", description: "", imageUrl: "", features: "", category: "Software", seoTitle: "", metaDescription: "", keywords: "" });
  };
`;
content = content.replace(
    'const handlePortfolioChange =',
    handlersCode + '\n  const handlePortfolioChange ='
);

// 6. Sidebar Tab
const sidebarTab = `
          <button 
            onClick={() => setActiveTab("products")}
            style={{ 
              display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", 
              background: activeTab === "products" ? "var(--primary-glow)" : "transparent",
              color: activeTab === "products" ? "var(--primary-light)" : "var(--gray-600)",
              border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", transition: "all 0.2s"
            }}
          >
            <Package size={20} /> Products
          </button>
`;
content = content.replace(
    '<Trophy size={20} /> Portfolio\n          </button>',
    '<Trophy size={20} /> Portfolio\n          </button>' + sidebarTab
);

// 7. Main Area Headers
content = content.replace(
    'activeTab === "portfolio" ? <Trophy size={24} /> : activeTab === "courses" ? <BookOpen size={24} />',
    'activeTab === "products" ? <Package size={24} /> : activeTab === "portfolio" ? <Trophy size={24} /> : activeTab === "courses" ? <BookOpen size={24} />'
).replace(
    'activeTab === "internships" ? <GraduationCap size={24} /> : activeTab === "portfolio" ? <Trophy size={24} /> : <MessageSquare size={24} />',
    'activeTab === "internships" ? <GraduationCap size={24} /> : activeTab === "products" ? <Package size={24} /> : activeTab === "portfolio" ? <Trophy size={24} /> : <MessageSquare size={24} />'
);

content = content.replace(
    'activeTab === "portfolio" ? "Manage Portfolio" : activeTab === "courses" ? "Manage Courses"',
    'activeTab === "products" ? "Manage Products" : activeTab === "portfolio" ? "Manage Portfolio" : activeTab === "courses" ? "Manage Courses"'
).replace(
    'activeTab === "portfolio" ? "Manage your past work and case studies" : activeTab === "courses" ? "Publish and manage course listings"',
    'activeTab === "products" ? "Publish and manage SEO-based products without payments" : activeTab === "portfolio" ? "Manage your past work and case studies" : activeTab === "courses" ? "Publish and manage course listings"'
);

// 8. Products Tab Content
const productsTabContent = `
          {/* Products Tab */}
          {activeTab === "products" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="card">
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "24px" }}>
                  {editingProductId ? "Edit Product" : "Add New Product"}
                </h2>

                {successMsg && (
                  <div style={{ background: "#ecfdf5", color: "#10b981", padding: "16px", borderRadius: "12px", fontSize: "15px", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", border: "1px solid #d1fae5" }}>
                    <CheckCircle size={20} /> {successMsg}
                  </div>
                )}

                <form onSubmit={handleProductSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Product Title</label>
                      <input type="text" name="title" className="form-input" placeholder="e.g. CRM System" value={productData.title} onChange={handleProductChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Category</label>
                      <input type="text" name="category" className="form-input" placeholder="e.g. Software / Templates" value={productData.category} onChange={handleProductChange} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Product Image URL</label>
                    <input type="text" name="imageUrl" className="form-input" placeholder="https://.../product.png" value={productData.imageUrl} onChange={handleProductChange} required />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Product Description</label>
                    <textarea name="description" className="form-textarea" placeholder="Detailed product description..." value={productData.description} onChange={handleProductChange} required style={{ minHeight: "100px" }} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Key Features (Comma separated)</label>
                    <input type="text" name="features" className="form-input" placeholder="e.g. Real-time updates, Secure, SEO Friendly" value={productData.features} onChange={handleProductChange} required />
                  </div>

                  <div style={{ background: "rgba(99,102,241,0.05)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(99,102,241,0.1)", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: "700", color: "var(--primary)", margin: 0 }}>SEO Settings</h3>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">SEO Title</label>
                      <input type="text" name="seoTitle" className="form-input" value={productData.seoTitle} onChange={handleProductChange} required />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Meta Description</label>
                      <input type="text" name="metaDescription" className="form-input" value={productData.metaDescription} onChange={handleProductChange} required />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">SEO Keywords</label>
                      <input type="text" name="keywords" className="form-input" placeholder="e.g. buy CRM software, custom templates" value={productData.keywords} onChange={handleProductChange} required />
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "16px" }}>
                    <button type="submit" className="btn-primary" style={{ padding: "16px 32px" }}>
                      <Send size={18} /> {editingProductId ? "Update Product" : "Publish Product"}
                    </button>
                    {editingProductId && (
                      <button type="button" onClick={cancelProductEdit} className="btn-secondary" style={{ padding: "16px 32px", borderColor: "var(--gray-300)", color: "var(--gray-600)" }}>
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "16px", color: "var(--black)" }}>Published Products</h3>
                {loadingProducts ? (
                  <p style={{ color: "var(--gray-500)" }}>Loading products...</p>
                ) : products.length === 0 ? (
                  <p style={{ color: "var(--gray-500)", background: "white", padding: "24px", borderRadius: "12px", border: "1px solid var(--gray-200)", textAlign: "center" }}>No products added yet.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {products.map((item: any) => (
                      <div key={item.id} style={{ background: "white", padding: "20px", borderRadius: "12px", border: "1px solid var(--gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                          {item.imageUrl ? (
                            <img src={item.imageUrl} alt="product" style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px" }} />
                          ) : (
                            <div style={{ width: "50px", height: "50px", background: "var(--gray-200)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                              <Package size={24} />
                            </div>
                          )}
                          <div>
                            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: "700", color: "var(--black)", margin: 0 }}>{item.title}</h4>
                            <span style={{ color: "var(--gray-500)", fontSize: "14px" }}>{item.category}</span>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: "12px" }}>
                          <button onClick={() => handleProductEdit(item)} style={{ background: "var(--primary-glow)", color: "var(--primary)", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Edit size={18} />
                          </button>
                          <button onClick={() => handleProductDelete(item.id)} style={{ background: "#fef2f2", color: "#ef4444", border: "none", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
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
`;

content = content.replace(
    '{/* Responses Tab */}',
    productsTabContent + '\n          {/* Responses Tab */}'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Dashboard products patch completed");
