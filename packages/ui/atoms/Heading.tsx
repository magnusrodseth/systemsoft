import { styled } from "../stitches.config";

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
  },

  defaultVariants: {
    size: "md",
  },
});

export default Heading;
