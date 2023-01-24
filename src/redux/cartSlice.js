import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    newCartValue(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.product.id
      );
      if (action.payload.newValue < 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.product.id
        );
        state.cartItems = nextCartItems;
      } else {
        state.cartItems[itemIndex].quantity = action.payload.newValue;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          quantity: state.cartItems[existingIndex].quantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProductItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  newCartValue,
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotals,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
