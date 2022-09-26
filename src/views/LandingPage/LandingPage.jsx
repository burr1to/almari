import React from "react";
import Layout from "./../../components/global/Layout";
import ProfileBox from "./../../components/global/ProfileBox";
import CatCircle from "./components/CatCircle";
import "./statics/css/landingpage.css";
import { Grid } from "@mui/material";
//profile-showcase ko lagi euta chuttai container banaune. props pass
//garepaxi showcase bhaeko profile change hunxa
//ki ta random bata aeko value pass garera id line
//ki ta review haru ko use le garne
function LandingPage() {
  return (
    <Layout>
      <Grid container direction='column' className='landing-content'>
        <Grid item className='explore-categories'>
          Explore
          <CatCircle />
        </Grid>
        <Grid item className='idk'></Grid>
        <Grid item className='profile-showcase'>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item>
              <ProfileBox user='burrito'></ProfileBox>
            </Grid>
            <Grid item>
              <ProfileBox user='burrito'></ProfileBox>
            </Grid>
            <Grid item>
              <ProfileBox user='burrito'></ProfileBox>
            </Grid>
            <Grid item>
              <ProfileBox user='burrito'></ProfileBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className='popular-items'>
          Popular Items
        </Grid>
      </Grid>
    </Layout>
  );
}

export default LandingPage;
