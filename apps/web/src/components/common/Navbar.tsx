import Toggle from "@ui/atoms/Toggle";
import NavigationMenu from "@ui/organisms/NavigationMenu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import useIsDarkStore from "@/store/isDark";

const Navbar = () => {
  const { isDark, toggleDark } = useIsDarkStore();
  return (
    <NavigationMenu>
      <Toggle
        active={isDark}
        activeIcon={<MoonIcon />}
        inactiveIcon={<SunIcon />}
        toggle={toggleDark}
        label="Toggle dark mode"
      />
    </NavigationMenu>
  );
};

export default Navbar;
