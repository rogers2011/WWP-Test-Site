import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar w/ text
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to = "/" className="nav-link active">Home</Link> 
            </li>
            <li className="nav-item">
              <Link to = "/register" className="nav-link active">Register</Link> 
            </li>
            <li className="nav-item">
              <Link to = "/login" className="nav-link active">Login</Link> 
            </li>
          </ul>
          <span className="navbar-text">Navbar text with an inline element</span>
        </div>
      </div>
    </nav>
  );
};
export default Header;
