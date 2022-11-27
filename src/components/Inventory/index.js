import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Categories/SelectedCategory/styles.css";
import { mockProducts } from "../../shared/utils";
import LoadingIndicator from "../../shared/LoadingIndicator";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/shopping-cart");
  };

  useEffect(() => {
    if (!products.length) {
      axios.get("/api/product/get-all").then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
        setLoading(false);
      });
    }
  }, []);

  console.log(3333, 'products', products);

  return (
    <div className="category-container">
      <div className="pageTitle">Inventory</div>
      {!isLoading ? (
        <div className="category-wrapper">
          {mockProducts.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              style={{
                margin: "30px auto",
                textAlign: "center",
              }}
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
      ) : (
       <LoadingIndicator />
      )}
    </div>
  );
};

export default Inventory;
