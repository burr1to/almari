import React from "react";

import { FiSearch } from "react-icons/fi";
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
        <a href='#'>
          <FiSearch
            color='grey'
            size='1.8em'
            onClick={() => {
              console.log("ok");
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
