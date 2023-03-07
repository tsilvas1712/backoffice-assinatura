import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    "lifewall-pastel": "#FFFAEA",
    "lifewall-yellow": "#FFC600",
    "lifewall-blue":"#97CAEB",
    "lifewall-black":"#212322",
    "lifewall-red":"#FF8189",
    "lifewall-gray":"#F3EDED"
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  styles: {
    global: {
      body: {
        bg: "lifewall-gray",
        color: "lifewall-black",
      },
    },
  },
});