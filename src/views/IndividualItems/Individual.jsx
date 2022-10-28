import React from "react";
import { v4 as uuidv4 } from "uuid";
import Layout from "./../../components/global/Layout";
import "./statics/css/individual.css";
import Image from "./../../components/global/Image";
import photo from "./pexel.jpg";
import Reviews from "./../../components/global/Reviews";
import PopularItemList from "./../../components/global/PopularItemList";
import ReviewAdd from "../../components/global/ReviewAdd";
import Button from "../../components/global/Button";
import TestData from "./../../components/data/test.json";

function individual() {
  const addReview = (newReview) => {
    newReview.id = uuidv4();
    console.log(newReview);
  };
  return (
    <Layout>
      <br />
      <div className='individual-product-page'>
        <div className='product-grid'>
          <div className='img-container'>
            <Image src={photo} className='main_image img-for-product' />
          </div>
          <div className='info-container'>
            <ul className='basic-info'>
              <li className='title'>Ding Ding Ding Ninja Store</li>
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
              <h2>Highlights</h2>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              </ul>
            </div>
            <Button>Add to Cart</Button>
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
      </div>
    </Layout>
  );
}

export default individual;
