import React, { useEffect, useState } from "react";
import "./statics/css/cartitems.css";
import Button from "./../../components/global/Button";
import Layout from "./../../components/global/Layout";
import SingleCart from "./components/SingleCart";
import { Grid } from "@mui/material";
import ProfileBox from "../../components/global/ProfileBox";
import axios from "axios";
function CartItems() {
  const [data, setData] = useState({});

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/cart/", { headers: headers })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className='cart-container'>
        <div className='cart-wrapper'>
          <h4 className='cart-title'>Your Bag</h4>

          <div className='cart-top'>
            <Button version='tertiary'>Continue Shopping</Button>
            <Button version='primary'>Checkout Now</Button>
          </div>
          <br />
          {Object.keys(data).length === 0 ? (
            <div
              style={{
                textAlign: "center",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                }}
              >
                No items in cart!
              </p>
              <br />
              <Button>Shop more</Button>
            </div>
          ) : (
            <div className='cart-bottom'>
              {data.map((item) => (
                <SingleCart key={item.id} data={item} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='profile-showcase'>
        <p className='landing-text'>Discover our Creators</p>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          {/* {data.map(
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
          )} */}
        </Grid>
      </div>
    </Layout>
  );
}

export default CartItems;
