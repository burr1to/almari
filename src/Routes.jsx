import React from "react";
import { Route, Routes } from "react-router-dom";
import IndividualPage from "./views/IndividualItems/Individual";
import LandingPage from "./views/LandingPage/LandingPage";
import Catalog from "./views/CatalogPage/CatalogPage";
import Profile from "./views/ProfilePage/ProfilePage";
import ImageSidebar from "./components/global/ImageSidebar";
import Product from "./components/global/Product";
import CatCircle from "./views/LandingPage/components/CatCircle";
import Login from "./views/Login/Login";
import Signup from "./views/Login/Signup";
import Market from "./components/global/Forms/MarketNavbar";
import Random from "./components/global/RandomItems";

const Routedpath = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/test' element={<Random />}></Route>
      <Route path='/product' element={<IndividualPage />}></Route>
      <Route path='/catalog' element={<Product />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/market' element={<Market />}></Route>
    </Routes>
  );
};
export default Routedpath;
