import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotals,
  newCartValue,
} from "../../../redux/cartSlice";
import CounterInput from "react-counter-input";

const CartItems = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleNewCartValue = (newValue, product) => {
    dispatch(newCartValue({ newValue, product }));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <div className="cart-items">
        {cart.cartItems &&
          cart.cartItems.map((cartItem) => (
            <div className="cart-item" key={cartItem.productId}>
              <div className="cart-product">
                <img src={cartItem.image} alt={cartItem.title} />
                <div>
                  <h3>{cartItem.title}</h3>
                  <button onClick={() => handleRemoveFromCart(cartItem)}>
                    Remove
                  </button>
                </div>
              </div>
              <div className="cart-product-price">${cartItem.price}</div>
              <div className="cart-product-quantity">
                <CounterInput
                  max={100}
                  count={cartItem.cartQuantity}
                  onCountChange={(count) => handleNewCartValue(count, cartItem)}
                />
              </div>
              <div className="cart-product-total-price">
                ${(cartItem.price * cartItem.cartQuantity).toFixed(2)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartItems;
