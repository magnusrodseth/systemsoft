import NextLink from "next/link";
import { styled } from "../../stitches.config";

const Link = styled(NextLink, {
  textDecoration: "none",
  color: "$violet11",
  "&:hover": {
    textDecoration: "underline",
    color: "$violet10",
  },
});

export default Link;
