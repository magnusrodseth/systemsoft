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
  ],
});

export default Heading;
