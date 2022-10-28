import React from "react";
import Popular from "./Popular";
import "./../statics/popular.css";

function PopularItemList() {
  const n = 5; // Or something else

  return (
    <div className='popular-item-list'>
      {[...Array(n)].map((e, i) => (
        <Popular />
      ))}
    </div>
  );
}

export default PopularItemList;
