import React from "react";
import Layout from "./../../components/global/Layout";
import ProfileBox from "./../../components/global/ProfileBox";
import CatCircle from "./components/CatCircle";
import Popular from "../../components/global/Popular";
import "./statics/css/landingpage.css";
import { categories, sliderItems, discover,popularProducts } from "./../../components/data/testdata.js";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import UserProfile from "./../../components/data/userprofile";
import RandomItems from "../../components/global/RandomItems";
import "./../../components/statics/popular.css";

//profile-showcase ko lagi euta chuttai container banaune. props pass
//garepaxi showcase bhaeko profile change hunxa
//ki ta random bata aeko value pass garera id line
//ki ta review haru ko use le garne
function LandingPage() {
  return (
    <Layout>
      <Grid container direction='column' className='landing-content'>
        <Grid item className='explore-categories'>
          <p>Explore Categories</p>
          <div className='cat-con'>
            {categories.map((item) => (
              <CatCircle item={item} key={item.id} />
            ))}
          </div>
        </Grid>

        <Grid item className='random-items'>
        {sliderItems.map(item =>(
          <RandomItems item = {item} key = {item.id}/>

        ))}
        </Grid>
        <Grid item className='profile-showcase'>
          <p className='landing-text'>Discover our Creators</p>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            {discover.map(item =>(
              <Grid item>
              <ProfileBox user = {item.username} productimage = {item.productImg} key = {item.id} name = {item.product}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item className='popular-items'>
          <p className='landing-text'>Popular Items</p>
          <div className='popular-item-list'>
      {popularProducts.map(
        (item, index) => index < 5 && <Popular item={item} key={item.key} />
      )}
    </div>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default LandingPage;
