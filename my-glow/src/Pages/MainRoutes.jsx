import React from "react";
import HomePage from "./HomePage";

import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import GlowProduct from "./GlowProducts";
import { ProductDetail } from "./ProductDetail";
import Cart from "./Cart";
import Admin from "./Admin";
import { EditDeletePage } from "./EditDeletePage";
import EditProductPage from "./EditProductPage";
import Address from "./Address";
import Payment from "./Payment";
import PrivateRoutes from "../Components/PrivateRoutes";
import AdminPrivateRoutes from "../Components/AdminPrivateRoutes";
import AdminLogin from "./adminLogin";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route
        path="/admin"
        element={
          <AdminPrivateRoutes>
            <Admin />
          </AdminPrivateRoutes>
        }
      ></Route>
      <Route path="/product" element={<GlowProduct />}></Route>
      <Route path="/product/:id" element={<ProductDetail />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/cart" element={
      <PrivateRoutes>
      <Cart />
      </PrivateRoutes>
      }></Route>
      <Route
        path="/delete"
        element={
          <AdminPrivateRoutes>
            <EditDeletePage />
          </AdminPrivateRoutes>
        }
      ></Route>
      <Route
        path="/edit"
        element={
          <AdminPrivateRoutes>
            <EditProductPage />
          </AdminPrivateRoutes>
        }
      ></Route>
      <Route path="/address" element={<Address />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
    </Routes>
  );
};

export default MainRoutes;
