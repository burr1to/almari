import React from "react";
import {
  Box,
  TextField,
  Checkbox,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import Button from "../Button";
import "./../../statics/post.css";

function AddPost() {
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    category: "",
    about: "",
    stock: "",
  });

  const handleChange = (prop) => (event) => {
    setInputs({ ...inputs, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    console.log(e.target.value);
  };
  return (
    <Box className='add-post-con'>
      <form onSubmit={handleSubmit}>
        <TextField
          name='Name'
          value={inputs.name}
          label='Name'
          type='Name'
          onChange={handleChange("name")}
          required
        />
        <TextField
          name='Price'
          value={inputs.price}
          label='Price'
          type='Price'
          onChange={handleChange("price")}
          required
        />
        <br />
        <TextField
          name='About'
          value={inputs.about}
          label='About'
          type='About'
          onChange={handleChange("about")}
          required
        />
        <h6>Category</h6>
        <Select
          style={{
            width: "200px",
          }}
          value={inputs.category}
          onChange={handleChange("category")}
        >
          <MenuItem value=''>None</MenuItem>
          <MenuItem value={1}>Clothing</MenuItem>
          <MenuItem value={2}>Accessories</MenuItem>
          <MenuItem value={3}>Handicrafts</MenuItem>
          <MenuItem value={4}>x</MenuItem>
          <MenuItem value={5}>x</MenuItem>
        </Select>
        <TextField
          name='Stock'
          value={inputs.stock}
          label='Stock'
          type='Stock'
          onChange={handleChange("stock")}
          required
        />
        <Button>Add Post</Button>
      </form>
    </Box>
  );
}

export default AddPost;
