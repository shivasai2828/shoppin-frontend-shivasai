import React, { useState } from "react";
import "./Home.css";
import { assets } from "./../../assets/assets";
import { IoIosArrowDown } from "react-icons/io";
import Model from "../../components/Model/Model";
const Home = () => {
  const [filteredOption, SetFilteredOption] = useState("");
  const [dropDownOpen, SetdropDownOpen] = useState(false);

  return (
    <div className="home-bg">
      <nav className="nav-container">
        <img src={assets.logo} alt="nav-logo" className="nav-logo" />
        <div className="row drop-down-container ">
          <p
            className="nav-drop-down"
            onClick={() => SetdropDownOpen(!dropDownOpen)}
          >
            Collections{" "}
          </p>
          <IoIosArrowDown className="bottom-arrow-icon" />
        </div>
        <button className="nav-save-btn">save</button>
      </nav>

      <div className="home-center-content-container">
        <img
          src={assets.watchband}
          alt="band-icon"
          className="band-icon-home-page"
        />
        <img
          src={assets.landingPageWatch}
          alt="landing-watch"
          className="home-page-watch"
        />
        <div className="home-center-main-content">
          <p className="under-line-p">side view</p>
          <p className="home-center-second-para">APPLE WATCH SERIES 10</p>
          <p className="home-center-third-para">
            46mm Jet Black Aluminum Case with Black Solo Loop
          </p>
          <p>From $429</p>
        </div>
        <div className="home-buttons-container">
          <button
            onClick={() => SetFilteredOption("size")}
            className="home-btn"
          >
            <img src={assets.sizeicon} alt="size-icon" />
            {filteredOption === "size" ? (
              <>
                <p>42mm</p>
                <p>46mm</p>
              </>
            ) : (
              "size"
            )}
          </button>
          <button
            onClick={() => SetFilteredOption("case")}
            className="home-btn"
          >
            <img src={assets.caseicon} alt="case-icon" />{" "}
            {filteredOption === "case" ? (
              <>
                <p> Aluminum</p>
                <p>Titanium</p>
              </>
            ) : (
              "Case"
            )}
          </button>
          <button
            onClick={() => SetFilteredOption("band")}
            className="home-btn"
          >
            <img src={assets.band} alt="band-icon" />{" "}
            <ul className="band-list-options-container">
              {filteredOption === "band"
                ? [
                    "Stainless",
                    "SteelSport",
                    "LoopSport",
                    "BandFineWovenBraided",
                    "Solo",
                    "LoopSolo",
                    "LoopNike",
                    "Sport",
                    "LoopNike",
                    "Sport",
                    "Band",
                  ].map((each, index) => {
                    return <li>{each}</li>;
                  })
                : "Band"}
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
