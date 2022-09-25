import React from "react";

import { FiSearch } from "react-icons/fi";
import "./../statics/search.css";

function SearchBar({ placeholder }) {
  return (
    <div className='search-bar'>
      <div item className='search-box'>
        <input className='search-text' type='text' />
      </div>
      <div item className='search-button'>
        <FiSearch
          size='2.2em'
          onClick={() => {
            console.log("ok");
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
