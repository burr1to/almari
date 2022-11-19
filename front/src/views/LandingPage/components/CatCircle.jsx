import React from "react";
import Image from "./../../../components/global/Image";
import "./../statics/css/catcircle.css";

function CatCircle({ item }) {
  return (
    <div className='cat-list'>
      <Image src={item.img} addStyles='category-image' />
      <div className='cat-text'>{item.title}</div>
    </div>
  );
}

export default CatCircle;
