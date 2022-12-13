import { styled } from "../../stitches.config";

const Card = styled("div", {
  backgroundColor: "$mauve3",
  pb: 16,
  color: "$violet12",
  shadow: "xl",
  "&:hover": {
    shadow: "2xl",
  },
  // TODO: Add animation
});

export default Card;
