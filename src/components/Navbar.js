import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="navbar__blog">Blog</li>
        <li className="navbar__blog-work">Works</li>
        <li className="navbar__blog-work">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
