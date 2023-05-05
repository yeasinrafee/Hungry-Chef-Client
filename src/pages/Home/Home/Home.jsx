import React from "react";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";
import Pricing from "../Pricing/Pricing";
import Chefs from "../Chefs/Chefs/Chefs";

const Home = () => {
  return (
    <div>
      {/* Home Components  */}
      <Banner />
      <Chefs />
      <Pricing />
      <Testimonials />
    </div>
  );
};

export default Home;
