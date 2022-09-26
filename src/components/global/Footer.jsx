import React from "react";
import "./../statics/footer.css";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-elements'>
        <Grid container direction='row'>
          <Grid item xs={3} className='grid-for-footer'>
            Get Help
          </Grid>
          <Grid item xs={3} className='grid-for-footer'>
            Shop
          </Grid>
          <Grid item xs={3} className='grid-for-footer'>
            Sell your Items
          </Grid>
          <Grid item xs={3} className='grid-for-footer'>
            About
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
