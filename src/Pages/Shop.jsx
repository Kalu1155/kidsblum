import React from 'react'
import { useEffect, useState } from "react";
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import cartImage1 from "../assets/img/product/post-card1-1.png"
import cartImage2 from "../assets/img/product/post-card1-2.png";
import cartImage5 from "../assets/img/product/post-card1-5.png"
import cartImage6 from "../assets/img/product/post-card1-6.png"
import cartImage31 from "../assets/img/product/post-card1-31.png"
const Shop = () => {
  const url = "https://jtb.ecmserver.com.ng/api/kids-blum";
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const productData = data.products
        const formattedProducts = productData.map((product) => ({
          id: product.id,
          productname: product.productname,
          currentprice: product.currentprice,
          thumbnail: product.thumbnail,
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
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
                      Showing 1-3 Of 34 Results
                    </p>
                  </div>
                  <div className="col-auto">
                    <div className="sort-bar-ordering-wrap">
                      <form className="woocommerce-ordering" method="get">
                        <select
                          name="orderby"
                          className="orderby"
                          aria-label="Shop order"
                        >
                          <option value="menu_order" selected="selected">
                            Default Sorting
                          </option>
                          <option value="popularity">Sort by popularity</option>
                          <option value="rating">Sort by average rating</option>
                          <option value="date">Sort by latest</option>
                          <option value="price">
                            Sort by price: low to high
                          </option>
                          <option value="price-desc">
                            Sort by price: high to low
                          </option>
                        </select>
                      </form>
                      <div className="nav" role="tablist">
                        <a
                          href="#"
                          id="tab-shop-list"
                          data-bs-toggle="tab"
                          data-bs-target="#tab-list"
                          role="tab"
                          aria-controls="tab-list"
                          aria-selected="false"
                        ><i className="fa-solid fa-list"></i
                        ></a>
                        <a
                          className="active"
                          href="#"
                          id="tab-shop-grid"
                          data-bs-toggle="tab"
                          data-bs-target="#tab-grid"
                          role="tab"
                          aria-controls="tab-grid"
                          aria-selected="true"
                        ><i className="far fa-grid-2"></i
                        ></a>
                      </div>
                    </div>
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
                    {products.map((product) => (

                      <div className="col-xxl-4 col-md-5 my-2">
                        <div
                          className="ot-product product-grid bg-white"
                          key={product.id}>
                          <div className="product-img">
                            <img
                              src={product.thumbnail}
                              alt="Product Image"
                            />
                            <div className="actions">
                              <a href="/wishlist" className="icon-btn"
                              ><i className="far fa-heart"></i
                              ></a>
                              <button className="icon-btn">
                                <i className="fa-light fa-arrows-cross"></i>
                              </button>

                              <a href={`/shopdetails/${product.id}`} className="icon-btn popup-content"
                              ><i className="far fa-eye"></i
                              ></a>
                            </div>
                          </div>
                          <div className="product-content">
                            <h3 className="box-title">
                              <a href={`/shopdetails/${product.id}`}
                              >{product.productname}</a
                              >
                            </h3>
                            <span className="price">{product.currentprice}</span>
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
                          </div>
                          <div className="product-hover-content">
                            <h3 className="box-title">
                              <a href={`/shopdetails/${product.id}`}
                              >{product.productname}</a
                              >
                            </h3>
                            <span className="price">{product.currentprice}</span>
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
                            <a className="ot-btn" href="/cart"
                            ><i className="fa-light fa-basket-shopping me-1"></i> Add
                              To Cart</a
                            >
                          </div>
                        </div>
                      </div>
                    ))}
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
                <div
                  className="tab-pane fade"
                  id="tab-list"
                  role="tabpanel"
                  aria-labelledby="tab-shop-list"
                >
                  <div className="row gy-30">
                    <div className="col-12">
                      <div
                        className="ot-product product-list bg-white"

                      >
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
                    <li>
                      <input
                        id="cat-check1"
                        name="cat-check1"
                        type="checkbox"
                        checked="checked"
                      />
                      <label for="cat-check1"
                      >Fashion Kid <span className="checkmark"></span
                      ></label>
                      <span className="category-number">(2)</span>
                    </li>
                    <li>
                      <input id="cat-check2" name="cat-check2" type="checkbox" />
                      <label for="cat-check2"
                      >Control Toys<span className="checkmark"></span
                      ></label>
                      <span className="category-number">(5)</span>
                    </li>
                    <li>
                      <input id="cat-check3" name="cat-check3" type="checkbox" />
                      <label for="cat-check3"
                      >Jigsaw Puzzle<span className="checkmark"></span
                      ></label>
                      <span className="category-number">(2)</span>
                    </li>
                    <li>
                      <input id="cat-check4" name="cat-check4" type="checkbox" />
                      <label for="cat-check4"
                      >Smart Toys<span className="checkmark"></span
                      ></label>
                      <span className="category-number">(3)</span>
                    </li>
                    <li>
                      <input id="cat-check5" name="cat-check5" type="checkbox" />
                      <label for="cat-check5"
                      >Toy & Game<span className="checkmark"></span
                      ></label>
                      <span className="category-number">(2)</span>
                    </li>
                    <li>
                      <input id="cat-check6" name="cat-check6" type="checkbox" />
                      <label for="cat-check6"
                      >Indoor Play<span className="checkmark"></span
                      ></label>
                      <span className="category-number">(2)</span>
                    </li>
                    <li>
                      <input id="cat-check7" name="cat-check7" type="checkbox" />
                      <label for="cat-check7"
                      >Outdoor Toy<span className="checkmark"></span
                      ></label>
                      <span className="category-number">(2)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_price_filter" >
                  <h4 className="widget_title">Filter By Price</h4>
                  <div className="price_slider_wrapper">
                    <div className="price_slider">

                    </div>

                    <div className="price_label">
                      Price: <span className="from">$0</span> -
                      <span className="to">$70</span>
                      <button type="submit" className="button ot-btn">Filter</button>
                    </div>
                  </div>
                </div>
                <div className="widget widget_categories2" >
                  <h3 className="widget_title">Shop By Age</h3>
                  <ul>
                    <li>
                      <input
                        id="age-check1"
                        name="age-check1"
                        type="checkbox"
                        checked="checked"
                      />
                      <label for="age-check1"
                      >0-3 years <span className="checkmark"></span
                      ></label>
                      <span className="category-number">(16)</span>
                    </li>
                    <li>
                      <input id="age-check2" name="age-check2" type="checkbox" />
                      <label for="age-check2"
                      >4-5 years <span className="checkmark"></span
                      ></label>
                      <span className="category-number">(20)</span>
                    </li>
                    <li>
                      <input id="age-check3" name="age-check3" type="checkbox" />
                      <label for="age-check3"
                      >6-7 years<span className="checkmark"></span
                      ></label>
                      <span className="category-number">(14)</span>
                    </li>
                    <li>
                      <input id="age-check4" name="age-check4" type="checkbox" />
                      <label for="age-check4"
                      >8-9 years <span className="checkmark"></span
                      ></label>
                      <span className="category-number">(12)</span>
                    </li>
                    <li>
                      <input id="age-check5" name="age-check5" type="checkbox" />
                      <label for="age-check5"
                      >10-11 years <span className="checkmark"></span
                      ></label>
                      <span className="category-number">(7)</span>
                    </li>
                    <li>
                      <input id="age-check6" name="age-check6" type="checkbox" />
                      <label for="age-check6"
                      >12+ years <span className="checkmark"></span
                      ></label>
                      <span className="category-number">(5)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_categories2" >
                  <h3 className="widget_title">Shop By Size</h3>
                  <div className="widget-size-wrap">
                    <a href="#">XL</a> <a href="#">M</a> <a href="#">L</a>
                    <a href="#">S</a> <a href="#">XS</a>
                  </div>
                </div>
                <div className="widget widget_categories2" >
                  <h3 className="widget_title">Shop By Rating</h3>
                  <ul>
                    <li className="product-rating">
                      <input
                        id="rating-check1"
                        name="rating-check1"
                        type="checkbox"
                        checked="checked"
                      />
                      <label for="rating-check1">
                        <span className="rating"
                        ><i className="fas fa-star"></i>
                          <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i> </span
                        >5 only
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li className="product-rating">
                      <input
                        id="rating-check2"
                        name="rating-check2"
                        type="checkbox"
                      />
                      <label for="rating-check2">
                        <span className="rating"
                        ><i className="fas fa-star"></i>
                          <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i> </span
                        >4 & up
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li className="product-rating">
                      <input
                        id="rating-check3"
                        name="rating-check3"
                        type="checkbox"
                      />
                      <label for="rating-check3">
                        <span className="rating"
                        ><i className="fas fa-star"></i>
                          <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i> </span
                        >3 & up
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li className="product-rating">
                      <input
                        id="rating-check4"
                        name="rating-check4"
                        type="checkbox"
                      />
                      <label for="rating-check4">
                        <span className="rating"
                        ><i className="fas fa-star"></i>
                          <i className="fas fa-star"></i> <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i> </span
                        >2 & up
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li className="product-rating">
                      <input
                        id="rating-check5"
                        name="rating-check5"
                        type="checkbox"
                      />
                      <label for="rating-check5">
                        <span className="rating"
                        ><i className="fas fa-star"></i>
                          <i className="far fa-star"></i> <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i> </span
                        >1 & up
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
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