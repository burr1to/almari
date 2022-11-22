import React from "react";
import "./../statics/popular.css";
import { Grid } from "@mui/material";
import Image from "./Image";
import { Link } from "react-router-dom";
function Popular({ item, image }) {
  const replacedImg = `http://${image.replace(",", "")}`;
  return (
    <>
      <div className='popular-item-box'>
        <div className='img-box'>
          <Image addStyles='popular-item-img' src={replacedImg} />
        </div>
        <div className='popular-item-tag'>{item.title}</div>
      </div>
    </>
  );
}

export default Popular;
