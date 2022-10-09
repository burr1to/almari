import React from "react";
import Image from "./../../../components/global/Image";
import chair from "./../../../components/statics/images/chair.jpg";
import "./catcircle.css";

const categories = [
  "Clothing",
  "Home Decor",
  "Handicrafts",
  "Furniture",
  "Accessories",
];
function CatCircle() {
  return (
    <ul className='cat-con'>
      {categories.map((category) => (
        <li className='cat-list'>
          <Image className='damn' src={chair} alt='alt' />
          <br />
          <div className='cat-text'>{category}</div>
        </li>
      ))}
    </ul>
  );
}

export default CatCircle;
