import { styled } from "../../stitches.config";

const Button = styled("button", {
  outline: "none",
  backgroundColor: "$violet4",
  color: "$violet11",
  borderColor: "$violet7",
  "&:hover": {
    backgroundColor: "$violet5",
    borderColor: "$violet8",
  },
});

export default Button;
