import React, { useState, useEffect } from "react";
import "./SizeCarousel.css";
import { assets } from "../../assets/assets";

const SizeCarousel = ({ images, sizeOption, SetSizeOption }) => {
  const [currentIndex, setCurrentIndex] = useState(sizeOption);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    SetSizeOption(1);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    SetSizeOption(0);
  };

  return (
    <>
      <div className="size-carousel">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#9664;
        </button>
        <div className="carousel-images">
          {images.map((image, index) => {
            const position =
              index === currentIndex
                ? "active"
                : index === (currentIndex - 1 + images.length) % images.length
                ? "left"
                : index === (currentIndex + 1) % images.length
                ? "right"
                : "hidden";

            return (
              <img
                key={index}
                src={image}
                alt={`Carousel ${index}`}
                className={`carousel-image ${position}`}
              />
            );
          })}
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#9654;
        </button>
      </div>
      <img src={assets.watchband} className="size-band" alt="band" />
    </>
  );
};

export default SizeCarousel;
