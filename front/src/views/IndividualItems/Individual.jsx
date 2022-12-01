import React, { useState, useEffect } from "react";
import Layout from "./../../components/global/Layout";
import "./statics/css/individual.css";
import Image from "./../../components/global/Image";
import ReviewAdd from "./components/ReviewAdd";
import Button from "../../components/global/Button";
import MenuItem from "@mui/material/MenuItem";
import Dropdown from "./../../components/global/Dropdown";
import ImageSidebar from "./components/ImageSidebar";
import { Link, useNavigate } from "react-router-dom";
import { Favorite } from "@mui/icons-material";
import axios from "axios";
import { SketchPicker } from "react-color";
import Reviews from "./components/Reviews";
import "./../../components/statics/popular.css";
import "./../../components/statics/extra.css";
import UserBoy from "./../../assets/user1.png";

function Individual() {
  const navigate = useNavigate();
  const [myData, setData] = useState({});
  const [owner, setOwner] = useState([]);

  const [img, setImg] = useState([]);
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    const path = document.location.pathname.split("/")[2];

    axios.get(`http://localhost:8000/posts/${path}`).then((res) => {
      setData(res.data);
      setOwner(res.data.owner);
      setImg(res.data.post_img.split(","));

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

  const handleViewProfile = () => {
    navigate(`/profile/${myData.owner_id}`);
  };

  const profileLink = `/users/${myData.owner_id}`;

  const UpperTitle = myData.title;

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

  const [count, setCount] = useState(0);

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  };

  const handleCart = (e) => {
    const data = {
      color: col,
      size: size,
      quantity: 1,
    };
    axios
      .post(`http://localhost:8000/cart/${myData.id}`, data, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
        console.log("Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <br />
      <div className='individual-page'>
        <div className='product-grid'>
          <div className='img-container'>
            <ImageSidebar images={img} />
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
                version={liked ? "favorite" : "favoriteoff"}
              >
                <div className='favorite'>
                  <Favorite />
                </div>
              </Button>
            </div>

            <div className='product-main'>
              <form className='choice'>
                <span>Quantity</span>
                <div className='quantity'>
                  <p
                    style={{
                      cursor: "pointer",
                    }}
                    className='increase'
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </p>
                  <p
                    style={{
                      cursor: "pointer",
                    }}
                    className='decrease'
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </p>
                </div>
                <p>Size</p>
                <Dropdown
                  className='product-dropdown'
                  val={size}
                  label='size'
                  handleChange={handleChangeSize}
                >
                  <MenuItem value={"XS"}>Extra Small</MenuItem>
                  <MenuItem value={"S"}>Small</MenuItem>
                  <MenuItem value={"M"}>Medium</MenuItem>
                  <MenuItem value={"L"}>Large</MenuItem>
                  <MenuItem value={"XL"}>X Large</MenuItem>
                  <MenuItem value={"XXL"}>XX Large</MenuItem>
                </Dropdown>

                <p
                  style={{
                    marginTop: "20px",
                  }}
                >
                  Color
                </p>
                <SketchPicker color={col} onChange={handleColor} />
              </form>
            </div>
            <div className='submit-btns'>
              <Button type='submit' onClick={handleCart}>
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
            <Reviews data={ratings} />
          </div>
          <div className='more-shop'>
            <div className='product-description'>
              <h6>About this Item</h6>
              <p>{myData.description}</p>
            </div>
            <br />
            <div className='meet-your-seller'>
              <h5>Meet your Seller</h5>
              <br />
              <Image src={UserBoy} addStyles='seller-img' />
              <p>{owner.name}</p>
              <br />
              <Button onClick={handleViewProfile}>View Profile</Button>
            </div>
          </div>
        </div>
        <br />
        <ReviewAdd reviewData={myData} key={myData.email} />

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
