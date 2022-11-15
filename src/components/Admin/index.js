import React, { useState } from "react";
import Upcoming from "./Upcoming";
import Completed from "./Completed";
import Dashboard from "./Dashboard";
import Modifications from "./Modifications";
import Pending from "./Pending";
import "./styles.css";

const Admin = () => {
  const [navigationPage, setNavigationPage] = useState("dashboard");

  const updateNav = (link) => {
    setNavigationPage(link);
  };

  const renderSwitch = (param) => {
    switch (param) {
      case "dashboard":
        return <Dashboard />;
      case "pending":
        return <Pending />;
      case "upcoming":
        return <Upcoming />;
      case "completed":
        return <Completed />;
      case "modifications":
        return <Modifications />;
      default:
        return "Sorry page could not load";
    }
  };

  return (
    <div>
      <nav className="admin-nav">
        <button
          className={navigationPage === "dashboard" ? "active" : "btn"}
          onClick={() => updateNav("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={navigationPage === "pending" ? "active" : "btn"}
          onClick={() => updateNav("pending")}
        >
          Pending
        </button>
        <button
          className={navigationPage === "upcoming" ? "active" : "btn"}
          onClick={() => updateNav("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={navigationPage === "completed" ? "active" : "btn"}
          onClick={() => updateNav("completed")}
        >
          Completed
        </button>
        <button
          className={navigationPage === "modifications" ? "active" : "btn"}
          onClick={() => updateNav("modifications")}
        >
          Modifications
        </button>
      </nav>

      <div className="content-wrapper">{renderSwitch(navigationPage)}</div>
    </div>
  );
};

export default Admin;
