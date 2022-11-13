import { React, useState } from "react";
import "./statics/css/catalog.css";
import Layout from "./../../components/global/Layout";
import Button from "./../../components/global/Button";
import { TextField, MenuItem, Slider } from "@mui/material";
import { popularProducts } from "./../../components/data/testdata";
import SingleProduct from "./../../components/global/SingleProduct";
import "./../../components/statics/product.css";
import Dropdown from "./../../components/global/Dropdown";

//downprice cant be less than upprice make error handle

function valuetext(value) {
  let scaledValue = value;

  return `$ ${scaledValue}`;
}
function CatalogPage() {
  const [value, setValue] = useState([20, 370]);

  const [key, setKey] = useState("");

  const [cat, setCat] = useState("");

  const handleSlider = (e, newValue) => {
    setValue(newValue);
  };
  const handleChange = (e, newValue) => {
    setKey((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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

  const productID = 2;
  const path = `/product/${productID}`;

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
                  name='keyword'
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
                <h3>Category</h3>
              </div>
              <div className='product-con'>
                {popularProducts.map((item) => (
                  <SingleProduct
                    item={item}
                    key={item.id}
                    path={path}
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
