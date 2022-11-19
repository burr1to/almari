import React, { useEffect, useState } from "react";
import "./statics/css/cartitems.css";
import Button from "./../../components/global/Button";
import Layout from "./../../components/global/Layout";
import SingleCart from "./components/SingleCart";
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
          <div className='cart-bottom'>
            {data.map((item) => (
              <SingleCart key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CartItems;
