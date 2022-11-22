import { React, useState } from "react";
import "./statics/css/catalog.css";
import Layout from "./../../components/global/Layout";
import Button from "./../../components/global/Button";
import { TextField, MenuItem, Slider } from "@mui/material";
import SingleProduct from "./../../components/global/SingleProduct";
import "./../../components/statics/product.css";
import Dropdown from "./../../components/global/Dropdown";
import axios from "axios";
import { useEffect } from "react";

//downprice cant be less than upprice make error handle
function valuetext(value) {
  let scaledValue = value;
  // axios.get("localhost:8000/category/${}/");
  return `$ ${scaledValue}`;
}
function CatalogPage() {
  const [data, setData] = useState([]);

  const [word, setWord] = useState("");

  useEffect(() => {
    const path = document.location.pathname.split("/")[2];
    const capital = document.location.pathname
      .split("/")[2]
      .charAt(0)
      .toUpperCase();

    const newPath = capital + path.slice(1);
    setWord(newPath);
    axios
      .get(`http://localhost:8000/posts/catalog/${newPath}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);

        return newPath;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [value, setValue] = useState([20, 370]);

  const [key, setKey] = useState("");
  const [cat, setCat] = useState("");

  const handleSlider = (e, newValue) => {
    setValue(newValue);
  };
  const handleChange = (e, newValue) => {
    if (e.target.name === "value") {
      setValue(newValue);
    } else if (e.target.name === "key") {
      setKey(e.target.value);
    }
  };

  const handleDropdown = (e) => {
    console.log(e.target.value);
    setCat(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    console.log("ok");
  };

  return (
    <>
      <Layout>
        <div className='catalog-con'>
          <div className='catalog-area'>
            <div className='catalog-filter-area'>
              <h6>Filters</h6>
              <form className='catalog-filter-forms' onSubmit={handleSubmit}>
                <h6>Price Range</h6>
                <Slider
                  value={value}
                  max={1000}
                  min={0}
                  valueLabelFormat={valuetext}
                  onChange={handleSlider}
                  valueLabelDisplay='auto'
                />
                <h6>Categories</h6>
                <Dropdown
                  className='category-dropdown'
                  val={cat}
                  handleChange={handleDropdown}
                >
                  <MenuItem value={"Clothing"}>Clothing</MenuItem>
                  <MenuItem value={"Accessories"}>Accessories</MenuItem>
                  <MenuItem value={"Handicrafts"}>Handicrafts</MenuItem>
                  <MenuItem value={"Decorations"}>Decorations</MenuItem>
                  <MenuItem value={"Furniture"}>Furniture</MenuItem>
                </Dropdown>
                <h6>Keyword</h6>
                <TextField
                  hiddenLabel
                  onChange={handleChange}
                  name='key'
                  value={key}
                  type='text'
                  className='filter-keyword'
                />
                <br />
                <Button type='submit'>Filter</Button>
              </form>
            </div>
            <div className='catalog-content-area'>
              <div className='title-area'>
                <h3>{word}</h3>
              </div>
              <div className='product-con'>
                {data.map((item) => (
                  <SingleProduct
                    productImg={item.post_img}
                    ownerID={item.owner_id}
                    key={item.id}
                    productID={item.id}
                    onClick={handleClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CatalogPage;
