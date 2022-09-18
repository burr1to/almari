import React from "react";
//import Box from "@mui/material/Box";
import "./../statics/box.css";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

import { Grid } from "@mui/material";
//need to find a way to make hte profile box sizes dynamic. aile non responsive hunxa
//cause width and height are hardcoded into react
function ProfileBox(username) {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <div className='profile-box-con'>
        <div className='profile-box-bg'></div>
        <div className='profile-box-info-box'>
          <Grid container direction='row' className='profile-box-info'>
            <Grid className='profile-box-info-avatar' item xs={4}>
              <IconButton size='large'>
                <Avatar alt='S' src='#' />
              </IconButton>
            </Grid>
            <Grid className='profile-box-info text' item xs={8}>
              <br />
              <p>adsasdasd by burrito</p>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
}

export default ProfileBox;
