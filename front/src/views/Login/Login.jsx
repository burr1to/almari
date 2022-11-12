import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./../../components/global/Layout";
import Button from "./../../components/global/Button";
import "./statics/css/login.css";

const Login = () => {
  const [inputs, setInputs] = useState({
    Email: "",
    Password: "",
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
    <Stack direction={"row"} justifyContent={"space-between"} height={"100vh"}>
      <Box
        flex={0.65}
        p={2}
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          backgroundColor: "primary.light",
          maxHeight: "100%",
        }}
      >
        <div className='logo-button'>
          <h3>ALMARI</h3>
        </div>

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

      <Box className='sign-in-con' flex={1}>
        <div className='sign-in-box'>
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
              <Typography
                style={{ textAlign: "center" }}
                variant='h5'
                fontWeight={"bold"}
              >
                Sign in to Almari
              </Typography>
              <TextField
                onChange={handleChange}
                name='Email'
                value={inputs.Email}
                label='Email'
                type='email'
                required
              />
              <TextField
                required
                onChange={handleChange}
                name='Password'
                value={inputs.Password}
                label='Password'
                type='password'
              />
              <Button type='submit' version='tertiary'>
                Sign In
              </Button>
            </Box>
          </form>
        </div>
        <br />
        <div className='sign-in-txt'>
          <div className='txt'> Don't have an account?</div>
          <div className='bt'>
            <Link to='/signup'>
              <Button version='tertiary'>Sign up</Button>
            </Link>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default Login;
