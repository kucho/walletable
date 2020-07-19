import React from "react";
import { Route, Redirect } from "react-router-dom";

const isUserAuthenticated = () => {
  const cachedUser = localStorage.getItem("userData");
  return !!cachedUser;
};

function PrivateRoute({ children, path }) {
  return (
    <Route
      path={path}
      exact
      render={(props) =>
        isUserAuthenticated() ? (
          React.cloneElement(children, { router: props })
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
}

function GuestRoute({ children, path }) {
  return (
    <Route
      path={path}
      exact
      render={(props) =>
        isUserAuthenticated() ? (
          <Redirect to="/profile" />
        ) : (
          React.cloneElement(children, { router: props })
        )
      }
    />
  );
}

export { isUserAuthenticated, PrivateRoute, GuestRoute };
