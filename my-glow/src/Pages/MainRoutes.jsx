import React from "react";
import HomePage from "./HomePage";

import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { Admin } from "./Admin";
import GlowProduct from "./GlowProducts";
import { ProductDetail } from "./ProductDetail";
import Cart from "./Cart";

import { Payment } from "./Payment";

import { Routes,Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import GlowProduct from './GlowProducts';
import {ProductDetail} from './ProductDetail';
import Cart from './Cart';
import Admin from "./Admin";

import {Payment} from './Payment';


import { EditDeletePage } from './EditDeletePage';
import EditProductPage from './EditProductPage';


import { EditDeletePage } from "./EditDeletePage";

const MainRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/product" element={<GlowProduct />}></Route>
      <Route path="/product/:id" element={<ProductDetail />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/edit" element={<EditDeletePage />}></Route>

      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/product" element={<GlowProduct/>}></Route>
      <Route path="/product/:id" element={<ProductDetail/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path='/delete' element={<EditDeletePage/>}></Route>
      <Route path='/edit' element={<EditProductPage/>}></Route>
    </Routes>
  );
};

export default MainRoutes;
