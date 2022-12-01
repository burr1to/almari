import React from "react";
import "./../../../components/statics/image.css";
import { useState } from "react";
import Image from "../../../components/global/Image";

function ImageSidebar({ slides, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 2 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 2;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='slider'>
      {images.length > 2 ? (
        <div>
          <div onClick={goToPrevious} className='left-arrow'>
            ❰
          </div>
          <div onClick={goToNext} className='right-arrow'>
            ❱
          </div>
        </div>
      ) : (
        ""
      )}

      <div className='image-product'>
        <Image
          addStyles='product-img-side'
          src={`http://${images[currentIndex]}`}
        />
      </div>
    </div>
  );
}

export default ImageSidebar;
