import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import { assets } from "./../../assets/assets";
import { IoIosArrowDown } from "react-icons/io";
import Carousel from "./../../components/Carousel/Carousel";
import BandCarousel from "../../components/BandCarousel/BandCarousel";
import SizeCarousel from "./../../components/SizeCarousel/SizeCarousel";
let sizeImage = [assets.sizwatch, assets.caseimage4];

const caseImages = [
  assets.caseimage3,
  assets.caseimage2,
  assets.caseimage1,
  assets.caseimage4,
  assets.caseimage5,
  assets.caseimage6,
];

const bandimages = [
  assets.watchband1,
  assets.watchband2,
  assets.watchband3,
  assets.watchband4,
  assets.watchband5,
  assets.watchband6,
  assets.watchband7,
  assets.watchband8,
  assets.watchband9,
];

const Home = () => {
  const [filteredOption, SetFilteredOption] = useState("");
  const [dropDownOpen, SetdropDownOpen] = useState(false);
  const [sizeOption, SetSizeOption] = useState(0);
  const [caseOption, SetcaseOption] = useState("aluminum");
  const [bandOption, SetbandOption] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null); // Ref to track the popup element

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const displayWatchesCarousels = () => {
    if (filteredOption === "case") {
      return <Carousel images={caseImages} />;
    } else if (filteredOption === "band") {
      return <BandCarousel images={bandimages} />;
    } else if (filteredOption === "size") {
      return (
        <SizeCarousel
          SetSizeOption={SetSizeOption}
          sizeOption={sizeOption}
          images={sizeImage}
        />
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <div className="home-bg">
      <img src={assets.logo} alt="nav-logo" className="nav-logo-mobile" />

      <nav className="nav-container">
        <img src={assets.logo} alt="nav-logo" className="nav-logo" />
        <div className="row drop-down-container ">
          <p className="nav-drop-down" onClick={togglePopup}>
            Collections{" "}
          </p>
          <IoIosArrowDown className="bottom-arrow-icon" />
        </div>
        <button className="nav-save-btn">save</button>
      </nav>
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="popup"
          ref={popupRef}
        >
          <ul className="popup-list">
            <li className="popup-item">Apple Watch Series 10</li>
            <li className="popup-item">Apple Watch Hermès Series 10</li>
            <li className="popup-item">Apple Watch SE</li>
          </ul>
        </div>
      )}
      <div className="home-center-content-container">
        {displayWatchesCarousels()}
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
                <p
                  className={sizeOption === 0 ? "active-size-text" : ""}
                  onClick={() => SetSizeOption(0)}
                >
                  42mm
                </p>
                <p
                  className={sizeOption === 1 ? "active-size-text" : ""}
                  onClick={() => SetSizeOption(1)}
                >
                  46mm
                </p>
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
                <p
                  className={
                    caseOption === "aluminum" ? "active-case-text" : ""
                  }
                  onClick={() => SetcaseOption("aluminum")}
                >
                  {" "}
                  Aluminum
                </p>
                <p
                  className={
                    caseOption === "titanium" ? "active-case-text" : ""
                  }
                  onClick={() => SetcaseOption("titanium")}
                >
                  Titanium
                </p>
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
                    return (
                      <li
                        className={
                          bandOption === index ? "active-band-text" : ""
                        }
                        onClick={() => SetbandOption(index)}
                      >
                        {each}
                      </li>
                    );
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
