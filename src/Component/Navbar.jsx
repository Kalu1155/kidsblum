import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import babyMart from '../assets/img/mainlogo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems?.length || 0;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      <header className="ot-header header-layout1">
        {/* Top bar */}
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
                      <a href="mailto:kidsblum@gmail.com">kidsblum@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <p className="header-notice">
                  Kidsblum Flash Discount: Starting at{' '}
                  <span className="text-title">50% Off</span>
                </p>
              </div>
              <div className="col-auto d-none d-xl-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fal fa-comments-question"></i>
                      <Link to="/contact">Help</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img src={babyMart} style={{ width: "7vw" }} alt="Babymart" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <nav className="main-menu">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/shop">Store</Link></li>
                      <li className="menu-item-has-children">
                        <Link to="#">KIDSBLUM</Link>
                        <ul className="sub-menu">
                          <li><Link to="/about">About</Link></li>
                          <li><Link to="/faq">FAQ</Link></li>
                          <li><Link to="/testimonial">Testimonial</Link></li>
                          <li><Link to="/blog">Blog</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/events">Events</Link></li>
                    </ul>
                  </nav>
                </div>

                {/* Cart + Toggle */}
                <div className="col-auto">
                  <div className="header-button">
                    <Link to="/cart" className="icon-btn d-none d-sm-block">
                      {cartCount > 0 && <span className="badge">{cartCount}</span>}
                      <i className="far fa-basket-shopping"></i>
                    </Link>
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

        {/* Mobile Menu */}
        {/* <div className={`ot-menu-wrapper mobile ${menuOpen ? "active" : ""}`}>
          <div className="ot-menu-area text-center">
            <button className="ot-menu-toggle" onClick={toggleMenu}>
              <i className="fal fa-times"></i>
            </button>
            <div className="mobile-logo my-3">
              <Link to="/" onClick={toggleMenu}>
                <img src={babyMart} alt="Babymart" style={{ width: "120px" }} />
              </Link>
            </div>
            <div className="ot-mobile-menu">
              <ul>
                <li>
                  <Link to="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/shop" onClick={toggleMenu}>Shop</Link>
                </li>
                <li>
                  <button className="mobile-sub-toggle" onClick={toggleSubmenu}>
                    Pages <i className="fas fa-chevron-down ms-1"></i>
                  </button>
                  {submenuOpen && (
                    <ul className="sub-menu mt-2">
                      <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                      <li><Link to="/faq" onClick={toggleMenu}>FAQ</Link></li>
                      <li><Link to="/testimonial" onClick={toggleMenu}>Testimonial</Link></li>
                      <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
                    </ul>
                  )}
                </li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div> */}
        {menuOpen && (
  <div className="ot-menu-wrapper mobile active">
    <div className="ot-menu-area text-center">
      <button className="ot-menu-toggle" onClick={toggleMenu}>
        <i className="fal fa-times"></i>
      </button>
      <div className="mobile-logo my-3">
        <Link to="/" onClick={toggleMenu}>
          <img src={babyMart} alt="Babymart" style={{ width: "100px" }} />
        </Link>
      </div>
      <div className="ot-mobile-menu">
        <ul className="mobile-menu-list">
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/shop" onClick={toggleMenu}>Shop</Link>
          </li>
          <li>
            <button className="mobile-sub-toggle" onClick={toggleSubmenu}>
              Pages <i className="fas fa-chevron-down ms-1"></i>
            </button>
            {submenuOpen && (
              <ul className="sub-menu">
                <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                <li><Link to="/faq" onClick={toggleMenu}>FAQ</Link></li>
                <li><Link to="/testimonial" onClick={toggleMenu}>Testimonial</Link></li>
                <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  </div>
)}


      </header>
    </>
  );
};

export default Navbar;
