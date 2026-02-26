import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Navbar.css"; // your custom styles

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark px-4 shadow">
      <div className="container-fluid">
        {/* Left Side - Logo/Brand */}
        <a className="navbar-brand fw-bold text-purple" href="/">
          kiruthika.dev
        </a>

        {/* Toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side - Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="ms-auto d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 mt-3 mt-md-0">
            <a
              href="/KIRUTHIKA_DEVI_G.docx"
              className="nav-link-custom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-download fs-4"></i> Resume
            </a>
            <a href="#skills" className="nav-link-custom">
              <i className="bi bi-wrench fs-4"></i> Skills
            </a>
            <a href="#contact" className="nav-link-custom">
              <i className="bi bi-envelope fs-4"></i> Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
