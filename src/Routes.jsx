import React from "react";
import { Route, Routes } from "react-router-dom";
import IndividualPage from "./views/IndividualItems/Individual";
import LandingPage from "./views/LandingPage/LandingPage";
import Layout from "./components/global/Layout";
import Ratings from "./components/global/Ratings";
import Catalog from "./views/CatalogPage/CatalogPage";
import PopularItemList from "./components/global/PopularItemList";
import ReviewAdd from "./components/global/ReviewAdd";
const Routedpath = () => {
  return (
    <Routes>
      <Route path='/' element={<ReviewAdd />}></Route>
      <Route path='/home' element={<LandingPage />}></Route>
      <Route path='/product' element={<IndividualPage />}></Route>
      <Route path='/catalog' element={<Catalog />}></Route>
      <Route path='/test' element={<PopularItemList />}></Route>
    </Routes>
  );
};
export default Routedpath;
