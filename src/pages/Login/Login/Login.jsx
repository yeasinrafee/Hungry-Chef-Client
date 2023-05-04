import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { logIn, googleSignIn } = useContext(AuthContext);

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
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
          <input type="password" name="password" required />
          <p>
            <small></small>
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <div className="flex justify-center gap-10 mt-9 items-center pr-5">
        <button onClick={handleGoogle}>
          <FaGoogle className="text-4xl" />
          <span className="pr-4">Google</span>
        </button>
        <button>
          <FaGithub className="text-4xl" />
          Github
        </button>
      </div>
      <p className="mt-5">
        <small>
          New to Hungry Chef?{" "}
          <Link to="/register" className="underline text-red-400">
            Please register
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
