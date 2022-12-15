import { ConfigType } from "@stitches/react/types/config";

const utils: ConfigType.Utils = {
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
};

export default utils;
