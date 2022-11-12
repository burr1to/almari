import React from "react";
import Popular from "./Popular";
import "./../statics/popular.css";
import { popularProducts } from "./../data/testdata.js";

function PopularItemList() {
  return (
    <div className='popular-item-list'>
      {popularProducts.map(
        (item, index) => index < 5 && <Popular item={item} key={item.key} />
      )}
    </div>
  );
}

export default PopularItemList;
