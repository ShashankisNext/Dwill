import React from "react";
import logo from "../assets/logo.svg";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="form-wrapper">
        <h1>Login</h1>
        <div className="disclaimer">
          NEAR Wallet is a secure wallet and account manager for your accounts
          on the NEAR blockchain. Once you create an account, you'll need it to
          interact with applications on NEAR, and to securely store your various
          tokens and collectibles (NFTs).
        </div>
        <div className="form-container">
          <form action="dashboard">
            <input className="input-text" type="text" placeholder="UserID" />
            <input
              className="input-text"
              type="password"
              placeholder="Password"
            />
            <input className="login-btn" type="submit" value="Login" />
            <div className="links">
              <a href="#">Don't have an account? Sign up!</a>
              <a href="#">Import Existing Account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
