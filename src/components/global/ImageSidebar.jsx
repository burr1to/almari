import React from "react";
import "./../statics/image.css";
import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function ImageSidebar({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className='slider'>
      <div>
        <div onClick={goToPrevious} className='left-arrow'>
          ❰
        </div>
        <div onClick={goToNext} className='right-arrow'>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div className='dot-con'>
        {slides.map((slide, slideIndex) => (
          <div
            className='dot'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSidebar;
