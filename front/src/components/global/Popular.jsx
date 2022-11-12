import React from "react";
import "./../statics/popular.css";
import { Grid } from "@mui/material";
import Image from "./Image";
import { Link } from "react-router-dom";
function Popular({ item }) {
  return (
    <>
      <div className='popular-item-box'>
        <Image className='main_image popular-item-img' src={item.img} />
        <div className='popular-item-tag'>{item.id}</div>
      </div>
    </>
  );
}

export default Popular;
