import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from "react-router-dom";

const Blog = () => {

  return (
    <>
      <Navbar />
      <div
        className="breadcumb-wrapper">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title" >Blog</h1>
            <ul className="breadcumb-menu">
              <li  >
                <a href="/index">Home</a>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space-top space-extra-bottom" id="blog-sec">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="blog-card style2" >
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_1.png" alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="far fa-calendar-days"></i>15 Mar, 2025</a
                    >
                    <a href="blog.html"><i className="far fa-user"></i>By Babymart</a>
                  </div>
                  <h3 className="box-title">
                    <Link to="/blogdetails">
                    Top 5 IT Solutions for Small Businesses Startup
                    </Link>
                  </h3>
                  <a href="blog-details.html" className="link-btn"
                  >Read More<i className="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-card style2" >
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_2.png" alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="far fa-calendar-days"></i>16 Mar, 2025</a
                    >
                    <a href="blog.html"><i className="far fa-user"></i>By Babymart</a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    >This post could discuss the top technology solutions</a
                    >
                  </h3>
                  <a href="blog-details.html" className="link-btn"
                  >Read More<i className="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-card style2" >
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_3.png" alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="far fa-calendar-days"></i>17 Mar, 2025</a
                    >
                    <a href="blog.html"><i className="far fa-user"></i>By Babymart</a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    >How to Choose the Right IT Solution Provider</a
                    >
                  </h3>
                  <a href="blog-details.html" className="link-btn"
                  >Read More<i className="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-card style2" >
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_4.png" alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="far fa-calendar-days"></i>15 Mar, 2025</a
                    >
                    <a href="blog.html"><i className="far fa-user"></i>By Babymart</a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    >The Benefits of Managed IT Services post could</a
                    >
                  </h3>
                  <a href="blog-details.html" className="link-btn"
                  >Read More<i className="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-card style2" >
                <div className="blog-img">
                  <img src="assets/img/blog/blog_2_1.png" alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="far fa-calendar-days"></i>16 Mar, 2025</a
                    >
                    <a href="blog.html"><i className="far fa-user"></i>By Babymart</a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    >Top 5 IT Solutions for Small Businesses Startup</a
                    >
                  </h3>
                  <a href="blog-details.html" className="link-btn"
                  >Read More<i className="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-card style2" >
                <div className="blog-img">
                  <img src="assets/img/blog/blog_2_2.png" alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="far fa-calendar-days"></i>17 Mar, 2025</a
                    >
                    <a href="blog.html"><i className="far fa-user"></i>By Babymart</a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    >This post could discuss the top technology solutions</a
                    >
                  </h3>
                  <a href="blog-details.html" className="link-btn"
                  >Read More<i className="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-card style2" >
                <div className="blog-img">
                  <img src="assets/img/blog/blog_2_3.png" alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="far fa-calendar-days"></i>15 Mar, 2025</a
                    >
                    <a href="blog.html"><i className="far fa-user"></i>By Babymart</a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    >How to Choose the Right IT Solution Provider</a
                    >
                  </h3>
                  <a href="blog-details.html" className="link-btn"
                  >Read More<i className="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-card style2" >
                <div className="blog-img">
                  <img src="assets/img/blog/blog_2_4.png" alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="far fa-calendar-days"></i>16 Mar, 2025</a
                    >
                    <a href="blog.html"><i className="far fa-user"></i>By Babymart</a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    >The Benefits of Managed IT Services post could</a
                    >
                  </h3>
                  <a href="blog-details.html" className="link-btn"
                  >Read More<i className="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-card style2" >
                <div className="blog-img">
                  <img src="assets/img/blog/blog_3_1.png" alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="far fa-calendar-days"></i>17 Mar, 2025</a
                    >
                    <a href="blog.html"><i className="far fa-user"></i>By Babymart</a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    >Top 5 IT Solutions for Small Businesses Startup</a
                    >
                  </h3>
                  <a href="blog-details.html" className="link-btn"
                  >Read More<i className="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Blog
