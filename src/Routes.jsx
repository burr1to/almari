import React from "react";
import { Route, Routes } from "react-router-dom";
import IndividualPage from "./views/IndividualItems/Individual";
import LandingPage from "./views/LandingPage/LandingPage";
import OurVision from "./views/LandingPage/components/OurVision";
import Layout from "./components/global/Layout";
const Routedpath = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/product' element={<IndividualPage />}></Route>
      <Route path='/vision' element={<OurVision />}></Route>
    </Routes>
  );
};
export default Routedpath;
