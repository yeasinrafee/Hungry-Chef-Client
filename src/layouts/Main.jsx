import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

// All LayOut
const Main = () => {
  return (
    <div>
      <div className="bg-red-50">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
