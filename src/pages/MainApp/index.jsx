import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import { Footer, Header } from "../../component";
import "./mainApp.scss";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/create-blog" element={<CreateBlog />}></Route>
        </Routes>
        <Routes>
          <Route path="/detail-blog" element={<DetailBlog />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
