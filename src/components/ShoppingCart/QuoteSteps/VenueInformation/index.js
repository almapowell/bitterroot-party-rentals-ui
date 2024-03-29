import React from "react";
import { DatePicker, Space, Form, Input, Radio, Switch } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import "./styles.css";

const VenueInformation = ({
  onDateChange,
  onReferalChange,
  onDeliveryChange,
  onInputChange,
  state,
}) => {
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
        label="Event Date"
        rules={[{ required: true }]}
        name="Event Date"
      >
        <DatePicker
          views={["year"]}
          onChange={onDateChange}
          value={state.dateValue}
          name="date"
          disabledDate={(current) => {
            return moment().add(-1, "days") >= current;
          }}
        />
      </Form.Item>

      <Form.Item
        tooltip={{
          title: "Additional costs depending on distance",
          icon: <InfoCircleOutlined />,
        }}
        label="Pickup / Deliver"
        valuePropName="checked"
        checked={state.delivery}
      >
        <Switch onChange={onDeliveryChange} />
      </Form.Item>

      <Form.Item name="Additional Notes" label="Additional Notes">
        <Input.TextArea
          value={state.notes}
          defaultValue={state.notes}
          onChange={onInputChange}
          name="notes"
        />
      </Form.Item>
      <Form.Item label="Referral">
        <Radio.Group
          defaultValue={state.referal}
          onChange={onReferalChange}
          value={state.referal}
        >
          <Space className="referal-wrapper">
            <Radio value={1}>Word of Mouth</Radio>
            <Radio value={2}>Google</Radio>
            <Radio value={3}>Social Media</Radio>
            <Radio value={4}>Repeat Customer</Radio>
            <Radio value={5}>Other</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default VenueInformation;
