import {
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import Button from "./../../../components/global/Button";
import axios from "axios";
import Layout from "./../../../components/global/Layout";

import "./../../../components/statics/preview.css";
import "./../../../components/statics/post.css";
import UserBoy from "./../../../assets/user1.png";

import ReactFileReader from "react-file-reader";

const Post = () => {
  const [profileImg, setProfileImg] = useState("");

  const [tempImages, setTempImages] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [error, setError] = useState("");

  const [url, setUrl] = useState(UserBoy);

  const handleFiles = (files) => {
    console.log(files);
    setUrl(files.base64);
  };

  const [edit, SetEdit] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    stock: "",
  });

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  };

  const handleChange = (e) => {};

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // await axios
    //   .post("http://localhost:8000/posts/", formData, { headers: headers })
    //   .then((response) => {
    //     // setTimeout(() => {
    //     //   window.location.reload();
    //     // }, 1500);
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <Layout>
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
            variant='h4'
            color={"brown.main"}
          >
            Edit your Personal Profile
          </Typography>
          <Typography color='grey'>
            Edit your bio and add your social media links!!
          </Typography>
        </Box>

        <Box
          p={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderColor: "lightgrey",
            borderRadius: "3px",
          }}
        >
          <Box
            component='img'
            sx={{
              height: 250,
              width: 250,
              maxHeight: { xs: 250, md: 150 },
              maxWidth: { xs: 250, md: 150 },
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={url}
            alt='shop profile picture Placeholder'
          />
          <Typography>✨Set your Profile Picture✨</Typography>

          <ReactFileReader
            fileTypes={[".png", ".jpg"]}
            base64={true}
            handleFiles={handleFiles}
          >
            <Button
              variant='contained'
              color='brown'
              sx={{
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "brown.light",
                  boxShadow: "none",
                },
              }}
            >
              Upload
            </Button>
          </ReactFileReader>
        </Box>
        <Box
          p={3}
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
        >
          <Typography
            variant='h6'
            sx={{ fontSize: "24px" }}
            color={"brown.main"}
          >
            Edit Profile Details
          </Typography>
          <br />
          <Box
            marginTop={"30px"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box flex={0.35}>
              <Typography
                variant='body1'
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Full Name
              </Typography>
            </Box>

            <Box flex={2}>
              <TextField
                onChange={handleChange}
                name='title'
                required
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>
          <Box
            marginTop={"30px"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box flex={0.35}>
              <Typography
                variant='body1'
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Username
              </Typography>
            </Box>

            <Box flex={2}>
              <TextField
                onChange={handleChange}
                name='title'
                required
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>
          <Box
            marginTop={"40px"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",

              alignItems: "center",
            }}
          >
            <Box flex={0.75}>
              <Typography
                variant='body1'
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Bio
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "grey",
                }}
              >
                Start with a brief overview that describes you the best and the
                finest . You can also include your story here. (150 words)
              </Typography>
            </Box>
            <Box flex={2}>
              <TextField
                name='description'
                multiline
                rows={10}
                required
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Typography
            marginTop={"30px"}
            variant='h6'
            sx={{ fontSize: "24px" }}
            color={"brown.main"}
          >
            Add Social Media Details
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "grey",
            }}
          >
            Add your social media username for Instagram, Facebook or Twitter.
          </Typography>
          <Box
            marginTop={"30px"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box flex={0.35}>
              <Typography
                variant='body1'
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Facebook
              </Typography>
            </Box>

            <Box flex={2}>
              <TextField
                onChange={handleChange}
                name='title'
                required
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>
          <Box
            marginTop={"30px"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box flex={0.35}>
              <Typography
                variant='body1'
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Instagram
              </Typography>
            </Box>

            <Box flex={2}>
              <TextField
                onChange={handleChange}
                name='title'
                required
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>
          <Box
            marginTop={"30px"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box flex={0.35}>
              <Typography
                variant='body1'
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "brown.light",
                }}
              >
                Twitter
              </Typography>
            </Box>

            <Box flex={2}>
              <TextField
                onChange={handleChange}
                name='title'
                required
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>
        </Box>
        <form onSubmit={handleSubmit}>
          <div className='submit-btn'>
            <Button isDisabled={disabled} type='submit' version='primary add'>
              Submit
            </Button>
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "red",
            }}
          >
            {error}
          </p>
        </form>
      </Grid>
    </Layout>
  );
};

export default Post;
