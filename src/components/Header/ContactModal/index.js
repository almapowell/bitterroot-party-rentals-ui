import React from "react";
import { Form, Input, Modal } from "antd";
import "./styles.css";

const ContactModal = ({ isModalVisible, setIsModalVisible }) => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const handleSubmit = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Contact Us"
      visible={isModalVisible}
      okText="Submit"
      onOk={handleSubmit}
      onCancel={() => setIsModalVisible(false)}
    >
      <div className="call">
        <span>Call Or Text:</span>
        <strong>406-360-5555</strong>
      </div>
      <Form
        className="form-group"
        {...layout}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name={["user", "message"]}
          rules={[{ required: true }]}
          label="Message"
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ContactModal;
