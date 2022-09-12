import React from "react";
import { Grid } from "@mui/material";
import "./navbar.css";
const pages = [
  "Home",
  "Inspiration",
  "Today's Deals",
  "Sell your Items",
  "Support",
];
function NavBarItems() {
  return (
    <>
      {pages.map((page) => (
        <div className='list-navbar'>
          <div className='ok'>{page}</div>
        </div>
      ))}
    </>
  );
}

export default NavBarItems;
