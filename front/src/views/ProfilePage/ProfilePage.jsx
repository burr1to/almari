import React from "react";
import Layout from "./../../components/global/Layout";
import "./statics/css/profilepage.css";
import { useContext } from "react";

import { Grid } from "@mui/material";
import ProfileDefault from "./../../assets/user1.png";
import Image from "../../components/global/Image";
import Button from "./../../components/global/Button";
import "./../../components/statics/popular.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function ProfilePage() {
  return (
    <Layout>
      <Grid
        container
        direction='column'
        className='profile-container'
        alignItems='center'
      >
        <form method='' className='profile-elements'>
          <Grid item className='profile-column-1'>
            <div className='image-area'>
              <Image src={ProfileDefault} alt='hmm' className='profile-image' />
            </div>
            <div className='profile-head'>
              <h5>Sanskar Singh</h5>
              <h6>@burrito240</h6>
              <br />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <br />
              <Link to='/edit/1'>
                <Button>Edit Profile</Button>
              </Link>
            </div>
            <div className='profile-socials'>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item className='profile-column-2'>
            <h5>Cart Orders</h5>
          </Grid>
          <Grid item className='profile-column-3'>
            <h5>Liked Items</h5>
            <div className='popular-item-list'>
              {/* {popularProducts.map(
        (item, index) => index < 5 && <Popular item={item} key={item.key} />
      )} */}
            </div>
          </Grid>
          <Grid item className='profile-column-4'>
            <h5>Popular Items</h5>
            <div className='popular-item-list'>
              {/* {popularProducts.map(
        (item, index) => index < 5 && <Popular item={item} key={item.key} />
      )} */}
            </div>
          </Grid>
        </form>
      </Grid>
    </Layout>
  );
}

export default ProfilePage;
