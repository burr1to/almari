import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./../../components/global/Button";
import "./statics/css/login.css";
import back from "./statics/images/back.jpg";
import axios from "axios";
import { UserContext } from "../../utils/UserContext";
import { useEffect } from "react";

const Login = () => {
  const [verified, setVerified] = useState(null);

  //to check verified o r not, need userID which can be taken from context
  // useEffect(() => {
  //   axios.get()
  // });
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const formData = new FormData();

    formData.append("username", inputs.username);
    formData.append("password", inputs.password);
    await axios
      .post("http://localhost:8000/login/", formData)
      .then((response) => {
        localStorage.setItem("auth_token", response.data.access_token);
        localStorage.setItem("auth_token_type", response.data.token_type);

        console.log("Success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Stack direction={"row"} justifyContent={"space-between"} height={"100vh"}>
      <Box
        flex={0.65}
        p={2}
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          backgroundImage: `url(${back})`,
          backgroundSize: "cover",
          backgroundColor: "black",
          maxHeight: "100%",
        }}
      ></Box>

      <Box className='sign-in-con' flex={1}>
        <div className='title-login'>
          <div className='logo-button'>
            <h3>ALMARI</h3>
          </div>

          <Typography
            variant='h5'
            fontWeight={"bold"}
            sx={{ color: "primary.dark" }}
          >
            Discover products made
          </Typography>
          <Typography
            variant='h5'
            fontWeight={"bold"}
            sx={{ color: "primary.dark" }}
          >
            with love.
          </Typography>
        </div>

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
                name='username'
                value={inputs.username}
                label='Email ID'
                type='email'
                required
              />
              <TextField
                required
                onChange={handleChange}
                name='password'
                value={inputs.password}
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
