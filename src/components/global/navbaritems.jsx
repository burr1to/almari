import React from "react";
import { Grid } from "@mui/material";

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
        <div className='list'>{page}</div>
      ))}
    </>
  );
}

export default NavBarItems;
