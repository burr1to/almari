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
import Test from "./components/global/Test";
import EditProfile from "./components/global/Forms/EditProfile";

const Routedpath = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/test' element={<Test />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/post' element={<AddPost />}></Route>
      <Route path='/profile/edit/:userid' element={<EditProfile />}></Route>
      <Route path='/checkout' element={<CartItems />}></Route>
      <Route path='/product/:productid' element={<IndividualPage />}></Route>
      <Route path='/catalog/:category' element={<Catalog />}></Route>
      <Route path='/profile/:userid' element={<Profile />}></Route>
    </Routes>
  );
};
export default Routedpath;
