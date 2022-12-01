import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import "./../../../components/statics/product.css";
import Image from "../../../components/global/Image";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

function SingleProduct({ productImg, ownerID, productID }) {
  const handleLiked = (e) => {
    console.log();
  };
  const replacedImg = `http://${productImg.split(",")[0]}`;

  const path = `/product/${productID}`;
  return (
    <div className='ok'>
      <Link to={path}>
        <div className='single-con'>
          <Circle />
          <Image src={replacedImg} addStyles='single-product-img' />
        </div>
      </Link>
      <div className='info'>
        <div className='icon favorite'>
          <FavoriteBorderOutlined onClick={handleLiked} />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
