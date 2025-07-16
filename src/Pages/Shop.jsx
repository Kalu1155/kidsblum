import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import cartImage1 from "../assets/img/product/post-card1-1.png"
import cartImage5 from "../assets/img/product/post-card1-5.png"
import cartImage6 from "../assets/img/product/post-card1-6.png"
import cartImage31 from "../assets/img/product/post-card1-31.png"

import { useCart } from '../context/CartContext';

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [ageOptions, setAgeOptions] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const [priceRange, setPriceRange] = useState([0, 0]);
  const [selectedRange, setSelectedRange] = useState([0, 0]);


  // const url = "https://jtb.ecmserver.com.ng/api/kids-blum";

  const { addToCart } = useCart()

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://jtb.ecmserver.com.ng/api/kids-blum");
      const data = await res.json();

      // Extract data safely from the API response
      const productData = Array.isArray(data.products) ? data.products : [];
      const categoryData = Array.isArray(data.category) ? data.category : [];
      const sizeData = Array.isArray(data.size) ? data.size : [];

      // Format products
      const formattedProducts = productData.map((product) => ({
        ...product,
        currentPrice: product.price?.default?.currentprice || 0,
      }));

      // Collect all unique yeartags from sizeData
      const allAgeTags = new Set();
      sizeData.forEach((s) => s.yeartags?.forEach((age) => allAgeTags.add(age)));

      // Set all state
      setProducts(formattedProducts);
      setFilteredProducts(formattedProducts);
      setCategories(categoryData.map((c) => c.name));
      setSizeOptions(sizeData.map((s) => s.size));
      setAgeOptions(Array.from(allAgeTags));

      // Price range
      const allPrices = formattedProducts.map(
        (p) => p.price?.default?.currentprice || 0
      );
      const min = Math.min(...allPrices);
      const max = Math.max(...allPrices);
      setPriceRange([min, max]);
      setSelectedRange([min, max]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);



  const toggleFilter = (value, setter, state) => {
    setter(state.includes(value) ? state.filter((v) => v !== value) : [...state, value]);
  };

  useEffect(() => {
    const filtered = Array.isArray(products)
      ? products.filter((product) => {
        const [min, max] = selectedRange;

        // Dynamic price per age
        let currentPrice = product.price?.default?.currentprice;

        if (selectedAges.length > 0) {
          for (const age of selectedAges) {
            if (product.price?.[age]?.currentprice) {
              currentPrice = product.price[age].currentprice;
              break;
            }
          }
        }

        const matchPrice = currentPrice >= min && currentPrice <= max;
        const matchCategory =
          selectedCategories.length === 0 ||
          product.category?.some((cat) => selectedCategories.includes(cat));

        const matchAge =
          selectedAges.length === 0 ||
          product.yeartags?.some((tag) => selectedAges.includes(tag));

        const matchSize =
          selectedSizes.length === 0 ||
          product.size?.some((s) => selectedSizes.includes(s));

        return matchPrice && matchCategory && matchAge && matchSize;
      })
      : [];

    setFilteredProducts(filtered); // ✅ safe here
  }, [selectedCategories, selectedAges, selectedSizes, selectedRange, products]);


  const handleAddToCartFromShop = (product) => {
    addToCart(product, 1, "default", product.colors?.[0]);
    alert(`${product.productname} added to cart!`);
  };

  return (
    <>
      <Navbar />
      <div
        className="breadcumb-wrapper">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title" >Store</h1>
            <ul className="breadcumb-menu">
              <li  >
                <a href="/index">Home</a>
              </li>
              <li  >Store</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mt-50 space-extra-bottom" id="blog-sec">
        <div className="container">
          <div className="row justify-content-center flex-row-reverse">
            <div className="col-xl-9 col-lg-8">
              <div className="ot-sort-bar">
                <div
                  className="row justify-content-md-between justify-content-center align-items-center"
                >
                  <div className="col-auto">
                    <p className="woocommerce-result-count">
                      Showing {products.length} Results
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="tab-grid"
                  role="tabpanel"
                  aria-labelledby="tab-shop-grid"
                >
                  <div className="row gy-30">
                    {filteredProducts.map((product) => (

                      <div className="col-xxl-4 col-md-5 my-2">
                        <div className="ot-product product-grid bg-white"
                          key={product.id}>
                          <div className="product-img objfit">
                            <img
                              src={product.thumbnail}
                              alt={product.productname}
                            />
                            <div className="actions">
                              <a href="/wishlist" className="icon-btn"
                              ><i className="far fa-heart"></i
                              ></a>
                              <button className="icon-btn">
                                <i className="fa-light fa-arrows-cross"></i>
                              </button>
                              <Link to={`/shopdetails/${product.id}`} className="icon-btn popup-content"><i className="far fa-eye"></i
                              ></Link>
                            </div>
                          </div>
                          <div className="product-content">
                            <h3 className="box-title">
                              <Link to={`/shopdetails/${product.id}`}>{product.productname}</Link>
                            </h3>
                            <span className="price">₦{typeof product.price?.default?.currentprice === 'number'
                              ? `₦${product.price.default.currentprice.toLocaleString()}`
                              : '₦N/A'}</span>
                          </div>
                          <div className="product-hover-content">
                            <h3 className="box-title">
                              <Link to={`/shopdetails/${product.id}`}>{product.productname}</Link>
                            </h3>
                            <span className="price">₦{typeof product.price?.default?.currentprice === 'number'
                              ? `₦${product.price.default.currentprice.toLocaleString()}`
                              : '₦N/A'}</span>
                            <button className="ot-btn" onClick={() => handleAddToCartFromShop(product)}>
                              <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-list"
                  role="tabpanel"
                  aria-labelledby="tab-shop-list">
                  <div className="row gy-30">
                    <div className="col-12">
                      <div
                        className="ot-product product-list bg-white">
                        <div className="product-img">
                          <img
                            src={cartImage5}
                            alt="Product Image"
                          />
                          <span className="product-tag"
                          ><span className="tag">-12%</span></span
                          >
                        </div>
                        <div className="product-content">
                          <h3 className="box-title">
                            <a href="/shopdetails"
                            >Ultricies At Torquent Dui</a
                            >
                          </h3>
                          <span className="price">$12.00<del>$19.99</del></span>
                          <div className="woocommerce-product-rating">
                            <div
                              className="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5">
                              <span
                              >Rated <strong className="rating">5.00</strong> out of
                                5 based on <span className="rating">1</span> customer
                                rating</span>
                            </div>
                          </div>
                          <p className="content">
                            Vestibulum consectetur fringilla tellus, et pulvinar
                            massa tempus nec. Fusce nibh nibh, consectetur vitae
                            felis quis, sagittis ullamcorper enim. Nullam maximus
                            vehicula justo, vel vestibulum turpis dictum at. Nam
                            sed laoreet sem. Aliquam urna massa,
                          </p>
                          <div className="btn-wrap">
                            <a className="ot-btn style7" href="cart.html"
                            ><i className="fa-light fa-basket-shopping me-1"></i>
                              Add To Cart</a
                            >
                            <div className="actions">
                              <a href="/wishlist" className="icon-btn"
                              ><i className="far fa-heart"></i
                              ></a>
                              <button className="icon-btn">
                                <i className="fa-light fa-arrows-cross"></i>
                              </button>
                              <a href="#QuickView" className="icon-btn popup-content"
                              ><i className="far fa-eye"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="ot-product product-list bg-white">
                        <div className="product-img">
                          <img
                            src={cartImage1}
                            alt="Product Image"
                          />
                          <span className="product-tag"
                          ><span className="tag">Hot</span>
                            <span className="offer">-30%</span></span
                          >
                        </div>
                        <div className="product-content">
                          <h3 className="box-title">
                            <a href="/shopdetails">White One-Piece Dress</a>
                          </h3>
                          <span className="price">$19.00<del>$26.99</del></span>
                          <div className="woocommerce-product-rating">
                            <div
                              className="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span
                              >Rated <strong className="rating">5.00</strong> out of
                                5 based on <span className="rating">1</span> customer
                                rating</span
                              >
                            </div>
                          </div>
                          <p className="content">
                            Vestibulum consectetur fringilla tellus, et pulvinar
                            massa tempus nec. Fusce nibh nibh, consectetur vitae
                            felis quis, sagittis ullamcorper enim. Nullam maximus
                            vehicula justo, vel vestibulum turpis dictum at. Nam
                            sed laoreet sem. Aliquam urna massa,
                          </p>
                          <div className="btn-wrap">
                            <a className="ot-btn style7" href="cart.html"
                            ><i className="fa-light fa-basket-shopping me-1"></i>
                              Add To Cart</a
                            >
                            <div className="actions">
                              <a href="/wishlist" className="icon-btn"
                              ><i className="far fa-heart"></i
                              ></a>
                              <button className="icon-btn">
                                <i className="fa-light fa-arrows-cross"></i>
                              </button>
                              <a href="#QuickView" className="icon-btn popup-content"
                              ><i className="far fa-eye"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="ot-product product-list bg-white"

                      >
                        <div className="product-img">
                          <img
                            src={cartImage31}
                            alt="Product Image"
                          />
                        </div>
                        <div className="product-content">
                          <h3 className="box-title">
                            <a href="/shopdetails"
                            >Flovely And Unicom Erna</a
                            >
                          </h3>
                          <span className="price">$19.00</span>
                          <div className="woocommerce-product-rating">
                            <div
                              className="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span
                              >Rated <strong className="rating">5.00</strong> out of
                                5 based on <span className="rating">1</span> customer
                                rating</span
                              >
                            </div>
                          </div>
                          <p className="content">
                            Vestibulum consectetur fringilla tellus, et pulvinar
                            massa tempus nec. Fusce nibh nibh, consectetur vitae
                            felis quis, sagittis ullamcorper enim. Nullam maximus
                            vehicula justo, vel vestibulum turpis dictum at. Nam
                            sed laoreet sem. Aliquam urna massa,
                          </p>
                          <div className="btn-wrap">
                            <a className="ot-btn style7" href="cart.html"
                            ><i className="fa-light fa-basket-shopping me-1"></i>
                              Add To Cart</a
                            >
                            <div className="actions">
                              <a href="/wishlist" className="icon-btn"
                              ><i className="far fa-heart"></i
                              ></a>
                              <button className="icon-btn">
                                <i className="fa-light fa-arrows-cross"></i>
                              </button>
                              <a href="#QuickView" className="icon-btn popup-content"
                              ><i className="far fa-eye"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="ot-product product-list bg-white"

                      >
                        <div className="product-img">
                          <img
                            src={cartImage6}
                            alt="Product Image"
                          />
                        </div>
                        <div className="product-content">
                          <h3 className="box-title">
                            <a href="/shopdetails"
                            >Ultricies At Torquent Dui</a
                            >
                          </h3>
                          <span className="price">$12.00<del>$19.99</del></span>
                          <div className="woocommerce-product-rating">
                            <div
                              className="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span
                              >Rated <strong className="rating">5.00</strong> out of
                                5 based on <span className="rating">1</span> customer
                                rating</span
                              >
                            </div>
                          </div>
                          <p className="content">
                            Vestibulum consectetur fringilla tellus, et pulvinar
                            massa tempus nec. Fusce nibh nibh, consectetur vitae
                            felis quis, sagittis ullamcorper enim. Nullam maximus
                            vehicula justo, vel vestibulum turpis dictum at. Nam
                            sed laoreet sem. Aliquam urna massa,
                          </p>
                          <div className="btn-wrap">
                            <a className="ot-btn style7" href="cart.html"
                            ><i className="fa-light fa-basket-shopping me-1"></i>
                              Add To Cart</a
                            >
                            <div className="actions">
                              <a href="/wishlist" className="icon-btn"
                              ><i className="far fa-heart"></i
                              ></a>
                              <button className="icon-btn">
                                <i className="fa-light fa-arrows-cross"></i>
                              </button>
                              <a href="#QuickView" className="icon-btn popup-content"
                              ><i className="far fa-eye"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ot-pagination text-center mt-40">
                    <ul>
                      <li>
                        <a href="/blog" >Previous</a>
                      </li>
                      <li><a href="/blog" >1</a></li>
                      <li><a href="/blog" >2</a></li>
                      <li><a href="/blog" >3</a></li>
                      <li>
                        <a href="/blog"
                        ><i className="fas fa-ellipsis"></i
                        ></a>
                      </li>
                      <li><a href="/blog" >Next</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 sidebar-wrap">
              <aside className="sidebar-area">
                <div className="widget widget_categories2" >
                  <h3 className="widget_title">Shop By Categories</h3>
                  <ul>
                    {categories.map((cat, i) => (
                      <li key={cat}>
                        <input
                          id={`cat-${i}`}
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => toggleFilter(cat, setSelectedCategories, selectedCategories)}
                        />
                        <label htmlFor={`cat-${i}`}>{typeof cat === 'string' ? cat : cat?.name}</label>
                      </li>
                    ))}

                  </ul>
                </div>
                <div className="widget widget_price_filter">
                  <h4 className="widget_title">Filter By Price</h4>
                  <div className="price_slider_wrapper">
                    <div className="price_slider d-flex align-items-center">
                      <input
                        type="number"
                        min={priceRange[0]}
                        max={priceRange[1]}
                        value={selectedRange[0]}
                        onChange={(e) =>
                          setSelectedRange([parseInt(e.target.value), selectedRange[1]])
                        }
                        className="form-control mx-2"
                        placeholder="Min"
                      />
                      <span> - </span>
                      <input
                        type="number"
                        min={priceRange[0]}
                        max={priceRange[1]}
                        value={selectedRange[1]}
                        onChange={(e) =>
                          setSelectedRange([selectedRange[0], parseInt(e.target.value)])
                        }
                        className="form-control mx-2"
                        placeholder="Max"
                      />
                    </div>

                    <div className="price_label mt-2">
                      <span className="from">₦{selectedRange[0].toLocaleString()}</span> -
                      <span className="to">₦{selectedRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="widget widget_categories2">
                  <h3 className="widget_title">Shop By Age</h3>
                  <ul>
                    {ageOptions.map((age, i) => (
                      <li key={age}>
                        <input
                          id={`age-${i}`}
                          type="checkbox"
                          checked={selectedAges.includes(age)}
                          onChange={() => toggleFilter(age, setSelectedAges, selectedAges)}
                        />
                        <label htmlFor={`age-${i}`}>{typeof age === 'string' ? `${age} years` : "N/A"}</label>
                      </li>
                    ))}

                  </ul>
                </div>
                <div className="widget widget_categories2">
                  <h3 className="widget_title">Shop By Size</h3>
                  <div className="widget-size-wrap">
                    {sizeOptions.map((size) => (
                      <a
                        href="#"
                        key={size}
                        className={selectedSizes.includes(size) ? "active-size" : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFilter(size, setSelectedSizes, selectedSizes);
                        }}>
                        {size}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Shop