import React from "react";
import Image from "./../../../components/global/Image";
import "./catcircle.css";

function CatCircle({ item }) {
  return (
    <div className='cat-list'>
      <Image src={item.img} className='main_image category-image' />
      <div className='cat-text'>{item.title}</div>
    </div>
  );
}

export default CatCircle;
