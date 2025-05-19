import React from "react";
import { useEffect,useState } from "react";
import cartImage2 from "../assets/img/product/post-card1-2.png";


const WishList = () => {

  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const formattedProducts = data.map((product) => ({
          id: product.id,
          productname: product.productname,
          currentprice: product.currentprice,

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
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade active show"
          id="tab-grid"
          role="tabpanel"
          aria-labelledby="tab-shop-grid">
          <div className="row">
          {products.map((product) => (

            <div className="col-xxl-3 col-md-6 my-2">
              <div
                className="ot-product product-grid bg-white"
                key={product.id}>
                <div className="product-img">
                  <img
                    src={cartImage2}
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
                    <a href="/shopdetails"
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
                    <a href="/shopdetails"
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
        </div>
      </div>
    </>
  );
};

export default WishList;
