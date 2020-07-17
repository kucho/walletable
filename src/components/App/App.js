import React, { useState } from "react";
import { UserContext } from "../../context/Session";
import { PrivateRoute, GuestRoute } from "../../utils/auth";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, CSSReset, Flex } from "@chakra-ui/core";
import Theme from "../../utils/theme";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import "./App.css";

const appLayoutSettings = {
  bg: "indigo.800",
  minH: "100vh",
  w: "100%",
  align: "center",
  direction: "column",
};

function App() {
  const [userData, setUserData] = useState({});
  const value = { userData, setUserData };
  const cachedUser = localStorage.getItem("userData");

  if (cachedUser) {
    if (JSON.stringify(userData) !== cachedUser) {
      setUserData(JSON.parse(cachedUser));
    }
  }

  return (
    <UserContext.Provider value={value}>
      <ThemeProvider theme={Theme}>
        <CSSReset />
        <Flex {...appLayoutSettings}>
          <Router>
            <Switch>
              <GuestRoute path="/signin">
                <SignIn />
              </GuestRoute>
              <GuestRoute path="/signup">
                <SignUp />
              </GuestRoute>
              <PrivateRoute path="/profile">Profile page</PrivateRoute>
              <PrivateRoute path="/transactions">
                Transactions Page
              </PrivateRoute>
              <PrivateRoute path="/transaction/:id">
                Transaction Page
              </PrivateRoute>
              <PrivateRoute path="/" exact>
                Index page
              </PrivateRoute>
            </Switch>
          </Router>
        </Flex>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
