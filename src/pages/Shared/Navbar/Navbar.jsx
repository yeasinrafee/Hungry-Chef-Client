import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
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
    <nav className=" text-center p-4 md:p-8 md:mx-32 md:flex justify-between">
      <NavLink>
        <h1 className="font-bold mb-2 text-3xl md:mb-0 md:text-4xl text-red-400 ">
          HungryChef
        </h1>
      </NavLink>
      <nav className="flex gap-6 md:gap-12 text-sm md:text-lg justify-center items-center">
        <NavLink className="hover:text-red-600" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-red-600" to="/blog">
          Blog
        </NavLink>
        <Tippy
          content={user && user?.displayName ? user?.displayName : user?.email}
        >
          <NavLink className="hover:text-red-600" to="#">
            {user && <FaUserCircle className="text-3xl" />}
          </NavLink>
        </Tippy>
        {user ? (
          <button onClick={handleLogOut} className="btn bg-red-400 border-none">
            Logout
          </button>
        ) : (
          <NavLink to="/login">
            <button className="btn bg-red-400 border-none">Login</button>
          </NavLink>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
