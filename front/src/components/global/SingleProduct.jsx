import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import "./../statics/product.css";
import Image from "./Image";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

function SingleProduct({ productImg, ownerID, productID }) {
  const replacedImg = `http://${productImg.replace(",", " ")}`;
  return (
    <div className='ok'>
      <Link to='#'>
        <div className='single-con'>
          <Circle />
          <Image src={replacedImg} addStyles='single-product-img' />
        </div>
      </Link>
      <div className='info'>
        <div className='icon cart'>
          <ShoppingCartOutlined />
        </div>
        <div className='icon favorite'>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
