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
import Button from "./../Button";
import axios from "axios";

import "./../../statics/preview.css";
import "./../../statics/post.css";
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
        <Typography variant='h6' color={"brown.main"}>
          Edit Profile Details
        </Typography>
        <Typography color='grey' variant='body1' sx={{ fontSize: "14px" }}>
          Tell the world all about your item and why they’ll love it.
        </Typography>
        <Box
          marginTop={"30px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
          }}
        >
          <Box flex={0.75}>
            <Typography
              variant='body1'
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "brown.light",
              }}
            >
              Title*
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "grey",
              }}
            >
              Include keywords that buyers would use to search for your item.
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
          }}
        >
          <Box flex={0.75}>
            <Typography
              variant='body1'
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "brown.light",
              }}
            >
              Title*
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "grey",
              }}
            >
              Include keywords that buyers would use to search for your item.
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
          marginTop={"20px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
          }}
        >
          <Box flex={0.75}>
            <Typography
              variant='body1'
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "brown.light",
              }}
            >
              Bio*
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
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
  );
};

export default Post;
