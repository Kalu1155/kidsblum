import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import babyMart from "../assets/img/logo.svg";
import cartImage from "../assets/img/product/post-card1-1.png";
import cartImage2 from "../assets/img/product/post-card1-2.png";
import cartImage3 from "../assets/img/product/post-card1-3.png";
import cartImage4 from "../assets/img/product/post-card1-4.png";
import cartImage5 from "../assets/img/product/post-card1-5.png";
import shape1 from "../assets/img/hero/hero-shape1-1.png";
import heroBg from "../assets/img/hero/hero-bg1-1.png";
import shape2 from "../assets/img/hero/hero-shape1-2.png";
import thumb1 from "../assets/img/hero/hero-thumb1-1.png";
import shape3 from "../assets/img/hero/hero-shape1-3.png";
import shape4 from "../assets/img/hero/hero-shape1-4.png";
import featureIcon1 from "../assets/img/icon/feature-icon1-1.svg";
import featureIcon2 from "../assets/img/icon/feature-icon1-2.svg";
import featureIcon3 from "../assets/img/icon/feature-icon1-3.svg";
import featureIcon4 from "../assets/img/icon/feature-icon1-4.svg";
import postCard1 from "../assets/img/product/post-card1-1.png";
import postCard2 from "../assets/img/product/post-card1-2.png";
import postCard3 from "../assets/img/product/post-card1-3.png";
import postCard4 from "../assets/img/product/post-card1-4.png";
import postCard5 from "../assets/img/product/post-card1-5.png";
import postCard6 from "../assets/img/product/post-card1-6.png";
import postCard7 from "../assets/img/product/post-card1-7.png";
import postCard8 from "../assets/img/product/post-card1-8.png";
import postCard9 from "../assets/img/product/post-card1-9.png";
import postCard10 from "../assets/img/product/post-card1-10.png";
import postCard11 from "../assets/img/product/post-card1-11.png";
import categoryCard1 from "../assets/img/category/category_card1_1.png";
import categoryCard2 from "../assets/img/category/category_card1_2.png";
import categoryCard3 from "../assets/img/category/category_card1_3.png";
import categoryCard4 from "../assets/img/category/category_card1_4.png";
import categoryCard5 from "../assets/img/category/category_card1_5.png";
import categoryCard6 from "../assets/img/category/category_card1_6.png";
import cloud from "../assets/img/shape/cloud.png";
import ad1 from "../assets/img/normal/ad1-1.png";
// import ad2 from "../assets/img/normal/ad1-2.png"
import ctaBg1 from "../assets/img/bg/cta_bg_2_1.png";
// import ctaBg2 from "../assets/img/bg/cta_bg_4_1.png";
import ctaBg3 from "../assets/img/bg/cta_bg_5_1.png";
import categoryCard21 from "../assets/img/category/category_card2_1.png";
import categoryCard22 from "../assets/img/category/category_card2_2.png";
import categoryCard23 from "../assets/img/category/category_card2_3.png";
import categoryCard24 from "../assets/img/category/category_card2_4.png";
import categoryCard25 from "../assets/img/category/category_card2_5.png";
import ctaThumb1 from "../assets/img/normal/cta-thumb2-1.png";
import blog1 from "../assets/img/blog/blog_1_1.png";
import blog2 from "../assets/img/blog/blog_1_2.png";
import blog3 from "../assets/img/blog/blog_1_3.png";
import blog4 from "../assets/img/blog/blog_1_4.png";
import brandLogo1 from "../assets/img/brand/brand_1_1.png";
import brandLogo2 from "../assets/img/brand/brand_1_2.png";
import brandLogo3 from "../assets/img/brand/brand_1_3.png";
import brandLogo4 from "../assets/img/brand/brand_1_4.png";
import brandLogo5 from "../assets/img/brand/brand_1_5.png";
import brandLogo6 from "../assets/img/brand/brand_1_6.png";
import brandLogo7 from "../assets/img/brand/brand_1_7.png";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Index1 = () => {
  const shopByAge = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const shopByCate = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const brandLogos = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div id="QuickView" className="white-popup mfp-hide">
        <div className="container bg-white rounded-10">
          <div className="row gx-60">
            <div className="col-lg-6">
              <div className="product-big-img">
                <div className="img">
                  <img
                    src="../assets/img/product/post-card1-6.png"
                    alt="Product Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="product-about">
                <p className="price">
                  $120.85<del>$150.99</del>
                </p>
                <h2 className="product-title">Ultricies At Torquent Dui</h2>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                      based on <span className="rating">1</span> customer rating
                    </span>
                  </div>
                  <a href="/shopdetails" className="woocommerce-review-link">
                    (<span className="count">4</span> customer reviews)
                  </a>
                </div>
                <p className="text">
                  Prepare to embark on a sensory journey with the Bosco Apple, a
                  fruit that transcends the ordinary and promises an
                  unparalleled taste experience. These apples are nothing short
                  of nature’s masterpiece, celebrated for their distinctive
                  blend of flavors and their captivating visual allure.
                </p>
                <div className="mt-2 link-inherit">
                  <p>
                    <strong className="text-title me-3">Availability:</strong>
                    <span className="stock in-stock">
                      <i className="far fa-check-square me-2 ms-1"></i>In Stock
                    </span>
                  </p>
                </div>
                <div className="actions">
                  <div className="quantity">
                    <button className="quantity-minus qty-btn">
                      <i className="far fa-minus"></i>
                    </button>
                    <input
                      type="number"
                      className="qty-input"
                    // step="1"
                    // min="1"
                    // max="100"
                    // name="quantity"
                    // // value="1"
                    // title="Qty"
                    />
                    <button className="quantity-plus qty-btn">
                      <i className="far fa-plus"></i>
                    </button>
                  </div>
                  <button className="ot-btn">Add to Cart</button>
                  <a href="/wishlist" className="icon-btn">
                    <i className="far fa-heart"></i>
                  </a>
                </div>
                <div className="product_meta">
                  <span className="sku_wrapper">
                    SKU: <span className="sku">Bosco-Apple-Fruit</span>
                  </span>
                  <span className="posted_in">
                    Category: <a href="/shop">Fresh Fruits</a>
                  </span>
                  <span>
                    Tags: <a href="/shop">Fruits</a>
                    <a href="/shop">Organic</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button title="Close (Esc)" type="button" className="mfp-close">
            ×
          </button>
        </div>
      </div>
      <div className="ot-menu-wrapper">
        <div className="ot-menu-area text-center">
          <button className="ot-menu-toggle">
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="index">
              <img src={babyMart} alt="Babymart" />
            </a>
          </div>
          <div className="ot-mobile-menu">
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
                    <a href="/shop">Shop</a>
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
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="testimonial.html">Testimonial</a>
                  </li>
                  <li>
                    <a href="error.html">Error Page</a>
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
          </div>
        </div>
      </div>
      <div className="sidemenu-wrapper sidemenu-cart">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times"></i>
          </button>
          <div className="widget woocommerce widget_shopping_cart">
            <h3 className="widget_title">Shopping cart</h3>
            <div className="widget_shopping_cart_content">
              <ul className="woocommerce-mini-cart cart_list product_list_widget">
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times"></i>
                  </a>
                  <a href="#">
                    <img src={cartImage} alt="Cart Image" />
                    White One-Piece Dress
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      940.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times"></i>
                  </a>
                  <a href="#">
                    <img src={cartImage2} alt="Cart Image" />
                    Round New Red Toy
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      899.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times"></i>
                  </a>
                  <a href="#">
                    <img src={cartImage3} alt="Cart Image" />
                    The Playtime Excitement!
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      756.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times"></i>
                  </a>
                  <a href="#">
                    <img src={cartImage4} alt="Cart Image" />
                    Brown Lather Carriage
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      723.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times"></i>
                  </a>
                  <a href="#">
                    <img src={cartImage5} alt="Cart Image" />
                    Ultricies At Torquent Dui
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      1080.00
                    </span>
                  </span>
                </li>
              </ul>
              <p className="woocommerce-mini-cart__total total">
                <strong>Subtotal:</strong>
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  4398.00
                </span>
              </p>
              <p className="woocommerce-mini-cart__buttons buttons">
                <a href="/cart" className="ot-btn wc-forward">
                  View cart
                </a>
                <a href="/checkout" className="ot-btn checkout wc-forward">
                  Checkout
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidemenu-wrapper sidemenu-info">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times"></i>
          </button>
          <div className="widget">
            <div className="ot-widget-about">
              <div className="about-logo">
                <a href="/">
                  <img src={babyMart} alt="Babymart" />
                </a>
              </div>
              <p className="about-text">
                An IT consultancy can help you assess your technology needs and
                develop a technology strategy that aligns with your business
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
                <a href="https://www.whatsapp.com/">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget_title">Contact Us</h3>
            <div className="ot-widget-contact">
              <div className="info-box">
                <div className="info-box_icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <p className="info-box_text">
                  Malian Avenue, London SZ2 52H, United Kingdom
                </p>
              </div>
              <div className="info-box">
                <div className="info-box_icon">
                  <i className="fas fa-phone"></i>
                </div>
                <p className="info-box_text">
                  <a href="tel:+2352569321586" className="info-box_link">
                    +(235) 2569-321586
                  </a>
                  <a href="tel:+2352569326254" className="info-box_link">
                    +(235) 2569-326254
                  </a>
                </p>
              </div>
              <div className="info-box">
                <div className="info-box_icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <p className="info-box_text">
                  <a
                    href="mailto:help24/7@babymart.com"
                    className="info-box_link"
                  >
                    help24/7@babymart.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget_title">Newsletter</h3>
            <div className="newsletter-widget">
              <p className="footer-text">
                Sign up to searing weekly newsletter to get the latest updates
                from us.
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
      <Navbar />
      <div className="ot-hero-wrapper hero-1" id="hero">
        <div className="hero-shape1 ripple-animation">
          <img src={shape1} alt="img" />
        </div>
        <div className="hero-shape2 ripple-animation">
          <img src={shape1} alt="img" />
        </div>
        <div className="hero-inner">
          <div className="container">
            <div className="row gy-40">
              <div className="col-xxl-12">
                <div className="hero-wrap1 banner-bg">
                  <div className="hero-particle" id="hero-particle1"></div>
                  <div className="hero-shape3 jump d-sm-block d-none">
                    <img src={shape2} alt="img" data-delay="500" />
                  </div>
                  <div className="hero-style1">
                    <span className="sub-title">
                      Up to 70% Off Our Products
                    </span>
                    <h1 className="hero-title">
                      <span className="title1" data-delay="100">
                        Buy Children’s Toys{" "}
                      </span>
                      <span className="title2" data-delay="200">
                        And Clothes
                      </span>
                    </h1>
                    <div className="btn-group" data-delay="300">
                      <a href="/about" className="ot-btn style-white">
                        Shop Now <i className="fas fa-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                  <div className="hero-thumb1-1" data-delay="200">
                    <img src={thumb1} alt="img" />
                    <div className="hero-shape1-3 jump-reverse">
                      <img src={shape3} alt="img" />
                    </div>
                    <div className="hero-shape1-4 jump">
                      <img src={shape4} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="space-bottom overflow-hidden" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="title-area text-center">
                <h2 className="sec-title pt-4">Shop By Age</h2>
                <p className="sec-text" data-delay="100">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Donec at nulla nulla. Duis posuere ex lacus
                </p>
              </div>
            </div>
          </div>
          <Slider {...shopByAge}>
            <div>
              <div className="swiper-slide">
                <div className="category-card2">
                  <a
                    href="/shop"
                    className="box-img"
                    data-theme-color="#C9E5EC"
                  >
                    <div
                      className="box-img-border"
                      data-theme-color="#E6F5F9"
                    ></div>
                    <img src={categoryCard21} alt="Image" />
                  </a>
                  <h3 className="box-title">
                    <a href="/shop">0-2 Years</a>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="category-card2">
                <a
                  href="/shop"
                  className="box-img"
                  data-theme-color="#E5C3EB"
                >
                  <div
                    className="box-img-border"
                    data-theme-color="#F6E6F9"
                  ></div>
                  <img src={categoryCard22} alt="Image" />
                </a>
                <h3 className="box-title">
                  <a href="/shop">3-4 Years</a>
                </h3>
              </div>
            </div>

            <div>
              <div className="category-card2">
                <a
                  href="/shop"
                  className="box-img"
                  data-theme-color="#BEEAB8"
                >
                  <div
                    className="box-img-border"
                    data-theme-color="#E0FBDD"
                  ></div>
                  <img src={categoryCard23} alt="Image" />
                </a>
                <h3 className="box-title">
                  <a href="/shop">4-7 Years</a>
                </h3>
              </div>
            </div>

            <div>
              <div className="category-card2">
                <a
                  href="/shop"
                  className="box-img"
                  data-theme-color="#FFBBBB"
                >
                  <div
                    className="box-img-border"
                    data-theme-color="#FFDCDC"
                  ></div>
                  <img src={categoryCard24} alt="Image" />
                </a>
                <h3 className="box-title">
                  <a href="/shop">7-10 Years</a>
                </h3>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card2">
                  <a
                    href="/shop"
                    className="box-img"
                    data-theme-color="#EEE78D"
                  >
                    <div
                      className="box-img-border"
                      data-theme-color="#FFFABD"
                    ></div>
                    <img src={categoryCard25} alt="Image" />
                  </a>
                  <h3 className="box-title">
                    <a href="/shop">12+ Years</a>
                  </h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="mt-60">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-sm-6">
              <div className="feature-list" data-theme-color="#00BBAE">
                <div className="box-icon">
                  <img src={featureIcon1} alt="icon" />
                </div>
                <div className="media-body">
                  <h6 className="box-title">Return & refund</h6>
                  <p className="box-text">Money back guarantee</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-list" data-theme-color="#C062D0">
                <div className="box-icon">
                  <img src={featureIcon2} alt="icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Secure Payment</h3>
                  <p className="box-text">30% off by subscribing</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-list" data-theme-color="#71D863">
                <div className="box-icon">
                  <img src={featureIcon3} alt="icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Quality Support</h3>
                  <p className="box-text">Always online 24/7</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-list" data-theme-color="#16C4E3">
                <div className="box-icon">
                  <img src={featureIcon4} alt="icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Daily Offers</h3>
                  <p className="box-text">20% off by subscribing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space">
        <div className="container">
          <div className="row justify-content-md-between justify-content-center text-center text-md-start mt-4">
            <div className="col-sm-auto">
              <div className="title-area">
                <h2 className="sec-title">Flash Sale</h2>
              </div>
            </div>
            <div className="col-sm-auto">
              <div className="sec-btn">
                <ul
                  className="counter-list deal-counter"
                  data-offer-date="01/01/2026"
                >
                  <li>
                    <div>
                      <div className="day count-number">00</div>
                      <span className="count-name">Days</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="hour count-number">00</div>
                      <span className="count-name">Hrs</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="minute count-number">00</div>
                      <span className="count-name">Mins</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="seconds count-number">00</div>
                      <span className="count-name">Secs</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Slider {...settings} className="settings">
            <div>
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard1} alt="Product Image" />
                  <span className="product-tag">
                    <span className="tag">Hot</span>
                    <span className="offer">-30%</span>
                  </span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shop-details">White One-Piece Dress</a>
                  </h3>
                  <span className="price">
                    $19.00<del>$26.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="shop-details.html">White One-Piece Dress</a>
                  </h3>
                  <span className="price">
                    $19.00<del>$26.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard2} alt="Product Image" />
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Tinci Dunt Pharetra Soda</a>
                  </h3>
                  <span className="price">$30.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Tinci Dunt Pharetra Soda</a>
                  </h3>
                  <span className="price">$30.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="cart.html">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard3} alt="Product Image" />
                  <span className="product-tag">
                    <span className="tag">-19%</span>
                  </span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">The Playtime Excitement!</a>
                  </h3>
                  <span className="price">
                    $30.00<del>$39.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">The Playtime Excitement!</a>
                  </h3>
                  <span className="price">
                    $30.00<del>$39.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard4} alt="Product Image" />
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Brown Lather Carriage</a>
                  </h3>
                  <span className="price">$19.00 - $27.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Brown Lather Carriage</a>
                  </h3>
                  <span className="price">$19.00 - $27.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard5} alt="Product Image" />
                  <span className="product-tag">
                    <span className="tag">-12%</span>
                  </span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shop-details">Ultricies At Torquent Dui</a>
                  </h3>
                  <span className="price">
                    $12.00<del>$19.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Ultricies At Torquent Dui</a>
                  </h3>
                  <span className="price">
                    $12.00<del>$19.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard1} alt="Product Image" />
                  <span className="product-tag">
                    <span className="tag">Hot</span>
                    <span className="offer">-30%</span>
                  </span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shop-details">White One-Piece Dress</a>
                  </h3>
                  <span className="price">
                    $19.00<del>$26.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="shop-details.html">White One-Piece Dress</a>
                  </h3>
                  <span className="price">
                    $19.00<del>$26.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard2} alt="Product Image" />
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Tinci Dunt Pharetra Soda</a>
                  </h3>
                  <span className="price">$30.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Tinci Dunt Pharetra Soda</a>
                  </h3>
                  <span className="price">$30.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="cart.html">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard3} alt="Product Image" />
                  <span className="product-tag">
                    <span className="tag">-19%</span>
                  </span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">The Playtime Excitement!</a>
                  </h3>
                  <span className="price">
                    $30.00<del>$39.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">The Playtime Excitement!</a>
                  </h3>
                  <span className="price">
                    $30.00<del>$39.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard4} alt="Product Image" />
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Brown Lather Carriage</a>
                  </h3>
                  <span className="price">$19.00 - $27.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Brown Lather Carriage</a>
                  </h3>
                  <span className="price">$19.00 - $27.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard5} alt="Product Image" />
                  <span className="product-tag">
                    <span className="tag">-12%</span>
                  </span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shop-details">Ultricies At Torquent Dui</a>
                  </h3>
                  <span className="price">
                    $12.00<del>$19.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Ultricies At Torquent Dui</a>
                  </h3>
                  <span className="price">
                    $12.00<del>$19.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5 based
                        on <span className="rating">1</span> customer rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </Slider>

        </div>
      </section>
      <section className="space-bottom overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="title-area text-center">
                <h2 className="sec-title">Shop by Category</h2>
                <p className="sec-text" data-delay="100">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Donec at nulla nulla. Duis posuere ex lacus
                </p>
              </div>
            </div>
          </div>
          <Slider {...shopByCate}>
            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#AD6643">
                    <img src={categoryCard1} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Game And toy</a>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#9AD2FC">
                    <img src={categoryCard2} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Kid Books</a>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#9CC6FF">
                    <img src={categoryCard3} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Boy Clothing</a>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#AD6643">
                    <img src={categoryCard4} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Girl Clothing</a>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#AD6643">
                    <img src={categoryCard5} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Milk Bootle</a>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#AD6643">
                    <img src={categoryCard6} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Indoor Play</a>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#AD6643">
                    <img src={categoryCard1} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Game And toy</a>
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#9AD2FC">
                    <img src={categoryCard2} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Kid Books</a>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#9CC6FF">
                    <img src={categoryCard3} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Boy Clothing</a>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#AD6643">
                    <img src={categoryCard4} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Girl Clothing</a>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#AD6643">
                    <img src={categoryCard5} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Milk Bootle</a>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card">
                  <div className="box-img" data-theme-color="#AD6643">
                    <img src={categoryCard6} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <a href="/shop">Indoor Play</a>
                  </h3>
                </div>
              </div>
            </div>
          </Slider>

        </div>
      </section>
      <section className="position-relative space overflow-hidden bg-smoke3">
        <div className="cloud-bg-top-shape1" data-bg-src={cloud}></div>
        <div className="cloud-bg-bottom-shape1" data-bg-src={cloud}></div>
        <div className="container">
          <div className="row justify-content-xl-between justify-content-center align-items-center">
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="title-area text-xl-start text-center">
                <h2 className="sec-title">Trending Items</h2>
              </div>
            </div>
            <div className="col-xl-auto">
              <div className="sec-btn" data-delay="100">
                <div className="filter-menu indicator-active filter-menu-active justify-content-center">
                  <button
                    data-filter="*"
                    className="link-btn tab-btn active"
                    type="button"
                  >
                    All Items
                  </button>
                  <button
                    data-filter=".cat1"
                    className="link-btn tab-btn"
                    type="button"
                  >
                    Kid Toys
                  </button>
                  <button
                    data-filter=".cat2"
                    className="link-btn tab-btn"
                    type="button"
                  >
                    Outdoor Toy
                  </button>
                  <button
                    data-filter=".cat3"
                    className="link-btn tab-btn"
                    type="button"
                  >
                    Kid Books
                  </button>
                  <button
                    data-filter=".cat4"
                    className="link-btn tab-btn"
                    type="button"
                  >
                    Kid Clothing
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse gy-30 justify-content-center">
            <div className="col-xxl-7">
              <div className="row gy-30 filter-active">
                <div className="col-xl-4 col-lg-4 col-md-6 filter-item cat3">
                  <div className="ot-product product-grid bg-white">
                    <div className="product-img">
                      <img src={postCard4} alt="Product Image" />
                      <div className="actions">
                        <a href="/wishlist" className="icon-btn">
                          <i className="far fa-heart"></i>
                        </a>
                        <button className="icon-btn">
                          <i className="fa-light fa-arrows-cross"></i>
                        </button>
                        <a href="#QuickView" className="icon-btn popup-content">
                          <i className="far fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3 className="box-title">
                        <a href="/shopdetails">Brown Lather Carriage</a>
                      </h3>
                      <span className="price">$19.00 - $27.00</span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-hover-content">
                      <h3 className="box-title">
                        <a href="/shopdetail">Brown Lather Carriage</a>
                      </h3>
                      <span className="price">$19.00 - $27.00</span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <a className="ot-btn" href="cart.html">
                        <i className="fa-light fa-basket-shopping me-1"></i> Add
                        To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 filter-item cat5 cat2">
                  <div className="ot-product product-grid bg-white">
                    <div className="product-img">
                      <img src={postCard3} alt="Product Image" />
                      <span className="product-tag">-19%</span>
                      <div className="actions">
                        <a href="/wishlist" className="icon-btn">
                          <i className="far fa-heart"></i>
                        </a>
                        <button className="icon-btn">
                          <i className="fa-light fa-arrows-cross"></i>
                        </button>
                        <a href="#QuickView" className="icon-btn popup-content">
                          <i className="far fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3 className="box-title">
                        <a href="/shopdetails">The Playtime Excitement!</a>
                      </h3>
                      <span className="price">
                        $30.00 <del>$39.99</del>
                      </span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-hover-content">
                      <h3 className="box-title">
                        <a href="/shopdetails">The Playtime Excitement!</a>
                      </h3>
                      <span className="price">
                        $30.00 <del>$39.99</del>
                      </span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <a className="ot-btn" href="/cart">
                        <i className="fa-light fa-basket-shopping me-1"></i> Add
                        To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 filter-item cat1 cat4">
                  <div className="ot-product product-grid bg-white">
                    <div className="product-img">
                      <img src={postCard5} alt="Product Image" />
                      <span className="product-tag">-12%</span>
                      <div className="actions">
                        <a href="/wishlist" className="icon-btn">
                          <i className="far fa-heart"></i>
                        </a>
                        <button className="icon-btn">
                          <i className="fa-light fa-arrows-cross"></i>
                        </button>
                        <a href="#QuickView" className="icon-btn popup-content">
                          <i className="far fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3 className="box-title">
                        <a href="/shopdetails">Ultricies At Torquent Dui</a>
                      </h3>
                      <span className="price">
                        $12.00 <del>$19.99</del>
                      </span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-hover-content">
                      <h3 className="box-title">
                        <a href="/shopdetails">Ultricies At Torquent Dui</a>
                      </h3>
                      <span className="price">
                        $12.00 <del>$19.99</del>
                      </span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <a className="ot-btn" href="/cart">
                        <i className="fa-light fa-basket-shopping me-1"></i> Add
                        To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 filter-item cat2 cat5">
                  <div className="ot-product product-grid bg-white">
                    <div className="product-img">
                      <img src={postCard1} alt="Product Image" />
                      <span className="product-tag">
                        <span className="tag">Hot</span>
                        <span className="offer">-30%</span>
                      </span>
                      <div className="actions">
                        <a href="/wishlist" className="icon-btn">
                          <i className="far fa-heart"></i>
                        </a>
                        <button className="icon-btn">
                          <i className="fa-light fa-arrows-cross"></i>
                        </button>
                        <a href="#QuickView" className="icon-btn popup-content">
                          <i className="far fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3 className="box-title">
                        <a href="/shop-details">White One-Piece Dress</a>
                      </h3>
                      <span className="price">
                        $19.00 <del>$26.99</del>
                      </span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-hover-content">
                      <h3 className="box-title">
                        <a href="/shopdetails">White One-Piece Dress</a>
                      </h3>
                      <span className="price">
                        $19.00 <del>$26.99</del>
                      </span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <a className="ot-btn" href="/cart">
                        <i className="fa-light fa-basket-shopping me-1"></i> Add
                        To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 filter-item cat3 cat1">
                  <div className="ot-product product-grid bg-white">
                    <div className="product-img">
                      <img src={postCard6} alt="Product Image" />
                      <span className="product-tag">-12%</span>
                      <div className="actions">
                        <a href="/wishlist" className="icon-btn">
                          <i className="far fa-heart"></i>
                        </a>
                        <button className="icon-btn">
                          <i className="fa-light fa-arrows-cross"></i>
                        </button>
                        <a href="#QuickView" className="icon-btn popup-content">
                          <i className="far fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3 className="box-title">
                        <a href="/shopdetails">Ultricies At Torquent Dui</a>
                      </h3>
                      <span className="price">
                        $12.00 <del>$19.99</del>
                      </span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-hover-content">
                      <h3 className="box-title">
                        <a href="/shopdetails">Ultricies At Torquent Dui</a>
                      </h3>
                      <span className="price">
                        $12.00 <del>$19.99</del>
                      </span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <a className="ot-btn" href="/cart">
                        <i className="fa-light fa-basket-shopping me-1"></i> Add
                        To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 filter-item cat5 cat4 cat1 cat2">
                  <div className="ot-product product-grid bg-white">
                    <div className="product-img">
                      <img src={postCard1} alt="Product Image" />
                      <span className="product-tag"></span>
                      <div className="actions">
                        <a href="/wishlist" className="icon-btn">
                          <i className="far fa-heart"></i>
                        </a>
                        <button className="icon-btn">
                          <i className="fa-light fa-arrows-cross"></i>
                        </button>
                        <a href="#QuickView" className="icon-btn popup-content">
                          <i className="far fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3 className="box-title">
                        <a href="/shopdetails">Tinci Dunt Pharetra Soda</a>
                      </h3>
                      <span className="price">$30.00</span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-hover-content">
                      <h3 className="box-title">
                        <a href="/shopdetails">Tinci Dunt Pharetra Soda</a>
                      </h3>
                      <span className="price">$30.00</span>
                      <div className="woocommerce-product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <a className="ot-btn" href="/cart">
                        <i className="fa-light fa-basket-shopping me-1"></i> Add
                        To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xxl-5 col-xl-6 col-lg-8">
              <a href="/shopdetails" className="ad-card">
                <img className="w-100" src={ad1} alt="img" />
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <section className="space">
        <div className="container z-index-common">
          <div className="row gy-30 justify-content-center">
            <div className="col-xl-4 col-lg-6">
              <div className="offer-card mega-hover" data-bg-src={ctaBg1}>
                <h3 className="box-title text-white">
                  Learning Toys
                  <br />
                  For kids
                </h3>
                <span className="h6 box-subtitle text-white">
                  15% Off on Kids' Toys and Gifts!
                </span>
                <a href="/shopdetails" className="ot-btn style-white">
                  Shop Now<i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="offer-card mega-hover" data-bg-src={ctaBg3}>
                <h3 className="box-title text-white">
                  Brown Lather
                  <br />
                  Carriage
                </h3>
                <span className="h6 box-subtitle text-white">
                  And get your 25% discount now!
                </span>
                <a href="/shopdetails" className="ot-btn style-white">
                  Shop Now<i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="offer-card mega-hover" data-bg-src={ctaBg3}>
                <h3 className="box-title text-white">
                  Utricles Torqueing
                  <br />
                  For Kids
                </h3>
                <span className="h6 box-subtitle text-white">
                  And get your 15% discount now!
                </span>
                <a href="/shopdetails" className="ot-btn style-white">
                  Shop Now<i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className>
        <div className="container">
          <div className="row gy-30 justify-content-center">
            <div className="col-xxl-9 col-xl-7">
              <div className="product-list-wrap1 bg-white">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-auto">
                    <div className="title-area mb-30 text-center">
                      <h3 className="sec-title">Top Rating Items</h3>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="sec-btn mb-30">
                      <a href="/shop" className="ot-btn style7">
                        View More<i className="fas fa-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row gy-30 justify-content-xxl-start justify-content-center">
                  <div className="col-xxl-6 col-xl-12 col-lg-6 mt-3">
                    <div className="ot-product list-view style-border">
                      <div className="product-img">
                        <img src={postCard8} alt="Product Image" />
                      </div>
                      <div className="product-content">
                        <h3 className="box-title">
                          <a href="/shopdetails">Beige One-Piece Dress</a>
                        </h3>
                        <span className="price">
                          $19.00<del>$26.99</del>
                        </span>
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <div className="product-action-wrap align-self-center">
                        <div className="actions">
                          <a href="/wishlist" className="icon-btn">
                            <i className="far fa-heart"></i>
                          </a>
                          <button className="icon-btn">
                            <i className="fa-light fa-arrows-cross"></i>
                          </button>
                          <a
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </div>
                        <a href="/shop" className="ot-btn style7">
                          <i className="fa-light fa-basket-shopping me-1"></i>{" "}
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-12 col-lg-6 my-2">
                    <div className="ot-product list-view style-border">
                      <div className="product-img">
                        <img src={postCard10} alt="Product Image" />
                      </div>
                      <div className="product-content">
                        <h3 className="box-title">
                          <a href="/shopdetails">Playtime Excitement!</a>
                        </h3>
                        <span className="price">
                          $26.00<del>$26.99</del>
                        </span>
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <div className="product-action-wrap align-self-center">
                        <div className="actions">
                          <a href="/wishlist" className="icon-btn">
                            <i className="far fa-heart"></i>
                          </a>
                          <button className="icon-btn">
                            <i className="fa-light fa-arrows-cross"></i>
                          </button>
                          <a
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </div>
                        <a href="/shop" className="ot-btn style7">
                          <i className="fa-light fa-basket-shopping me-1"></i>{" "}
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-12 col-lg-6 my-2">
                    <div className="ot-product list-view style-border">
                      <div className="product-img">
                        <img src={postCard3} alt="Product Image" />
                      </div>
                      <div className="product-content">
                        <h3 className="box-title">
                          <a href="/shopdetails">The Playtime Excitement!</a>
                        </h3>
                        <span className="price">
                          $30.00<del>$39.99</del>
                        </span>
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <div className="product-action-wrap align-self-center">
                        <div className="actions">
                          <a href="/wishlist" className="icon-btn">
                            <i className="far fa-heart"></i>
                          </a>
                          <button className="icon-btn">
                            <i className="fa-light fa-arrows-cross"></i>
                          </button>
                          <a
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </div>
                        <a href="/shop" className="ot-btn style7">
                          <i className="fa-light fa-basket-shopping me-1"></i>{" "}
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-12 col-lg-6 my-2">
                    <div className="ot-product list-view style-border">
                      <div className="product-img">
                        <img src={postCard11} alt="Product Image" />
                      </div>
                      <div className="product-content">
                        <h3 className="box-title">
                          <a href="/shopdetails">White One-Piece Dress</a>
                        </h3>
                        <span className="price">$15.00</span>
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <div className="product-action-wrap align-self-center">
                        <div className="actions">
                          <a href="/wishlist" className="icon-btn">
                            <i className="far fa-heart"></i>
                          </a>
                          <button className="icon-btn">
                            <i className="fa-light fa-arrows-cross"></i>
                          </button>
                          <a
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </div>
                        <a href="shop.html" className="ot-btn style7">
                          <i className="fa-light fa-basket-shopping me-1"></i>{" "}
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-12 col-lg-6 my-2">
                    <div className="ot-product list-view style-border">
                      <div className="product-img">
                        <img src={postCard5} alt="Product Image" />
                      </div>
                      <div className="product-content">
                        <h3 className="box-title">
                          <a href="/shopdetails">Ultricies At Torquent Dui</a>
                        </h3>
                        <span className="price">
                          $19.00<del>$26.99</del>
                        </span>
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <div className="product-action-wrap align-self-center">
                        <div className="actions">
                          <a href="/wishlist" className="icon-btn">
                            <i className="far fa-heart"></i>
                          </a>
                          <button className="icon-btn">
                            <i className="fa-light fa-arrows-cross"></i>
                          </button>
                          <a
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </div>
                        <a href="/shop" className="ot-btn style7">
                          <i className="fa-light fa-basket-shopping me-1"></i>{" "}
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-12 col-lg-6 my-2">
                    <div className="ot-product list-view style-border">
                      <div className="product-img">
                        <img src={postCard6} alt="Product Image" />
                      </div>
                      <div className="product-content">
                        <h3 className="box-title">
                          <a href="/shopdetails">Tinci Dunt Pharetra Soda</a>
                        </h3>
                        <span className="price">
                          $12.00<del>$19.99</del>
                        </span>
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                      <div className="product-action-wrap align-self-center">
                        <div className="actions">
                          <a href="/wishlist" className="icon-btn">
                            <i className="far fa-heart"></i>
                          </a>
                          <button className="icon-btn">
                            <i className="fa-light fa-arrows-cross"></i>
                          </button>
                          <a
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </div>
                        <a href="/shop" className="ot-btn style7">
                          <i className="fa-light fa-basket-shopping me-1"></i>{" "}
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-5 col-lg-7">
              <div className="ad-card2">
                <div className="card-content">
                  <h4 className="box-title">Best Toy for Kids</h4>
                  <p className="card-price">
                    $10.00 <del>$20.00</del>
                  </p>
                  <div className="btn-wrap">
                    <a href="shop-details.html" className="ot-btn">
                      Shop Now<i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
                <img className="w-100" src={ad1} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space">
        <div className="container">
          <div className="row justify-content-xl-between justify-content-center align-items-center">
            <div className="col-xxl-4 col-lg-6 col-md-8">
              <div className="title-area text-xl-start text-center">
                <h2 className="sec-title">Most Sold This Week</h2>
              </div>
            </div>
            <div className="col-xl-auto">
              <div className="sec-btn">
                <div className="filter-menu indicator-active filter-menu-active justify-content-center">
                  <button
                    data-filter="*"
                    className="link-btn tab-btn active"
                    type="button"
                  >
                    All Items
                  </button>
                  <button
                    data-filter=".cat1"
                    className="link-btn tab-btn"
                    type="button"
                  >
                    Kid Toys
                  </button>
                  <button
                    data-filter=".cat2"
                    className="link-btn tab-btn"
                    type="button"
                  >
                    Outdoor Toy
                  </button>
                  <button
                    data-filter=".cat3"
                    className="link-btn tab-btn"
                    type="button"
                  >
                    Kid Books
                  </button>
                  <button
                    data-filter=".cat4"
                    className="link-btn tab-btn"
                    type="button"
                  >
                    Kid Clothing
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-30 filter-active">
            <div className="col-xxl-auto col-lg-4 col-md-6 filter-item cat3">
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard1} alt="Product Image" />
                  <span className="product-tag">
                    <span className="tag">Hot</span>
                    <span className="offer">-30%</span>
                  </span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">White One-Piece Dress</a>
                  </h3>
                  <span className="price">
                    $19.00 <del>$26.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">White One-Piece Dress</a>
                  </h3>
                  <span className="price">
                    $19.00 <del>$26.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="cart.html">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-auto col-lg-4 col-md-6 filter-item cat2">
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard2} alt="Product Image" />
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Tinci Dunt Pharetra Soda</a>
                  </h3>
                  <span className="price">$30.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Tinci Dunt Pharetra Soda</a>
                  </h3>
                  <span className="price">$30.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-auto col-lg-4 col-md-6 filter-item cat1 cat4">
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard3} alt="Product Image" />
                  <span className="product-tag">-19%</span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">The Playtime Excitement!</a>
                  </h3>
                  <span className="price">
                    $30.00 <del>$39.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">The Playtime Excitement!</a>
                  </h3>
                  <span className="price">
                    $30.00 <del>$39.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-auto col-lg-4 col-md-6 filter-item cat2">
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard4} alt="Product Image" />
                  <span className="product-tag"></span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Brown Lather Carriage</a>
                  </h3>
                  <span className="price">
                    $19.00 <del>$27.00</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Brown Lather Carriage</a>
                  </h3>
                  <span className="price">
                    $19.00 <del>$27.00</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="cart.html">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-auto col-lg-4 col-md-6 filter-item cat3 cat1">
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard5} alt="Product Image" />
                  <span className="product-tag">-12%</span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Ultricies At Torquent Dui</a>
                  </h3>
                  <span className="price">
                    $12.00 <del>$19.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Ultricies At Torquent Dui</a>
                  </h3>
                  <span className="price">
                    $12.00 <del>$19.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-auto col-lg-4 col-md-6 filter-item cat4 cat1 cat2">
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard6} alt="Product Image" />
                  <span className="product-tag">-12%</span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">The Playtime Excitement!</a>
                  </h3>
                  <span className="price">
                    $26.00 <del>$30.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">The Playtime Excitement!</a>
                  </h3>
                  <span className="price">
                    $26.00 <del>$30.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="cart.html">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-auto col-lg-4 col-md-6 filter-item cat2 cat1 cat4">
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard7} alt="Product Image" />
                  <span className="product-tag"></span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Quilted Wind Jacket</a>
                  </h3>
                  <span className="price">
                    $12.00 <del>$19.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails.">Quilted Wind Jacket</a>
                  </h3>
                  <span className="price">
                    $12.00 <del>$19.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="cart.html">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-auto col-lg-4 col-md-6 filter-item cat3">
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard8} alt="Product Image" />
                  <span className="product-tag"></span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">The Playtime Excitement!</a>
                  </h3>
                  <span className="price">$30.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">The Playtime Excitement!</a>
                  </h3>
                  <span className="price">$30.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-auto col-lg-4 col-md-6 filter-item cat4">
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard9} alt="Product Image" />
                  <span className="product-tag"></span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Brown Lather Carriage</a>
                  </h3>
                  <span className="price">$19.00 - $27.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Brown Lather Carriage</a>
                  </h3>
                  <span className="price">$19.00 - $27.00</span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-auto col-lg-4 col-md-6 filter-item cat3 cat2">
              <div className="ot-product product-grid">
                <div className="product-img">
                  <img src={postCard10} alt="Product Image" />
                  <span className="product-tag">-12%</span>
                  <div className="actions">
                    <a href="/wishlist" className="icon-btn">
                      <i className="far fa-heart"></i>
                    </a>
                    <button className="icon-btn">
                      <i className="fa-light fa-arrows-cross"></i>
                    </button>
                    <a href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Playtime Excitement!</a>
                  </h3>
                  <span className="price">
                    $12.00 <del>$19.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-hover-content">
                  <h3 className="box-title">
                    <a href="/shopdetails">Playtime Excitement!</a>
                  </h3>
                  <span className="price">
                    $12.00 <del>$19.99</del>
                  </span>
                  <div className="woocommerce-product-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label="Rated 5.00 out of 5"
                    >
                      <span>
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                  <a className="ot-btn" href="/cart">
                    <i className="fa-light fa-basket-shopping me-1"></i> Add To
                    Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className>
        <div className="container z-index-common">
          <div
            className="cta-box position-relative banner-bg1"
            data-bg-src={ctaBg1}
          >
            <div className="body-particle" id="cta-particle"></div>
            <div className="row">
              <div className="col-xl-6">
                <div className="box-content text-xl-start text-center">
                  <div className="title-area mb-30">
                    <h2 className="sec-title">
                      Get 45% discount in all of
                      <br className="d-xxl-block d-none" />
                      Our super Toys
                    </h2>
                  </div>
                  <a
                    href="/shopdetails"
                    className="ot-btn style-white"
                    data-delay="100"
                  >
                    Shop Now<i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-6 align-self-end">
                <div className="cta-thumb2-1 text-xl-end text-center">
                  <img src={ctaThumb1} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6">
              <div className="title-area text-center">
                <h2 className="sec-title">Our Latest News & Articles</h2>
                <p className="sec-text" data-delay="100">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Donec at nulla nulla. Duis posuere ex lacus
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="blog-card style2">
                <div className="blog-img">
                  <img src={blog1} alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="/blog">
                      <i className="far fa-calendar-days"></i>Feb 16, 2025
                    </a>
                    <a href="/blog">
                      <i className="far fa-user"></i>By Babymart
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="/blogdetails">
                      Montes suspendisse massa curae malesuada
                    </a>
                  </h3>
                  <a href="/blogdetails" className="link-btn">
                    Read More<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="blog-card style2">
                <div className="blog-img">
                  <img src={blog2} alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="/blog">
                      <i className="far fa-calendar-days"></i>Mar 10, 2025
                    </a>
                    <a href="/blog">
                      <i className="far fa-user"></i>By Babymart
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="/blogdetails">
                      Playful Picks Paradise: Kids’ Essentials with Dash.
                    </a>
                  </h3>
                  <a href="/blogdetails" className="link-btn">
                    Read More<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="blog-card style2">
                <div className="blog-img">
                  <img src={blog3} alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="/blog">
                      <i className="far fa-calendar-days"></i>Jun 17, 2025
                    </a>
                    <a href="/blog">
                      <i className="far fa-user"></i>By Babymart
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="/blogdetails">
                      Tiny Emporium: Playful Picks for Kids’ Delightful Days.
                    </a>
                  </h3>
                  <a href="/blogdetails" className="link-btn">
                    Read More<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="blog-card style2">
                <div className="blog-img">
                  <img src={blog4} alt="blog image" />
                  <span className="blog-tag">Activities</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="/blog">
                      <i className="far fa-calendar-days"></i>Jul 15, 2025
                    </a>
                    <a href="/blog">
                      <i className="far fa-user"></i>By Babymart
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="/blogdetails">
                      Eu parturient dictumst fames quam tempor
                    </a>
                  </h3>
                  <a href="/blogdetails" className="link-btn">
                    Read More<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider {...brandLogos}>
      <div className="swiper-slide">
                <div className="brand-card">
                  <a target="_blank" href="https://themeforest.net/">
                    <img src={brandLogo1} alt="Brand Logo" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-card">
                  <a target="_blank" href="https://themeforest.net/">
                    <img src={brandLogo2} alt="Brand Logo" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-card">
                  <a target="_blank" href="https://themeforest.net/">
                    <img src={brandLogo3} alt="Brand Logo" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-card">
                  <a target="_blank" href="https://themeforest.net/">
                    <img src={brandLogo4} alt="Brand Logo" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-card">
                  <a target="_blank" href="https://themeforest.net/">
                    <img src={brandLogo5} alt="Brand Logo" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-card">
                  <a target="_blank" href="https://themeforest.net/">
                    <img src={brandLogo6} alt="Brand Logo" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-card">
                  <a target="_blank" href="https://themeforest.net/">
                    <img src={brandLogo7} alt="Brand Logo" />
                  </a>
                </div>
              </div>
    </Slider>
      <Footer />
    </>
  );
};

export default Index1;
