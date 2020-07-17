import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const Theme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    main: "Poppins, sans-serif",
    alt: "Halant, serif",
  },
  colors: {
    ...theme.colors,
    indigo: {
      100: "#EBF4FF",
      200: "#C3DAFE",
      300: "#A3BFFA",
      400: "#7F9CF5",
      500: "#667EEA",
      600: "#5A67D8",
      700: "#4C51BF",
      800: "#434190",
      900: "#3C366B",
    },
  },
};

export default Theme;
