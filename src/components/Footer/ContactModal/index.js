import React from "react";
import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import { API } from "../../../shared/utils";

const ContactModal = () => {
  const navigate = useNavigate();

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

  const handleSubmit = async ({ user }) => {
    await axios.post(API + "/api/email/contact-form", user).then(({ data }) => {
      if (data === "success") {
        successfulNotification();
        navigate("/");
      } else if (data === "error") {
        failedNotification();
      }
    });
  };

  const successfulNotification = () => {
    notification["success"]({
      message: "Email sent",
      description: `Please allow 2-3 business days and we will reach back out to you using your email.`,
    });
  };

  const failedNotification = () => {
    notification["error"]({
      message: "Sorry there was an error",
      description:
        "Please try again. If it still doesnt work then please text or call the number on the form.",
    });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <div className="call">
        <span>Call Or Text:</span>
        <strong>406-369-8129</strong>
      </div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={handleSubmit}
        layout="vertical"
        style={{ maxWidth: 600, margin: "auto" }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "message"]}
          rules={[{ required: true }]}
          label="Message"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactModal;
