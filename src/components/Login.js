import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          height={"100vh"}
        >
          <Box
            flex={0.65}
            p={2}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              backgroundColor: "#cfe1a1",
              maxHeight: "100%",
            }}
          >
            <Button
              disableRipple
              sx={{
                padding: "40px 0px 0px 50px ",
                color: "#ABC270",
                fontWeight: "medium",
                fontSize: "24px",
                "&:hover": {
                  color: "#6e7b4e",
                  backgroundColor: "transparent",
                },
              }}
            >
              a l m a r i
            </Button>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              sx={{ padding: "20px 0px 0px 50px ", color: "#6e7b4e" }}
            >
              Discover products made
            </Typography>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              sx={{ padding: "0px 0px 0px 50px ", color: "#6e7b4e" }}
            >
              with love.
            </Typography>
          </Box>

          <Box flex={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px",
              }}
              marginLeft="auto"
              maxWidth={"50%"}
            >
              <Typography
                variant="caption text"
                sx={{ padding: "10px 0px 10px 10px", fontSize: "14px" }}
              >
                Don't have an account?
              </Typography>
              <Link to="/signup">
                <Button
                  disableRipple
                  sx={{
                    textTransform: "none",
                    fontWeight: "normal",
                    "&:hover": {
                      color: "#ABC270",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Sign up
                </Button>
              </Link>
            </Box>
            <Box padding={"50px"}>
              <form onSubmit={handleSubmit}>
                <Box
                  justifyContent={"center"}
                  margin="auto"
                  maxWidth="400px"
                  maxHeight={"75%"}
                  padding="20px"
                  display="flex"
                  flexDirection={"column"}
                  gap="30px"
                >
                  <Typography variant="h5" fontWeight={"bold"}>
                    Sign in to Almari
                  </Typography>
                  <TextField
                    onChange={handleChange}
                    name="email"
                    value={inputs.email}
                    label="email"
                    type="email"
                    required
                  />
                  <TextField
                    required
                    onChange={handleChange}
                    name="password"
                    value={inputs.password}
                    label="password"
                    type="password"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      width: "50%",
                      backgroundColor: "#473c33",
                      textTransform: "none",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#6c5746",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
