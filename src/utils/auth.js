import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

const isUserAuthenticated = () => {
  const cachedUser = localStorage.getItem("user");
  return cachedUser ? true : false;
};

const PrivateRoute = (props) => {
  return (
    <Fragment>
      {isUserAuthenticated() ? props.children : <Redirect to="/login" />}
    </Fragment>
  );
};

export { PrivateRoute };
