import { useState } from "react";

function Exam() {
  const branches = ["CSE", "IT"];
  const semesters = ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6"];

  const examPapers = [];

  branches.forEach((branch) => {
    semesters.forEach((sem) => {
      examPapers.push({
        title: `${branch} Exam Paper - ${sem}`,
        branch,
        sem,
        link: `/exam/${branch}-${sem}-Exam.pdf`, 
      });
    });
  });

  const [selectedSem, setSelectedSem] = useState("All");
  const [selectedBranch, setSelectedBranch] = useState("All");

  const filtered = examPapers.filter((paper) => {
    return (
      (selectedSem === "All" || paper.sem === selectedSem) &&
      (selectedBranch === "All" || paper.branch === selectedBranch)
    );
  });

  return (
    <div className="container">
      <h2 className="heading-xl">📝 Exam Papers</h2>

      <div style={{ marginBottom: "1.5rem" }}>
        <label>Semester: </label>
        <select value={selectedSem} onChange={(e) => setSelectedSem(e.target.value)}>
          <option value="All">All</option>
          {semesters.map((sem, i) => (
            <option key={i} value={sem}>{sem}</option>
          ))}
        </select>

        <label style={{ marginLeft: "1rem" }}>Branch: </label>
        <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}>
          <option value="All">All</option>
          {branches.map((b, i) => (
            <option key={i} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {filtered.length > 0 ? (
        filtered.map((paper, i) => (
          <div key={i} className="card">
            <h3>{paper.title}</h3>
            <div className="pdf-buttons">
              <a href={paper.link} target="_blank" rel="noopener noreferrer" className="pdf-button">
                📄 View
              </a>
              <a href={paper.link} download className="pdf-button">
                📥 Download
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No exam papers found.</p>
      )}
    </div>
  );
}

export default Exam;
