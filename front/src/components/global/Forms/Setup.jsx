import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
// import ReactFileReader from "react-file-reader";

const Setup = () => {
  const [url, setUrl] = useState("/images/face.png");

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
          <Typography marginTop={3} marginBottom={2} variant='h4'>
            Create your shop
          </Typography>
          <Typography>Add photos and details for your shop.</Typography>
        </Box>

        <Box
          p={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
            border: 1,

            borderRadius: "3px",
          }}
        >
          <Box
            component='img'
            sx={{
              height: 250,
              width: 250,
              maxHeight: { xs: 250, md: 150 },
              maxWidth: { xs: 250, md: 150 },
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={url}
            alt='shop profile picture Placeholder'
          />
          <Typography>✨Add a shop profile picture✨</Typography>

          {/* <ReactFileReader
            fileTypes={[".png", ".jpg"]}
            base64={true}
            handleFiles={handleFiles}
          > */}
          <Button
            variant='contained'
            sx={{
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            Upload
          </Button>
          {/* </ReactFileReader> */}
        </Box>
        <Box p={3} sx={{ border: 1, borderRadius: "3px" }}>
          <Typography variant='h6'>Describe Your Shop</Typography>
          <Typography variant='body1' sx={{ fontSize: "14px" }}>
            Tell the world about what you create and sell.
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
                variant='body1'
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Description*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                }}
              >
                Start with a brief overview that describes your shop.
                <br /> Not sure what to say?
                <br /> Write about your process, and the story behind your shop.
              </Typography>
            </Box>
            <Box flex={2}>
              <TextField multiline rows={10} required sx={{ width: "100%" }} />
            </Box>
          </Box>
        </Box>
        <Box p={3} sx={{ border: 1, borderRadius: "3px" }}>
          <Typography variant='h6'>Category</Typography>
          <Typography variant='body1' sx={{ fontSize: "14px" }}>
            Select a category that best describes what you sell.
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
                variant='body1'
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Category*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                }}
              >
                Categorizing your shop will help more shoppers find you.
              </Typography>
            </Box>
            <Box flex={2}>
              <Select
                id='shopCategory'
                value={category}
                onChange={handleChange}
                sx={{ width: "100%" }}
              >
                <MenuItem value='Art'>Art</MenuItem>
                <MenuItem value='Printing'>Printing</MenuItem>
                <MenuItem value='Handicraft'>Handicraft</MenuItem>
              </Select>
            </Box>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default Setup;
