import { useEffect, useState } from "react";

export function useUser() {
  const cachedUser = JSON.parse(localStorage.getItem("userData")) || {};
  const [userData, setUserData] = useState(cachedUser || {});

  useEffect(() => {
    if (JSON.stringify(userData) !== JSON.stringify(cachedUser)) {
      console.log("Updating user data...");
      setUserData(cachedUser);
    }
  }, [userData, cachedUser]);

  return [userData, setUserData];
}
