import { apiUrl } from "../utils";

export const loginUser = async (loginInfo) => {
  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();

    if (response.ok) {
      return { data };
    } else {
      return { error: data.errors.message };
    }
  } catch (error) {
    return { error: "Network error" };
  }
};
