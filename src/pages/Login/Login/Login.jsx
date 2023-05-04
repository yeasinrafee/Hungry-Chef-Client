import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };
  return (
    <div className="form-container">
      <h2 className="form-title mt-6">Please Login</h2>
      <form onSubmit={handleLogIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input name="password" required />
          <p>
            <small></small>
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="mt-5">
        <small>
          New to Hungry Chef?{" "}
          <Link to="/signup" className="underline text-red-400">
            Please register
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
