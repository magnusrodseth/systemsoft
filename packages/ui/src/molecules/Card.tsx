import { styled } from "../../stitches.config";

const Card = styled("div", {
  backgroundColor: "$mauve3",
  pb: 16,
  borderRadius: 8,
  color: "$violet12",
  shadow: "xl",
  "&:hover": {
    shadow: "2xl",
  },
  smooth: "all 0.3s ease-in-out",
});

export default Card;
