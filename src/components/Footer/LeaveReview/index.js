import React, { useState } from "react";
import { Button, Form, Input, notification, Radio, Rate } from "antd";
import axios from "axios";
import "./styles.css";
import { API } from "../../../shared/utils";
import { useNavigate } from "react-router";

const LeaveReview = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [starsGiven, setStarsGiven] = useState(0);
  const [gender, setGender] = useState("female");
  const navigate = useNavigate();

  const handleSubmit = async ({ review }) => {
    const testimony = {
      name: review.name,
      testimony: review.comments,
      gender,
      stars: starsGiven,
    };

    await axios.post(API + "/api/reviews/review", testimony).then(() => {
      navigate("/");
      successfulNotification();
    });

    console.log({ testimony });
  };

  const setNewRate = (newRate) => {
    setStarsGiven(newRate);
    setIsDisabled(false);
  };

  const successfulNotification = () => {
    notification["success"]({
      message: "Thank you!",
      description: `We greatly appreciate your feedback.`,
    });
  };

  return (
    <div>
      <h2 className="review-title">Leave a Review</h2>

      <Form
        className="review-form"
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
          label={
            <label style={{ fontSize: 20 }}>
              <strong>Name</strong>
              <b style={{ fontSize: 13, color: "grey", marginLeft: 7 }}>
                (optional)
              </b>
            </label>
          }
          name={["review", "name"]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={
            <label style={{ fontSize: 20 }}>
              <strong>Comments</strong>
              <b style={{ fontSize: 13, color: "grey", marginLeft: 7 }}>
                (optional)
              </b>
            </label>
          }
          name={["review", "comments"]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label={
            <label>
              <strong style={{ fontSize: 20 }}>Select Gender</strong>
            </label>
          }
          name={["gender", "comments"]}
        >
          <Radio.Group
            onChange={(e) => {
              if (gender === "male") {
                setGender("female");
              } else {
                setGender("male");
              }
            }}
            defaultValue={gender}
          >
            <Radio.Button value="male">Male</Radio.Button>
            <Radio.Button value="female">Female</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label={
            <label>
              <strong style={{ fontSize: 20 }}>How would you rate?</strong>
            </label>
          }
          name={["stars", "comments"]}
        >
          <Rate
            className="star-style"
            onChange={setNewRate}
            value={starsGiven}
          />
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
              fontSize: 20,
              height: "auto",
              borderRadius: 3,
            }}
            disabled={isDisabled}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LeaveReview;
