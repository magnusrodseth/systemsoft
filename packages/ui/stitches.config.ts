import { createStitches } from "@stitches/react";
import {
  amber,
  amberDark,
  blue,
  blueDark,
  grass,
  grassDark,
  indigo,
  indigoDark,
  mauve,
  mauveDark,
  red,
  redDark,
  sky,
  skyDark,
  violet,
  violetDark,
} from "@radix-ui/colors";
import utils from "./src/utils/stitches.utils";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...mauve,
      ...violet,
      ...indigo,
      ...red,
      ...grass,
      ...amber,
      ...blue,
      ...sky,
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "8rem",
    },
    fontWeights: {
      bold: 700,
      semibold: 600,
      medium: 500,
      normal: 400,
    },
    fonts: {
      sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      serif: "Garamond",
      montserrat: "Montserrat, sans-serif",
      mono: "menlo, monospace",
    },
    shadows: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      lg: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      xl: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      "2xl":
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    maxSm: "(max-width: 639px)",
    maxMd: "(max-width: 767px)",
    maxLg: "(max-width: 1023px)",
    maxXl: "(max-width: 1279px)",
  },

  utils,
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    ...mauveDark,
    ...violetDark,
    ...indigoDark,
    ...redDark,
    ...grassDark,
    ...amberDark,
    ...blueDark,
    ...skyDark,
  },
});

export const globalStyles = globalCss({
  body: {
    m: 0,
    fontFamily: "$sans",
    fontSize: 16,
    lineHeight: 1.5,
    height: "100%",
  },
  html: {
    m: 0,
    height: "100%",
  },
  "@font-face": [
    {
      fontFamily: "Garamond",
      src: "local(./fonts/Garamond.ttf)",
    },
    {
      fontFamily: "Garamond",
      src: "local(./fonts/Garamond-Italic.ttf)",
      fontStyle: "italic",
    },
  ],
});

export const animateSpin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});
