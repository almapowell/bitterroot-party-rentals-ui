import React from "react";
import { backArrow } from "../../../shared/utils";
import "./styles.css";
import { Link } from "react-router-dom";
import { clearCart } from "../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartFooter = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="cart-summary">
        <div className="summary-actions">
          <button className="clear-btn" onClick={() => handleClearCart()}>
            Clear Cart
          </button>
          <div className="cart-checkout">
            <div className="subtotal">
              <span>Subtotal</span>
              <span className="amount">${cart.cartTotalAmount.toFixed(2)}</span>
            </div>

            <Link to="/finalize-quote">
              <button className="primary-button">Next Step</button>
            </Link>
            <div className="continue-shopping">
              <Link to={"/categories"}>
                {backArrow}
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartFooter;
