import React from "react";
import dc from "../assets/discord-handle.svg";
import tw from "../assets/twitter-handle.svg";
import yt from "../assets/yt-handle.svg";
import wallet from "../assets/wallet.svg";
import lock from "../assets/lock.svg";
import funds from "../assets/funds.svg";

const Homepage = () => {
  return (
    <div className="container">
      <div className="intro">
        <h3>Introducing</h3>
        <h1>De-Will Protocol</h1>
        <h3>Recovery is possible now!</h3>
      </div>
      <div className="handles-container">
        <div className="handles">
          <img src={yt} alt="" srcset="" />
          <img src={tw} alt="" srcset="" />
          <img src={dc} alt="" srcset="" />
        </div>
        <button>Get Started</button>
        <h2>How does it work?</h2>
        <div className="desc-container">
          <div className="one">
            <img src={wallet} alt="" />
            <p>Link all of your wallet to pur platform</p>
          </div>
          <div className="two">
            <img src={lock} alt="" />
            <p>Create ab Inactivity Time Dependent lock</p>
          </div>
          <div className="three">
            <img src={funds} alt="" />
            <p>
              Funds transfer automatically when your wallet is found inactive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
