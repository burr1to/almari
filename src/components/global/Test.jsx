import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { products } from "./../../components/data/testdata";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const slides = [
    {
      url: "  https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "forest",
    },
    {
      url: "https://images.pexels.com/photos/5245865/pexels-photo-5245865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "beach",
    },
    {
      url: "https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "boat",
    },
    {
      url: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "forest",
    },
  ];
  const a = 1;
  const imgArray = console.log(slides);
  console.log(products[0].img.length);

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
