import {
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import ReactFileReader from "react-file-reader";
import Customization from "./Customization";

const Stock = () => {
  const [url, setUrl] = useState("/images/upload.png");
  const [isChecked, setIsChecked] = useState(false);
  const handleFiles = (files) => {
    console.log(files);
    setUrl(files.base64);
  };
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <Grid
        container
        direction={"column"}
        p={3}
        gap={"20px"}
        paddingBottom={"100px"}
      >
        <Box marginBottom={2}>
          <Typography
            marginTop={3}
            marginBottom={2}
            variant="h4"
            color={"brown.main"}
          >
            Add your products
          </Typography>
          <Typography color="grey">
            Add photos and details about your item.
          </Typography>
        </Box>
        <Box
          p={3}
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
        >
          <Typography variant="h6" color={"brown.main"}>
            Photo
          </Typography>
          <Typography color="grey" variant="body1" sx={{ fontSize: "14px" }}>
            Add a photo so the buyer can see what they are getting.
          </Typography>
          <Box
            marginTop={"30px"}
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
                Tips for your photo
              </Typography>
              <Typography
                marginTop={"10px"}
                marginBottom={"20px"}
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Use photo to show your items most important <br />
                qualities.
                <br />
                <br />• Use natural light and no flash.
                <br />• Show the item being held, worn, or used.
                <br />• Shoot against a clean, simple background.
              </Typography>
              <ReactFileReader
                fileTypes={[".png", ".jpg"]}
                base64={true}
                handleFiles={handleFiles}
              >
                <Button
                  variant="contained"
                  color="brown"
                  sx={{
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "brown.light",
                      boxShadow: "none",
                    },
                  }}
                >
                  Upload
                </Button>
              </ReactFileReader>
            </Box>
            <Box flex={2}>
              <Box
                component="img"
                sx={{
                  height: 280,
                  width: 280,
                  maxHeight: { xs: 250, md: 280 },
                  maxWidth: { xs: 250, md: 280 },
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
                src={url}
                alt="shop profile picture Placeholder"
              />
            </Box>
          </Box>
        </Box>
        <Box
          p={3}
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
        >
          <Typography variant="h6" color={"brown.main"}>
            Listing Details
          </Typography>
          <Typography color="grey" variant="body1" sx={{ fontSize: "14px" }}>
            Tell the world all about your item and why they’ll love it.
          </Typography>
          <Box
            marginTop={"30px"}
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
                Title*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Include keywords that buyers would use to search for your item.{" "}
              </Typography>
            </Box>
            <Box flex={2}>
              <TextField required sx={{ width: "100%" }} />
            </Box>
          </Box>{" "}
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
                Category*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Adding category will help more shoppers find you.
              </Typography>
            </Box>
            <Box flex={2}>
              <Select
                id="shopCategory"
                value={category}
                onChange={handleChange}
                sx={{ width: "100%" }}
              >
                <MenuItem value="Art">Art</MenuItem>
                <MenuItem value="Printing">Printing</MenuItem>
                <MenuItem value="Handicraft">Handicraft</MenuItem>
              </Select>
            </Box>
          </Box>
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
                Description*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Start with a brief overview that describes your item’s finest
                features. You can also include the story behind your item.
              </Typography>
            </Box>
            <Box flex={2}>
              <TextField multiline rows={10} required sx={{ width: "100%" }} />
            </Box>
          </Box>
        </Box>
        <Box
          p={3}
          paddingBottom="2px"
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
        >
          <Typography variant="h6" color={"brown.main"}>
            Inventory and Pricing
          </Typography>
          <Box
            marginTop={"30px"}
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
                Price*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Remember to factor in the costs of materials, labour, <br /> and
                other business expenses.
              </Typography>
            </Box>
            <Box flex={2}>
              <TextField
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">रु</InputAdornment>
                  ),
                }}
                sx={{ width: "25%" }}
              />
            </Box>
          </Box>
          <Box
            marginTop={"30px"}
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
                Stock*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Add the total quantity you have of the item.
              </Typography>
            </Box>
            <Box flex={2}>
              <TextField required sx={{ width: "25%" }} />
            </Box>
          </Box>
        </Box>
        <Box
          p={3}
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" color={"brown.main"}>
              Customization
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
              }
              labelPlacement="start" label={isChecked ? "On" : "Off"}
            />
          </Box>
          <Typography color="grey" variant="body1" sx={{ fontSize: "14px" }}>
            Add descriptions,prices, and collect information for the products
            that you personalize.
          </Typography>
          {isChecked && <Box> <Customization/> </Box>}
        </Box>
      </Grid>
    </div>
  );
};

export default Stock;
