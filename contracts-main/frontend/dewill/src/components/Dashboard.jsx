import React from "react";
import Header from "./Header";
import "./Dashboard.css";
import up from "../assets/Dashboard/upArrow.svg";
import down from "../assets/Dashboard/downArrow.svg";

import Panel from "./Panel";

const Dashboard = () => {
  var walletValue = 4;
  var currBal = "$" + 20 + "k";
  var transactions = 4576;
  var coinName = "BTC";
  var coinAmount = 0.36;
  var usdAmount = 3152.3 + " USD";
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
          <h1>Overview</h1>
          <div className="ov-details">
            <div className="values-container">
              <div className="values">
                <h1>{walletValue}</h1>
                <h2>Wallets</h2>
              </div>
              <div className="values">
                <h1>{currBal}</h1>
                <h2>Current balance</h2>
              </div>
              <div className="values">
                <h1>{transactions}</h1>
                <h2>Transactions</h2>
              </div>
            </div>
            <div className="transaction-container">
              <div className="transaction">
                <h2>Recent Transactions</h2>
                <input type="checkbox" name="All" id="transac_checkbox" />
              </div>
              <div className="transaction">
                <h2>Wallet Address</h2>
                <div className="value">
                  <h2>0.09 ETH</h2>
                  <img src={up} alt="Up" />
                </div>
              </div>
              <div className="transaction">
                <h2>Wallet Address</h2>
                <div className="value">
                  <h2>0.09 ETH</h2>
                  <img src={down} alt="Down" />
                </div>
              </div>
              <h3>
                <a>
                  <u>view more</u>
                </a>
              </h3>
            </div>
            <div className="btn-container">
              <button>Add a new wallet</button>
              <button>Remove a wallet</button>
            </div>
          </div>
        </div>
        <div className="coins-container">
          <div className="coin">
            <div className="coin-name">{coinName}</div>
            <div className="amount">{coinAmount}</div>
            <div className="USD-amount">{usdAmount}</div>
          </div>
          <div className="coin">
            <div className="coin-name">{coinName}</div>
            <div className="amount">{coinAmount}</div>
            <div className="USD-amount">{usdAmount}</div>
          </div>
          <div className="coin">
            <div className="coin-name">{coinName}</div>
            <div className="amount">{coinAmount}</div>
            <div className="USD-amount">{usdAmount}</div>
          </div>
          <div className="coin">
            <div className="coin-name">{coinName}</div>
            <div className="amount">{coinAmount}</div>
            <div className="USD-amount">{usdAmount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
