import React from "react";
import { Route, Routes } from "react-router-dom";
import IndividualPage from "./views/IndividualItems/Individual";
import LandingPage from "./views/LandingPage/LandingPage";
import Catalog from "./views/CatalogPage/CatalogPage";
import Profile from "./views/ProfilePage/ProfilePage";
import CartItems from "./views/CartItems/CartItems";
import Login from "./views/Login/Login";
import Signup from "./views/Login/Signup";
import AddPost from "./components/global/Forms/AddPost";
import Test from "./components/global/Preview";
import EditProfile from "./components/global/Forms/EditProfile";
import Setup from "./components/global/Forms/Setup";
import Name from "./components/global/Forms/Name";
import Stock from "./components/global/Forms/Stock";
import Market from "./components/global/Forms/MarketNavbar";
const Routedpath = () => {
  return (
    <Routes>
      {/* 
      Selling portion routes */}

      <Route path='/name' element={<Name />}></Route>
      <Route path='/setup' element={<Setup />}></Route>
      <Route path='/stock' element={<Stock />}></Route>
      <Route path='/market' element={<Market />}></Route>

      {/* 
      Selling portion routes */}

      {/* Testing route */}
      <Route path='/test' element={<Test />}></Route>

      {/* 
      Buying portion routes */}

      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/post' element={<AddPost />}></Route>
      <Route path='/profile/edit/:userid' element={<EditProfile />}></Route>
      <Route path='/checkout' element={<CartItems />}></Route>
      <Route path='/product/:productid' element={<IndividualPage />}></Route>
      <Route path='/catalog/:category' element={<Catalog />}></Route>
      <Route path='/profile/:userid' element={<Profile />}></Route>

      {/* 
      Buying portion routes */}
    </Routes>
  );
};
export default Routedpath;
