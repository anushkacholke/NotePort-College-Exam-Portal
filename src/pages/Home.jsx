import React from "react";
import Carousel from "../components/Carousel";

function Home() {
  // Sample feature sections
  const features = [
    {
      title: "📄 Previous Year Papers",
      description: "Access CIA & End Sem papers for all branches and semesters.",
      link: "/exam"
    },
    {
      title: "📚 Comprehensive Notes",
      description: "Download well-curated notes for every semester and branch.",
      link: "/notes"
    },
    {
      title: "🎯 Training & Placement",
      description: "Prepare for interviews with T&P materials and mock tests.",
      link: "/tp"
    },
    {
      title: "📖 References",
      description: "Watch playlists and refer recommended books for your courses.",
      link: "/references"
    }
  ];

  return (
    <div className="container">
      <section className="hero">
  <h1>Welcome to NotePort</h1>
  <p>Your go‑to portal for exam papers, notes, and placement preparation.</p>
  <Carousel />
</section>

      <section className="features">
        {features.map((item, i) => (
          <a href={item.link} key={i} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="view-btn">Explore →</span>
          </a>
        ))}
      </section>
    </div>
  );
}

export default Home;
