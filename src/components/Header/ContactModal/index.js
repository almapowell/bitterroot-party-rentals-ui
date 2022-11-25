import React from "react";
import { Form, Input, Modal } from "antd";
import "./styles.css";

const ContactModal = ({ isModalVisible, setIsModalVisible }) => {
  const layout = {
    wrapperCol: {
      span: 25,
    },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
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
      open={isModalVisible}
      okText="Submit"
      onOk={handleSubmit}
      onCancel={() => setIsModalVisible(false)}
    >
      <div className="call">
        <span>Call Or Text:</span>
        <strong>406-369-8129</strong>
      </div>
      <Form
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
