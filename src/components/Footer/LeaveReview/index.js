import React, { useEffect, useState } from "react";
import { Button, Form, Input, notification, Radio } from "antd";
import ReactStars from "react-rating-stars-component";

import "./styles.css";

const LeaveReview = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [starsGiven, setStarsGiven] = useState(0);

  const handleSubmit = ({ review }) => {
    console.log("thank you", review);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setStarsGiven(newRating);
  };

  useEffect(() => {
    if (starsGiven) {
      setIsDisabled(false);
    }
  }, [starsGiven]);

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
            onChange={(e) => console.log(e.target.value)}
            defaultValue="female"
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
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
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
