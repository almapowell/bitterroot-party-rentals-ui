import React from "react";
import "./styles.css";
import { Card } from "antd";
import { addToCart } from "../../../../redux/cartSlice";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const SelectedCategory = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/shopping-cart");
  };

  return (
    <div className="category-container">
      <div className="pageTitle">{items.title}</div>
      <div className="category-wrapper">
        {items.products.map((product) => (
          <Card
            key={product.productId}
            title={product.title}
            className="card-container"
          >
            <img
              className="productImage"
              src={product.image}
              alt={product.title}
            />
            <div className="priceWrapper">
              <h2 className="product-price">$ {product.price}</h2>
              <div className="addToCartBtn">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="secondary-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelectedCategory;
