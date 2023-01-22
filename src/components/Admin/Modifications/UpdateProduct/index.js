import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import LoadingIndicator from "../../../../shared/LoadingIndicator";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import "../../../Inventory/Categories/SelectedCategory/styles.css";
import AddProduct from "../AddProduct";
import { UPDATING } from "../../../../redux/constants";
import { API } from "../../../../shared/utils";

const UpdateProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState({});

  const getAllProducts = async () => {
    await axios.get(API + "/api/product/get-all-products").then((res) => {
      setProducts(res.data.products);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(API + `/api/product/delete-product/${id}`).then(() => {
      getAllProducts();
    });
  };

  return (
    <div style={{ padding: "50px 10%" }}>
      {Object.keys(selectedProduct).length ? (
        <AddProduct
          type={UPDATING}
          productToUpdate={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      ) : (
        <div className="category-wrapper">
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            products.map((product, index) => (
              <Card
                key={index}
                title={product.title}
                className="card-container"
              >
                <img
                  className="productImage"
                  src={product.image}
                  alt={product.title}
                />
                <div className="priceWrapper">
                  <span>${product.price}</span>
                  <Popconfirm
                    onConfirm={() => handleDelete(product._id)}
                    title="Are you sure？"
                    icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                  >
                    <a style={{ color: "red" }} href="#">
                      Delete
                    </a>
                  </Popconfirm>

                  <div className="addToCartBtn">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="secondary-button"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
