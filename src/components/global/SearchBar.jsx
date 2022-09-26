import React from "react";

import "./../statics/search.css";

function SearchBar({ placeholder }) {
  return (
    <div className='search-bar'>
      <div item className='search-box'>
        <input
          className='search-text'
          type='text'
          placeholder='Search for products'
        />
      </div>
      <div item className='search-button'>
        <a href='#'></a>
      </div>
    </div>
  );
}

export default SearchBar;
