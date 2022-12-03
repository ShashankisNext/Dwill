import React, { useState } from "react";
import "./Panel.css";
import overview from "../assets/Dashboard/overview.svg";
import lock from "../assets/Dashboard/lock.svg";
import profile from "../assets/Dashboard/profile.svg";
import settings from "../assets/Dashboard/setting.svg";
import share from "../assets/Dashboard/share.svg";
import { Link } from "react-router-dom";

const Panel = () => {
  const [lockCreated, setlockCreated] = useState(false)
  return (
    <div className="panel">
      <h3>
        <u>Panel</u>
      </h3>
      <div className="panel-menu">
        <div className="panel-item">
          <img src={overview} alt="" />
          <h3>Overview</h3>
        </div>
        <div className="panel-item">
          <img src={lock} alt="" />
          {lockCreated ? (
            <Link to="/dashboard/modifylock">
              <h3 className="panellinks">Modify Lock</h3>
            </Link>
          ) : (
            <Link to="/dashboard/createlock">
              <h3 className="panellinks">Create Lock</h3>
            </Link>
          )}
        </div>
        <div className="panel-item">
          <img src={profile} alt="" />
          <h3>Profile</h3>
        </div>
        <div className="panel-item">
          <img src={settings} alt="" />
          <h3>Settings</h3>
        </div>
        <div className="panel-item">
          <img src={share} alt="" />
          <h3>Share</h3>
        </div>
      </div>
    </div>
  );
};

export default Panel;
