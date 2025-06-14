import { useState } from "react";

function Notes() {
  const branches = ["CSE", "IT"];
  const semesters = ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6"];

  const notes = [];

  branches.forEach((branch) => {
    semesters.forEach((sem) => {
      notes.push({
        title: `${branch} Notes - ${sem}`,
        branch,
        sem,
        link: `/notes/${branch}-${sem}.zip`,
      });
    });
  });

  const [selectedSem, setSelectedSem] = useState("All");
  const [selectedBranch, setSelectedBranch] = useState("All");

  const filtered = notes.filter((n) => {
    return (
      (selectedSem === "All" || n.sem === selectedSem) &&
      (selectedBranch === "All" || n.branch === selectedBranch)
    );
  });

  return (
    <div className="container">
      <h2 className="heading-xl">📚 Notes</h2>

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
        filtered.map((note, i) => (
          <div key={i} className="card">
            <h3>{note.title}</h3>
            <div className="pdf-buttons">
              <a href={note.link} target="_blank" rel="noopener noreferrer" className="pdf-button">
                📄 View
              </a>
              <a href={note.link} download className="pdf-button">
                📥 Download
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
}

export default Notes;
