import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className="link__style">
          <li className="navbar__blog-home">Home</li>
        </Link>
        <Link to="/blog" className="link__style">
          <li className="navbar__blog">Blog</li>
        </Link>
        <Link to="/work" className="link__style">
          <li className="navbar__blog-works">Works</li>
        </Link>
        <Link to="/work-detail" className="link__style">
          <li className="navbar__blog-contact">Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
