import { styled } from "../stitches.config";

const Button = styled("button", {
  backgroundColor: "$gray300",
  borderRadius: "9999px",
  fontSize: "$1",
  px: 1,
  py: 2,
  "&:hover": {
    backgroundColor: "$gray500",
  },
  smooth: "all 0.2s ease",
});

export default Button;
