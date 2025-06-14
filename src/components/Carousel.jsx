import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Access All Your Papers in One Place",
    subtitle: "Previous year papers, organized semester-wise.",
  },
  {
    id: 2,
    title: "Well-Curated Notes by Toppers",
    subtitle: "Study smarter, not harder with the right material.",
  },
  {
    id: 3,
    title: "Prepare for Placements with Confidence",
    subtitle: "Resources for Aptitude, Coding, HR and more.",
  },
];

function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <h2>{slides[index].title}</h2>
      <p>{slides[index].subtitle}</p>
    </div>
  );
}

export default Carousel;