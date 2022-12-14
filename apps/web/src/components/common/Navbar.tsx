import Toggle from "@ui/atoms/Toggle";
import NavigationMenu from "@ui/organisms/NavigationMenu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import useIsDarkStore from "@/store/isDark";
import navigation from "@/lib/navigation";
import Logo from "./Logo";

const Navbar = () => {
  const { isDark, toggleDark } = useIsDarkStore();
  return (
    <NavigationMenu items={navigation} logo={<Logo />}>
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
