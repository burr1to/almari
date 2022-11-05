import React from "react";
import { Route, Routes } from "react-router-dom";
import IndividualPage from "./views/IndividualItems/Individual";
import LandingPage from "./views/LandingPage/LandingPage";
import Catalog from "./views/CatalogPage/CatalogPage";
import Profile from "./views/ProfilePage/ProfilePage";
import ImageSidebar from "./components/global/ImageSidebar";
import Product from "./components/global/Product";
import CatCircle from "./views/LandingPage/components/CatCircle";

const Routedpath = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/product' element={<IndividualPage />}></Route>
      <Route path='/catalog' element={<Product />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/drop' element={<ImageSidebar />}></Route>
    </Routes>
  );
};
export default Routedpath;
