import React from "react";
import Lottie from "lottie-react";
import chefAnimation from "../../../../public/chef.json";

const Banner = () => {
  return (
    <div className="md:flex w-full md:w-3/4 md:mx-auto items-center justify-between my-10 md:my-36 md:mt-0">
      <div className="mx-auto mb-9 md:mb-0 w-10/12 md:w-2/4 ">
        <h1 className="font-bold text-3xl md:text-5xl md:leading-relaxed">
          <span className="text-red-400">Welcome to</span> the World of Culinary
          Delights with Our <br />
          <span className="text-red-400">Master Chef's Recipes</span>
        </h1>
      </div>
      <div className="w-3/5 mx-auto md:w-2/5">
        <Lottie animationData={chefAnimation} loop={false} />
      </div>
    </div>
  );
};

export default Banner;
