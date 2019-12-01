import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";

export default function Dashboard() {
  return (
    <div className="container-dashboard">
      <div className="header-container">
        <div className="header">
          <h1>PacmanOnlineChallenge</h1>
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="stats-container">
        <div className="cashier">
          <h1>Stats</h1>
        </div>
      </div>
      <div className="challenges-container">
        <div className="cashier">
          <h1>Challenges</h1>
        </div>
      </div>
      <div className="footer-container">
        <div className="social">
          <a href="https://github.com/RAJ66">
            <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" />
          </a>
          <a href="https://github.com/RAJ66">
            <img src="https://img.icons8.com/material/50/000000/instagram-new--v1.png" />
          </a>
          <a href="https://github.com/RAJ66">
            <img src="https://img.icons8.com/ios-filled/50/000000/twitter-circled.png" />
          </a>
          <a href="https://github.com/RAJ66">
            <img src="https://img.icons8.com/ios-filled/50/000000/exit.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
