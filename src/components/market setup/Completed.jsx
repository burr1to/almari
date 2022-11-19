import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Completed = () => {
  return (
    <div>
      <Box
        margin="auto"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 250,
            width: 250,
            maxHeight: { xs: 250, md: 250 },
            maxWidth: { xs: 250, md: 250 },
            objectFit: "cover",
          }}
          src={"/images/trophee.png"}
        />
        <Typography variant="h6" color={"brown.main"}>
        ✨You've completed all the steps.✨
        </Typography>
        <Button
          disableRipple
          sx={{
            fontWeight: "medium",
            "&:hover": {
              color: "primary.light",
              backgroundColor: "transparent",
            },
          }}
        >
          Go to your shop
        </Button>
      </Box>
    </div>
  );
};

export default Completed;
