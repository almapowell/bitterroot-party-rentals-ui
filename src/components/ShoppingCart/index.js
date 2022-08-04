import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import CartFooter from "./CartFooter";
import { useSelector } from "react-redux";
import { backArrow } from "../../shared/utils";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              {backArrow}
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>

          <CartItems />
          <CartFooter />
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
