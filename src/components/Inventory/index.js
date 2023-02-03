import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./styles.css";
import { formatter } from "../../shared/utils";
import LoadingIndicator from "../../shared/LoadingIndicator";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Inventory = () => {
  const inventory = useSelector((state) => state.inventory);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0) {
      setProducts(inventory);
      setLoading(false);
    }
  }, [inventory]);

  return (
    <div className="category-container">
      <div className="pageTitle">Inventory</div>
      {!isLoading ? (
        <div className="category-wrapper">
          {products.map((product, index) => (
            <Card key={index} title={product.title} className="card-container">
              <img
                className="productImage"
                src={product.images[0]}
                alt={product.title}
              />
              <div className="priceWrapper">
                <h2 className="product-price">
                  {formatter.format(product.price)} / item
                </h2>

                <div className="addToCartBtn">
                  <button
                    onClick={() => navigate(`/inventory/item/${product._id}`)}
                    className="secondary-button"
                  >
                    View
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
