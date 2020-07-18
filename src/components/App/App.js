import React, {useState} from "react";
import {UserContext} from "../../context/Session";
import {GuestRoute, PrivateRoute} from "../../utils/auth";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CSSReset, Flex, ThemeProvider} from "@chakra-ui/core";
import Theme from "../../utils/theme";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Profile from "../Profile";
import Container from "../Container";
import Transactions from "../Transactions";
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
              <Container>
                <PrivateRoute path="/profile">
                  <Profile />
                </PrivateRoute>
                <PrivateRoute path="/transaction/:id">
                  Transaction Page
                </PrivateRoute>
                <PrivateRoute path="/transactions">
                  <Transactions />
                </PrivateRoute>
                <Route path="/" exact>
                  Home Page
                </Route>
              </Container>
            </Switch>
          </Router>
        </Flex>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
