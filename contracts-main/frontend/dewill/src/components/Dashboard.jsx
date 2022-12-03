import React from "react";
import Header from "./Header";
import "./Dashboard.css";

import Panel from "./Panel";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <h1>
        <u>Dashboard</u>
      </h1>
      <div className="panel-container">
        <Panel />
      </div>
    </div>
  );
};

export default Dashboard;
