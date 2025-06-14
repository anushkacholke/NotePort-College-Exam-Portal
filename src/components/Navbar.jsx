import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          📘 NotePort
        </Link>
      </div>
      <div className="nav-right">
        <NavLink to="/notes" className="nav-link">
          Notes
        </NavLink>
        <NavLink to="/exam" className="nav-link">
          Exam
        </NavLink>
        <NavLink to="/references" className="nav-link">
          References
        </NavLink>
        <NavLink to="/tp" className="nav-link">
          T&P
        </NavLink>
        <NavLink to="/Contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
