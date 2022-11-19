import React from "react";
import "./../../statics/forms.css";
import Layout from "./../Layout";

import axios from "axios";
import { TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import Button from "./../Button";
import Preview from "../Preview";
import "./../../statics/post.css";

function AddPost() {
  const [selectImage, setSelectedImage] = useState();

  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    stock: "",
  });

  const data = {
    title: inputs.title,
    price: parseInt(inputs.price),
    category: inputs.category,
    description: inputs.description,
    stock: parseInt(inputs.stock),
  };

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  };

  const handleFile = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("price", data.price);
  formData.append("category", data.category);
  formData.append("description", data.description);
  formData.append("stock", data.stock);
  formData.append("file", selectImage);
  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    await axios
      .post("http://localhost:8000/posts", formData, { headers: headers })
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

        <form
          className='add-post-form'
          onSubmit={handleSubmit}
          enctype='multipart/form-data'
        >
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
            <h6>Insert Images</h6>

            <br />
            <input
              accept='image/*'
              type='file'
              name='files'
              onChange={handleFile}
              multiple
            />
          </div>
          <br />
          <Preview />
          <br />
          <Button type='submit'>Add Post</Button>
        </form>
      </div>
    </Layout>
  );
}

export default AddPost;
