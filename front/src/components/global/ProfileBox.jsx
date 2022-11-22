import React from "react";
import "./../statics/box.css";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Image from "./Image";
import { Grid } from "@mui/material";

//need to find a way to make hte profile box sizes dynamic. aile non responsive hunxa
//cause width and height are hardcoded into react
function ProfileBox({ user, productimage, name }) {
  const handleClick = (e) => {
    console.log("ok");
  };
  const description = `${name} by ${user}`;

  const replacedImg = productimage.replace(",", "");
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      className='box-con'
    >
      <div
        className='box-bg'
        style={{
          backgroundImage: `url("http://${replacedImg}")`,
          opacity: "1",
          width: "320px",
          height: "200px",
          backgroundSize: "cover",
        }}
      />
      <div className='box-info-box'>
        <div className='box-info'>
          <div className='box-info avatar'>
            <Avatar
              onClick={handleClick}
              className='box-icon'
              alt='#'
              src='#'
            />
          </div>
          <div className='box-info text'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default ProfileBox;
