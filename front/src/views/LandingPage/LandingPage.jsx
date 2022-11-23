import React, { useEffect, useState, useRef } from "react";
import Layout from "./../../components/global/Layout";
import ProfileBox from "./../../components/global/ProfileBox";
import CatCircle from "./components/CatCircle";
import SearchBar from "../../components/global/SearchBar";
import SearchArea from "../../components/global/SearchArea";
import Popular from "../../components/global/Popular";
import "./statics/css/landingpage.css";
import { categories, sliderItems } from "./../../components/data/testdata.js";
import { Grid } from "@mui/material";
import { Link, Route } from "react-router-dom";
import RandomItems from "../../components/global/RandomItems";
import "./../../components/statics/popular.css";
import axios from "axios";

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
        console.log("Cleaned up");
        disable.current = true;
      };
    }
  }, []);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState({});

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = (e) => {
    axios
      .get(`http://localhost:8000/posts/?search=${search}`)
      .then((response) => {
        console.log(response.data);
        setFilter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setSearch("");
  };

  return (
    <Layout>
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

        {/* <Grid item className='search-area'>
          <SearchBar
            onChange={handleSearchChange}
            onClick={handleSearchClick}
            value={search}
          />
          <SearchArea />
        </Grid> */}

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
    </Layout>
  );
}

export default LandingPage;
