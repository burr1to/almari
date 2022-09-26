import React from "react";
import Layout from "./../../components/global/Layout";
import "./statics/css/individual.css";
import Grid from "@mui/material/Grid";
function individual() {
  return (
    <Layout>
      <Grid
        container
        direction='column'
        justifyContent='space-around'
        alignItems='center'
      >
        <Grid item className='individual-photo'></Grid>
        <Grid item></Grid>
      </Grid>
    </Layout>
  );
}

export default individual;
