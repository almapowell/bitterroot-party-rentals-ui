import React, { useState } from "react";
import { Button, Form, Input, notification, Card } from "antd";
import axios from "axios";
import { UPDATING } from "../../../../redux/constants";

const defaultState = {
  title: "",
  image: "",
  price: "",
};

const AddProduct = ({ type, productToUpdate, setSelectedProduct }) => {
  const [newProduct, setNewProduct] = useState(
    type === UPDATING ? productToUpdate : defaultState
  );
  const [form] = Form.useForm();

  const successfulNotification = () => {
    notification["success"]({
      message: "Product Added",
      description: `Congradulations. You've added "${newProduct.title}" to the inventory list.`,
    });
  };

  const failedNotification = (message) => {
    notification["error"]({
      message: "Error",
      description: message,
    });
  };

  const onProductInputChange = (e) => {
    const value =
      e.target.name === "price" ? Number(e.target.value) : e.target.value;

    setNewProduct({
      ...newProduct,
      [e.target.name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (
      newProduct.title !== "" ||
      newProduct.image !== "" ||
      newProduct.price !== 0
    ) {
      axios
        .post("/api/product/create-new", newProduct)
        .then(() => {
          successfulNotification();
          setNewProduct(defaultState);
          form.resetFields();
        })
        .catch((error) => console.log(error));
    } else {
      failedNotification("One or more fields missing.");
    }
  };

  return (
    <div>
      <h2>{type === UPDATING ? "Update" : "New"} Product</h2>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Form
            initialValue={{
              title: newProduct.title,
              image: newProduct.image,
              price: newProduct.price,
            }}
            form={form}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            layout="vertical"
          >
            <Form.Item
              initialValue={newProduct.title}
              name="Title"
              rules={[{ required: true }]}
              label="Title"
            >
              <Input
                value={newProduct.title}
                name="title"
                onChange={onProductInputChange}
              />
            </Form.Item>

            <Form.Item
              initialValue={newProduct.image}
              name="Image"
              rules={[{ required: true }]}
              label="Image"
            >
              <Input
                value={newProduct.image}
                name="image"
                onChange={onProductInputChange}
              />
            </Form.Item>
            <Form.Item
              initialValue={newProduct.price}
              name="Price"
              rules={[{ required: true }]}
              label="Price"
            >
              <Input
                value={newProduct.price}
                name="price"
                onChange={onProductInputChange}
              />
            </Form.Item>

            {type === UPDATING && (
              <Button onClick={() => setSelectedProduct({})} danger>
                Cancel
              </Button>
            )}
            <Button onClick={(e) => handleSave(e)} type="submit">
              Save
            </Button>
          </Form>
        </div>
        <div>
          <h3>Demo</h3>
          <Card
            title={newProduct.title}
            style={{
              margin: "30px auto",
              textAlign: "center",
            }}
          >
            <img
              className="productImage"
              alt="product"
              src={newProduct.image}
            />
            <div className="priceWrapper">
              <h2 className="product-price">$ {newProduct.price}</h2>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
