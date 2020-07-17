const apiUrl = "http://localhost:3000";

const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const objectToSnake = (obj) => {
  const newObject = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[toSnakeCase(key)] = obj[key];
    }
  }
  return newObject;
};

const camelCase = (obj) => {
  const newObj = {};
  for (const d in obj) {
    if (obj.hasOwnProperty(d)) {
      newObj[
        d.replace(/(_\w)/g, function (k) {
          return k[1].toUpperCase();
        })
      ] = obj[d];
    }
  }
  return newObj;
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export { toSnakeCase, objectToSnake, camelCase, apiUrl, capitalize };
