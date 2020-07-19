import React from "react";
import { Route, Redirect } from "react-router-dom";

const isUserAuthenticated = () => {
  const cachedUser = localStorage.getItem("userData");
  return !!cachedUser;
};

function PrivateRoute({ children, path }) {
  console.log();
  return (
    <Route
      path={path}
      exact
      render={(props) =>
        isUserAuthenticated() ? (
          children.type ? (
            React.cloneElement(children, { router: props })
          ) : (
            children
          )
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
        ) : children.type ? (
          React.cloneElement(children, { router: props })
        ) : (
          children
        )
      }
    />
  );
}

export { isUserAuthenticated, PrivateRoute, GuestRoute };
