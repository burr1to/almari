import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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

function Individual() {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];

  const addReview = (newReview) => {
    newReview.id = uuidv4();
    console.log(newReview);
  };
  const [btnDisabled, setbtnDisabled] = useState(true);
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

  return (
    <Layout>
      <br />
      <div className='individual-page'>
        <div className='product-grid'>
          <div className='img-carousel-column'>
            {slides.map((slide) => console.log("1"))}
          </div>
          <div className='img-container'>
            <Image src={photo} className='main_image img-for-product' />
          </div>
          <div className='info-container'>
            <ul className='basic-info'>
              <li className='title'>Clothing Store</li>
              <li className='price'>$20</li>
            </ul>
            <br />
            <div className='company-info'>
              <p className='company-name'>Hattori Enterprises</p>
            </div>
            <p className='description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className='product-highlights'>
              <div className='choice'>
                <h6>Size</h6>

                <Dropdown
                  className='product-dropdown'
                  val={size}
                  handleChange={handleChangeSize}
                >
                  <MenuItem key={1} value={1}>
                    Small
                  </MenuItem>
                  <MenuItem key={2} value={2}>
                    Medium
                  </MenuItem>
                  <MenuItem key={3} value={3}>
                    Large
                  </MenuItem>
                </Dropdown>

                <h6>Color</h6>

                <Dropdown
                  className='product-dropdown'
                  val={color}
                  handleChange={handleChangeColor}
                >
                  <MenuItem value={4}>Red</MenuItem>
                  <MenuItem value={5}>Blue</MenuItem>
                  <MenuItem value={6}>Yellow</MenuItem>
                </Dropdown>
              </div>
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
          <div className='product-des'>a</div>
        </div>

        <br></br>
        <br></br>
        <div className='popular-items-individual'>
          <PopularItemList />
        </div>
      </div>
    </Layout>
  );
}

export default Individual;
