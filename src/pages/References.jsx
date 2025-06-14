function References() {
  const videos = [
    { title: "DSA by CodeWithHarry", url: "https://youtube.com/..." },
    { title: "Java Placement - Apna College", url: "https://youtube.com/..." },
    { title: "Python for Beginners - Programming with Mosh", url: "https://youtube.com/..." },
    { title: "DBMS Playlist - Gate Smashers", url: "https://youtube.com/..." },
    { title: "Operating Systems - Neso Academy", url: "https://youtube.com/..." },
  ];

  const books = [
    { title: "Let Us C - Yashavant Kanetkar", link: "https://amazon.in/..." },
    { title: "Operating System Concepts - Silberschatz", link: "https://amazon.in/..." },
    { title: "Introduction to Algorithms - Cormen", link: "https://amazon.in/..." },
    { title: "Clean Code - Robert C. Martin", link: "https://amazon.in/..." },
    { title: "Cracking the Coding Interview - Gayle Laakmann", link: "https://amazon.in/..." },
  ];

  return (
    <div className="container references-section">
      <h2 className="heading-xl">📖 References</h2>

      <h3>🎥 YouTube Playlists</h3>
      <ul>
        {videos.map((v, i) => (
          <li key={i}>
            <a href={v.url} target="_blank" rel="noopener noreferrer">
              {v.title}
            </a>
          </li>
        ))}
      </ul>

      <h3>📚 Books</h3>
      <ul>
        {books.map((b, i) => (
          <li key={i}>
            <a href={b.link} target="_blank" rel="noopener noreferrer">
              {b.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default References;
