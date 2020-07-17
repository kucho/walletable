const apiUrl = "http://localhost:3000";

const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const objectToSnake = (obj) => {
  const newObject = {};
  for (let key in obj) {
    newObject[toSnakeCase(key)] = obj[key];
  }
  return newObject;
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export { toSnakeCase, objectToSnake, apiUrl, capitalize };
