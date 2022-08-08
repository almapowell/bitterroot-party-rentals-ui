import React from "react";
import { Card } from "antd";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { products } from "../../shared/utils";
import "./Categories/SelectedCategory/styles.css";

const Inventory = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/shopping-cart");
  };

  return (
    <div className="category-container">
      <div className="pageTitle">Inventory</div>
      <div className="category-wrapper">
        {products.map((product) => (
          <Card
            key={product.productId}
            title={product.title}
            style={{
              margin: "30px auto",
              textAlign: "center",
            }}
          >
            <img className="productImage" src={product.image} />
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

export default Inventory;
