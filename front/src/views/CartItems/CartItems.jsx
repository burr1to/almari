import React from "react";
import "./statics/css/cartitems.css";
import Button from "./../../components/global/Button";
import Layout from "./../../components/global/Layout";
import SingleCart from "./components/SingleCart";
function CartItems() {
  return (
    <Layout>
      <div className='cart-container'>
        <div className='cart-wrapper'>
          <h4 className='cart-title'>Your Bag</h4>

          <div className='cart-top'>
            <Button version='tertiary'>Continue Shopping</Button>
            <Button version='primary'>
              Checkout Now
            </Button>
          </div>
          <br />
          <div className='cart-bottom'>
            <SingleCart />
            <SingleCart />
            <SingleCart />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CartItems;
