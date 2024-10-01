// src/components/Slider/Slider.js
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Slider.css";

// Import the images directly from the assets folder
import Slide1 from "../../assets/images/1.png";
import Slide2 from "../../assets/images/2.png";
import Slide3 from "../../assets/images/3.png";

const images = [Slide1, Slide2, Slide3];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={index === currentSlide ? "active" : ""}
        />
      ))}
    </div>
  );
}

export default Slider;
