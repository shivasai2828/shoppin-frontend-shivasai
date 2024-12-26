import React, { useState } from "react";
import "./BandCarousel.css";
import { assets } from "../../assets/assets";

const BandCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const getPositionClass = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return "center";
    if (diff === -1 || diff === images.length - 1) return "left";
    if (diff === 1 || diff === -(images.length - 1)) return "right";
    return "hidden";
  };

  return (
    <>
      <div className="carousel-container">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &lt;
        </button>
        <div className="carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${getPositionClass(index)}`}
            />
          ))}
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <img
        src={assets.landingPageWatch}
        alt="band"
        className="carousel-watch-img"
      />
    </>
  );
};

export default BandCarousel;
