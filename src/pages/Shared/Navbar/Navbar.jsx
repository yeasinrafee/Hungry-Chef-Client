import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
      <nav className="flex gap-6 mt-7 md:mt-0 md:gap-12 text-sm md:text-lg justify-center items-center">
        <NavLink className="hover:text-red-600" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-red-600" to="/blog">
          Blog
        </NavLink>

        {/* Adding Tooltip on user Icon  */}
        {user && (
          <Tippy content={user?.displayName || user?.email}>
            <NavLink className="hover:text-red-600" to="#">
              {/* <FaUserCircle className="text-3xl" /> */}
              <img
                src={user?.photoURL}
                alt=""
                className="w-[35px] h-[35px] rounded-full"
              />
            </NavLink>
          </Tippy>
        )}

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-red-400 border-none hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login">
            <button className="btn bg-red-400 border-none hover:bg-red-700">
              Login
            </button>
          </NavLink>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
