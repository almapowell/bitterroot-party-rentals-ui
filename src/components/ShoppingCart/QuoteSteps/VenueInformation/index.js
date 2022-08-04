import React from "react";
import { DatePicker, Space, Form, Input, Radio, Switch } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const VenueInformation = ({
  onDateChange,
  onReferalChange,
  onDeliveryChange,
  onInputChange,
  state,
  setState,
}) => {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 19,
      }}
      layout="vertical"
    >
      <Form.Item
        name="Venue Address"
        rules={[{ required: true }]}
        label="Venue Address"
      >
        <Input value={state.address} name="address" onChange={onInputChange} />
      </Form.Item>
      <Form.Item
        label="Event Date"
        rules={[{ required: true }]}
        label="Event Date"
      >
        <DatePicker onChange={onDateChange} name="date" />
      </Form.Item>

      <Form.Item
        tooltip={{
          title: "Additional costs depending on distance",
          icon: <InfoCircleOutlined />,
        }}
        label="Pickup / Deliver"
        valuePropName="checked"
      >
        <Switch onChange={onDeliveryChange} />
      </Form.Item>

      <Form.Item name="Additional Notes" label="Additional Notes">
        <Input.TextArea onChange={onInputChange} name="notes" />
      </Form.Item>
      <Form.Item label="Referral">
        <Radio.Group onChange={onReferalChange} value={state.referal}>
          <Space>
            <Radio value={1}>Word of Mouth</Radio>
            <Radio value={2}>Google</Radio>
            <Radio value={3}>Social Media</Radio>
            <Radio value={4}>Repeat Customer</Radio>
            <Radio value={5}>
              Other
              {state.referal === 5 ? (
                <Input
                  style={{
                    width: 100,
                    marginLeft: 10,
                  }}
                  onChange={(e) =>
                    setState({
                      ...state,
                      referal: e.target.value,
                    })
                  }
                />
              ) : null}
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default VenueInformation;
