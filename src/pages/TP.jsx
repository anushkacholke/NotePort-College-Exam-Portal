import { useState } from "react";

function TP() {
  const branches = ["CSE", "IT"];
  const topics = [
    "EmployabilityTest2025",
    "EmployabilityTest2026",
    "TechnicalTest2026"
  ];

  const allTPMaterials = [];

  branches.forEach((branch) => {
    topics.forEach((topic) => {
      allTPMaterials.push({
        title: `${branch} - ${topic} Material`,
        branch,
        topic,
        link: `/TNP/${branch}-${topic}.pdf`,
      });
    });
  });

  const [activeBranch, setActiveBranch] = useState("CSE");

  const filtered = allTPMaterials.filter(
    (item) => item.branch === activeBranch
  );

  return (
    <div className="container">
      <h2 className="heading-xl">💼 Training & Placement</h2>

      <div className="branch-selector">
        {branches.map((branch) => (
          <button
            key={branch}
            className={`branch-btn ${activeBranch === branch ? "active" : ""}`}
            onClick={() => setActiveBranch(branch)}
          >
            {branch}
          </button>
        ))}
      </div>

      <div className="grid-layout">
        {filtered.map((item, i) => (
          <div key={i} className="card">
            <h3>{item.title}</h3>
            <div className="pdf-buttons">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-button"
              >
                📄 View
              </a>
              <a href={item.link} download className="pdf-button">
                📥 Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TP;
