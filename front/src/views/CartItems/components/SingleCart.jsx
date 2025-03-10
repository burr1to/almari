import React from "react";
import Image from "../../../components/global/Image";
import "./../../../components/statics/extra.css";
import styled from "styled-components";
import Button from "../../../components/global/Button";

const ProductName = styled.span``;

const handleDelete = (e,id)=>{
  
}
const ProductID = styled.span``;
const Quantity = styled.span``;

const ProductCategory = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const ProductSize = styled.span``;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

function SingleCart() {
  const category = "category";
  const test =
    "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png";
  return (
    <div className='single-cart'>
      <Button version = "close">X</Button>
      <div className='single-cart-info'>
        <div className='cart-product'>
          <div className='product-detail'>
            <Image src={test} className='main_image show-img' />

            <div className='description'>
              <ProductName>
                <b>Product: </b>Product Name
              </ProductName>
              <ProductID>
                <b>Product ID: </b>1232434
              </ProductID>
              <ProductCategory>
                <b>Category: </b>
                {category}
              </ProductCategory>
              <Quantity>
                <b>Quantity: </b>1 pieces
              </Quantity>
              {category === "category" && <ProductColor color='black' />}
              {category === "category" && (
                <ProductSize>
                  <b>Size:</b> 37.5
                </ProductSize>
              )}
            </div>
          </div>

          <div className='price-details'>$50</div>
        </div>
        <Hr />
      </div>

      <div className='single-cart-summary'>
        <div className='summary-item'>
          <SummaryItemText>Subtotal</SummaryItemText>
          <SummaryItemPrice>$80</SummaryItemPrice>
        </div>
        <div className='summary-item'>
          <SummaryItemText>Shipping Cost</SummaryItemText>
          <SummaryItemPrice>$5.90</SummaryItemPrice>
        </div>
        <div className='summary-item'>
          <SummaryItemText>Discount</SummaryItemText>
          <SummaryItemPrice>$0</SummaryItemPrice>
        </div>
        <div className='summary-item'>
          <SummaryItemText>Total</SummaryItemText>
          <SummaryItemPrice>$85.5</SummaryItemPrice>
        </div>
       
      </div>
    </div>
  );
}

export default SingleCart;
