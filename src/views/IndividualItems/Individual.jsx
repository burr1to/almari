import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Layout from "./../../components/global/Layout";
import "./statics/css/individual.css";
import Image from "./../../components/global/Image";
import photo from "./pexel.jpg";
import Reviews from "./components/Reviews";
import PopularItemList from "./../../components/global/PopularItemList";
import ReviewAdd from "./components/ReviewAdd";
import Button from "../../components/global/Button";
import TestData from "./../../components/data/test.json";
import MenuItem from "@mui/material/MenuItem";
import Dropdown from "./../../components/global/Dropdown";

function Individual() {
  const addReview = (newReview) => {
    newReview.id = uuidv4();
    console.log(newReview);
  };
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
    setColor(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Layout>
      <br />

      <div className='product-grid'>
        <div className='img-carousel-column'>asdasd</div>
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
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className='product-highlights'>
            <div className='choice'>
              <h6>Size</h6>

              <Dropdown
                className='product-dropdown'
                val={size}
                handleChange={handleChange}
                labelVal='Size'
              >
                <MenuItem value={10}>Small</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>Large</MenuItem>
              </Dropdown>

              <h6>Color</h6>

              <Dropdown
                className='product-dropdown'
                val={color}
                handleChange={handleChange}
                labelVal='Color'
              >
                <MenuItem value={10}>Red</MenuItem>
                <MenuItem value={20}>Blue</MenuItem>
                <MenuItem value={30}>Yellow</MenuItem>
              </Dropdown>
            </div>
          </div>
          <Button type='submit' isDisabled={btnDisabled}>
            Add to Cart
          </Button>
        </div>
      </div>
      <div className='reviews'>
        <Reviews data={TestData} />
        <br />
        <ReviewAdd handleAdd={addReview} />
      </div>
      <br></br>
      <br></br>
      <div className='popular-items-individual'>
        <PopularItemList />
      </div>
    </Layout>
  );
}

export default Individual;
