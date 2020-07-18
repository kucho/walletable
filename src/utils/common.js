import forkIcon from "../images/icons/fork.svg";
import bagIcon from "../images/icons/shopping-bag.svg";
import houseIcon from "../images/icons/house.svg";
import transportIcon from "../images/icons/car.svg";
import incomeIcon from "../images/icons/coins.svg";
import otherIcon from "../images/icons/other.svg";
import utilitiesIcon from "../images/icons/utilities.svg";

export const apiUrl = "http://localhost:3000";

export const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const objectToSnake = (obj) => {
  const newObject = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[toSnakeCase(key)] = obj[key];
    }
  }
  return newObject;
};

export const camelCase = (obj) => {
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

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const Categories = {
  food_and_drinks: { label: "Food & Drinks", icon: forkIcon, bg: "red.600" },
  others: { label: "Others", icon: otherIcon, bg: "gray.600" },
  shopping: { label: "Shopping", icon: bagIcon, bg: "blue.400" },
  services: { label: "Services", icon: houseIcon, bg: "yellow.400" },
  transport: { label: "Transport", icon: transportIcon, bg: "orange.500" },
  utilities: { label: "Utilities", icon: utilitiesIcon, bg: "teal.400" },
  income: { label: "Income", icon: incomeIcon, bg: "green.400" },
};

export const numberWithCommas = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
