import { styled } from "ui";
import NextLink from "next/link";

const Link = styled(NextLink, {
  textDecoration: "none",
  color: "$violet11",
  "&:hover": {
    textDecoration: "underline",
    color: "$violet12",
  },
});

export default Link;
