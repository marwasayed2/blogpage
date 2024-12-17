import React from 'react';

import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/blog.css";


const BlogTitlePage = () => {
  return (
    <section className="first-sec-main mb-5 mt-3 p-3">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="col-sm-12">
            <h1>Blog-Details</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <span>
              <Link to="/" className="home-text text-decoration-none">Home</Link> /
            </span>
          </div>
          <div className="col-auto m-0 p-0">
            <p className="about-us-text">Blog</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogTitlePage;
