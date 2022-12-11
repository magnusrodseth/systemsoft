import { createStitches } from "@stitches/react";

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
      // Gray
      gray50: "#f9fafb",
      gray100: "#f7fafc",
      gray200: "#edf2f7",
      gray300: "#e2e8f0",
      gray400: "#cbd5e0",
      gray500: "#a0aec0",
      gray600: "#718096",
      gray700: "#4a5568",
      gray800: "#1f2937",
      gray900: "#1a202c",

      // White
      white: "#ffffff",

      // Black
      black: "#000000",
    },
    space: {
      0: "0px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
    },
    fontSizes: {
      1: "0.75rem",
      2: "0.875rem",
      3: "1rem",
      4: "1.125rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.875rem",
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

    size: (value: number) => ({
      width: value,
      height: value,
    }),

    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    gray50: "#1a202c",
    gray100: "#1f2937",
    gray200: "#4a5568",
    gray300: "#718096",
    gray400: "#a0aec0",
    gray500: "#cbd5e0",
    gray600: "#e2e8f0",
    gray700: "#edf2f7",
    gray800: "#f7fafc",
    gray900: "#f9fafb",
    white: "#ffffff",
    black: "#000000",
  },
});
