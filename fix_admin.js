const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'admin', 'dashboard', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// The block to move
const inputBlock = `
                  <div className="form-group" style={{ marginBottom: "24px" }}>
                    <label className="form-label">Client Website URL (Optional)</label>
                    <input type="url" name="websiteUrl" className="form-input" placeholder="https://www.clientwebsite.com" value={portfolioData.websiteUrl} onChange={handlePortfolioChange} />
                  </div>
`;

// Remove from Careers
content = content.replace(inputBlock, '');

// Add to Portfolio (before the submit button div)
const submitButtonDiv = '<div style={{ display: "flex", gap: "16px" }}>\n                    <button type="submit" className="btn-primary" style={{ padding: "16px 32px" }}>\n                      <Send size={18} /> {editingPortfolioId ? "Update Portfolio" : "Add Portfolio Item"}';

if (content.includes(submitButtonDiv)) {
    content = content.replace(submitButtonDiv, inputBlock + '\n                  ' + submitButtonDiv);
} else {
    console.error("Could not find portfolio submit button div");
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Dashboard fix completed");
