import Box from "@ui/atoms/Box";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const NavigationMenu = () => {
  return (
    <Box
      css={{
        minHeight: "5rem",
      }}
    >
      <DesktopNavigation />
      <MobileNavigation />
    </Box>
  );
};

export default NavigationMenu;
