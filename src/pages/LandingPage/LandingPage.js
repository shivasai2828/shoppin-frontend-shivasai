import React from "react";
import "./LandingPage.css";
import { assets } from "./../../assets/assets";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page-bg">
      <div className="landing-page-logo-container">
        <img src={assets.logo} alt="logo" className="landing-page-logo" />
      </div>
      <div className="landing-page-content-container">
        <div className="landing-page-main-content-container">
          <p>Apple Watch Studio</p>
          <h1>
            Choose a case.
            <br />
            Pick a band. <br />
            Create your own style.
          </h1>
          <button
            onClick={() => navigate("/home")}
            className="landing-page-btn"
          >
            Get started
          </button>
        </div>
        <img
          src={assets.watchband}
          alt="band-icon"
          className="band-icon-landing-page"
        />
        <img
          src={assets.landingPageWatch}
          alt="landing-watch"
          className="landing-page-watch"
        />
      </div>
    </div>
  );
};

export default LandingPage;
