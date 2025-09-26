import React from 'react'
import footerBg1 from "../assets/img/bg/footer_bg_1.png";
import footerShape1 from "../assets/img/shape/footer-shape1.png";
import phoneSvg from "../assets/img/icon/phone.svg";
import emailSvg from "../assets/img/icon/email.svg";
import timeSvg from "../assets/img/icon/time.svg";
import locationSvg from "../assets/img/icon/location.svg";
import logoFooter from "../assets/img/mainlogo.png";
import payment from "../assets/img/normal/payments.png";

const Footer = () => {

  return (
    <>
      <footer className="footer-wrapper footer-layout1" data-bg-src={footerBg1}>
        <div className="footer-shape1 pulse">
          <img src={footerShape1} alt="img" />
        </div>
        <div className="container">
          <div className="footer-top">
            <div className="footer-contact-wrap">
              <div className="footer-contact">
                <div className="box-icon">
                  <img src={phoneSvg} alt="icon" />
                </div>
                <div className="media-body">
                  <p className="box-label">Call Us 7/24</p>
                  <h4 className="box-title">
                    <a href="tel:+234703632 6018">+234-703 632-6018</a>
                  </h4>
                </div>
              </div>
              <div className="footer-contact">
                <div className="box-icon" data-theme-color="#FE5A86">
                  <img src={emailSvg} alt="icon" />
                </div>
                <div className="media-body">
                  <p className="box-label">Make a Quote</p>
                  <h4 className="box-title">
                    <a href="mailto:kidsblum@gmail.com">kidsblum@gmail.com</a>
                  </h4>
                </div>
              </div>
              <div className="footer-contact">
                <div className="box-icon" data-theme-color="#FC800A">
                  <img src={timeSvg} alt="icon" />
                </div>
                <div className="media-body">
                  <p className="box-label">Opening Hour</p>
                  <h4 className="box-title">Sunday - Fri: 9 aM - 6 pM</h4>
                </div>
              </div>
              <div className="footer-contact">
                <div className="box-icon" data-theme-color="#16C4E3">
                  <img src={locationSvg} alt="icon" />
                </div>
                <div className="media-body">
                  <p className="box-label">Our Location</p>
                  <h4 className="box-title">4517 Washington ave.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <div className="ot-widget-about">
                    <div className="about-logo">
                      <a href="/">
                        <img src={logoFooter} style={{ width: "7vw" }} alt="kidsblum" />
                      </a>
                    </div>
                    <p className="about-text">
                      Phasellus ultricies aliquam volutpat ullamcorper laoreet
                      neque, a lacinia curabitur lacinia mollis
                    </p>
                    <div className="ot-social">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://www.youtube.com/">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Custumers Support</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="/shop">Store List</a>
                      </li>
                      <li>
                        <a href="/about">Opening Hours</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                      <li>
                        <a href="/about">Return Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">My Account</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="/cart">Cart Page</a>
                      </li>
                      <li>
                        <a href="/checkout">Checkout</a>
                      </li>
                      <li>
                        <a href="/shop">Compare</a>
                      </li>
                      <li>
                        <a href="/wishlist">Wishlist</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Services</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="/blog">Service Areas</a>
                      </li>
                      <li>
                        <a href="/blog">Toys, Games</a>
                      </li>
                      <li>
                        <a href="/blog">Service Offerings</a>
                      </li>
                      <li>
                        <a href="/blog">Pricing Table</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Newsletter</h3>
                  <div className="newsletter-widget">
                    <p className="footer-text">
                      Sign up to searing weekly newsletter to get the latest
                      updates.
                    </p>
                    <form action="#" className="newsletter-form">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter Email Address"
                          required
                        />
                      </div>
                      <button type="submit" className="icon-btn">
                        <i className="fal fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap bg-theme">
          <div className="container text-center">
            <div className="row gy-3 justify-content-between align-items-center">
              <div className="col-md-auto">
                <p className="copyright-text">
                  <i className="fal fa-copyright"></i> Copyright 2025
                  <a href="/">Kidsblum</a>. All Rights Reserved.
                </p>
              </div>
              <div className="col-md-auto">
                <div className="payment-methods">
                  <img src={payment} alt="Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer