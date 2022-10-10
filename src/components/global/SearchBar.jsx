import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../statics/search.css";
import { IconButton } from "@mui/material";
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

      <IconButton className='search-button'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
      </IconButton>
    </div>
  );
}

export default SearchBar;
