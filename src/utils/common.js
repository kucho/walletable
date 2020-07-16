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

export { toSnakeCase, objectToSnake, apiUrl };
