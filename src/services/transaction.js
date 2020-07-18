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
  const { data, error } = await fetchWrapper(
    `${apiUrl}/transactions`,
    "GET",
    token
  );
  return { data, error };
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

async function fetchWrapper(url, method, token, bodyValue) {
  try {
    const response = await fetch(url, {
      method: method,
      body: bodyValue ? JSON.stringify(objectToSnake(bodyValue)) : undefined,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });
    const data = await response.json();

    if (response.ok) {
      return { data };
    } else {
      response.status === 401 && localStorage.clear();
      return { error: data.errors };
    }
  } catch (error) {
    return { error: "Network error" };
  }
}
