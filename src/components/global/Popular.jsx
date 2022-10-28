import React from "react";
import "./../statics/popular.css";
import { Grid } from "@mui/material";
import Image from "./Image";
import { Link } from "react-router-dom";
import hyoonImg from "./../statics/images/hyoom.jpg";
function Popular() {
  return (
    <>
      <div className='popular-item-box'>
        <Image className='main_image popular-item-img' src={hyoonImg} />
        <div className='popular-item-tag'>Insert Name here</div>
      </div>
    </>
  );
}

export default Popular;
