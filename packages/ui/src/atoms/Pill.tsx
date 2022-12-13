import { styled } from "../../stitches.config";

const Pill = styled("div", {
  backgroundColor: "$violet3",
  borderRadius: 9999,
  px: 12,
  py: 6,
  color: "$violet12",
  borderStyle: "solid",
  borderWidth: 2,
  borderColor: "$violet7",
  "&:hover": {
    backgroundColor: "$violet4",
    borderColor: "$violet8",
  },
  "&:active": {
    backgroundColor: "$violet5",
    borderColor: "$violet8",
  },
});

export default Pill;
