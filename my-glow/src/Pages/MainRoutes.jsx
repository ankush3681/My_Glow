import React from "react";
import HomePage from "./HomePage";

import { Routes,Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import GlowProduct from './GlowProducts';
import {ProductDetail} from './ProductDetail';
import Cart from './Cart';
import Admin from "./Admin";
import { EditDeletePage } from './EditDeletePage';
import EditProductPage from './EditProductPage';
import Address from './Address';
import Payment from './Payment';
import PrivateRoutes from "../Components/PrivateRoutes";



const MainRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/admin" element={<PrivateRoutes><Admin/></PrivateRoutes>}></Route>
      <Route path="/product" element={<PrivateRoutes><GlowProduct/></PrivateRoutes>}></Route>
      <Route path="/product/:id" element={<PrivateRoutes><ProductDetail/></PrivateRoutes>}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/delete" element={<EditDeletePage />}></Route>
      <Route path='/edit' element={<EditProductPage/>}></Route>
      <Route path='/address' element={<Address/>}></Route>
      
    </Routes>
  );
};

export default MainRoutes;
