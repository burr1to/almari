import React from "react";
import styled from "styled-components";
//import Box from "@mui/material/Box";
import "./../statics/box.css";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Image from "./Image";

import { Grid } from "@mui/material";
//need to find a way to make hte profile box sizes dynamic. aile non responsive hunxa
//cause width and height are hardcoded into react
function ProfileBox({user,productimage,name}) {

  const description = `${name} by ${user}`;
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      className='profile-box-con'
    >
      <div className='profile-box-bg'>
        <Image src = {productimage} className = "landingpic"/>
      </div>
      <div className='profile-box-info-box'>
        <div className='profile-box-info'>
          <div className='profile-box-info-avatar'>
            <IconButton>
              <Avatar alt='S' src="#" size='4em' />
            </IconButton>
          </div>
          <div className='profile-box-info text'>
            <br />
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default ProfileBox;
