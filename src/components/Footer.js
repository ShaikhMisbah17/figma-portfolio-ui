import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="bottom">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
      <div className="footer-text">
        <h4 className="copyright-text">Copyright ©2020 All rights reserved </h4>
      </div>
    </div>
  );
}

export default Footer;
