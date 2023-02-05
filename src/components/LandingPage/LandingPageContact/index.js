import { Button, Form, Input } from "antd";
import "./styles.css";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const LandingPageContact = () => (
  <div className="lp-container">
    <div className="form-wrapper">
      <h2 style={{ color: "white", margin: 0 }}>Contact Us</h2>
      <Form
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<label style={{ color: "white", fontSize: 20 }}>Name</label>}
          name="name"
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
          label={<label style={{ color: "white", fontSize: 20 }}>Email</label>}
          name="email"
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
              border: "1.5px solid white",
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
export default LandingPageContact;
