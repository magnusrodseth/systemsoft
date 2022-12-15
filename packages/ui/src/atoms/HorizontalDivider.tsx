import { styled } from "../../stitches.config";
import Box from "./Box";

const HorizontalDivider = styled(Box, {
  margin: "0 auto",
  width: "98%",
  height: 2,
  backgroundColor: "$mauve10",
  my: 16,
  opacity: 0.3,
});

export default HorizontalDivider;
