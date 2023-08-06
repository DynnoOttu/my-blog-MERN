import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from "react-router-dom";
import { Home, Login, Register } from "../../pages";

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
};

export default RoutesApp;
