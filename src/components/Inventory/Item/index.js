import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { API } from "../../../shared/utils";
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const InventoryItem = () => {
  const [product, setProduct] = useState();
  const params = useParams();

  const getProduct = async () => {
    await axios
      .get(API + `/api/product/get-product/${params.itemId}`)
      .then(({ data }) => setProduct(data.product));
  };

  useEffect(() => {
    getProduct();
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
      <h1>Inventory Item</h1>

      {/* <div className="item-container">{product.title}</div> */}
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
        <img
          height="100px"
          width="200px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEv1syAi6ksUzUkMyjM5czr6AqfuFfeXehaQ&usqp=CAU"
        />
      </Carousel>
    </div>
  );
};

export default InventoryItem;
