import React from 'react'
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import cartImage1 from "../assets/img/product/post-card1-1.png";
import cartImage6 from "../assets/img/product/post-card1-6.png";
import cartImage15 from "../assets/img/product/post-card1-15.png";


const Cart = () => {
  return (
    <>
  <Navbar/>
  <div
      className="breadcumb-wrapper">
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title" >Cart List</h1>
          <ul className="breadcumb-menu">
            <li  data-delay="100">
              <a href="/index">Home</a>
            </li>
            <li  data-delay="100">Cart List</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="ot-cart-wrapper space-top space-extra-bottom">
      <div className="container">
        <form action="#" className="woocommerce-cart-form">
          <table className="cart_table">
            <thead>
              <tr>
                <th colspan="3" className="cart-col-image">Product</th>
                <th className="cart-col-price">Price</th>
                <th className="cart-col-quantity">Quantity</th>
                <th className="cart-col-total">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cart_item">
                <td data-title="Remove">
                  <a href="#" className="remove"><i className="far fa-close"></i></a>
                </td>
                <td data-title="Product">
                  <a className="cart-productimage" href="/shopdetails"
                    ><img
                      width="91"
                      height="91"
                      src={cartImage6}
                      alt="Image"
                  /></a>
                </td>
                <td data-title="Name">
                  <a className="cart-productname" href="/shopdetails"
                    >Ultricies At Torquent Dui</a
                  >
                </td>
                <td data-title="Price">
                  <span className="amount">
                    <bdi><span>$</span>12.00 <del>$19.99</del></bdi>
                  </span>
                </td>
                <td data-title="Quantity">
                  <div className="quantity">
                    <button className="quantity-minus qty-btn">
                      <i className="far fa-minus"></i>
                    </button>
                    <input
                      type="number"
                      className="qty-input"
                      value="1"
                      min="1"
                      max="99"
                    />
                    <button className="quantity-plus qty-btn">
                      <i className="far fa-plus"></i>
                    </button>
                  </div>
                </td>
                <td data-title="Total">
                  <span className="amount">
                    <bdi><span>$</span>12.00</bdi>
                  </span>
                </td>
              </tr>
              <tr className="cart_item">
                <td data-title="Remove">
                  <a href="#" className="remove"><i className="far fa-close"></i></a>
                </td>
                <td data-title="Product">
                  <a className="cart-productimage" href="/shopdetails"
                    ><img
                      width="91"
                      height="91"
                      src={cartImage15}
                      alt="Image"
                  /></a>
                </td>
                <td data-title="Name">
                  <a className="cart-productname" href="/shopdetails"
                    >Round New Red Toy</a
                  >
                </td>
                <td data-title="Price">
                  <span className="amount">
                    <bdi><span>$</span>14.00</bdi>
                  </span>
                </td>
                <td data-title="Quantity">
                  <div className="quantity">
                    <button className="quantity-minus qty-btn">
                      <i className="far fa-minus"></i>
                    </button>
                    <input
                      type="number"
                      className="qty-input"
                      value="1"
                      min="1"
                      max="99"
                    />
                    <button className="quantity-plus qty-btn">
                      <i className="far fa-plus"></i>
                    </button>
                  </div>
                </td>
                <td data-title="Total">
                  <span className="amount">
                    <bdi><span>$</span>14.00</bdi>
                  </span>
                </td>
              </tr>
              <tr className="cart_item">
                <td data-title="Remove">
                  <a href="#" className="remove"><i className="far fa-close"></i></a>
                </td>
                <td data-title="Product">
                  <a className="cart-productimage" href="/shopdetails"
                    ><img
                      width="91"
                      height="91"
                      src={cartImage1}
                      alt="Image"
                  /></a>
                </td>
                <td data-title="Name">
                  <a className="cart-productname" href="/shopdetails"
                    >White One-Piece Dress</a
                  >
                </td>
                <td data-title="Price">
                  <span className="amount">
                    <bdi><span>$</span>19.00 <del>$26.99</del></bdi>
                  </span>
                </td>
                <td data-title="Quantity">
                  <div className="quantity">
                    <button className="quantity-minus qty-btn">
                      <i className="far fa-minus"></i>
                    </button>
                    <input
                      type="number"
                      className="qty-input"
                      value="1"
                      min="1"
                      max="99"
                    />
                    <button className="quantity-plus qty-btn">
                      <i className="far fa-plus"></i>
                    </button>
                  </div>
                </td>
                <td data-title="Total">
                  <span className="amount">
                    <bdi><span>$</span>19</bdi>
                  </span>
                </td>
              </tr>
              <tr>
                <td colspan="6" className="actions">
                  <div className="ot-cart-coupon">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coupon Code..."
                    />
                    <button type="submit" className="ot-btn">Apply Coupon</button>
                  </div>
                  <button type="submit" className="ot-btn">Update cart</button>
                  <a href="/shop" className="ot-btn">Continue Shopping</a>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className="row justify-content-end">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <h2 className="h4 summary-title">Cart Totals</h2>
            <table className="cart_totals">
              <tbody>
                <tr>
                  <td>Cart Subtotal</td>
                  <td data-title="Cart Subtotal">
                    <span className="amount">
                      <bdi><span>$</span>47</bdi>
                    </span>
                  </td>
                </tr>
                <tr className="shipping">
                  <th>Shipping and Handling</th>
                  <td data-title="Shipping and Handling">
                    <ul className="woocommerce-shipping-methods list-unstyled">
                      <li>
                        <input
                          type="radio"
                          id="free_shipping"
                          name="shipping_method"
                          className="shipping_method"
                        />
                        <label for="free_shipping">Free shipping</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="flat_rate"
                          name="shipping_method"
                          className="shipping_method"
                          checked="checked"
                        />
                        <label for="flat_rate">Flat rate</label>
                      </li>
                    </ul>
                    <p className="woocommerce-shipping-destination">
                      Shipping options will be updated during checkout.
                    </p>
                    <form action="#" method="post">
                      <a href="#" className="shipping-calculator-button"
                        >Change address</a
                      >
                      <div className="shipping-calculator-form">
                        <p className="form-row">
                          <select className="form-select">
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="BD" selected="selected">
                              Bangladesh
                            </option>
                          </select>
                        </p>
                        <p>
                          <select className="form-select">
                            <option value>Select an option…</option>
                            <option value="BD-05">Bagerhat</option>
                            <option value="BD-01">Bandarban</option>
                            <option value="BD-02">Barguna</option>
                            <option value="BD-06">Barishal</option>
                          </select>
                        </p>
                        <p className="form-row">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Town / City"
                          />
                        </p>
                        <p className="form-row">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Postcode / ZIP"
                          />
                        </p>
                        <p><button className="ot-btn">Update</button></p>
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="order-total">
                  <td>Order Total</td>
                  <td data-title="Total">
                    <strong>
                      <span className="amount">
                        <bdi><span>$</span>47</bdi>
                      </span>
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="wc-proceed-to-checkout mb-30">
              <a href="/checkout" className="ot-btn">Proceed to checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer/>
    </>
  )
}

export default Cart