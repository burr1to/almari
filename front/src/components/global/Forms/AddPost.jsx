import React from "react";
import "./../../statics/forms.css";
import Layout from "./../Layout";
import { FormGroup, FormControlLabel } from "@mui/material";
import axios from "axios";
import { Box, TextField, Checkbox, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import Button from "./../Button";
import "./../../statics/post.css";

function AddPost() {
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    stock: "",
    post_img: "",
  });

  const data = {
    title: inputs.title,
    price: parseInt(inputs.price),
    category: inputs.category,
    description: inputs.description,
    stock: parseInt(inputs.stock),
    post_img: inputs.post_img,
  };

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    "Content-type": "application/json",
  };

  const handleFile = (e) => {
    let file = e.target.files[0].name;
    const url = `images/${file}`;
    setInputs({ ...inputs, post_img: url });
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8000/posts", data, { headers: headers })
      .then((response) => {
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Layout>
      <div className='add-post-con'>
        <h6>Add a post to Almari</h6>
        <br />

        <form className='add-post-form' onSubmit={handleSubmit}>
          Product Name
          <TextField
            name='title'
            value={inputs.title}
            label='Name'
            type='text'
            onChange={handleChange}
          />
          <br />
          Price
          <TextField
            name='price'
            value={inputs.price}
            label='Price'
            type='number'
            min='0'
            onChange={handleChange}
          />
          <br />
          Category
          <Select
            name='category'
            value={inputs.category}
            onChange={handleChange}
          >
            <MenuItem value=''>None</MenuItem>
            <MenuItem value={"Clothing"}>Clothing</MenuItem>
            <MenuItem value={"Accessories"}>Accessories</MenuItem>
            <MenuItem value={"Handicrafts"}>Handicrafts</MenuItem>
            <MenuItem value={"Furniture"}>Furniture</MenuItem>
            <MenuItem value={"Home Decor"}>Home Decor</MenuItem>
          </Select>
          <br />
          Description
          <TextField
            name='description'
            value={inputs.description}
            label='About'
            multiline
            rows={4}
            type='text'
            onChange={handleChange}
            defaultValue='Default Value'
          />
          <br />
          Available Stock
          <TextField
            name='stock'
            value={inputs.stock}
            label='Stock'
            type='number'
            min='0'
            onChange={handleChange}
          />
          <br />
          <div className='insert-img'>
            <h6>Insert Image</h6>

            <br />
            <input type='file' name='files' onChange={handleFile} />
          </div>
          <br />
          <Button type='submit'>Add Post</Button>
        </form>
      </div>
    </Layout>
  );
}

export default AddPost;
