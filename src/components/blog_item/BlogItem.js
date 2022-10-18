import React from "react";
import "./BlogItem.css";

function BlogItem() {
  return (
    <div className="blog__items">
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
      <div className="divider-horizontal"></div>
    </div>
  );
}

export default BlogItem;
