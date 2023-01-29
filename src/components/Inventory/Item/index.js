import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { API, quantityOptions } from "../../../shared/utils";
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Select } from "antd";

const InventoryItem = () => {
  const [product, setProduct] = useState();
  const [options, setOptions] = useState([]);
  const params = useParams();

  const getProduct = async () => {
    await axios
      .get(API + `/api/product/get-product/${params.itemId}`)
      .then(({ data }) => setProduct(data.product));
  };

  useEffect(() => {
    getProduct();
    setOptions(quantityOptions(100));
  }, []);

  console.log(product);

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
            <img
              height="100px"
              width="200px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DLo-ZlfPHywZ17JCrXiQF58KzLw8WtwWUQ&usqp=CAU"
            />
            <img
              height="100px"
              width="200px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfX3DLOlg30zWag1leJU0d9BzCR-1Rgx65A&usqp=CAU"
            />
          </Carousel>
        </div>
        <div className="product-container">
          {product && (
            <div>
              <div>{product.title}</div>
              <div>${product.price} per item</div>
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
                  <span style={{ marginRight: 10 }}>Quanitiy:</span>
                  <Select onChange={(v) => console.log(v)} options={options} />
                </div>
                <button className="secondary-button">Add to Cart</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
