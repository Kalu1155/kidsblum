import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const CategoryFilter = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const category = queryParams.get("category");

  const url = "http://localhost:3000/products"; // Replace with your live API when needed
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        const filteredProducts = data.filter(
          (product) =>
            category &&
            Array.isArray(product.category) &&
            product.category.includes(category)
        );

        const formattedProducts = filteredProducts.map((product) => ({
          id: product.id,
          productname: product.productname,
          currentprice: product.price?.default?.currentprice || 0,
          thumbnail: product.thumbnail,
        }));

        setProducts(formattedProducts);
        console.log("Filtered Products:", formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <>
      <Navbar />

      <div className="breadcumb-wrapper">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">
              Shop by Category: {category || "All"}
            </h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/index">Home</a>
              </li>
              <li>{category || "Category"}</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-50 space-extra-bottom" id="blog-sec">
        <div className="container">
          <div className="row justify-content-center flex-row-reverse">
            <div className="col-xl-9 col-lg-8">
              <div className="ot-sort-bar mb-4">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <p className="woocommerce-result-count">
                      Showing {products.length} result
                      {products.length !== 1 && "s"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="tab-grid"
                  role="tabpanel"
                  aria-labelledby="tab-shop-grid"
                >
                  <div className="row gy-30">
                    {products.length > 0 ? (
                      products.map((product) => (
                        <div
                          className="col-xxl-4 col-md-5 my-2"
                          key={product.id}
                        >
                          <div className="ot-product product-grid bg-white">
                            <div className="product-img">
                              <img
                                src={product.thumbnail}
                                alt="Product"
                                style={{ objectFit: "cover", height: "250px", width: "100%" }}
                              />
                              <div className="actions">
                                <a href="/wishlist" className="icon-btn">
                                  <i className="far fa-heart"></i>
                                </a>
                                <button className="icon-btn">
                                  <i className="fa-light fa-arrows-cross"></i>
                                </button>
                                <a
                                  href={`/shopdetails/${product.id}`}
                                  className="icon-btn popup-content"
                                >
                                  <i className="far fa-eye"></i>
                                </a>
                              </div>
                            </div>

                            <div className="product-content">
                              <h3 className="box-title">
                                <a href={`/shopdetails/${product.id}`}>
                                  {product.productname}
                                </a>
                              </h3>
                              <span className="price">₦{product.currentprice}</span>
                              <div className="woocommerce-product-rating">
                                <div
                                  className="star-rating"
                                  role="img"
                                  aria-label="Rated 5.00 out of 5"
                                >
                                  <span>
                                    Rated <strong className="rating">5.00</strong> out of 5
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="product-hover-content">
                              <h3 className="box-title">
                                <a href={`/shopdetails/${product.id}`}>
                                  {product.productname}
                                </a>
                              </h3>
                              <span className="price">₦{product.currentprice}</span>
                              <div className="woocommerce-product-rating">
                                <div
                                  className="star-rating"
                                  role="img"
                                  aria-label="Rated 5.00 out of 5"
                                >
                                  <span>
                                    Rated <strong className="rating">5.00</strong> out of 5
                                  </span>
                                </div>
                              </div>
                              <a className="ot-btn" href="/cart">
                                <i className="fa-light fa-basket-shopping me-1"></i> Add To Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-12 text-center py-5">
                        <h4>No products found in this category.</h4>
                      </div>
                    )}
                  </div>
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

export default CategoryFilter;
