import React from "react";
import Image from "./../../../components/global/Image";
import chair from "./../../../components/statics/images/chair.jpg";
import "./catcircle.css";

const categories = ["Category", "Category", "Category", "Category", "Category"];
function CatCircle() {
  return (
    <div className='cat-con'>
      {categories.map((category) => (
        <div className='circle'>
          <Image className='damn' src={chair} />
          <br />
          <div className='cat-text'>{category}</div>
        </div>
      ))}
    </div>
  );
}

export default CatCircle;
