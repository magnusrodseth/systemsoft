import navigation from "@/lib/navigation";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import Box from "@ui/atoms/Box";
import Logo from "../common/Logo";
import { styled } from "ui/stitches.config";
import { scaleIn, scaleOut } from "@ui/utils/stitches.keyframes";
import ToggleDarkMode from "../common/ToggleDarkMode";
import Link from "@ui/atoms/Link";
import NavLink from "./NavLink";
import Button from "@ui/atoms/Button";

const DesktopNavigation = () => {
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

      <NavigationMenuList
        css={{
          display: "flex",
          flex: 1,
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Box
          css={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            columnGap: 16,
          }}
        >
          {navigation.map(({ label, href }, i) => (
            <NavigationMenuItem key={i}>
              <NavLink href={href}>{label}</NavLink>
            </NavigationMenuItem>
          ))}
          <ToggleDarkMode />
        </Box>
      </NavigationMenuList>

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
    justifyContent: "space-between",
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
