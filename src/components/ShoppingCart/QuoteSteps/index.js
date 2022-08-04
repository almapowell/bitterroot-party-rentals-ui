import React, { useState } from "react";
import QuoteSummary from "./ReviewQuote";
import "./styles.css";
import CustomerInformation from "./CustomerInformation";
import { Button, message, Steps } from "antd";
import VenueInformation from "./VenueInformation";

const { Step } = Steps;

const QuoteSteps = () => {
  const [state, setState] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    delivery: false,
    notes: "",
    referal: 0,
  });
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onReferalChange = (e) => {
    setState({
      ...state,
      referal: e.target.value,
    });
  };

  const onInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onDateChange = (date, dateString) => {
    setState({
      ...state,
      date: dateString,
    });
  };

  const onDeliveryChange = (checked) => {
    setState({
      ...state,
      delivery: checked,
    });
  };

  const isCustomerInfoComplete = () => {
    return state.first && state.last && state.email && state.phone;
  };

  const steps = [
    {
      title: "Customer Information",
      content: (
        <CustomerInformation state={state} onInputChange={onInputChange} />
      ),
    },
    {
      title: "Venue Information",
      content: (
        <VenueInformation
          state={state}
          setState={setState}
          onDateChange={onDateChange}
          onInputChange={onInputChange}
          onReferalChange={onReferalChange}
          onDeliveryChange={onDeliveryChange}
        />
      ),
    },
    {
      title: "Review",
      content: <QuoteSummary state={state} />,
    },
  ];

  return (
    <div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step
            style={{ marginBottom: 70 }}
            key={item.title}
            title={item.title}
          />
        ))}
      </Steps>

      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 ? (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        ) : (
          <div />
        )}
        {current < steps.length - 1 && (
          <Button
            className=".nextBtn"
            disabled={!isCustomerInfoComplete()}
            type="primary"
            onClick={() => next()}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuoteSteps;
