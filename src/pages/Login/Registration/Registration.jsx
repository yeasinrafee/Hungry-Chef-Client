import React, { useContext } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const navigation = useNavigate();
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.photo.value;

    console.log(email, password, name, image);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        navigation("/login");
        console.log(createdUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title mt-2">Registrar Now</h2>
      <form onSubmit={handleRegistration}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="photo">Photo URL</label>
          <input type="text" name="photo" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p className="mt-5">
        <small>
          Already have an account?{" "}
          <Link to="/login" className="underline text-red-400">
            Login
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Registration;
