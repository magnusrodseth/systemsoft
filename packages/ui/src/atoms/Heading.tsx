import { styled } from "../../stitches.config";

const Heading = styled("h1", {
  fontFamily: "$sans",
  fontWeight: "$bold",
  fontSize: "$5",

  variants: {
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
      },
      "5xl": {
        fontSize: "$5xl",
      },
    },
    uppercase: {
      true: {
        textTransform: "uppercase",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },

  compoundVariants: [
    {
      size: "sm",
      uppercase: true,
      css: {
        fontSize: "$sm",
        textTransform: "uppercase",
      },
    },
    {
      size: "md",
      uppercase: true,
      css: {
        fontSize: "$md",
        textTransform: "uppercase",
      },
    },
    {
      size: "lg",
      uppercase: true,
      css: {
        fontSize: "$lg",
        textTransform: "uppercase",
      },
    },
    {
      size: "xl",
      uppercase: true,
      css: {
        fontSize: "$xl",
        textTransform: "uppercase",
      },
    },
    {
      size: "2xl",
      uppercase: true,
      css: {
        fontSize: "$2xl",
        textTransform: "uppercase",
      },
    },
    {
      size: "3xl",
      uppercase: true,
      css: {
        fontSize: "$3xl",
        textTransform: "uppercase",
      },
    },
    {
      size: "4xl",
      uppercase: true,
      css: {
        fontSize: "$4xl",
        textTransform: "uppercase",
      },
    },
    {
      size: "5xl",
      uppercase: true,
      css: {
        fontSize: "$5xl",
        textTransform: "uppercase",
      },
    },
  ],
});

export default Heading;
