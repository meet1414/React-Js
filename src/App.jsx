import React from "react";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./component/Header";
import Add from "./component/Add";
import Home from "./component/Home";
import Edit from "./component/Edit";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
