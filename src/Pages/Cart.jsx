import React from 'react'
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useCart } from '../context/CartContext';
import { Link } from "react-router-dom";
import cartImage1 from "../assets/img/product/post-card1-1.png";
import cartImage6 from "../assets/img/product/post-card1-6.png";
import cartImage15 from "../assets/img/product/post-card1-15.png";


const Cart = () => {

  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Use cart context

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateOrderTotal = () => {
    return calculateSubtotal();
  };


  return (
    <>
      <Navbar />
      <div
        className="breadcumb-wrapper">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title" >Cart List</h1>
            <ul className="breadcumb-menu">
              <li data-delay="100">
                <a href="/index">Home</a>
              </li>
              <li data-delay="100">Cart List</li>
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
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">Your cart is empty.</td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <tr className="cart_item" key={`${item.id}-${item.selectedAge}-${item.selectedColor?.code}`}>
                      <td data-title="Remove">
                        <a href="#" className="remove" onClick={() => removeFromCart(item.id, item.selectedAge, item.selectedColor?.code)}>
                          <i className="far fa-close"></i>
                        </a>
                      </td>
                      <td data-title="Product">
                        <a className="cart-productimage" href={`/shopdetails/${item.id}`}>
                          <img
                            width="91"
                            height="91"
                            src={item.thumbnail}
                            alt="Image"
                          />
                        </a>
                      </td>
                      <td data-title="Name">
                        <a className="cart-productname" href={`/shopdetails/${item.id}`}>
                          {item.productname} {item.selectedAge !== "default" && `(${item.selectedAge})`} {item.selectedColor && `[${item.selectedColor.name}]`}
                        </a>
                      </td>
                      <td data-title="Price">
                        <span className="amount">
                          <bdi><span>₦</span>{item.price.toLocaleString()}</bdi>
                        </span>
                      </td>
                      <td data-title="Quantity">
                        <div className="quantity">
                          <button
                            className="quantity-minus qty-btn"
                            onClick={() => updateQuantity(item.id, item.selectedAge, item.selectedColor?.code, Math.max(1, item.quantity - 1))}
                          >
                            <i className="far fa-minus"></i>
                          </button>
                          <input
                            type="number"
                            className="qty-input"
                            value={item.quantity}
                            min="1"
                            max="99"
                            onChange={(e) => updateQuantity(item.id, item.selectedAge, item.selectedColor?.code, parseInt(e.target.value) || 1)}
                          />
                          <button
                            className="quantity-plus qty-btn"
                            onClick={() => updateQuantity(item.id, item.selectedAge, item.selectedColor?.code, item.quantity + 1)}
                          >
                            <i className="far fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td data-title="Total">
                        <span className="amount">
                          <bdi><span>₦</span>{(item.price * item.quantity).toLocaleString()}</bdi>
                        </span>
                      </td>
                    </tr>
                  ))
                )}
                <tr>
                  <td colspan="6" className="actions">
                    {/* <div className="ot-cart-coupon">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coupon Code..."
                    />
                    <button type="submit" className="ot-btn">Apply Coupon</button>
                  </div> */}

                    {/* <a
                      href={`https://wa.me/2348159363962?text=${encodeURIComponent(
                        `Hello! Here’s my cart:\n\n` +
                        cartItems
                          .map((item, index) => {
                            return `${index + 1}. ${item.productname} - ₦${item.price.toLocaleString()} x ${item.quantity}\n` +
                              `   Age: ${item.selectedAge}, Color: ${item.selectedColor?.name || "N/A"}\n` +
                              `   Subtotal: ₦${(item.price * item.quantity).toLocaleString()}`;
                          })
                          .join("\n\n") +
                        `\n\nTotal: ₦${calculateOrderTotal().toLocaleString()}\n` +
                        `Can you help me process this order?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ot-btn ot-btn-success"
                     >
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp me-1" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                     </svg>
                      Checkout via WhatsApp
                    </a> */}



                    <Link to="/shop" className="ot-btn ot-btn-secondary">
                      Continue Shopping
                    </Link>

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
                          // checked="checked"
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
                          <bdi><span>₦</span>{calculateOrderTotal().toLocaleString()}</bdi>
                        </span>
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
                <div className="wc-proceed-to-checkout mb-30">
                  <a
                    href={`https://wa.me/2348159363962?text=${encodeURIComponent(
                      `Hello! Here’s my cart:\n\n` +
                      cartItems
                        .map((item, index) => {
                          return `${index + 1}. ${item.productname} - ₦${item.price.toLocaleString()} x ${item.quantity}\n` +
                            `   Age: ${item.selectedAge}, Color: ${item.selectedColor?.name || "N/A"}\n` +
                            `   Subtotal: ₦${(item.price * item.quantity).toLocaleString()}`;
                        })
                        .join("\n\n") +
                      `\n\nTotal: ₦${calculateOrderTotal().toLocaleString()}\n` +
                      `Can you help me process this order?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ot-btn ot-btn-success"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp me-1" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                    Checkout via WhatsApp
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart