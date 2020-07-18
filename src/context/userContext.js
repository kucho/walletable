import React from "react";

export const UserContext = React.createContext({
  userData: null,
  setUserData: () => {},
});
