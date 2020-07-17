import React from "react";
import { theme } from "@chakra-ui/core";

const customIcons = {
  save: {
    path: (
      <path
        fill="currentColor"
        d="M12.958 3.083l-2.54-2.54A.996.996 0 0 0 10 .292V.25H1.25a.5.5 0 0 0-.5.5v11.5a.5.5 0 0 0 .5.5h11.5a.5.5 0 0 0 .5-.5V3.79a.997.997 0 0 0-.292-.707zM5 1.375h4V3H5V1.375zm7.125 10.25H1.875V1.375H4V3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V1.716l2.125 2.125v7.784zM7 5.406a2.25 2.25 0 1 0 .001 4.501A2.25 2.25 0 0 0 7 5.407zm0 3.5a1.25 1.25 0 1 1 0-2.499 1.25 1.25 0 0 1 0 2.5z"
      />
    ),
    viewBox: "0 0 14 13",
  },
};

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
  icons: {
    ...theme.icons,
    ...customIcons,
  },
};

export default Theme;
