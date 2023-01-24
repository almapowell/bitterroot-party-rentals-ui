import React from "react";
import { Form, Input } from "antd";

const CustomerInformation = ({ state, onInputChange }) => {
  const { first, last, email, phone } = state;

  return (
    <Form
      labelCol={{
        span: 3,
      }}
      wrapperCol={{
        span: 25,
      }}
      layout="horizontal"
    >
      <Form.Item
        name="First Name"
        rules={[{ required: true }]}
        label="First Name"
      >
        <Input
          defaultValue={first}
          value={first}
          name="first"
          onChange={onInputChange}
        />
      </Form.Item>
      <Form.Item
        name="Last Name"
        rules={[{ required: true }]}
        label="Last Name"
      >
        <Input
          value={last}
          defaultValue={last}
          name="last"
          onChange={onInputChange}
        />
      </Form.Item>
      <Form.Item name="Email" rules={[{ required: true }]} label="Email">
        <Input
          value={email}
          defaultValue={email}
          name="email"
          onChange={onInputChange}
        />
      </Form.Item>
      <Form.Item name="Phone" rules={[{ required: true }]} label="Phone Number">
        <Input
          name="phone"
          defaultValue={phone}
          value={phone}
          onChange={onInputChange}
        />
      </Form.Item>
    </Form>
  );
};

export default CustomerInformation;
