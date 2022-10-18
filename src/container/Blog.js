import React from "react";
import "./Blog.css";
import Navbar from "../components/Navbar";
import BlogItem from "../components/blog_item/BlogItem";
import Footer from "../components/Footer";

const blogItems = new Array(4).fill(0).map((_, i) => <BlogItem />);

function Blog() {
  return (
    <div className="blog">
      <Navbar />
      <div className="blog__wrapper">
        <h1 className="heading__blog">Blog</h1>
        {blogItems}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
