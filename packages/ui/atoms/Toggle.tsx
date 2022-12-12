import { FC } from "react";
import { styled } from "../stitches.config";
import * as RadixToggle from "@radix-ui/react-toggle";
import { blackA } from "@radix-ui/colors";

type ToggleProps = {
  active: boolean;
  inactiveIcon: React.ReactNode;
  activeIcon: React.ReactNode;
  label?: string;
};

const Toggle: FC<ToggleProps> = ({
  active,
  inactiveIcon,
  activeIcon,
  label,
}) => (
  <ToggleRoot aria-label={label || "Toggle"}>
    {active ? activeIcon : inactiveIcon}
  </ToggleRoot>
);

const ToggleRoot = styled(RadixToggle.Root, {
  all: "unset",
  backgroundColor: "$gray5",
  color: "$gray11",
  height: 35,
  width: 35,
  borderRadius: 4,
  display: "flex",
  fontSize: "$3",
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  "&:hover": { backgroundColor: "$gray7" },
  "&[data-state=on]": {
    backgroundColor: "$gray12",
    color: "$gray1",
  },
  "&:focus": { boxShadow: `0 0 0 1px ${blackA.blackA10}` },
});

export default Toggle;
