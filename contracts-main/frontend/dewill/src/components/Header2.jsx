import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";

const Header2 = () => {
  return (
    <div>
      <div className="container2">
        <div className="wrapper">
          <div className="logo-container">
            <div className="logo-img">
              <img className="logo2" src={logo} alt="DeWill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
