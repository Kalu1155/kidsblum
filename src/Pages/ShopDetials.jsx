import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import data from '../../kids-blum.json';
import commentAuthor from "../assets/img/blog/comment-author-5.png";
import { useCart } from '../context/CartContext';


const ShopDetials = () => {
  const { id } = useParams();
  const { products } = data;
  const product = products.find(p => p.id.toString() === id);
  const [mainImage, setMainImage] = useState(null);
  const [selectedAge, setSelectedAge] = useState("default");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart()

  useEffect(() => {
    if (product) {
      setMainImage(product.thumbnail);
      setSelectedColor(product.colors?.[0] || null);
      setSelectedAge("default");
      setQuantity(1)
    }
  }, [product]);

  if (!product) return <div>Product not found</div>;

  const ageOptions = Object.keys(product.price).filter(age => age !== "default");
  const current = product.price[selectedAge]?.currentprice?.toLocaleString() || product.price.default.currentprice.toLocaleString();
  const previous = product.price[selectedAge]?.previousprice?.toLocaleString() || product.price.default.previousprice.toLocaleString();

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedAge, selectedColor);
    alert(`${product.productname} (${selectedAge} age, ${selectedColor?.name || 'No color'}) added to cart!`);
  };


  return (
    <>
      <Navbar />
      <div className="breadcumb-wrapper">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{product.productname}</h1>
            <ul className="breadcumb-menu">
              <li data-delay="100">
                <a href="/index">Home</a>
              </li>
              <li data-delay="100">Shop Details</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="product-details mt-50 space-extra-bottom">
        <div className="container">
          <div className="row gx-60 gy-50">
            {/* Left: Thumbnails */}
            <div className="col-md-1 d-flex flex-row flex-sm-column gap-2 overflow-auto">
              {product.images.map((imgObj, i) => (
                <div className="img-thumbnail border" key={i}>
                  <img
                    src={imgObj.src}
                    alt={`Product Thumbnail ${i + 1}`}
                    className="img-fluid"
                    style={{ maxHeight: '80px', cursor: 'pointer' }}
                    onClick={() => setMainImage(imgObj.src)}
                  />
                </div>
              ))}
            </div>


            {/* Center: Big Product Image */}
            <div className="col-md-5 align-items-center justify-content-center">
              <div className="product-big-img border">
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="img-fluid"
                // style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="product-about">
                <h2 className="product-title">{product.productname}</h2>
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
                  <a
                    href="/shopdetails"
                    className="woocommerce-review-link"
                  >
                    (<span className="count">4</span> customer reviews)
                  </a>
                </div>
                <p className="text">
                  {product.description}
                </p>
                <p className="price">
                  ₦{current}<del>₦{previous}</del>
                  <span className="stock-availability">
                    Stock Availability.
                  </span>
                </p>
                <div className="product-option">

                  <div className="product-size-wrap">
                    <div className="product-option-title">Age:</div>
                    <div className="age-options">
                      {ageOptions.map((age) => (
                        <a
                          key={age}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedAge(age);
                          }}
                          style={{
                            marginRight: '10px',
                            textDecoration: selectedAge === age ? 'underline' : 'none',
                            fontWeight: selectedAge === age ? 'bold' : 'normal'
                          }}
                        >
                          {age}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="product-size-wrap">
                    <div className="product-option-title">Gender:</div>
                    <div className="age-options">

                      <a >
                        {product.gender}
                      </a>

                    </div>
                  </div>

                  <div className="product-color-wrap">
                    <div className="product-option-title">Color:</div>
                    {product.colors.map((color, i) => (
                      <a href="#"
                        key={i}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedColor(color);
                        }}
                        style={{
                          backgroundColor: color.code,
                          border: selectedColor?.code === color.code ? '2px solid #000' : '1px solid #ccc',
                          borderRadius: '50%',
                          display: 'inline-block',
                          width: '15px',
                          height: '15px',
                          marginRight: '5px',
                          cursor: 'pointer',
                        }}
                        title={color.name}></a>
                    ))}
                  </div>
                </div>
                <div className="actions">
                  <div className="quantity">
                    <button className="quantity-minus qty-btn"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                      <i className="far fa-minus"></i>
                    </button>
                    <input
                      type="number"
                      className="qty-input"
                      step="1"
                      min="1"
                      max="100"
                      name="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      title="Qty"
                    />
                    <button className="quantity-plus qty-btn"
                      onClick={() => setQuantity(quantity + 1)}>
                      <i className="far fa-plus"></i>
                    </button>
                  </div>
                  <button className="ot-btn" onClick={handleAddToCart}>
                    <i className="fa-light fa-basket-shopping me-1"
                    ></i> Add to Cart
                  </button>
                  <a
                    href={`https://wa.me/2348159363962?text=${encodeURIComponent(
                      `Hello! I'm interested in this product:\n\n` +
                      `Product Name: ${product.productname}\n` +
                      `Price: ₦${product.price?.[selectedAge || "default"]?.currentprice?.toLocaleString()}\n` +
                      `Age Range: ${selectedAge}\n` +
                      `Color: ${selectedColor?.name || "Not selected"}\n\n` +
                      `Is it still available?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ot-btn ot-btn-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp me-1" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                    Chat on WhatsApp
                  </a>


                  <a href="wishlist.html" className="icon-btn">
                    <i className="far fa-heart"></i>
                  </a>
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrows-cross"></i>
                  </a>
                </div>
                <div className="product_meta">
                  <span className="sku_wrapper">
                    SKU: <span className="sku">{product.sku}</span>
                  </span>
                  <span>
                    Tags: <a href="shop.html">{product.yeartags.join(', ')}</a>

                  </span>
                  <span className="posted_in">
                    Category: <a href="shop.html">{product.category.join(', ')}</a>
                  </span>
                  <span>
                    Tags: <a href="shop.html">{product.tags.join(', ')}</a>
                  </span>
                </div>
                <div className="checklist-wrap">
                  <div className="row gy-2">
                    <div className="col-lg-5">
                      <div className="check-list">
                        <ul>
                          <li>
                            <i className="fas fa-check"></i> Free shipping
                          </li>
                          <li>
                            <i className="fas fa-check"></i> 30 days exchange &
                            return
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="check-list">
                        <ul>
                          <li>
                            <i className="fas fa-check"></i> KIDSBLUM Flash
                            Discount: Starting at 50% Off
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Safe & Secure
                            online shopping
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav product-tab-style1" id="productTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="description-tab"
                data-bs-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected="false"
              >
                Description
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="information-tab"
                data-bs-toggle="tab"
                href="#information"
                role="tab"
                aria-controls="information"
                aria-selected="false"
              >
                Additional Information
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="reviews-tab"
                data-bs-toggle="tab"
                href="#reviews"
                role="tab"
                aria-controls="reviews"
                aria-selected="true"
              >
                Reviews (1)
              </a>
            </li>
          </ul>
          <div className="tab-content" id="productTabContent">
            <div
              className="tab-pane fade"
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque quis erat interdum, tempor turpis in, sodales ex.
                In hac habitasse platea dictumst. Etiam accumsan scelerisque
                urna, a lobortis velit vehicula ut. Maecenas porttitor dolor a
                velit aliquet, et euismod nibh vulputate. Duis nunc velit,
                lacinia vel risus in, finibus sodales augue. Aliquam lacinia
                imperdiet dictum. Etiam tempus finibus tortor, quis placerat
                arcu tristique in. Sed vitae dui a diam luctus maximus. Quisque
                nec felis dapibus, dapibus enim vitae, vestibulum libero.
                Aliquam erat volutpat. Phasellus luctus rhoncus justo. Duis a
                nulla sit amet justo aliquam ullamcorper. Phasellus nulla lorem,
                pretium et libero in, porta auctor dui. In a ornare purus, et
                efficitur elit. Etiam consectetur sit amet quam ut tincidunt.
                Donec gravida ultricies tellus ac pharetra.
              </p>
              <p className="mb-0">
                Praesent a pulvinar purus. Proin sollicitudin leo eget mi
                sagittis aliquam. Donec sollicitudin ex ac lobortis mollis. Sed
                eget libero nec mi
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="information"
              role="tabpanel"
              aria-labelledby="information-tab"
            >
              <table className="woocommerce-table mb-0">
                <tbody>
                  <tr>
                    <th>Weight</th>
                    <td>15 kg</td>
                  </tr>
                  <tr>
                    <th>Dimensions</th>
                    <td>30 × 32 × 46 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="tab-pane fade show active"
              id="reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              <div className="woocommerce-Reviews">
                <div className="ot-comments-wrap">
                  <ul className="comment-list">
                    <li className="review ot-comment-item">
                      <div className="ot-post-comment">
                        <div className="comment-avater">
                          <img src={commentAuthor} alt="Comment Author" />
                        </div>
                        <div className="comment-content">
                          <h4 className="name">Leslie Alexander</h4>
                          <span className="commented-on">
                            February 10, 2024 at 2:37 pm
                          </span>
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{ width: "100%" }}>
                              Rated <strong className="rating">5.00</strong> out
                              of 5 based on <span className="rating">1</span>{" "}
                              customer rating
                            </span>
                          </div>
                          <p className="text">
                            Neque porro est qui dolorem ipsum quia quaed
                            inventor veritatis et quasi architecto var sed
                            efficitur turpis gilla sed sit amet finibus eros.
                            Lorem Ipsum is simply dummy
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ot-comment-form">
                  <div className="form-title">
                    <h5 className="blog-inner-title">Add a review</h5>
                  </div>
                  <div className="row gy-30">
                    <div className="col-12 form-group rating-select d-flex align-items-center">
                      <label>Your Rating</label>
                      <p className="stars">
                        <span>
                          <a className="star-1" href="#">
                            1
                          </a>
                          <a className="star-2" href="#">
                            2
                          </a>
                          <a className="star-3" href="#">
                            3
                          </a>
                          <a className="star-4" href="#">
                            4
                          </a>
                          <a className="star-5" href="#">
                            5
                          </a>
                        </span>
                      </p>
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Your Name*</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Your Email*</label>
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 form-group">
                      <label>Message*</label>
                      <textarea
                        placeholder="Write a Message"
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="col-12 form-group">
                      <input
                        id="reviewcheck"
                        name="reviewcheck"
                        type="checkbox"
                      />
                      <label for="reviewcheck">
                        I Accept Your Terms & Conditions
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-12 form-group mb-0">
                      <button className="ot-btn">Submit Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-top mb-30">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-4">
                <div className="title-area text-center">
                  <h2 className="sec-title">Related Products</h2>
                  <p className="sec-text">
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Donec at nulla nulla. Duis posuere ex lacus
                  </p>
                </div>
              </div>
            </div>
            <div
              className="swiper ot-slider has-shadow"
              id="productSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1400":{"slidesPerView":"5"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="ot-product product-grid style2">
                    <div className="product-img">
                      <img
                        src="assets/img/product/post-card1-5.png"
                        alt="Product Image"
                      />
                      <div className="actions">
                        <a href="wishlist.html" className="icon-btn">
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
                        <a href="/shopdetails">
                          Ultricies At Torquent Dui
                        </a>
                      </h3>
                      <span className="price">$20.00</span>
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
                <div className="swiper-slide">
                  <div className="ot-product product-grid style2">
                    <div className="product-img">
                      <img
                        src="assets/img/product/post-card1-10.png"
                        alt="Product Image"
                      />
                      <div className="actions">
                        <a href="wishlist.html" className="icon-btn">
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
                      <a className="ot-btn" href="cart.html">
                        <i className="fa-light fa-basket-shopping me-1"></i> Add
                        To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ot-product product-grid style2">
                    <div className="product-img">
                      <img
                        src="assets/img/product/post-card1-12.png"
                        alt="Product Image"
                      />
                      <span className="product-tag">-12%</span>
                      <div className="actions">
                        <a href="wishlist.html" className="icon-btn">
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
                      <a className="ot-btn" href="cart.html">
                        <i className="fa-light fa-basket-shopping me-1"></i> Add
                        To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ot-product product-grid style2">
                    <div className="product-img">
                      <img
                        src="assets/img/product/post-card1-14.png"
                        alt="Product Image"
                      />
                      <div className="actions">
                        <a href="wishlist.html" className="icon-btn">
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
                        <a href="/shopdetails">Animals pet green</a>
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
                      <a className="ot-btn" href="cart.html">
                        <i className="fa-light fa-basket-shopping me-1"></i> Add
                        To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ot-product product-grid style2">
                    <div className="product-img">
                      <img
                        src="assets/img/product/post-card1-15.png"
                        alt="Product Image"
                      />
                      <div className="actions">
                        <a href="wishlist.html" className="icon-btn">
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
                        <a href="/shopdetails">Round new red toy</a>
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
                <div className="swiper-slide">
                  <div className="ot-product product-grid style2">
                    <div className="product-img">
                      <img
                        src="assets/img/product/post-card1-5.png"
                        alt="Product Image"
                      />
                      <span className="product-tag">-12%</span>
                      <div className="actions">
                        <a href="wishlist.html" className="icon-btn">
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
                        <a href="/shopdetails">
                          Ultricies At Torquent Dui
                        </a>
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
                      <a className="ot-btn" href="cart.html">
                        <i className="fa-light fa-basket-shopping me-1"></i> Add
                        To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ot-product product-grid style2">
                    <div className="product-img">
                      <img
                        src="assets/img/product/post-card1-10.png"
                        alt="Product Image"
                      />
                      <span className="product-tag">-12%</span>
                      <div className="actions">
                        <a href="wishlist.html" className="icon-btn">
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
                <div className="swiper-slide">
                  <div className="ot-product product-grid style2">
                    <div className="product-img">
                      <img
                        src="assets/img/product/post-card1-12.png"
                        alt="Product Image"
                      />
                      <div className="actions">
                        <a href="wishlist.html" className="icon-btn">
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
                      <a className="ot-btn" href="cart.html">
                        <i className="fa-light fa-basket-shopping me-1"></i> Add
                        To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ot-product product-grid style2">
                    <div className="product-img">
                      <img
                        src="assets/img/product/post-card1-14.png"
                        alt="Product Image"
                      />
                      <span className="product-tag">
                        <span className="tag">Hot</span>
                        <span className="offer">-30%</span>
                      </span>
                      <div className="actions">
                        <a href="wishlist.html" className="icon-btn">
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
                        <a href="/shopdetails">Animals pet green</a>
                      </h3>
                      <span className="price">$16.00</span>
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
                <div className="swiper-slide">
                  <div className="ot-product product-grid style2">
                    <div className="product-img">
                      <img
                        src="assets/img/product/post-card1-15.png"
                        alt="Product Image"
                      />
                      <div className="actions">
                        <a href="wishlist.html" className="icon-btn">
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
                        <a href="/shopdetails">Round new red toy</a>
                      </h3>
                      <span className="price">$14.00</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShopDetials;
