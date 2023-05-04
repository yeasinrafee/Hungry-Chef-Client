import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaBeer, FaUserCircle } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <div className=" text-center p-4 md:p-8 md:mx-32 md:flex justify-between">
      <Link>
        <h1 className="font-bold mb-2 text-3xl md:mb-0 md:text-4xl text-red-400 ">
          HungryChef
        </h1>
      </Link>
      <div className="flex gap-6 md:gap-12 text-sm md:text-lg justify-center items-center">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Tippy content={user && user.email}>
          <Link to="#">{user && <FaUserCircle className="text-3xl" />}</Link>
        </Tippy>
        {user ? (
          <button onClick={handleLogOut} className="btn bg-red-400 border-none">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-red-400 border-none">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
