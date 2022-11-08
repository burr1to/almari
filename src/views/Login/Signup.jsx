import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./../../components/global/Button";
import "./statics/css/login.css";

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: "",
    number: "",
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
          height='100vh'
        >
          <Box
            flex={0.65}
            p={2}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              backgroundColor: "secondary.light",
              maxHeight: "100%",
            }}
          >
            <div className='logo-button'>
              <h3>ALMARI</h3>
            </div>
            <Typography
              variant='h5'
              fontWeight={"bold"}
              sx={{ padding: "20px 0px 0px 50px ", color: "secondary.dark" }}
            >
              Discover products made
            </Typography>
            <Typography
              variant='h5'
              fontWeight={"bold"}
              sx={{ padding: "0px 0px 0px 50px ", color: "secondary.dark" }}
            >
              with love.
            </Typography>
          </Box>

          <Box className='sign-in-con' flex={1}>
            <div className='sign-in-box'>
              <form onSubmit={handleSubmit}>
                <Box
                  margin='auto'
                  maxWidth='400px'
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
                    Sign up to Almari
                  </Typography>
                  <TextField
                    onChange={handleChange}
                    name='name'
                    value={inputs.name}
                    label='name'
                    type='name'
                    required
                  />
                  <TextField
                    onChange={handleChange}
                    name='number'
                    value={inputs.number}
                    label='number'
                    type='tel'
                    required
                  />
                  <TextField
                    onChange={handleChange}
                    name='email'
                    value={inputs.email}
                    label='email'
                    type='email'
                    required
                  />
                  <TextField
                    onChange={handleChange}
                    name='password'
                    value={inputs.password}
                    label='password'
                    type='password'
                    required
                  />
                  <Button type='submit' version='tertiary'>
                    Sign Up
                  </Button>
                </Box>
              </form>
            </div>
            <br />
            <div className='sign-in-txt'>
              <div className='txt'>Already have an account?</div>
              <div className='bt'>
                <Link to='/login'>
                  <Button version='tertiary'>Log In</Button>
                </Link>
              </div>
            </div>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Signup;
