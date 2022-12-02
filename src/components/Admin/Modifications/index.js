import { Radio } from "antd";
import React, { useState } from "react";
import AddProduct from "./AddProduct";
import EditRequests from "./EditRequests";
import UpdateProduct from "./UpdateProduct";

const Modifications = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div style={{ padding: "50px 10%" }}>
      <Radio.Group
        defaultValue={1}
        onChange={onChange}
        buttonStyle="solid"
        value={value}
      >
        <Radio.Button value={1}>Add Product</Radio.Button>
        <Radio.Button value={2}>Edit Product</Radio.Button>
        <Radio.Button value={3}>Edit Rental Request</Radio.Button>
        {/* <Radio.Button value={3}>Edit Order</Radio.Button>
        <Radio.Button value={4}>Edit Product</Radio.Button> */}
      </Radio.Group>

      {value === 1 && <AddProduct />}

      {value === 2 && <UpdateProduct />}

      {value === 3 && <EditRequests />}
    </div>
  );
};

export default Modifications;
