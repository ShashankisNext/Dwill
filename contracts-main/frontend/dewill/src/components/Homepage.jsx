import React from "react";
import dc from "../assets/discord-handle.svg";
import tw from "../assets/twitter-handle.svg";
import yt from "../assets/yt-handle.svg";
import wallet from "../assets/wallet.svg";
import lock from "../assets/lock.svg";
import funds from "../assets/funds.svg";
import Header from "./Header";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container-homepage">
      <Header />
      <div className="wrapper-homepage">
        <div className="intro">
          <h2>Introducing</h2>
          <h1>
            <span>De-Will</span> Protocol
          </h1>
          <h2>Recovery is possible now!</h2>
        </div>
        <div className="handles-container">
          <div className="handles">
            <img src={yt} alt="" srcset="" />
            <img src={tw} alt="" srcset="" />
            <img src={dc} alt="" srcset="" />
          </div>
        </div>
        <Link to="/linkwallets">
          <button className="home-btn">Get Started</button>
        </Link>
        <div className="desc-container">
          <h2>How does it work?</h2>
          <div className="blur-container">
            <div className="flex-container">
              <div className="one box">
                <img src={wallet} alt="" />
                <p>Link all of your wallet to our platform</p>
              </div>
              <div className="two box">
                <img src={lock} alt="" />
                <p>Create an Inactivity Time Dependent lock</p>
              </div>
              <div className="three box">
                <img src={funds} alt="" />
                <p>
                  Funds transfer automatically when your wallet is found
                  inactive
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
