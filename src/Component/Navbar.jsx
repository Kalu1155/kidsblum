import { useEffect, useState } from 'react';
import babyMart from "../assets/img/mainlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
  document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
}, [menuOpen]);


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
                      <a href="mailto:kidsblum@example.com">kidsblum@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <p className="header-notice">
                  Kidsblum Flash Discount: Starting at
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
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/shop">Store</Link></li>
                      <li className="menu-item-has-children">
                        <Link to="/">KidsBlum</Link>
                        <ul className="sub-menu">
                          <li><a href="/about">About</a></li>
                          <li><a href="/faq">Faq</a></li>
                          <li><a href="/testimonial">Testimonial</a></li>
                        </ul>
                      </li>
                      <li><Link to="/shop">Events</Link></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-auto">
                  <div className="header-button">
                    <form action="#" className="header-form">
                      <div className="form-group">
                        <select name="category" id="category" className="form-select nice-select">
                          <option disabled>Categories</option>
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

                    <a href="/cart" className="icon-btn d-none d-sm-block">
                      <span className="badge">5</span>{" "}
                      <i className="far fa-basket-shopping"></i>
                    </a>

                    {/* Mobile menu toggle */}
                    <button
                      type="button"
                      className="ot-menu-toggle d-block d-lg-none"
                      onClick={toggleMenu}
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu area */}
        <div className={`ot-menu-wrapper ${menuOpen ? "active" : "block"}`}>
          <div className="ot-menu-area text-center">
            <button className="ot-menu-toggle" onClick={toggleMenu}>
              <i className="fal fa-times"></i>
            </button>
            <div className="mobile-logo">
              <a href="/"><img src={babyMart} alt="Babymart" /></a>
            </div>
            <div className="ot-mobile-menu">
              <ul>
                <li className="menu-item-has-children">
                  <a href="/index1">Home</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="/shop">Shop</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li><a href="about.html">About</a></li>
                    <li><a href="faq.html">Faq</a></li>
                    <li><a href="testimonial.html">Testimonial</a></li>
                    <li><a href="error.html">Error Page</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Blog</a>
                  <ul className="sub-menu">
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="blog-grid.html">Blog Grid Style</a></li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                  </ul>
                </li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
