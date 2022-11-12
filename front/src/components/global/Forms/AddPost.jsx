import React from "react";
import "./../../statics/forms.css"
import Layout from "./../Layout"
import {FormGroup, FormControlLabel} from "@mui/material"
import axios from 'axios'
import {
  Box,
  TextField,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import Button from "./../Button";
import "./../../statics/post.css";

function AddPost() {
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    category: "",
    about: "",
    stock: "",
  });

  const [img, setImg] = useState([])
  const handleFile = (e) =>{
    let file = e.target.files[0].name
   setImg(file);

  }

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
    console.log(img)
    // axios({
    //   url:
    // })
    
    
  };
  return (
    
    <Layout>
     
    <div className='add-post-con'>
    <h6>Add a post to Almari</h6>
    <br/>
      
      <form className = "add-post-form" onSubmit={handleSubmit}>
       Product Name  <TextField
          name='name'
          value={inputs.name}
          label='Name'
          type='text'
          onChange={handleChange}
         
        />
        <br />
        Price<TextField
          name='price'
          value={inputs.price}
          label='Price'
          type='text'
          onChange={handleChange}
         
        />
        <br/>
        Category
        <Select
          style={{
            width: "200px",
          }}
          name="category"
          value={inputs.category}
          onChange={handleChange}
        >
          <MenuItem value=''>None</MenuItem>
          <MenuItem value={"Clothing"}>Clothing</MenuItem>
          <MenuItem value={2}>Accessories</MenuItem>
          <MenuItem value={3}>Handicrafts</MenuItem>
          <MenuItem value={4}>Furniture</MenuItem>
          <MenuItem value={5}>Home Decor</MenuItem>
        </Select>
        <br />
        <div className="insert-img">
          <h6>Insert Image</h6>
        
        <br/>
        <input type = "file" name = "files" onChange = {handleFile}/>
        </div>
        
        <br />
        Description
        <TextField
          name='about'
          value={inputs.about}
          label='About'
          type='text'
          onChange={handleChange}
          
        />
        <br/>
      
        Available Stock
        <TextField
          name='stock'
          value={inputs.stock}
          label='Stock'
          type='text'
          onChange={handleChange}
        />
        <br/>
        
        <Button type = "submit">Add Post</Button>
      </form>
    </div>
    </Layout>
  );
}

export default AddPost;
