import { styled } from "../stitches.config";

const Button = styled("button", {
  backgroundColor: "ActiveText",
  borderRadius: "9999px",
  fontSize: "1rem",
  padding: "0.5rem 1rem",
  "&:hover": {
    backgroundColor: "$gray500",
  },
});

export default Button;
