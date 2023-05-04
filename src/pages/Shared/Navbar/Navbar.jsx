import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" text-center p-4 md:p-8 md:mx-32 md:flex justify-between">
      <Link>
        <h1 className="font-bold mb-2 text-3xl md:mb-0 md:text-4xl text-red-400 ">
          HungryChef
        </h1>
      </Link>
      <div className="flex gap-6 md:gap-12 text-sm md:text-lg justify-center">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="#">{user && user.displayName}</Link>
      </div>
    </div>
  );
};

export default Navbar;
