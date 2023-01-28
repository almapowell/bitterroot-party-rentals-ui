import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";
import { API } from "../../shared/utils";
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
      axios.get(API + "/api/product/get-all-products").then(({ data }) => {
        setProducts(data.products);
        setLoading(false);
      });
    }
  }, []);

  return (
    <div className="category-container">
      <div className="pageTitle">Inventory</div>
      {!isLoading ? (
        <div className="category-wrapper">
          {products.map((product, index) => (
            <Card key={index} title={product.title} className="card-container">
              <img
                className="productImage"
                src={product.image}
                alt={product.title}
              />
              <div className="priceWrapper">
                <h2 className="product-price">$ {product.price}</h2>
                <div className="addToCartBtn">
                  <button
                    // onClick={() => handleAddToCart(product)}
                    className="secondary-button"
                  >
                    <Link to={`/inventory/item/${product._id}`}>View</Link>
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
