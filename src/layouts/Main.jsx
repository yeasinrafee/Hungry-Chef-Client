import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="bg-red-50">
        <Navbar />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
