import { styled } from "../../stitches.config";

const Button = styled("button", {
  outline: "none",
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 4,
  px: 12,
  py: 8,
  color: "$mauve12",
  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    color: {
      indigo: {
        backgroundColor: "$indigo5",
        borderColor: "$indigo7",
        "&:hover": {
          backgroundColor: "$indigo4",
          borderColor: "$indigo8",
        },
        "&:focus": {
          boxShadow: "0 0 0 2px $indigo6",
        },
      },
      violet: {
        backgroundColor: "$violet5",
        borderColor: "$violet7",
        "&:hover": {
          backgroundColor: "$violet4",
          borderColor: "$violet8",
        },
        "&:focus": {
          boxShadow: "0 0 0 2px $violet6",
        },
      },
      neutral: {
        backgroundColor: "$mauve5",
        borderColor: "$mauve7",
        "&:hover": {
          backgroundColor: "$mauve4",
          borderColor: "$mauve8",
        },
        "&:focus": {
          boxShadow: "0 0 0 2px $mauve6",
        },
      },
    },
  },

  defaultVariants: {
    color: "neutral",
  },
});

export default Button;
