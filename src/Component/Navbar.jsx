import React from 'react'
import babyMart from "../assets/img/mainlogo.png";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="ot-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-location-dot"></i>
                      <a target="_blank" href="https://www.google.com/maps/">
                        6391 Elgin St. Celina, USA
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <p className="header-notice">
                  Babymart Flash Discount: Starting at
                  <span className="text-title">30% Off</span>
                </p>
              </div>
              <div className="col-auto d-none d-xl-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fal fa-comments-question"></i>
                      <a href="/contact">Help</a>
                    </li>
                    <li>
                      <i className="fal fa-user"></i>{" "}
                      <a href="/contact">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="/">
                      <img src={babyMart} style={{ width: "7vw" }} alt="Babymart" />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <a href="/">Home</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/">Home One</a>
                          </li>
                          <li>
                            <a href="/index2">Home Two</a>
                          </li>
                          <li>
                            <a href="/index3">Home Three</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Shop</a>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/shop">Shop</Link>
                          </li>
                          <li>
                            <a href="/shopdetails">Shop Details</a>
                          </li>
                          <li>
                            <a href="/cart">Cart</a>
                          </li>
                          <li>
                            <a href="/checkout">Checkout</a>
                          </li>
                          <li>
                            <a href="/wishlist">Wishlist</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/faq">Faq</a>
                          </li>
                          <li>
                            <a href="/testimonial">Testimonial</a>
                          </li>
                          <li>
                            <a href="/error">Error Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/blog">Blog</a>
                          </li>
                          <li>
                            <a href="/blogrid">Blog Grid Style</a>
                          </li>
                          <li>
                            <a href="/blogdetails">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-auto">
                  <div className="header-button">
                    <form action="#" className="header-form">
                      <div className="form-group">
                        <select
                          name="category"
                          id="category"
                          className="form-select nice-select"
                        >
                          <option
                            value
                            // selected="default"
                            disabled="disabled"
                          >
                            Categories
                          </option>
                          <option value="game-and-toy">Game And toy</option>
                          <option value="kid-clothing">Kid Clothing</option>
                          <option value="kid-books">Kid Books</option>
                          <option value="indoor-play">Indoor Play</option>
                          <option value="smart-toys">Smart Toys</option>
                        </select>
                        <i className="fa-sharp fa-solid fa-grid-2"></i>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type your products.."
                        />
                      </div>
                      <button type="submit" className="submit-btn simple-icon">
                        <i className="far fa-search"></i>
                      </button>
                    </form>
                    <a href="/wishlist" className="icon-btn d-none d-sm-block">
                      <span className="badge">3</span>{" "}
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart" className="icon-btn d-none d-sm-block">
                      <span className="badge">5</span>{" "}
                      <i className="far fa-basket-shopping"></i>
                    </a>
                    <button
                      type="button"
                      className="icon-btn sideMenuInfo d-none d-lg-block"
                    >
                      <i className="far fa-bars-sort"></i>
                    </button>
                    <button
                      type="button"
                      className="ot-menu-toggle d-block d-lg-none"
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar