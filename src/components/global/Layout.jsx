import { Grid } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "./../statics/navbar.css";
import "./../statics/footer.css";

const DashboardLayout = ({ children, navbar = <NavBar /> }) => {
  return (
    <Grid container direction='column'>
      <Grid item className='Layout-Navbar'>
        {navbar}
      </Grid>
      <Grid item className='Layout-MainArea'>
        {children}
      </Grid>
      <Grid item className='Layout-Footer'>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
