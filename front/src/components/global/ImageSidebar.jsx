import React from "react";
import "./../statics/image.css";
import { useState } from "react";
import Image from "./Image";

function ImageSidebar({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides[0].img.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides[0].img.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  // const slideStylesWidthBackground = {
  //   ...slideStyles,
  //   backgroundImage: `url(${slides[0].img[currentIndex]})`,
  // };

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
      <div className='image-product'>
        <Image addStyles='product-img-side' src={slides[0].img[currentIndex]} />
      </div>
      <div className='dot-con'>
        {slides[0].img.map((slide, slideIndex) => (
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
