import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { formatter, quantityOptions } from "../../../shared/utils";
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Select } from "antd";
import { useSelector } from "react-redux";
import LoadingIndicator from "../../../shared/LoadingIndicator";
import ViewCartModal from "./ViewCartModal";

const InventoryItem = () => {
  const [product, setProduct] = useState(null);
  const [options, setOptions] = useState([]);
  const [quantityValue, setQuantityValue] = useState(1);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const inventory = useSelector((state) => state.inventory);

  useEffect(() => {
    setOptions(quantityOptions(100));
  }, []);

  useEffect(() => {
    if (inventory && !product) {
      setProduct(inventory.find((item) => item._id === params.itemId));
      setLoading(false);
    }
  }, [inventory]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {loading ? (
        <LoadingIndicator />
      ) : (
        <div className="item-container">
          <div className="carousel-container">
            <Carousel>
              {product &&
                product.images.map((img, index) => (
                  <React.Fragment key={index}>
                    <img src={img} alt={product.title + " image " + index} />
                  </React.Fragment>
                ))}
            </Carousel>
          </div>
          <div className="product-container">
            {product && (
              <div className="item-card">
                <div style={{ fontWeight: 800 }}>{product.title}</div>
                <div style={{ fontSize: 18, padding: "10px 0px" }}>
                  <b style={{ fontSize: 20, marginRight: 10 }}>
                    {formatter.format(product.price)}
                  </b>
                  per item
                </div>
                <p style={{ fontSize: 16, padding: 10 }}>
                  {product.description}
                </p>

                <div className="cart-actions">
                  <div className="selector-container">
                    <span style={{ marginRight: 10, fontSize: 20 }}>
                      Quanitiy:
                    </span>
                    <Select
                      value={quantityValue}
                      onChange={(v) => setQuantityValue(v)}
                      options={options}
                    />
                  </div>
                  <span style={{ fontWeight: 600 }}>
                    {formatter.format(product.price * quantityValue)} total
                  </span>

                  <ViewCartModal
                    product={product}
                    quantityValue={quantityValue}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryItem;
