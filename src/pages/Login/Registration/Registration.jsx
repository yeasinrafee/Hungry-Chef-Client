import React from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

const Registration = () => {
  const handleRegistration = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-container">
      <h2 className="form-title mt-6">Registrar Now</h2>
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
