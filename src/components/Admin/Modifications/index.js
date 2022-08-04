import { Radio, Button, Form, Input } from "antd";
import React, { useState } from "react";

const Modifications = () => {
  const [value, setValue] = useState(1);
  const [newCategory, setNewCategory] = useState({
    title: "",
    icon: "",
  });
  const [newProduct, setNewProduct] = useState({
    title: "",
    image: "",
    price: "",
  });

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onCategoryInputChange = (e) => {
    setNewCategory({
      ...newCategory,
      [e.target.name]: e.target.value,
    });
  };

  const onProductInputChange = (e) => {
    setNewCategory({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Radio.Group
        defaultValue={1}
        onChange={onChange}
        buttonStyle="solid"
        value={value}
      >
        <Radio.Button value={1}>Add Category</Radio.Button>
        <Radio.Button value={2}>Add Product</Radio.Button>
      </Radio.Group>

      {value === 1 && (
        <div>
          <h2>New Category</h2>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            layout="vertical"
          >
            <Form.Item name="Title" rules={[{ required: true }]} label="Title">
              <Input
                value={newCategory.title}
                name="title"
                onChange={onCategoryInputChange}
              />
            </Form.Item>

            <Form.Item name="Icon" rules={[{ required: true }]} label="Icon">
              <Input
                value={newCategory.icon}
                name="icon"
                onChange={onCategoryInputChange}
              />
            </Form.Item>
          </Form>
        </div>
      )}

      {value === 2 && (
        <div>
          <h2>New Product</h2>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            layout="vertical"
          >
            <Form.Item name="Title" rules={[{ required: true }]} label="Title">
              <Input
                value={newProduct.title}
                name="title"
                onChange={onProductInputChange}
              />
            </Form.Item>

            <Form.Item name="Image" rules={[{ required: true }]} label="Image">
              <Input
                value={newProduct.image}
                name="image"
                onChange={onProductInputChange}
              />
            </Form.Item>
            <Form.Item name="Price" rules={[{ required: true }]} label="Price">
              <Input
                value={newProduct.price}
                name="price"
                onChange={onProductInputChange}
              />
            </Form.Item>
          </Form>
        </div>
      )}
      <Button>Submit</Button>
    </div>
  );
};

export default Modifications;
