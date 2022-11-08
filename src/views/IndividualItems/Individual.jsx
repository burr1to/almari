import React, { useState, useRef } from "react";

import Layout from "./../../components/global/Layout";
import "./statics/css/individual.css";
import Image from "./../../components/global/Image";
import photo from "./../../assets/pexel.jpg";
import Reviews from "./components/Reviews";
import PopularItemList from "./../../components/global/PopularItemList";
import ReviewAdd from "./components/ReviewAdd";
import Button from "../../components/global/Button";
import TestData from "./../../components/data/test.json";
import MenuItem from "@mui/material/MenuItem";
import Dropdown from "./../../components/global/Dropdown";
import ImageSidebar from "../../components/global/ImageSidebar";
import { Link } from "react-router-dom";

function Individual() {
  const sellerphoto =
    "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const photo2 =
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const slides = [
    {
      url: "  https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "forest",
    },
    {
      url: "https://images.pexels.com/photos/5245865/pexels-photo-5245865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "beach",
    },
    {
      url: "https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "boat",
    },
    {
      url: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "forest",
    },
  ];

  const addReview = (newReview) => {
    console.log(newReview);
  };

  const [btnDisabled, setbtnDisabled] = useState();
  const [btnLiked, setLiked] = useState(false);

  const [text, setText] = useState("Like");

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleChangeSize = (event) => {
    setSize(event.target.value);

    console.log(event.target.value);
  };
  const handleChangeColor = (event) => {
    setColor(event.target.value);
    console.log(event.target.value);
  };

  const handleClick = (e) => {
    setText(!btnLiked ? "Liked" : "Like");
    setLiked(!btnLiked);
  };

  return (
    <Layout>
      <br />
      <div className='individual-page'>
        <div className='product-grid'>
          <div className='img-container'>
            <ImageSidebar slides={slides} />
            {/* <Image src={photo2} className='main_image img-for-product' /> */}
          </div>
          <div className='info-container'>
            <ul className='basic-info'>
              <li className='title'>Clothing Store</li>
              <li className='price'>$20</li>
            </ul>
            <br />
            <div className='company-info'>
              <Link to='/profile' className='company-name'>
                Hattori Enterprises
              </Link>
              <br />
              <Button
                version={btnLiked ? "favorite" : "primary"}
                onClick={handleClick}
              >
                {text}
              </Button>
            </div>

            <div className='product-main'>
              <form className='choice'>
                <h6>Quantity: 1</h6>
                <p>Size</p>

                <Dropdown
                  className='product-dropdown'
                  val={size}
                  handleChange={handleChangeSize}
                >
                  <MenuItem value={1}>Small</MenuItem>
                  <MenuItem value={2}>Medium</MenuItem>
                  <MenuItem value={3}>Large</MenuItem>
                </Dropdown>

                <p>Color</p>

                <Dropdown
                  className='product-dropdown'
                  val={color}
                  handleChange={handleChangeColor}
                >
                  <MenuItem value={4}>Red</MenuItem>
                  <MenuItem value={5}>Blue</MenuItem>
                  <MenuItem value={6}>Yellow</MenuItem>
                </Dropdown>
              </form>
            </div>
            <div className='submit-btns'>
              <Button type='submit' isDisabled={btnDisabled}>
                Add to Cart
              </Button>
              <Button type='submit' version='secondary'>
                Buy it Now
              </Button>
            </div>
          </div>
        </div>
        <div className='product-extra'>
          <div className='reviews'>
            <Reviews data={TestData} />
            <br />
            <ReviewAdd handleAdd={addReview} />
          </div>
          <div className='more-shop'>
            <div className='product-description'>
              <h6>About this Item</h6>
              <p className='description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className='meet-your-seller'>
              <h5>Meet your Seller</h5>
              <div className='meet-seller-flex-box'>
                <Image src={sellerphoto} className='main_image seller-img' />
                <p>Ellie Goulding</p>
              </div>
              <Button>View Profile</Button>
            </div>
          </div>
        </div>

        <div className='popular-items-individual'>
          <h5>See Similar Items like this</h5>
          <PopularItemList />
        </div>
      </div>
    </Layout>
  );
}

export default Individual;
