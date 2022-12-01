import { Upload } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "./../../components/global/Layout";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Grid
        container
        direction={"row"}
        gap={"30px"}
        padding={"30px"}
        justifyContent='space-between'
      >
        <Box
          flex={1}
          p={3}
          marginBottom='auto'
          sx={{
            border: 1,
            borderColor: "lightgrey",
            borderRadius: "10px",
            display: "flex",
            position: "sticky",
            top: "10px",
            flexDirection: "column",
          }}
        >
          <Box
            marginBottom={"30px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component='img'
              marginBottom={"15px"}
              sx={{
                height: 250,
                width: 250,
                maxHeight: { xs: 250, md: 150 },
                maxWidth: { xs: 250, md: 150 },
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src={"/images/face.png"}
              alt='shop profile picture Placeholder'
            />
            <Typography variant='h6' color={"brown.main"}>
              Shop Name
            </Typography>
            <Typography color='grey' variant='body1' sx={{ fontSize: "14px" }}>
              Owned by: Seller's Name
            </Typography>
          </Box>
          <Divider />
          <Box marginTop='30px'>
            <Typography
              variant='h6'
              color={"brown.main"}
              sx={{ fontSize: "17px" }}
            >
              About✨
            </Typography>
            <br />
            <Typography variant='body1' color='brown.light'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              condimentum quis purus non scelerisque. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Aenean eget libero
              accumsan, volutpat lectus eget, cursus urna. Aliquam cursus, nulla
              quis fermentum semper, massa nibh pretium quam, at fermentum
              lectus turpis sed erat. Vivamus.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
          flex={2}
          p={3}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant='h6' color={"brown.main"}>
              All Products
            </Typography>
            <Button
              disableRipple
              startIcon={<Upload />}
              sx={{
                "&:hover": {
                  color: "primary.light",
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => {
                navigate("/post");
              }}
            >
              Upload a product
            </Button>
          </Box>
          <Box sx={{ display: "flex", direction: "column" }}></Box>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Shop;
