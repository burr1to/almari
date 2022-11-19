import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "./../../components/global/Layout";
import "./statics/css/individual.css";
import Image from "./../../components/global/Image";
import Popular from "./../../components/global/Popular";
import ReviewAdd from "./components/ReviewAdd";
import Button from "../../components/global/Button";
import TestData from "./../../components/data/test.json";
import MenuItem from "@mui/material/MenuItem";
import Dropdown from "./../../components/global/Dropdown";
import ImageSidebar from "../../components/global/ImageSidebar";
import { Link } from "react-router-dom";
import { products, popularProducts } from "./../../components/data/testdata";
import "./../../components/statics/popular.css";
import { Favorite } from "@mui/icons-material";
import axios from "axios";
import SingleReview from "./components/SingleReview";
import "./../../components/statics/extra.css";

function Individual() {
  const [myData, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/users/1").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(myData);

  const [btnDisabled, setbtnDisabled] = useState();
  const [liked, setLiked] = useState(false);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleChangeSize = (event) => {
    console.log(event.target.value);
    setSize(event.target.value);
  };
  const handleChangeColor = (event) => {
    console.log(event.target.value);
    setColor(event.target.value);
  };

  const handleLike = (e) => {
    console.log("a");
    setLiked(!liked);
  };

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

                <Dropdown
                  className='product-dropdown'
                  val={color}
                  label='color'
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
            <div className='reviews-con'>
              <h5>0 Shop Reviews</h5>
              <p>Average Rating: N/A</p>
              <br />
              <div className='review-list'>
                {TestData.map((singledata) => (
                  <SingleReview key={singledata.id} item={singledata} />
                ))}
              </div>
            </div>
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
                className='main_image seller-img'
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
            {popularProducts.map(
              (item, index) =>
                index < 5 && <Popular item={item} key={item.key} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Individual;
