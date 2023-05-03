import React from "react";
import Lottie from "lottie-react";
import chefAnimation from "../../../../public/chef.json";

const Banner = () => {
  return (
    <div className="flex md:w-3/4 md:mx-auto items-center justify-between">
      <div className="w-2/4 ">
        <h1 className="font-bold text-5xl leading-relaxed">
          <span className="text-red-400">Welcome to</span> the World of Culinary
          Delights with Our <br />
          <span className="text-red-400">Master Chef's Recipes</span>
        </h1>
      </div>
      <div className="w-2/5">
        <Lottie animationData={chefAnimation} loop={false} />
      </div>
    </div>
  );
};

export default Banner;
