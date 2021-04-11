import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import '../components/Cart.scss'
import Product from "./Product";
import { addItemsToCartStart,removeProductStart,decreaseProductQuantityStart } from "../redux/actions/cart.actions";

const Cart = (props) => {
  const mapSate = ({ cart }) => ({
    cart: cart?.cartItems,
  });

  const handleRemoveProduct=product=>{
    dispatch(removeProductStart(product))
  }

  const handleDecremtProductQuantity=product=>{
    if(product.quantity==1){
        dispatch(removeProductStart(product))
    }
    dispatch(decreaseProductQuantityStart(product))
  }

  const { cart } = useSelector(mapSate);
  console.log("cart", cart);
  const dispatch = useDispatch();
  const handleIncrementQuantity=product=>{
    
    dispatch(addItemsToCartStart(product));
  }
  const totalAmount = cart && Array.isArray(cart)
  ? cart.reduce((accum, c) => accum + (c.price * c.quantity), 0)?.toFixed(2)
  : 0;

 
  return (
      <div className="cart-Warpper">
          <div className="container">
          <Link className="go-to-product-grid"  to="/productGrid/All"> Go Back To Product Grid
	  </Link>
    {cart && Array.isArray(cart) && cart.length >0 ?(
      <section>
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-3">
              <div className="pt-4 wish-list">
                <h5 className="mb-4">
                  Cart (<span>{ Array.isArray(cart) && cart.length}</span> items)
                </h5>
                {cart &&
                  Array.isArray(cart) &&
                  cart.map((c) => {
                    return (
                      <>
                        <div className="row mb-4">
                          <div className="col-md-5 col-lg-3 col-xl-3">
                            <div className="somclass">
                              <img
                                className="cart-image"
                                src={c.imgUrl}
                                alt="Sample"
                              />
                            </div>
                          </div>
                          <div className="col-md-7 col-lg-9 col-xl-9">
                            <div>
                              <div className="d-flex justify-content-between">
                                <div>
                                  <h5>{c.name}</h5>
                                  <p className="mb-3 text-muted text-uppercase small">
                                    Shirt - blue
                                  </p>
                                  <p className="mb-2 text-muted text-uppercase small">
                                    Color: blue
                                  </p>
                                  <p className="mb-3 text-muted text-uppercase small">
                                    Size: M
                                  </p>
                                </div>
                                <div>
                                  <div className="quantity-buttons">
                                    <button className="plus increase" onClick={()=>handleIncrementQuantity(c)}>+</button>
                                    <span className="quantity">{c.quantity}</span>
                                <button className="minus decrease" onClick={()=>handleDecremtProductQuantity(c)}>-</button>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <a
                                    href="#!"
                                    type="button"
                                    className="card-link-secondary small text-uppercase mr-3"
                                    onClick={()=>handleRemoveProduct(c)}
                                  >
                                    <i className="fas fa-trash-alt mr-1"></i>{" "}
                                    Remove item{" "}

                                   
                                  </a>
                                  <a
                                    href="#!"
                                    type="button"
                                    className="card-link-secondary small text-uppercase"
                                  >
                                    <i className="fas fa-heart mr-1"></i> Move
                                    to wish list{" "}
                                  </a>
                                </div>
                                <p className="mb-0">
                                  <span>
                                    <strong id="summary">${c.price}</strong>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="mb-4" />
                      </>
                    );
                  })}

                <p className="text-primary mb-0">
                  <i className="fas fa-info-circle mr-1"></i> Do not delay the
                  purchase, adding items to your cart does not mean booking
                  them.
                </p>
              </div>
            </div>

            <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-4">Expected shipping delivery</h5>

                <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
              </div>
            </div>

            <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-4">We accept</h5>

                <img
                  className="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <img
                  className="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <img
                  className="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <img
                  className="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-3">The total amount of</h5>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Temporary amount
                    <span>${totalAmount}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The total amount of</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>${totalAmount}</strong>
                    </span>
                  </li>
                </ul>

                <button type="button" className="btn btn-primary btn-block">
                  go to checkout
                </button>
              </div>
            </div>

            <div className="mb-3">
              <div className="pt-4">
                <a
                  className="dark-grey-text d-flex justify-content-between"
                  data-toggle="collapse"
                  href="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Add a discount code (optional)
                  <span>
                    <i className="fas fa-chevron-down pt-1"></i>
                  </span>
                </a>

                <div className="collapse" id="collapseExample">
                  <div className="mt-3">
                    <div className="md-form md-outline mb-0">
                      <input
                        type="text"
                        id="discount-code"
                        className="form-control font-weight-light"
                        placeholder="Enter discount code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   ):(<h1>Cart Is Empty!</h1>)}
    </div>
    
    </div>
  );
};

export default Cart;
