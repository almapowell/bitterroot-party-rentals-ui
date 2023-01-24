import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input, notification, DatePicker } from "antd";
import moment from "moment";
import "../styles.css";

const EditRequest = ({ selectedRequest, setSelectedRequest }) => {
  const [updatedRequest, setUpdatedRequest] = useState(selectedRequest);
  const [form] = Form.useForm();
  const { customerInformation, cartItems } = updatedRequest;

  const handleSave = async (id) => {
    console.log(updatedRequest, id);

    await axios
      .put(`/api/request/update-rental-request/${id}`, updatedRequest)
      .then(() => {
        successfulNotification();
        setSelectedRequest({});
      });
  };

  const successfulNotification = () => {
    notification["success"]({
      message: "Rental Request Updated",
      description: `Good work. You've updated ${customerInformation.first} ${customerInformation.last}'s rental request.`,
    });
  };

  const onCustomerInfoChange = (e) => {
    setUpdatedRequest({
      ...updatedRequest,
      [e.target.name]: e.target.value,
    });
  };

  const getTotalCost = (arr) => {
    return arr.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const onCartItemChange = (e, id) => {
    const updatedItems = updatedRequest.cartItems.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: Number(e.target.value) };
      }
      return item;
    });
    setUpdatedRequest({
      ...updatedRequest,
      cartItems: updatedItems,
      totalCost: getTotalCost(updatedItems),
    });
  };

  console.log(updatedRequest);

  return (
    <div>
      <h1>Selected Request</h1>
      <Form
        initialValue={{
          address: customerInformation?.address,
          notes: customerInformation?.notes,
        }}
        form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="vertical"
      >
        <h2 className="request-label">
          <b style={{ marginRight: 10 }}>Name:</b> {customerInformation?.first}{" "}
          {customerInformation?.last}
        </h2>
        <h2 className="request-label">
          <b style={{ marginRight: 10 }}>Email:</b> {customerInformation?.email}
        </h2>
        <h2 className="request-label">
          <b style={{ marginRight: 10 }}>Phone Number:</b>{" "}
          {customerInformation?.phone}
        </h2>
        <Form.Item
          initialValue={customerInformation?.address}
          name="Address"
          rules={[{ required: true }]}
          label="Address"
          style={{ marginTop: 40 }}
        >
          <Input
            value={customerInformation?.address}
            name="address"
            onChange={onCustomerInfoChange}
          />
        </Form.Item>

        <Form.Item name="Date" rules={[{ required: true }]} label="Date">
          <DatePicker
            views={["year"]}
            onChange={onCustomerInfoChange}
            value={customerInformation?.date}
            defaultValue={moment(customerInformation?.date, "YYYY-MM-DD")}
            name="date"
          />
        </Form.Item>
        <Form.Item
          initialValue={customerInformation?.notes}
          name="Notes"
          rules={[{ required: true }]}
          label="Notes"
        >
          <Input
            value={customerInformation?.notes}
            name="notes"
            onChange={onCustomerInfoChange}
          />
        </Form.Item>

        <div>
          <h1 className="request-label">Cart Items</h1>
          {cartItems.map((item) => {
            const itemCost = item.price * item.cartQuantity;
            return (
              <Form.Item
                initialValue={item.cartQuantity}
                name={item.title}
                label={`${item.title} - $${item.price} Each`}
              >
                <span style={{ fontSize: 12 }}>Cost: ${itemCost}</span>
                <Input
                  value={item.cartQuantity}
                  name="title"
                  onChange={(e) => onCartItemChange(e, item._id)}
                />
              </Form.Item>
            );
          })}
        </div>
        <h1>Total Cost: ${getTotalCost(updatedRequest.cartItems)}</h1>

        <Button onClick={() => setSelectedRequest({})} danger>
          Cancel
        </Button>
        <Button onClick={() => handleSave(updatedRequest._id)} type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditRequest;
