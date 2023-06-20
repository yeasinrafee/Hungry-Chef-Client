import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Loader for getting user
  if (loading) {
    return (
      <div className="w-1/2 ml-40 md:mx-auto my-60">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="56"
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;
