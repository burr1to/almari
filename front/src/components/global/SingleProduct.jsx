import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import "./../statics/product.css";
import Image from "./Image";
import styled from "styled-components";

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
function SingleProduct({ item }) {
  return (
    <div className='single-con'>
      <Circle />
      <Image src={item.img} className='main_image single-product-img' />
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
