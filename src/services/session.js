import { apiUrl, fetchWrapper } from "../utils/common";

const loginUser = async (data) => {
  console.log({ data });
  return fetchWrapper(`${apiUrl}/login`, "POST", null, data);
};

export { loginUser };
