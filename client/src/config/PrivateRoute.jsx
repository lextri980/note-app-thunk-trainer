import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarMenu from "../components/Layouts/NavbarMenu";
import Spinner from "../components/Layouts/Spinner";

function PrivateRoute() {
  //Redux hooks
  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  if(loading) {
    return (
      <Spinner width={70} height={70} />
    )
  }

  return isAuthenticated ? (
    <>
      <NavbarMenu />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
