import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../statics/search.css";
import { IconButton } from "@mui/material";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ placeholder, onChange, onClick, value }) {
  return (
    <div className='search-bar'>
      <div item className='search-box'>
        <input
          className='search-text'
          type='text'
          value={value}
          placeholder='Search for products'
          onChange={onChange}
        />
      </div>

      <IconButton className='search-button' onClick={onClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
      </IconButton>
    </div>
  );
}

export default SearchBar;
