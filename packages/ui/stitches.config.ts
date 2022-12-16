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
  purple,
  purpleDark,
  red,
  redDark,
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
      ...purple,
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

  utils: {
    // Margin and padding
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

    // Gradient
    linearGradientBg: ({
      from,
      to,
      degrees,
    }: {
      from: string;
      to: string;
      degrees?: number;
    }) => ({
      background: `linear-gradient(${degrees || 90}deg, ${from}, ${to})`,
    }),

    linearGradientText: ({
      from,
      to,
      degrees,
    }: {
      from: string;
      to: string;
      degrees: number;
    }) => ({
      background: `linear-gradient(${degrees}deg, ${from}, ${to})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }),

    linearGradientUnderline: ({ from, to }: { from: string; to: string }) => ({
      backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 0.1em",
      backgroundPosition: "0 88%",
      transition: "background-size 0.25s ease-in",
    }),

    // Grid
    gridCols: (
      value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "none"
    ) =>
      value === "none"
        ? {
            gridTemplateColumns: "none",
          }
        : {
            gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`,
          },
    gridRows: (value: 1 | 2 | 3 | 4 | 5 | 6 | "none") =>
      value === "none"
        ? {
            gridTemplateRows: "none",
          }
        : {
            gridTemplateRows: `repeat(${value}, minmax(0, 1fr))`,
          },

    // Shadow
    shadow: (value: "sm" | "md" | "lg" | "xl" | "2xl") => ({
      boxShadow: `$${value}`,
    }),

    // Animation
    smooth: (transform: string) => ({
      // Add smooth transition both on hover and on leave
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transition: "all 0.3s ease-in-out",
        transform,
      },
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
    ...purpleDark,
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
