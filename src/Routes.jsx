import React from "react";
import { Route, Routes } from "react-router-dom";
import IndividualPage from "./views/IndividualItems/Individual";
import LandingPage from "./views/LandingPage/LandingPage";
import Catalog from "./views/CatalogPage/CatalogPage";
import Profile from "./views/ProfilePage/ProfilePage";
import CartItems from "./views/CartItems/CartItems";
import SingleCart from "./components/global/SingleCart";

const Routedpath = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/cart' element={<SingleCart />}></Route>
      <Route path='/checkout' element={<CartItems />}></Route>
      <Route path='/product' element={<IndividualPage />}></Route>
      <Route path='/catalog' element={<Catalog />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
  );
};
export default Routedpath;
