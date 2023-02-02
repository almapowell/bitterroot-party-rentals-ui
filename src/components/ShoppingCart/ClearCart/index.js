import React from "react";

const ClearCart = () => {
  return (
    <div>
      <button onClick={() => localStorage.clear()}>Clear Cart</button>
    </div>
  );
};

export default ClearCart;
