import React from "react";
import { Route, Routes } from "react-router-dom";
import IndividualPage from "./views/IndividualItems/Individual";
import LandingPage from "./views/LandingPage/LandingPage";
import SearchBar from "./components/global/SearchBar";
import Layout from "./components/global/Layout";
const Routedpath = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/product' element={<IndividualPage />}></Route>
      <Route path='/search' element={<Layout />}></Route>
    </Routes>
  );
};
export default Routedpath;
