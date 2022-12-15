import navigation from "@/lib/navigation";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import useIsDarkStore from "@/store/isDark";
import Box from "@ui/atoms/Box";
import Button from "@ui/atoms/Button";
import Toggle from "@ui/atoms/Toggle";
import Logo from "../common/Logo";
import { styled } from "ui/stitches.config";
import { scaleIn, scaleOut } from "@ui/utils/stitches.keyframes";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const DesktopNavigation = () => {
  const { isDark, toggleDark } = useIsDarkStore();

  return (
    <DesktopMenuRoot>
      <Box
        css={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Logo />
      </Box>

      <NavigationMenuItem>
        <NavigationMenuList
          css={{
            display: "flex",
            columnGap: 8,
          }}
        >
          {navigation.map(({ label, href }, i) => (
            <RadixNavigationMenu.Link href={href} key={i}>
              <Button color="violet">{label}</Button>
            </RadixNavigationMenu.Link>
          ))}
          <Toggle
            active={isDark}
            toggle={toggleDark}
            activeIcon={<MoonIcon />}
            inactiveIcon={<SunIcon />}
          />
        </NavigationMenuList>
      </NavigationMenuItem>

      <DesktopViewport />
    </DesktopMenuRoot>
  );
};

const DesktopMenuRoot = styled(RadixNavigationMenu.Root, {
  "@maxMd": {
    display: "none",
  },
  "@md": {
    display: "flex",
    alignItems: "center",
    gap: 8,
    p: 16,
    backgroundColor: "$mauve2",
  },
});

const NavigationMenuList = styled(RadixNavigationMenu.List, {
  listStyle: "none",
  my: 0,
});

const NavigationMenuItem = styled(RadixNavigationMenu.Item, {
  listStyle: "none",
  display: "flex",
  flex: 1,
  justifyContent: "end",
  alignItems: "center",
});

const DesktopViewport = () => {
  return <NavigationMenuViewport />;
};

const NavigationMenuViewport = styled(RadixNavigationMenu.Viewport, {
  position: "relative",
  width: "100%",
  height: "var(--radix-navigation-menu-viewport-height)",
  "@md": {
    width: "var(--radix-navigation-menu-viewport-width)",
  },
  "@media (prefers-reduced-motion: no-preference)": {
    transition: "width, height, 300ms ease",
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
});

export default DesktopNavigation;
