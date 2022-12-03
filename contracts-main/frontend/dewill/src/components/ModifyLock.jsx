import React from "react";
import Header from "./Header";
import Panel from "./Panel";
import "./ModifyLock.css";
import logo from "../assets/lockinput_pic.png"

const ModifyLock = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <h1>
        <u>Dashboard</u>
      </h1>
      <div className="main-container">
        <div className="panel-container">
          <Panel />
        </div>
        <div className="overview-container">
          <h1>Modify Lock</h1>
          <div className="ov-details">
            <div className="modifylock_values-container">

              <div className="modifylock_values">
                <h2>Enter Wallet Address for recovery:</h2>
                <input
                  className="modifylock-inputs"
                  placeholder="Wallet Address"
                />
                <img className="input_pic" src={logo} />
              </div>

              <div className="modifylock_values">
                <h2>Set the default Inactivity Duration:</h2>
                <input className="modifylock-inputs" placeholder="Duration" />
                <img className="input_pic" src={logo} />
              </div>

              <div className="modifylock_values">
                <h2>Set the secondary Inactivity Duration:</h2>
                <input className="modifylock-inputs" placeholder="Duration" />
                <img className="input_pic" src={logo} />
              </div>

              <div className="modifylock_values">
                <h2>
                  Notification Email Address{" "}
                  <span style={{ color: "grey" }}>(optional)</span>:
                </h2>
                <input
                  type="email"
                  className="modifylock-inputs"
                  placeholder="Email Address"
                />
                <img className="input_pic" src={logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyLock;
