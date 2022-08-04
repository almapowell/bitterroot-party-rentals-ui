import React from "react";
import { Form, Input } from "antd";

const CustomerInformation = ({ state, onInputChange }) => {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
      layout="vertical"
    >
      <Form.Item
        name="First Name"
        rules={[{ required: true }]}
        label="First Name"
      >
        <Input value={state.first} name="first" onChange={onInputChange} />
      </Form.Item>
      <Form.Item
        name="Last Name"
        rules={[{ required: true }]}
        label="Last Name"
      >
        <Input value={state.last} name="last" onChange={onInputChange} />
      </Form.Item>
      <Form.Item name="Email" rules={[{ required: true }]} label="Email">
        <Input value={state.email} name="email" onChange={onInputChange} />
      </Form.Item>
      <Form.Item name="Phone" rules={[{ required: true }]} label="Phone Number">
        <Input name="phone" value={state.phone} onChange={onInputChange} />
      </Form.Item>
    </Form>
  );
};

export default CustomerInformation;
