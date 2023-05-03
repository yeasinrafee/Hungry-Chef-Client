import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-8 mx-32 flex justify-between">
      <Link>
        <h1 className="font-bold text-4xl">HungryChef</h1>
      </Link>
      <div className="flex gap-12 text-lg">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="#">User</Link>
      </div>
    </div>
  );
};

export default Navbar;
