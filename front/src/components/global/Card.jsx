import React from "react";
import "./../statics/extra.css";
import { Grid } from "@mui/material";
import Image from "./Image";
import customImg from "./../../assets/vision.jpg";

function Card() {
  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-start'
      alignItems='center'
    >
      <Grid item>
        <Image src={customImg} addStyles='custom-img' />
      </Grid>
      <Grid item>Item Name</Grid>
    </Grid>
  );
}

export default Card;
