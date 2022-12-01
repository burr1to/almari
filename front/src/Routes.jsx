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
import EditProfile from "./views/ProfilePage/forms/EditProfile";
import Market from "./components/global/Forms/MarketNavbar";
import Render from "./components/global/Renders/Render";
import Customization from "./components/global/Forms/Customization";
import ImageSidebar from "./views/IndividualItems/components/ImageSidebar";
import Shop from "./views/ProfilePage/SellerPage";
const Routedpath = () => {
  return (
    <Routes>
      {/* 
      Selling portion routes */}

      <Route path='/market' element={<Market />}></Route>
      <Route path='/custom' element={<Customization />}></Route>
      <Route path='/profile/sell' element={<Shop />}></Route>

      {/* 
      Selling portion routes */}

      {/* Testing route */}
      <Route path='/test' element={<ImageSidebar />}></Route>

      {/* 
      Buying portion routes */}

      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/post' element={<AddPost />}></Route>
      <Route path='/edit/:userid' element={<EditProfile />}></Route>
      <Route path='/checkout' element={<CartItems />}></Route>
      <Route path='/product/:productid' element={<IndividualPage />}></Route>
      <Route path='/catalog/:category' element={<Catalog />}></Route>
      <Route path='/profile/:userid' element={<Profile />}></Route>

      {/* 
      Buying portion routes */}

      {/* 
      Render portion routes */}
      <Route path='/render' element={<Render />}></Route>
      {/* 
      Render portion routes */}
    </Routes>
  );
};
export default Routedpath;
