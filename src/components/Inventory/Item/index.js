import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { API, quantityOptions } from "../../../shared/utils";
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Select } from "antd";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const InventoryItem = () => {
  const [product, setProduct] = useState();
  const [options, setOptions] = useState([]);
  const [quantityValue, setQuantityValue] = useState(1);
  const params = useParams();

  const getProduct = async () => {
    await axios
      .get(API + `/api/inventory/inventory-item/${params.itemId}`)
      .then(({ data }) => {
        setProduct(data.item);
      });
  };

  useEffect(() => {
    getProduct();
    setOptions(quantityOptions(100));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="item-container">
        <div className="carousel-container">
          <Carousel>
            {product.images.map((img) => (
              <img height="100px" width="200px" src={img} />
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
                Commercial-grade plastic folding chairs designed to be
                lightweight but durable. This product is engineered and built
                with premium materials that will withstand heavy duty use for
                event, business and home usage. These folding chairs will nest
                easily to stack 50 high from the floor and feature a textured
                contoured plastic seat for the highest level of comfort and
                security. With a variety of color options you can choose what
                would best pair with your event needs.
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
                <button
                  disabled={quantityValue === 0}
                  className="secondary-button"
                  onClick={() => console.log(123)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
