import React from "react";
import "./Blog.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Blog() {
  return (
    <div className="blog">
      <div className="header">
        <ul>
          <li className="header__blog">Blog</li>
          <li className="header__blog-work">Works</li>
          <li className="header__blog-work">Contact</li>
        </ul>
      </div>

      <h1 className="heading__blog">Blog</h1>

      <div classname="details">
        <div className="detail-1">
          <h2 className="heading__blog-subtitle sub-1">
            UI Interactions of the week
          </h2>
          <div className="content-1">
            <h4 className="date">12 Feb 2019</h4>
            <div className="divider"></div>
            <h4 className="address">Express, Handlebars</h4>
          </div>
          <h3 className="description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h3>
        </div>
        <div className="divider-horizontal"></div>

        <div className="detail-1">
          <h2 className="heading__blog-subtitle sub-2">
            UI Interactions of the week
          </h2>
          <div className="content-1">
            <h4 className="date">12 Feb 2019</h4>
            <div className="divider"></div>
            <h4 className="address">Express, Handlebars</h4>
          </div>
          <h3 className="description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h3>
        </div>
        <div className="divider-horizontal"></div>

        <div className="detail-1">
          <h2 className="heading__blog-subtitle sub-3">
            UI Interactions of the week
          </h2>
          <div className="content-1">
            <h4 className="date">12 Feb 2019</h4>
            <div className="divider"></div>
            <h4 className="address">Express, Handlebars</h4>
          </div>
          <h3 className="description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h3>
        </div>
        <div className="divider-horizontal"></div>

        <div className="detail-1">
          <h2 className="heading__blog-subtitle sub-4">
            UI Interactions of the week
          </h2>
          <div className="content-1">
            <h4 className="date">12 Feb 2019</h4>
            <div className="divider"></div>
            <h4 className="address">Express, Handlebars</h4>
          </div>
          <h3 className="description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </h3>
        </div>
        <div className="divider-horizontal"></div>
      </div>
      <div className="bottom">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
      <h4 className="footer">Copyright ©2020 All rights reserved </h4>
    </div>
  );
}

export default Blog;
