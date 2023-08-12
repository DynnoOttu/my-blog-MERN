import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { Home, Login, MainApp, Register } from "../../pages";

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Routes>
        <Route path="*" element={<MainApp/>}/>
      </Routes>
    </Router>
  );
};

export default RoutesApp;
