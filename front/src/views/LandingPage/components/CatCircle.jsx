import React from "react";
import { useState } from "react";
import Image from "./../../../components/global/Image";
import "./../statics/css/catcircle.css";

function CatCircle({ item }) {
  const [cat, setCat] = useState();
  const handleClicker = (e) => {};
  return (
    <div className='cat-list' onClick={handleClicker}>
      <Image src={item.img} addStyles='category-image' />
      <div className='cat-text'>{item.title}</div>
    </div>
  );
}

export default CatCircle;
