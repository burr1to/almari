import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./../../components/global/Layout";

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
    <>
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
            backgroundColor: "primary.light",
            maxHeight: "100%",
          }}
        >
          <Button
            disableRipple
            sx={{
              padding: "40px 0px 0px 50px ",
              fontWeight: "medium",
              fontSize: "24px",
              "&:hover": {
                color: "primary.dark",
                backgroundColor: "transparent",
              },
            }}
          >
            a l m a r i
          </Button>
          <Typography
            variant='h5'
            fontWeight={"bold"}
            sx={{ padding: "20px 0px 0px 50px ", color: "primary.dark" }}
          >
            Discover products made
          </Typography>
          <Typography
            variant='h5'
            fontWeight={"bold"}
            sx={{ padding: "0px 0px 0px 50px ", color: "primary.dark" }}
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
            marginLeft='auto'
            maxWidth={"50%"}
          >
            <Typography
              variant='caption text'
              sx={{ padding: "10px 0px 10px 10px", fontSize: "14px" }}
            >
              Don't have an account?
            </Typography>
            <Link to='/signup'>
              <Button
                disableRipple
                sx={{
                  color: "brown.main",
                  textTransform: "none",
                  fontWeight: "normal",
                  "&:hover": {
                    color: "primary.main",
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
                margin='auto'
                maxWidth='400px'
                maxHeight={"75%"}
                padding='20px'
                display='flex'
                flexDirection={"column"}
                gap='30px'
              >
                <Typography variant='h5' fontWeight={"bold"}>
                  Sign in to Almari
                </Typography>
                <TextField
                  onChange={handleChange}
                  name='email'
                  value={inputs.email}
                  label='email'
                  type='email'
                  required
                />
                <TextField
                  required
                  onChange={handleChange}
                  name='password'
                  value={inputs.password}
                  label='password'
                  type='password'
                />
                <Button
                  //   type='submit'
                  //   variant='contained'
                  //   size='large'
                  //   color='brown'
                  sx={{
                    width: "50%",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "brown.light",
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
    </>
  );
};

export default Login;
