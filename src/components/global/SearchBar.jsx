import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../statics/search.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
        <a href='#'>Search</a>
      </div>
    </div>
  );
}

export default SearchBar;
