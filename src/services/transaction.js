import { apiUrl, fetchWrapper } from "../utils/common";

export const createTransaction = async (token, newData) => {
  return await fetchWrapper(`${apiUrl}/transactions`, "POST", token, newData);
};

export const getTransactions = async (token) => {
  return await fetchWrapper(`${apiUrl}/transactions`, "GET", token);
};

export const getTransaction = async (token, id) => {
  return await fetchWrapper(`${apiUrl}/transactions/${id}`, "GET", token);
};

export const updateTransaction = async (token, id, newData) => {
  return await fetchWrapper(
    `${apiUrl}/transactions/${id}`,
    "PATCH",
    token,
    newData
  );
};
