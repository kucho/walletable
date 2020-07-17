import React from "react";
import { Route, Redirect } from "react-router-dom";

const isUserAuthenticated = () => {
  const cachedUser = localStorage.getItem("userData");
  return !!cachedUser;
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        isUserAuthenticated() ? children : <Redirect to="/signin" />
      }
    />
  );
}

function GuestRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        isUserAuthenticated() ? <Redirect to="/profile" /> : children
      }
    />
  );
}

export { isUserAuthenticated, PrivateRoute, GuestRoute };
