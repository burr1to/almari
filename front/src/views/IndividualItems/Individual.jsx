import React, { useState, useEffect } from "react";
import Layout from "./../../components/global/Layout";
import "./statics/css/individual.css";
import Image from "./../../components/global/Image";
import ReviewAdd from "./components/ReviewAdd";
import Button from "../../components/global/Button";
import MenuItem from "@mui/material/MenuItem";
import Dropdown from "./../../components/global/Dropdown";
import ImageSidebar from "../../components/global/ImageSidebar";
import { Link } from "react-router-dom";
import { products } from "./../../components/data/testdata";
import { Favorite } from "@mui/icons-material";
import axios from "axios";
import { SketchPicker } from "react-color";
import Reviews from "./components/Reviews";

import "./../../components/statics/popular.css";
import "./../../components/statics/extra.css";

function Individual() {
  const [myData, setData] = useState([]);
  const [owner, setOwner] = useState([]);
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    const path = document.location.pathname.split("/")[2];

    axios.get(`http://localhost:8000/posts/${path}`).then((res) => {
      setData(res.data);
      setOwner(res.data.owner);

      function getRating() {
        axios
          .get(`http://localhost:8000/rating/${res.data.id}`)
          .then((response) => {
            setRatings(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      getRating();
    });
  }, []);

  // getRating();

  const [liked, setLiked] = useState(false);
  const [size, setSize] = useState("");
  const [col, setCol] = useState("#ffffff");

  const handleChangeSize = (event) => {
    console.log(event.target.value);
    setSize(event.target.value);
  };

  const handleLike = (e) => {
    console.log("a");
    setLiked(!liked);
  };

  const handleColor = (color, e) => {
    setCol(color);
  };

  const profileLink = `/users/${myData.owner_id}`;

  const UpperTitle = myData.title;

  return (
    <Layout>
      <br />
      <div className='individual-page'>
        <div className='product-grid'>
          <div className='img-container'>
            <ImageSidebar slides={products} />
          </div>
          <div className='info-container'>
            <ul className='basic-info'>
              <li className='title'>{UpperTitle}</li>
              <li className='price'>NPR {myData.price}</li>
            </ul>
            <br />
            <div className='company-info'>
              <Link to={profileLink} className='company-name'>
                {owner.name}
              </Link>
              <br />
              <Button
                onClick={handleLike}
                version={liked ? "favorite" : "tertiary"}
              >
                <Favorite />
              </Button>
            </div>

            <div className='product-main'>
              <form className='choice'>
                <h6>Quantity: 1</h6>
                <p>Size</p>

                <Dropdown
                  className='product-dropdown'
                  val={size}
                  label='size'
                  handleChange={handleChangeSize}
                >
                  <MenuItem value={1}>Small</MenuItem>
                  <MenuItem value={2}>Medium</MenuItem>
                  <MenuItem value={3}>Large</MenuItem>
                </Dropdown>

                <p>Color</p>
                <SketchPicker color={col} onChange={handleColor} />
              </form>
            </div>
            <div className='submit-btns'>
              <Button type='submit'>Add to Cart</Button>
              <Button type='submit' version='secondary'>
                Buy it Now
              </Button>
            </div>
          </div>
        </div>
        <div className='product-extra'>
          <div className='reviews'>
            <Reviews data={ratings} />
          </div>
          <div className='more-shop'>
            <div className='product-description'>
              <h6>About this Item</h6>
              <p className='description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <br />
            <div className='meet-your-seller'>
              <h5>Meet your Seller</h5>

              <Image
                src='https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                addStyles='seller-img'
              />
              <p>Ellie Goulding</p>
              <br />
              <Button>View Profile</Button>
            </div>
          </div>
        </div>
        <br />
        <ReviewAdd id={myData.id} user={myData.name} key={myData.email} />

        <div className='popular-items-individual'>
          <h5>See Similar Items like this</h5>
          <div className='popular-item-list'>
            {/* {popularProducts.map(
              (item, index) =>
                index < 5 && <Popular item={item} key={item.key} />
            )} */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Individual;
