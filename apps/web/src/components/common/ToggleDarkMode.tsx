import Toggle from "@ui/atoms/Toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import useIsDarkStore from "@/store/isDark";
import { ComponentProps, FC } from "react";

interface ToggleDarkModeProps {
  css?: ComponentProps<typeof Toggle>["css"];
}

const ToggleDarkMode: FC<ToggleDarkModeProps> = ({ css }) => {
  const { isDark, toggleDark } = useIsDarkStore();

  return (
    <Toggle
      active={isDark}
      toggle={toggleDark}
      activeIcon={<MoonIcon />}
      inactiveIcon={<SunIcon />}
      css={css}
      label="Toggle dark mode"
    />
  );
};

export default ToggleDarkMode;
