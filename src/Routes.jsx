import React from "react";
import { Route, Routes } from "react-router-dom";
import Circle from "./components/global/Circle";
import LandingPage from "./views/LandingPage/LandingPage";
const Routedpath = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/circle' element={<Circle />}></Route>
    </Routes>
  );
};
export default Routedpath;
