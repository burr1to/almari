import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          height="100vh"
        >
          <Box
            flex={0.65}
            p={2}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              backgroundColor: "#ffd68f",
              maxHeight: "100%",
            }}
          >
            <Button
              disableRipple
              sx={{
                padding: "40px 0px 0px 50px ",
                color: "#FEC868",
                fontWeight: "medium",
                fontSize: "24px",
                "&:hover": {
                  color: "#ae7a1f",
                  backgroundColor: "transparent",
                },
              }}
            >
              a l m a r i
            </Button>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              sx={{ padding: "20px 0px 0px 50px ", color: "#ae7a1f" }}
            >
              Discover products made
            </Typography>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              sx={{ padding: "0px 0px 0px 50px ", color: "#ae7a1f" }}
            >
              with love.
            </Typography>
          </Box>

          <Box flex={1}>
            <Box
              sx={{
                padding: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                variant="caption text"
                sx={{ padding: "10px 0px 10px 10px", fontSize: "14px" }}
              >
                Already have an account?
              </Typography>
              <Link to="/login">
                <Button
                  disableRipple
                  sx={{
                    textTransform: "none",
                    fontWeight: "normal",
                    "&:hover": {
                      color: "#FEC868",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Sign in
                </Button>
              </Link>
            </Box>

            <form onSubmit={handleSubmit}>
              <Box
                margin="auto"
                maxWidth="400px"
                padding="20px"
                display="flex"
                flexDirection={"column"}
                gap="30px"
              >
                <Typography variant="h5" fontWeight={"bold"}>
                  Sign up to Almari
                </Typography>
                <TextField
                  onChange={handleChange}
                  name="name"
                  value={inputs.name}
                  label="name"
                  type="name"
                  required
                />
                <TextField
                  onChange={handleChange}
                  name="number"
                  value={inputs.number}
                  label="number"
                  type="tel"
                  required
                />
                <TextField
                  onChange={handleChange}
                  name="email"
                  value={inputs.email}
                  label="email"
                  type="email"
                  required
                />
                <TextField
                  onChange={handleChange}
                  name="password"
                  value={inputs.password}
                  label="password"
                  type="password"
                  required
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
                  Create Account
                </Button>
              </Box>
            </form>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Signup;
