import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Customization = () => {
 

  return (
    <div>
      <Grid
        container
        direction={"column"}
        gap={"20px"}
      >

        <Box marginTop={4} marginBottom={2}>
        <Divider/>

          <Typography
            marginTop={3}
            marginBottom={1}
            variant="h6"
            color={"brown.main"}
          >
            Scope & Pricing
          </Typography>
          <Typography color="grey">
            Set the prices and elements you want to offer for your 3 packages.
          </Typography>
        </Box>
        <Grid
          container
          direction={"row"}
          gap={"5px"}
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
        >
          <Box flex={1} p={3}>
            <Typography variant="h6" color={"primary.main"}>
              Basic
            </Typography>
            <Box marginTop={"20px"}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Description*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Summarize what this package offers buyers, and why you included
                these items in your package.
              </Typography>
              <TextField multiline required rows={5} sx={{ width: "100%" }} />
            </Box>
            <Box marginTop={"15px"}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Delivery Time*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Set a delivery time that makes sense for you, based on the
                combined time it takes you to create every part of the package
              </Typography>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Days </InputAdornment>
                  ),
                }}
                sx={{ width: "100%" }}
              />
            </Box>
            <Box marginTop={"15px"}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Price*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Price your package from lowest (Basic) to highest (Premium.)
              </Typography>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">रु</InputAdornment>
                  ),
                }}
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box flex={1} p={3}>
            <Typography variant="h6" color={"primary.main"}>
              Standard
            </Typography>
            <Box marginTop={"20px"}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Description*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Summarize what this package offers buyers, and why you included
                these items in your package.
              </Typography>
              <TextField multiline required rows={5} sx={{ width: "100%" }} />
            </Box>

            <Box marginTop={"15px"}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Delivery Time*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Set a delivery time that makes sense for you, based on the
                combined time it takes you to create every part of the package
              </Typography>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Days </InputAdornment>
                  ),
                }}
                sx={{ width: "100%" }}
              />
            </Box>
            <Box marginTop={"15px"}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Price*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Price your package from lowest (Basic) to highest (Premium.)
              </Typography>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">रु</InputAdornment>
                  ),
                }}
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box flex={1} p={3}>
            <Typography variant="h6" color={"primary.main"}>
              Premium
            </Typography>
            <Box marginTop={"20px"}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Description*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Summarize what this package offers buyers, and why you included
                these items in your package.
              </Typography>
              <TextField multiline required rows={5} sx={{ width: "100%" }} />
            </Box>
            <Box marginTop={"15px"}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Delivery Time*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Set a delivery time that makes sense for you, based on the
                combined time it takes you to create every part of the package
              </Typography>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Days </InputAdornment>
                  ),
                }}
                sx={{ width: "100%" }}
              />
            </Box>
            <Box marginTop={"15px"}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Price*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Price your package from lowest (Basic) to highest (Premium.)
              </Typography>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">रु</InputAdornment>
                  ),
                }}
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>
        </Grid>
        <Box
          p={3}
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
        >
          <Typography variant="h6" color={"brown.main"}>
            Get all the information you need from buyers to get started{" "}
          </Typography>
          <Typography color="grey" variant="body1" sx={{ fontSize: "14px" }}>
            Add questions to help buyers provide you with exactly what you need
            to start working on their order.
          </Typography>
          <Box
            marginTop={"20px"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
            }}
          >
            <Box flex={0.75}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Add a question
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Request necessary details such as dimensions, brand guidelines,
                and more.
              </Typography>
            </Box>
            <Box flex={2}>
              <TextField multiline rows={5} required sx={{ width: "100%" }} />
            </Box>
          </Box>
        </Box>

        <Box
          p={3}
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
        >
          <Typography variant="h6" color={"brown.main"}>
            Add a 3D Model
          </Typography>
          <Typography color="grey" variant="body1" sx={{ fontSize: "14px" }}>
            We provide 3d models for some businesses to show their final results
            in a virtual space.
            <br /> If you do mug or shirt printing then this is for you!
          </Typography>
          <Box
            marginTop={"20px"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
            }}
          >
            <Box flex={0.75}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Choose a model
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Pick ones that you use for your business. This will show up in
                your shop with which buyers can interact.
              </Typography>
            </Box>
            <Box flex={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "100px",
                  justifyContent: "center",
                }}
              >
                <Box sx={{
                  display: "flex",
                  flexDirection: "column"}}>
                  <Box
                  component="img"
                    bgcolor="secondary.light"
                    sx={{
                      height: 200,
                      width: 200,
                      maxHeight: { xs: 150, md: 200 },
                      maxWidth: { xs: 150, md: 200 },
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                    src={"/images/mug.png"}
                  />
                  <FormControlLabel control={<Checkbox/>} label="Mug"/>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "column"}}>
                <Box
                 component="img"
                  bgcolor="secondary.light"
                  sx={{
                    height: 200,
                    width: 200,
                    maxHeight: { xs: 150, md: 200 },
                    maxWidth: { xs: 150, md: 200 },
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                  src={"/images/shirt.png"}
                />
                <FormControlLabel control={<Checkbox/>} label="T-shirt"/>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default Customization;
