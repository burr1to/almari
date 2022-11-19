import React, { useEffect, useState, useRef } from "react";
import Layout from "./../../components/global/Layout";
import ProfileBox from "./../../components/global/ProfileBox";
import CatCircle from "./components/CatCircle";
import Popular from "../../components/global/Popular";
import "./statics/css/landingpage.css";
import {
  categories,
  sliderItems,
  discover,
  popularProducts,
} from "./../../components/data/testdata.js";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import RandomItems from "../../components/global/RandomItems";
import "./../../components/statics/popular.css";
import axios from "axios";
import { AppContext } from "../../utils/Context";

//promise.all()

//usenavigate, make individual endpoints

function LandingPage() {
  const disable = useRef(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (disable.current === false) {
      axios
        .get("http://localhost:8000/posts/")
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return () => {
        console.log("allo");
        disable.current = true;
      };
    }
  }, []);

  console.log(data);

  return (
    <Layout>
      <AppContext.Provider value='1'>
        <Grid container direction='column' className='landing-content'>
          <Grid item className='explore-categories'>
            <p>Explore Categories</p>
            <div className='cat-con'>
              {categories.map((item) => (
                <Link
                  to={item.url}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <CatCircle item={item} key={item.id} />
                </Link>
              ))}
            </div>
          </Grid>

          <Grid item className='random-items'>
            <div className='random-contain'>
              {sliderItems.map((item) => (
                <RandomItems item={item} key={item.id} />
              ))}
            </div>
          </Grid>
          <Grid item className='profile-showcase'>
            <p className='landing-text'>Discover our Creators</p>
            <Grid
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
              {data.map(
                (item, index) =>
                  index < 4 && (
                    <Grid item>
                      <ProfileBox
                        user={item.owner.name}
                        productimage={item.post_img}
                        key={item.id}
                        name={item.title}
                      />
                    </Grid>
                  )
              )}
            </Grid>
          </Grid>
          <Grid item className='popular-items'>
            <p className='landing-text'>Popular Items</p>
            <div className='popular-item-list'>
              {data.map(
                (item, index) =>
                  index < 5 && (
                    <Popular item={item} image={item.post_img} key={item.key} />
                  )
              )}
            </div>
          </Grid>
        </Grid>
      </AppContext.Provider>
    </Layout>
  );
}

export default LandingPage;
