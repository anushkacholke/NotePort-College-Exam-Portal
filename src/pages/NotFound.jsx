import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container" style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1 className="heading-xl" style={{ color: "#ef4444" }}>404</h1>
      <p>Page Not Found</p>
      <Link to="/" className="link">← Go Back Home</Link>
    </div>
  );
}

export default NotFound;
