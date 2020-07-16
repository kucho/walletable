import React, { useState } from "react";
import { UserContext } from "../../context/Session";
import { PrivateRoute } from "../../utils/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const value = { user, setUser };

  const cachedUser = localStorage.getItem("user");
  if (cachedUser) {
    setUser({ user: JSON.parse(cachedUser) });
  }

  return (
    <UserContext.Provider value={value}>
      <Router>
        <Switch>
          <PrivateRoute>
            <Route path="/signin"></Route>
            <Route path="/signup"></Route>
            <Route path="/profile"></Route>
            <Route path="/transactions"></Route>
            <Route path="/transaction/:id"></Route>
            <Route path="/" exact></Route>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
