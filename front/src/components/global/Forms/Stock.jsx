import {
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import Button from "./../Button";
import axios from "axios";
import Layout from "./../Layout";
import Image from "./../Image";
import "./../../statics/preview.css";
import "./../../statics/post.css";
import CloseIcon from "@mui/icons-material/Close";

const Post = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const [tempImages, setTempImages] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [error, setError] = useState("");

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) =>
      previousImages.concat(selectedFilesArray)
    );
    console.log(selectedImages);
    setTempImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setTempImages(tempImages.filter((e) => e !== image));
    setSelectedImages(selectedImages.filter((e) => e !== image));

    URL.revokeObjectURL(image);
  }
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    stock: "",
  });

  const data = {
    title: inputs.title.toLowerCase(),
    price: parseInt(inputs.price),
    category: inputs.category,
    description: inputs.description,
    stock: parseInt(inputs.stock),
  };

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  };

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      if (e.target.value.length > 30) {
        setError("Title cannot be more than 30 characters!");
        setDisabled(true);
      } else if (e.target.value.length < 30) {
        setDisabled(false);
        setError("");
      }
    }
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("stock", data.stock);

    selectedImages.map((item) => {
      formData.append("file", item);
    });
    e.preventDefault();
    await axios
      .post("http://localhost:8000/posts/", formData, { headers: headers })
      .then((response) => {
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1500);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
          Add your products
        </Typography>
        <Typography color='grey'>
          Add photos and details about your item.
        </Typography>
      </Box>
      <Box
        p={3}
        sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
      >
        <Typography variant='h6' color={"brown.main"}>
          Photo
        </Typography>
        <Typography color='grey' variant='body1' sx={{ fontSize: "14px" }}>
          Add a photo so the buyer can see what they are getting.
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
              Tips for your photo
            </Typography>
            <Typography
              marginTop={"10px"}
              marginBottom={"20px"}
              sx={{
                fontSize: "12px",
                color: "grey",
              }}
            >
              Use photo to show your items most important <br />
              qualities.
              <br />
              <br />• Use natural light and no flash.
              <br />• Show the item being held, worn, or used.
              <br />• Shoot against a clean, simple background.
            </Typography>
          </Box>
          <Box flex={2}>
            <section>
              <label className='preview-label'>
                + Add Images
                <input
                  type='file'
                  name='images'
                  className='preview-input'
                  onChange={onSelectFile}
                  multiple
                  accept='image/png , image/jpeg'
                />
              </label>
              <br />

              {selectedImages.length > 0 &&
                (selectedImages.length > 4 ? (
                  <p className='error'>
                    <span
                      style={{
                        color: "red",
                        fontSize: "23px",
                      }}
                    >
                      At most 4 images!!
                    </span>
                  </p>
                ) : (
                  <p className='error'>Great!</p>
                ))}

              <div className='images'>
                {tempImages &&
                  selectedImages.map((image, index) => {
                    const exchange = URL.createObjectURL(image);
                    return (
                      <div key={exchange} className='image'>
                        <Image
                          src={exchange}
                          addStyles='preview-img'
                          alt='upload'
                        />
                        <Button
                          version='tertiary'
                          onClick={() => deleteHandler(image)}
                        >
                          <CloseIcon />
                        </Button>
                        <p>{index + 1}</p>
                      </div>
                    );
                  })}
              </div>
            </section>
          </Box>
        </Box>
      </Box>
      <Box
        p={3}
        sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
      >
        <Typography variant='h6' color={"brown.main"}>
          Listing Details
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
              value={inputs.title}
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
              Category*
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "grey",
              }}
            >
              Adding category will help more shoppers find you.
            </Typography>
          </Box>
          <Box flex={2}>
            <Select
              id='shopCategory'
              name='category'
              value={inputs.category}
              onChange={handleChange}
              sx={{ width: "100%" }}
            >
              <MenuItem value=''>None</MenuItem>
              <MenuItem value={"Clothing"}>Clothing</MenuItem>
              <MenuItem value={"Accessories"}>Accessories</MenuItem>
              <MenuItem value={"Handicrafts"}>Handicrafts</MenuItem>
              <MenuItem value={"Furniture"}>Furniture</MenuItem>
              <MenuItem value={"Home Decor"}>Home Decor</MenuItem>
            </Select>
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
              Description*
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "grey",
              }}
            >
              Start with a brief overview that describes your item’s finest
              features. You can also include the story behind your item.
            </Typography>
          </Box>
          <Box flex={2}>
            <TextField
              value={inputs.description}
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
        <Box
          p={3}
          paddingBottom='2px'
          sx={{ border: 1, borderColor: "lightgrey", borderRadius: "3px" }}
        >
          <Typography variant='h6' color={"brown.main"}>
            Inventory and Pricing
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
                Price*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Remember to factor in the costs of materials, labour, <br /> and
                other business expenses.
              </Typography>
            </Box>
            <Box flex={2}>
              <TextField
                name='price'
                value={inputs.price}
                required
                type='number'
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>रु</InputAdornment>
                  ),
                }}
                sx={{ width: "25%" }}
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
                Stock*
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Add the total quantity you have of the item.
              </Typography>
            </Box>
            <Box flex={2}>
              <TextField
                onChange={handleChange}
                value={inputs.stock}
                name='stock'
                type='number'
                required
                sx={{ width: "25%" }}
              />
            </Box>
          </Box>
          <br />
        </Box>
        <br />
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
