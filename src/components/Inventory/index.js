import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./styles.css";
import { formatter, API } from "../../shared/utils";
import LoadingIndicator from "../../shared/LoadingIndicator";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Inventory = () => {
  const inventory = useSelector((state) => state.inventory);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getInventory = async () => {
    await axios
      .get(API + "/api/inventory/all-inventory")
      .then((res) => {
        console.log(res.data);
        // dispatch(setInventory(res.data.inventory));
      })
      .catch((err) => console.log(444, "We have a error!!", err));
  };

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <div className="category-container">
      <h2 className="gallery-title">Inventory</h2>
      {!inventory ? (
        <LoadingIndicator />
      ) : (
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
      )}
    </div>
  );
};

export default Inventory;
