import React from 'react';
import HomePage from "./HomePage";
import { Routes,Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import { Admin } from './Admin';
import GlowProduct from './GlowProducts';
import {ProductDetail} from './ProductDetail';
import Cart from './Cart';
import {Payment} from './Payment';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/product" element={<GlowProduct/>}></Route>
      <Route path="/product/:id" element={<ProductDetail/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  )
}

export default MainRoutes;
