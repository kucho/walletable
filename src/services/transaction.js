import { apiUrl, objectToSnake } from "../utils/common";

export const createTransaction = async (token, newData) => {
  try {
    const response = await fetch(`${apiUrl}/transactions`, {
      method: "POST",
      body: JSON.stringify(objectToSnake(newData)),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const getTransactions = async (token) => {
  try {
    const response = await fetch(`${apiUrl}/transactions`, {
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

export const getTransaction = async (token, id) => {
  try {
    const response = await fetch(`${apiUrl}/transactions/${id}`, {
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

export const updateTransaction = async (token, id, newData) => {
  try {
    const response = await fetch(`${apiUrl}/transactions/${id}`, {
      method: "POST",
      body: JSON.stringify(objectToSnake(newData)),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
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
