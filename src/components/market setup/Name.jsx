import { Typography, Box, Stack, TextField } from "@mui/material";
import React from "react";

const Name = () => {
  return (
    <div>
      <Stack direction={"row"} justifyContent={"center"}>
        <form>
          <Box
            justifyContent={"center"}
            maxWidth="450px"
            maxHeight={"75%"}
            paddingTop="70px"
            display="flex"
            flexDirection={"column"}
            gap="25px"
          >
            <Typography textAlign={"center"} variant ="h4" sx={{color:"brown.main"}}>Name Your Shop</Typography>
            <Typography>
              Set a unique name for your shop which helps people find you.
            </Typography>
            <TextField
            required
              placeholder="Enter your shop name"
              sx={{ width: "100%" }}
            />
          </Box>
        </form>
      </Stack>
    </div>
  );
};

export default Name;
