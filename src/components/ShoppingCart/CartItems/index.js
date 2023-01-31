import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  getTotals,
  newCartValue,
} from "../../../redux/cartSlice";
import { formatter } from "../../../shared/utils";

const CartItems = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleNewCartValue = (newValue, product) => {
    if (newValue) {
      dispatch(newCartValue({ newValue, product }));
    } else {
      dispatch(newCartValue({ newValue: 1, product }));
    }
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <div className="cart-items">
        {cart.cartItems &&
          cart.cartItems.map((cartItem) => (
            <div className="cart-item" key={cartItem.id}>
              <div className="cart-product">
                <img src={cartItem.images[0]} alt={cartItem.title} />
                <div>
                  <h3>{cartItem.title}</h3>
                  <button onClick={() => handleRemoveFromCart(cartItem)}>
                    Remove
                  </button>
                </div>
              </div>
              <div className="cart-product-price">
                {formatter.format(cartItem.price)}
              </div>
              <div className="cart-quantity">
                <button
                  onClick={() =>
                    handleNewCartValue(Number(cartItem.quantity - 1), cartItem)
                  }
                >
                  -
                </button>
                <input
                  className="cart-input"
                  type="number"
                  value={cartItem.quantity}
                  onChange={(e) =>
                    handleNewCartValue(Number(e.target.value), cartItem)
                  }
                />
                <button
                  onClick={(e) =>
                    handleNewCartValue(Number(cartItem.quantity) + 1, cartItem)
                  }
                >
                  +
                </button>
              </div>
              <div className="cart-product-total-price">
                {formatter.format(cartItem.price * cartItem.quantity)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartItems;
