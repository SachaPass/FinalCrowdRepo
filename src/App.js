import React, { Component } from "react";
import "./stylesheet.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div id="hero"></div>

        <div className="menu-container">
          <a href="#" className="menu-item">
            Home
          </a>
          <a href="#" className="menu-item">
            Explore
          </a>
          <div className="menu-text"></div>
          <a href="CreateAccount.html" className="menu-item">
            Start a campaign
          </a>
          <a href="#" className="menu-item">
            How it works
          </a>
          <a href="startACampaign.html" className="menu-item start-campaign">
            Start a campaign
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
