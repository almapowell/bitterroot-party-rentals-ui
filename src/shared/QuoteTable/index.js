import React from "react";
import { Space, Table, Typography } from "antd";

const QuoteTable = ({ cartItems }) => {
  const { Text } = Typography;
  const columns = [
    {
      title: "Quantity",
      dataIndex: "quantity",
      width: 150,
    },
    {
      title: "Product",
      dataIndex: "title",
    },
    {
      title: "Est. Price",
      render: (_, item) => {
        return (
          <Space size="middle">
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={cartItems}
      pagination={false}
      bordered
      summary={(pageData) => {
        let totalCartPrice = 0;
        pageData.forEach((data) => {
          let itemSum = data.price * data.quantity;
          totalCartPrice += itemSum;
        }, 0);
        return (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2}>
              Estimated Total Price
            </Table.Summary.Cell>

            <Table.Summary.Cell index={1}>
              <Text>${totalCartPrice.toFixed(2)}</Text>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        );
      }}
    />
  );
};

export default QuoteTable;
