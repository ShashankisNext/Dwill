import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="logo-container">
            <div className="logo-img">
              <img className="logo" src={logo} alt="DeWill" />
            </div>
          </div>
          <div className="header-menu">
            <a href="#">Community</a>
            <a href="#">Governance</a>
            <a href="#">Blog</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
