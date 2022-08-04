import React from "react";
import "./styles.css";
import "antd/dist/antd.min.css";
import { DatePicker, Space, Checkbox } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;

const RentalForm = () => {
  const onChairsChange = (e) => {
    console.log(`chairs checked = ${e.target.checked}`);
  };

  const onTablesChange = (e) => {
    console.log(`tables checked = ${e.target.checked}`);
  };

  const onDateChange = (date, dateString) => {
    // dateString = yyyy/mm/dd
    console.log(date, dateString);
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };

  return (
    <div className="form">
      <span>Book Your Rental</span>
      <div className="date">
        <div className="selector">Select a Date</div>
        <Space direction="veritcal" size={12}>
          <RangePicker disabledDate={disabledDate} onChange={onDateChange} />
        </Space>
      </div>
      <button className="next">Next Step</button>
      <div className="disclaimer">
        * Any request that is submitted is not automatically claimed. It is a
        reviewing processess and we will do our best to make sure that your
        request is taken care of as fast as possible.
      </div>
    </div>
  );
};

export default RentalForm;
