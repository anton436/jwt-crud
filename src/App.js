import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import RegisterSuccess from "./components/Auth/RegisterSuccess";
import NavScrollExample from "./components/Navbar/Navbar";
import ProductList from "./components/product/ProductList";

const App = () => {
  return (
    <div>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-success" element={<RegisterSuccess />} />

        <Route path="/products" element={<ProductList />} />

        <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
      </Routes>
    </div>
  );
};

export default App;
