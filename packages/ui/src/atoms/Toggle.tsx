import { FC } from "react";
import { styled } from "../../stitches.config";
import * as RadixToggle from "@radix-ui/react-toggle";

type ToggleProps = {
  active: boolean;
  toggle: () => void;
  inactiveIcon: React.ReactNode;
  activeIcon: React.ReactNode;
  label?: string;
};

const Toggle: FC<ToggleProps> = ({
  active,
  toggle,
  inactiveIcon,
  activeIcon,
  label,
}) => (
  <ToggleRoot aria-label={label || "Toggle"} onClick={toggle}>
    {active ? activeIcon : inactiveIcon}
  </ToggleRoot>
);

const ToggleRoot = styled(RadixToggle.Root, {
  all: "unset",
  backgroundColor: "$mauve5",
  borderColor: "$mauve6",
  borderStyle: "solid",
  borderWidth: 2,
  color: "$mauve12",
  height: 35,
  width: 35,
  borderRadius: 4,
  display: "flex",
  fontSize: "$xl",
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  "&:hover": { backgroundColor: "$mauve7", borderColor: "$mauve8" },
  "&[data-state=on]": {
    backgroundColor: "$slate11",
    color: "$slate1",
  },
});

export default Toggle;
