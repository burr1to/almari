import React from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/Navbar/Navbar";
import Box from "./components/global/Box";
const Routedpath = () => {
  return (
    <Routes>
      <Route path='/' element={<AppBar />}></Route>
      <Route path='/categories' element={<Box />}></Route>
    </Routes>
  );
};
export default Routedpath;
