import React from "react";

import "./navbar.css";
import TextField from "@mui/material/TextField";

function SearchBar() {
  return (
    <div className='search-bar'>
      <TextField fullWidth className='search-bar' />
    </div>
  );
}

export default SearchBar;
