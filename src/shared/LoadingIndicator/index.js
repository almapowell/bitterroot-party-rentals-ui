import React from "react";
import { Spin } from "antd";

const LoadingIndicator = () => {
  return (
    <div
        style={{
        width: "100%",
        height: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        }}
    >
        <Spin tip="Loading..." size="large" />
    </div>
  );
};

export default LoadingIndicator;







