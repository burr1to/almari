import React from "react";
import { popularProducts } from "./../data/testdata.js";
import SingleProduct from "./SingleProduct";
import "./../statics/product.css";

function Product() {
  return (
    <div className='product-con'>
      {popularProducts.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Product;
