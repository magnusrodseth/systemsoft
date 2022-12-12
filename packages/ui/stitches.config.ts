import { createStitches } from "@stitches/react";
import {
  amber,
  amberDark,
  blue,
  blueDark,
  grass,
  grassDark,
  gray,
  grayDark,
  greenDark,
  indigo,
  indigoDark,
  mauve,
  mauveDark,
  red,
  redDark,
  slate,
  slateDark,
  violet,
  violetDark,
} from "@radix-ui/colors";

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
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
    fontWeights: {
      bold: 700,
      semibold: 600,
      medium: 500,
      normal: 400,
    },
    fonts: {
      sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    },
    shadows: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      lg: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      xl: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      "2xl":
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
    bp4: "(min-width: 1280px)",
  },
  utils: {
    animateNone: () => ({ animation: "none" }),
    animateSpin: () => ({ animation: "$spin 1s linear infinite" }),
    animatePing: () => ({
      animation: "$ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    }),
    animatePulse: () => ({
      animation: "$pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    }),
    animateBounce: () => ({ animation: "$bounce 1s infinite" }),
    smooth: (animation: string) => ({
      transitionProperty:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "150ms",
      animation,
    }),
    m: (value: number) => ({ margin: value }),
    mt: (value: number) => ({ marginTop: value }),
    mr: (value: number) => ({ marginRight: value }),
    mb: (value: number) => ({ marginBottom: value }),
    ml: (value: number) => ({ marginLeft: value }),
    mx: (value: number) => ({ marginLeft: value, marginRight: value }),
    my: (value: number) => ({ marginTop: value, marginBottom: value }),
    p: (value: number) => ({ padding: value }),
    pt: (value: number) => ({ paddingTop: value }),
    pr: (value: number) => ({ paddingRight: value }),
    pb: (value: number) => ({ paddingBottom: value }),
    pl: (value: number) => ({ paddingLeft: value }),
    px: (value: number) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: number) => ({ paddingTop: value, paddingBottom: value }),
    bg: (value: string) => ({ backgroundColor: value }),

    size: (value: number) => ({
      width: value,
      height: value,
    }),

    linearGradient: ({
      from,
      to,
      degrees,
    }: {
      from: string;
      to: string;
      degrees: number;
    }) => ({
      backgroundImage: `linear-gradient(${degrees}deg, ${from}, ${to})`,
    }),
  },
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
  },
});

export const globalStyles = globalCss({
  body: {
    m: 0,
    fontFamily: "$sans",
    fontSize: "$md",
    lineHeight: 1.5,
    height: "100%",
  },
  html: {
    m: 0,
    height: "100%",
  },
});
