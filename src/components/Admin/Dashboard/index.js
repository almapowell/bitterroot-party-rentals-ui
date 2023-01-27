import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../../shared/utils";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

function getPieData(arrayOfNums) {
  const result = [];

  const determineObj = (text) => {
    if (result.findIndex((item) => item.name === text) === -1) {
      result.push({ name: text, value: 1 });
    } else {
      result.find((item) => item.name === text).value += 1;
    }
  };

  arrayOfNums.forEach((num) => {
    if (num === 1) {
      determineObj("Word of Mouth");
    } else if (num === 2) {
      determineObj("Google");
    } else if (num === 3) {
      determineObj("Social Media");
    } else if (num === 4) {
      determineObj("Repeat Customer");
    } else if (num === 5) {
      determineObj("Other");
    } else {
      determineObj("Couldnt Find");
    }
  });

  return result;
}

const Dashboard = () => {
  const [pieData, setPieData] = useState([]);
  const [pendings, setPendings] = useState(0);
  const [accepted, setAccepted] = useState(0);
  const [completed, setCompleted] = useState(0);

  const getAllRequests = async () => {
    await axios.get(API + "/api/request/get-all-requests").then(({ data }) => {
      setPieData(
        getPieData(data.requests.map((r) => r.customerInformation.referal))
      );
    });
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{payload[0].value}</label>
        </div>
      );
    }
    return null;
  };

  const getPending = async () => {
    await axios
      .get(API + "/api/request/get-pending-requests")
      .then(({ data }) => {
        setPendings(data.count);
      });
  };

  const getAccepted = async () => {
    await axios
      .get(API + "/api/request/get-accepted-requests")
      .then(({ data }) => {
        setAccepted(data.count);
      });
  };

  const getCompleted = async () => {
    await axios
      .get(API + "/api/request/get-completed-requests")
      .then(({ data }) => {
        setCompleted(data.count);
      });
  };

  useEffect(() => {
    getPending();
    getAccepted();
    getCompleted();
    getAllRequests();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ margin: "auto" }}>
        <h2 style={{ marginBottom: 20 }}>Total Requests</h2>
        <div
          style={{ display: "flex", flexDirection: "column", marginBottom: 50 }}
        >
          <span>
            Pending: <b style={{ marginLeft: 10 }}>{pendings}</b>
          </span>
          <span>
            Accepted: <b style={{ marginLeft: 10 }}>{accepted}</b>
          </span>
          <span>
            Completed: <b style={{ marginLeft: 10 }}>{completed}</b>
          </span>
        </div>
      </div>

      {pieData.length > 0 && (
        <div style={{ margin: "auto" }}>
          <h2>Referal Feedback</h2>
          <PieChart width={730} height={300}>
            <Pie
              data={pieData}
              color="#000000"
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              formatter={(value) => (
                <span style={{ fontSize: 18 }}>{value}</span>
              )}
            />
          </PieChart>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
