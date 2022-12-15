import { ComponentProps, FC } from "react";
import { styled } from "../../stitches.config";
import * as RadixToggle from "@radix-ui/react-toggle";

interface ToggleProps extends ComponentProps<typeof ToggleRoot> {
  active: boolean;
  toggle: () => void;
  inactiveIcon: React.ReactNode;
  activeIcon: React.ReactNode;
  label?: string;
}

const Toggle: FC<ToggleProps> = ({
  active,
  toggle,
  inactiveIcon,
  activeIcon,
  label,
  ...props
}) => (
  <ToggleRoot aria-label={label || "Toggle"} onClick={toggle} {...props}>
    {active ? activeIcon : inactiveIcon}
  </ToggleRoot>
);

const ToggleRoot = styled(RadixToggle.Root, {
  all: "unset",
  backgroundColor: "$mauve5",
  borderColor: "$mauve6",
  borderStyle: "solid",
  borderWidth: 1,
  color: "$mauve12",
  p: 8,
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
