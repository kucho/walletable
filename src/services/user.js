import { apiUrl, objectToSnake } from "../utils/common";

export const getUser = async (token) => {
  try {
    const response = await fetch(`${apiUrl}/user`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const createUser = async (userData) => {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      body: JSON.stringify(objectToSnake(userData)),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();

    if (response.ok) {
      return { response, data };
    } else {
      return { error: data.errors.message };
    }
  } catch (error) {
    return { error: "Network error" };
  }
};

export const updateUser = async (token, newData) => {
  try {
    const response = await fetch(`${apiUrl}/edit_user`, {
      method: "PATCH",
      body: JSON.stringify(objectToSnake(newData)),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
