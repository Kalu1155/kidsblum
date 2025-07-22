import React from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import shape1 from "../assets/img/hero/hero-shape1-1.png";
import thumb1 from "../assets/img/banner0.png";
import featureIcon1 from "../assets/img/icon/feature-icon1-1.svg";
import featureIcon2 from "../assets/img/icon/feature-icon1-2.svg";
import featureIcon3 from "../assets/img/icon/feature-icon1-3.svg";
import featureIcon4 from "../assets/img/icon/feature-icon1-4.svg";
import categoryCard1 from "../assets/img/category/category_card1_1.png";
import categoryCard2 from "../assets/img/category/category_card1_2.png";
import categoryCard3 from "../assets/img/category/category_card1_3.png";
import categoryCard4 from "../assets/img/category/category_card1_4.png";
import categoryCard5 from "../assets/img/category/category_card1_5.png";
import ctaBg1 from "../assets/img/bg/cta_bg_2_1.png";
import categoryCard21 from "../assets/img/category/category_card2_1.png";
import categoryCard22 from "../assets/img/category/category_card2_2.png";
import categoryCard23 from "../assets/img/category/category_card2_3.png";
import categoryCard24 from "../assets/img/category/category_card2_4.png";
import categoryCard25 from "../assets/img/category/category_card2_5.png";
import ctaThumb1 from "../assets/img/normal/cta-thumb2-1.png";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Index1 = () => {
  const url = "https://jtb.ecmserver.com.ng/api/kids-blum";
  // const url = "http://localhost:3000/products";
  // const formattedProducts = data.map((product) => ({
  //   id: product.id,
  //   productname: product.productname,
  //   cprice: product?.price?.default?.currentprice,
  //   pprice: product.price?.default?.previousprice,
  //   thumbnail: product.thumbnail,
  //   pagestatues: product.pagestatues,
  // }));
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Oops! The API didn't return JSON.");
        }

        const data = await response.json();
        if (!Array.isArray(data.products)) {
          console.error("API format unexpected: products is not an array", data);
          return;
        }

        console.log("Raw data from API:", data);

        const formattedProducts = data.products.map((product) => {
          const cprice = product?.price?.default?.currentprice ?? null;
          const pprice = product?.price?.default?.previousprice ?? null;
          const pagestatues = product?.pagestatues?.toLowerCase?.() ?? "";

          return {
            id: product.id ?? null,
            productname: product.productname ?? "Unnamed",
            cprice,
            pprice,
            thumbnail: product.thumbnail ?? "",
            pagestatues,
          };
        });

        console.log("Formatted Products:", formattedProducts);
        setProducts(formattedProducts);

        console.log("Filtered Flash Products:", formattedProducts.filter(p => p.pagestatues.includes("flash")));
        console.log("Filtered Trending Products:", formattedProducts.filter(p => p.pagestatues.includes("trending")));
        console.log("Filtered Top Products:", formattedProducts.filter(p => p.pagestatues.includes("top")));
        console.log("Filtered STW Products:", formattedProducts.filter(p => p.pagestatues.includes("stw")));

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const shopByAge = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const shopByCate = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <>
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
                  <div className="hero-style1">
                    <span className="sub-title text-white">
                      Up to 50% Off Our Products
                    </span>
                    <h1 className="hero-title">
                      <span className="title1" data-delay="100">
                        Buy Children’s Clothing{" "}
                      </span>
                    </h1>
                    <div className="btn-group" data-delay="300">
                      <Link to="/shop" className="ot-btn style-white">
                        Shop Now <i className="fas fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="hero-thumb1-1" data-delay="200">
                    <img src={thumb1} alt="img" />
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
                  <Link to="/category?ages=1-2"
                    className="box-img">
                    <div
                      className="box-img-border"
                      data-theme-color="#E6F5F9"
                    ></div>
                    <img src={categoryCard21} alt="Image" />
                  </Link>
                  <h3 className="box-title">
                    <Link to="/agefilter?ages=1-2">0-2Years</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="swiper-slide">
                <div className="category-card2">
                  <Link to="/agefilter?ages=2-3"
                    className="box-img">
                    <div
                      className="box-img-border"
                      data-theme-color="#E6F5F9"
                    ></div>
                    <img src={categoryCard22} alt="Image" />
                  </Link>
                  <h3 className="box-title">
                    <Link to="/agefilter?ages=2-3">2-3Years</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card2">
                  <Link to="/agefilter?ages=3-4"
                    className="box-img">
                    <div
                      className="box-img-border"
                      data-theme-color="#E6F5F9"
                    ></div>
                    <img src={categoryCard23} alt="Image" />
                  </Link>
                  <h3 className="box-title">
                    <Link to="/agefilter?ages=3-4">3-4Years</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card2">
                  <Link to="/agefilter?ages=4-5"
                    className="box-img">
                    <div
                      className="box-img-border"
                      data-theme-color="#E6F5F9"
                    ></div>
                    <img src={categoryCard24} alt="Image" />
                  </Link>
                  <h3 className="box-title">
                    <Link to="/agefilter?ages=4-5">4-5Years</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="swiper-slide">
                <div className="category-card2">
                  <Link to="/agefilter?ages=5-6"
                    className="box-img">
                    <div
                      className="box-img-border"
                      data-theme-color="#E6F5F9"
                    ></div>
                    <img src={categoryCard25} alt="Image" />
                  </Link>
                  <h3 className="box-title">
                    <Link to="/agefilter?ages=5-6">5-6Years</Link>
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
                  <p className="box-text">50% off </p>
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
              <div className="sec-btn mb-30">
                <Link to="/shop" className="ot-btn style7">View More<i className="fas fa-arrow-right ms-2"></i></Link>
              </div>
            </div>
          </div>

          <div className="container product-row-wrapper">
            <div className="row">
              {products
                ?.filter(product => product.pagestatues && product.pagestatues.includes("flash"))
                .slice(0, 4)
                .map(product => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4" key={product.id}>
                    <div className="ot-product product-grid w-100">
                      <div className="product-img objfit">
                        <img src={product.thumbnail} alt="Product" className="img-fluid" />
                        <span className="product-tag">
                          <span className="tag">Hot</span>
                          <span className="offer">50% off</span>
                        </span>
                        <div className="actions">
                          <Link to={`/shopdetails/${product.id}`} className="icon-btn">
                            <i className="far fa-eye"></i>
                          </Link>
                          <button className="icon-btn">
                            <i className="fa-light fa-arrows-cross"></i>
                          </button>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3 className="box-title">
                          <Link to={`/shopdetails/${product.id}`}>{product.productname}</Link>
                        </h3>
                        <span className="price">
                          {product.cprice ? `₦${product.cprice.toLocaleString()}` : 'Price not available'}
                          <del>{product.pprice ? `₦${product.pprice.toLocaleString()}` : 'Price not available'}</del>
                        </span>
                      </div>
                      <div className="product-hover-content">
                        <h3 className="box-title">
                          <Link to={`/shopdetails/${product.id}`}>{product.productname}</Link>
                        </h3>
                        <span className="price">
                          {product.cprice ? `₦${product.cprice.toLocaleString()}` : 'Price not available'}
                          <del>{product.pprice ? `₦${product.pprice.toLocaleString()}` : 'Price not available'}</del>
                        </span>
                        <a className="ot-btn" href="/cart">
                          <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}


            </div>
          </div>
        </div>

      </section>
      <section className="space-bottom overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-8">
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
                    <Link to="/categoryfilter?category=Fashion Kid">Fashion Kid</Link>
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
                    <Link to="/categoryfilter?category=Game/Park">Game/Park</Link>
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
                    <Link to="/categoryfilter?category=Smart Look">Smart Look</Link>
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
                    <Link to="/categoryfilter?category=Indoor Clothing">Indoor Clothing</Link>
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
                    <Link to="/categoryfilter?category=Outdoor Clothing">Outdoor Clothing</Link>
                  </h3>
                </div>
              </div>
            </div>
          </Slider>

        </div>
      </section>
      <section className="position-relative space overflow-hidden bg-smoke3">
        <div className="container">
          <div className="row justify-content-xl-between justify-content-center align-items-center">
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="title-area text-xl-start text-center">
                <h2 className="sec-title">Trending Items</h2>
              </div>
            </div>
            {/* <div className="col-xl-auto">
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
            </div> */}
          </div>
          <div className="row flex-row-reverse gy-30 justify-content-center">
            <div className="">
              <div className="row gy-30 filter-active">
                {products
                  ?.filter(product => product.pagestatues && product.pagestatues.includes("trending"))
                  .map((product) => (

                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 filter-item mb-4">
                      <div className="ot-product product-grid bg-white"
                        key={product.id}>
                        <div className="product-img objfit">
                          <img src={product.thumbnail} alt="Product Image" />
                          <div className="actions">
                            <a href="/wishlist" className="icon-btn">
                              <i className="far fa-heart"></i>
                            </a>
                            <button className="icon-btn">
                              <i className="fa-light fa-arrows-cross"></i>
                            </button>
                            <Link to={`/shopdetails/${product.id}`} className="icon-btn popup-content"> <i className="far fa-eye"></i></Link>

                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="box-title">
                            <Link to={`/shopdetails/${product.id}`}>{product.productname}</Link>
                          </h3>
                          <span className="price">{product.cprice ? `₦${product.cprice.toLocaleString()}` : 'Price not available'}</span>
                        </div>
                        <div className="product-hover-content">
                          <h3 className="box-title">
                            <Link to={`/shopdetails/${product.id}`}>{product.productname}</Link>
                          </h3>
                          <span className="price">{product.cprice ? `₦${product.cprice.toLocaleString()}` : 'Price not available'}</span>
                          <a className="ot-btn" href="/cart">
                            <i className="fa-light fa-basket-shopping me-1"></i> Add
                            To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row gy-30 justify-content-center">
            <div className="col-xxl col-xl">
              <div className="product-list-wrap1 bg-white">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-auto">
                    <div className="title-area mb-30 text-center">
                      <h3 className="sec-title">Top Rating Items</h3>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="sec-btn mb-30">
                      <Link to="/shop" className="ot-btn style7">View More<i className="fas fa-arrow-right ms-2"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="row gy-30 justify-content-xxl-start justify-content-center">
                  {products
                    ?.filter(product => product.pagestatues && product.pagestatues.includes("top"))
                    .map((product) => (
                      <div className="col-xxl-6 col-xl-6 col-lg-6 mt-3">
                        <div className="ot-product list-view style-border"
                          key={product.id}>
                          <div className="product-img">
                            <img src={product.thumbnail} alt="Product Image" />
                          </div>
                          <div className="product-content">
                            <h3 className="box-title">
                              <Link to={`/shopdetails/${product.id}`}>{product.productname}</Link>
                            </h3>
                            <span className="price">
                              {product.cprice ? `₦${product.cprice.toLocaleString()}` : 'Price not available'}
                              <del>{product.pprice ? `₦${product.pprice.toLocaleString()}` : 'Price not available'}</del>
                            </span>
                          </div>
                          <div className="product-action-wrap align-self-center">
                            <div className="actions">
                              <a href="/wishlist" className="icon-btn">
                                <i className="far fa-heart"></i>
                              </a>
                              <button className="icon-btn">
                                <i className="fa-light fa-arrows-cross"></i>
                              </button>
                              <Link to={`/shopdetails/${product.id}`} className="icon-btn popup-content"> <i className="far fa-eye"></i></Link>
                            </div>
                            <a href="/shop" className="ot-btn style7">
                              <i className="fa-light fa-basket-shopping me-1"></i>{" "}
                              Add To Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space mt-3">
        <div className="container">
          <div className="row justify-content-xl-between justify-content-center align-items-center">
            <div className="col-xxl-4 col-lg-6 col-md-8">
              <div className="title-area text-xl-start text-center">
                <h2 className="sec-title">Most Sold This Week</h2>
              </div>
            </div>
          </div>
          <div className="row gy-30 filter-active">
            {products
              ?.filter(product => product.pagestatues && product.pagestatues.includes("stw"))
              .map((product) => (
                <div className="col-xxl-auto col-lg-4 col-md-6 filter-item cat3">
                  <div className="ot-product product-grid"
                    key={product.id}>
                    <div className="product-img objfit">
                      <img src={product.thumbnail} alt="Product Image" />
                      <span className="product-tag">
                        <span className="tag">Hot</span>
                        <span className="offer">50% off</span>
                      </span>
                      <div className="actions">
                        <a href="/wishlist" className="icon-btn">
                          <i className="far fa-heart"></i>
                        </a>
                        <button className="icon-btn">
                          <i className="fa-light fa-arrows-cross"></i>
                        </button>
                        <Link to={`/shopdetails/${product.id}`} className="icon-btn popup-content"><i className="far fa-eye"></i></Link>

                      </div>
                    </div>
                    <div className="product-content">
                      <h3 className="box-title">
                        <Link to={`/shopdetails/${product.id}`}>{product.productname}</Link>
                      </h3>
                      <span className="price">
                        {product.cprice ? `₦${product.cprice.toLocaleString()}` : 'Price not available'}
                        <del>{product.pprice ? `₦${product.pprice.toLocaleString()}` : 'Price not available'}</del>
                      </span>
                    </div>
                    <div className="product-hover-content">
                      <h3 className="box-title">
                        <Link to={`/shopdetails/${product.id}`}>{product.productname}</Link>
                      </h3>
                      <span className="price">
                        {product.cprice ? `₦${product.cprice.toLocaleString()}` : 'Price not available'}
                        <del>{product.pprice ? `₦${product.pprice.toLocaleString()}` : 'Price not available'}</del>
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
              ))}
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
                      Get 50% discount in all of Our
                      Clothing Offers
                    </h2>
                  </div>
                  <Link to="/shop" className="ot-btn style-white">Shop Now<i className="fas fa-arrow-right ms-2"></i></Link>
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
      <Footer />
    </>
  );
};

export default Index1;
