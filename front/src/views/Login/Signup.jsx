import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./../../components/global/Button";
import "./statics/css/login.css";
import back from "./statics/images/back2.jpg";
import axios from "axios";

const Signup = () => {
  let navigate = useNavigate();
  let confirm = useRef();

  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    phone_number: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleLogo = (e) => {
    navigate("/");
  };

  const handleChange = (e) => {
    if (e.target.name === "confirm") {
      if (e.target.value !== inputs.password) {
        setError("Confirm your password!!");
        setDisabled(true);
        confirm.current.classList.remove("confirmed");
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      } else if (e.target.value === inputs.password) {
        setError("Password Match!! Login then!!");
        confirm.current.classList.add("confirmed");
        setDisabled(false);
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }
    } else {
      setError(null);
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    console.log(inputs);
    e.preventDefault();

    await axios
      .post("http://localhost:8000/users", inputs)
      .then((response) => {
        navigate("/login");
        console.log("Success");

        navigate("/login");

        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"} height='100vh'>
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
              <h3 onClick={handleLogo}>ALMARI</h3>
            </div>

            <Typography
              variant='h5'
              letterSpacing='3px'
              fontWeight={"bold"}
              sx={{ color: "primary.main" }}
            >
              Discover products made
            </Typography>
            <Typography
              variant='h5'
              letterSpacing='3px'
              fontWeight={"bold"}
              sx={{ color: "primary.main" }}
            >
              with love.
            </Typography>
          </div>

          <div className='sign-in-box'>
            <form onSubmit={handleSubmit}>
              <Box
                margin='auto'
                maxWidth='400px'
                padding='10px'
                display='flex'
                flexDirection={"column"}
                gap='23px'
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
                  label='Full Name'
                  type='name'
                  required
                />
                <TextField
                  onChange={handleChange}
                  name='phone_number'
                  value={inputs.phone_number}
                  label='Phone Number'
                  type='tel'
                  required
                />
                <TextField
                  onChange={handleChange}
                  name='email'
                  value={inputs.email}
                  label='Email ID'
                  type='email'
                  required
                />
                <TextField
                  onChange={handleChange}
                  name='password'
                  value={inputs.password}
                  label='Set Password'
                  type='password'
                  required
                />
                <TextField
                  onChange={handleChange}
                  name='confirm'
                  label='Confirm Password'
                  type='password'
                  required
                  value={inputs.confirm}
                />
                <p className='error-msg' ref={confirm}>
                  {error}
                </p>
                <Button type='submit' version='primary' isDisabled={disabled}>
                  Sign Up
                </Button>
              </Box>
            </form>
          </div>
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
    </div>
  );
};

export default Signup;
