import { apiUrl, fetchWrapper } from "../utils/common";

export const getUser = async (token) => {
  return await fetchWrapper(`${apiUrl}/user`, "GET", token);
};

export const createUser = async (userData) => {
  return await fetchWrapper(`${apiUrl}/users`, "POST", null, userData);
};

export const updateUser = async (token, newData) => {
  return await fetchWrapper(`${apiUrl}/edit_user`, "PATCH", token, newData);
};
