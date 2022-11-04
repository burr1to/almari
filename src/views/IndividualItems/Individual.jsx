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

function Individual() {
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
                  <MenuItem value={1}>Small</MenuItem>
                  <MenuItem value={2}>Medium</MenuItem>
                  <MenuItem value={3}>Large</MenuItem>
                </Dropdown>

                <h6>Color</h6>

                <Dropdown
                  className='product-dropdown'
                  val={color}
                  handleChange={handleChangeColor}
                >
                  <MenuItem value={1}>Red</MenuItem>
                  <MenuItem value={2}>Blue</MenuItem>
                  <MenuItem value={3}>Yellow</MenuItem>
                </Dropdown>
              </div>
            </div>
            <Button type='submit' isDisabled={btnDisabled}>
              Add to Cart
            </Button>
          </div>
        </div>
        <div className='product-extra'>
          <div className='reviews'>
            <Reviews data={TestData} />
            <br />
            <ReviewAdd handleAdd={addReview} />
          </div>
          <div className='product-des'>asdad</div>
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
