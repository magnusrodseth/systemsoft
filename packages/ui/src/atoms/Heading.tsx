import { styled } from "../../stitches.config";

const Heading = styled("h1", {
  display: "inline-block",
  fontFamily: "$sans",
  boxSizing: "border-box",
  m: 1,
  fontWeight: "$normal",

  variants: {
    bold: {
      true: {
        fontWeight: "$bold",
      },
    },
    size: {
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
      xl: {
        fontSize: "$xl",
      },
      "2xl": {
        fontSize: "$2xl",
      },
      "3xl": {
        fontSize: "$3xl",
      },
      "4xl": {
        fontSize: "$4xl",
        fontWeight: "$bold",
      },
      "5xl": {
        fontSize: "5xl",
        fontWeight: "$bold",
      },
      "6xl": {
        fontSize: "6xl",
        fontWeight: "$bold",
      },
      "7xl": {
        fontSize: "7xl",
        fontWeight: "$bold",
      },
      "8xl": {
        fontSize: "8xl",
        fontWeight: "$bold",
      },
    },

    uppercase: {
      true: {
        textTransform: "uppercase",
      },
    },

    pageTitle: {
      true: {
        "@sm": {
          fontSize: "$3xl",
        },
        "@md": {
          fontSize: "$5xl",
        },
        fontWeight: "$bold",
        fontFamily: "$serif",
      },
    },


    subtitle: {
      true: {
        "@maxSm": {
          fontSize: "$md",
        },
        "@sm": {
          fontSize: "$lg",
        },
        "@md": {
          fontSize: "$2xl",
        },
        "@lg": {
          fontSize: "$2xl",
        },
        fontWeight: "$bold",
        textTransform: "uppercase",
        linearGradientUnderline: {
          from: "$indigo10",
          to: "$violet10",
        },
      },
    },
  },
});

export default Heading;
