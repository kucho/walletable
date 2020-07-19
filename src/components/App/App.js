import React from "react";
import { UserContext } from "../../context/userContext";
import { GuestRoute, PrivateRoute } from "../../utils/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSReset, Flex, ThemeProvider } from "@chakra-ui/core";
import Theme from "../../utils/theme";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Profile from "../Profile";
import Container from "../Container";
import Transactions from "../Transactions";
import EditTransaction from "../Transaction";
import "./App.css";
import { useUser } from "../../hooks/useUser";

const appLayoutSettings = {
  bg: "indigo.800",
  minH: "100vh",
  w: "100%",
  align: "center",
  direction: "column",
};

function App() {
  const [userData, setUserData] = useUser();
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
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
                <PrivateRoute path="/transactions/:id/edit">
                  <EditTransaction />
                </PrivateRoute>
                <PrivateRoute path="/transactions" exact>
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
