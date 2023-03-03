import { Button, Form, Input, notification } from "antd";
import "./styles.css";
import axios from "axios";
import { API } from "../../../shared/utils";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = async ({ user }) => {
    await axios.post(API + "/api/email/contact-form", user).then(({ data }) => {
      if (data === "success") {
        successfulNotification();
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        form.resetFields();
        navigate("/");
      } else {
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
    <div className="lp-container">
      <div className="form-wrapper">
        <h2 style={{ color: "white", margin: 0 }}>Contact Us</h2>
        <p
          style={{
            color: "white",
            fontSize: 20,
            display: "flex",
            justifyContent: "center",
          }}
        >
          Call or Text: <b style={{ marginLeft: 5 }}>406-369-8127</b>
        </p>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: "100%",
          }}
          style={{
            maxWidth: 600,
            margin: "auto",
          }}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label={<label style={{ color: "white", fontSize: 20 }}>Name</label>}
            name={["user", "name"]}
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={
              <label style={{ color: "white", fontSize: 20 }}>Email</label>
            }
            name={["user", "email"]}
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["user", "message"]}
            rules={[{ required: true }]}
            label={
              <label style={{ color: "white", fontSize: 20 }}>Message</label>
            }
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: "50%",
            }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              type="primary"
              style={{
                background: "transparent",
                fontSize: 20,
                color: "white",
                border: "1px solid white",
                height: "auto",
                borderRadius: 3,
              }}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default ContactForm;
