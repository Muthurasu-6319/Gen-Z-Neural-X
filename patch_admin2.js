const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'admin', 'dashboard', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update State
content = content.replace(
    'logoUrl: "", imageUrl: ""',
    'logoUrl: "", imageUrl: "", websiteUrl: ""'
);

// 2. Update form reset in handlePortfolioSubmit
content = content.replace(
    'logoUrl: "", imageUrl: "" });\n      fetchPortfolio();',
    'logoUrl: "", imageUrl: "", websiteUrl: "" });\n      fetchPortfolio();'
);

// 3. Update handlePortfolioEdit
content = content.replace(
    'logoUrl: item.logoUrl || "", imageUrl: item.imageUrl || ""',
    'logoUrl: item.logoUrl || "", imageUrl: item.imageUrl || "", websiteUrl: item.websiteUrl || ""'
);

// 4. Update cancelPortfolioEdit
content = content.replace(
    'logoUrl: "", imageUrl: "" });\n  };',
    'logoUrl: "", imageUrl: "", websiteUrl: "" });\n  };'
);

// 5. Add Input field to the form UI
const newInput = `
                  <div className="form-group" style={{ marginBottom: "24px" }}>
                    <label className="form-label">Client Website URL (Optional)</label>
                    <input type="url" name="websiteUrl" className="form-input" placeholder="https://www.clientwebsite.com" value={portfolioData.websiteUrl} onChange={handlePortfolioChange} />
                  </div>
`;
content = content.replace(
    '<div className="grid-3">',
    newInput + '\n                  <div className="grid-3">'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Dashboard patch 2 completed");
