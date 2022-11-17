import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";


const Setup = () => {
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
            Create your shop
          </Typography>
          <Typography variant="body 2">
            Add photos, banner, and details for your shop.
          </Typography>
        </Box>

        <Box
          p={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderColor: "lightgrey",
            borderRadius: "3px",
          }}
        >
          <Avatar
            src="/images/face.png"
            style={{
              margin: "10px",
              width: "150px",
              height: "150px",
            }}
          />
          <Typography>Add a shop profile picture</Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Box>
        
        <Box
          p={3}
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
        >
          {" "}
          description about your shop
        </Box>
        <Box
          p={3}
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
        >
          {" "}
          customization tags
        </Box>
      </Grid>
    </div>
  );
};

export default Setup;
