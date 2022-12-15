import { styled } from "ui/stitches.config";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import * as RadixDropDownMenu from "@radix-ui/react-dropdown-menu";
import Box from "@ui/atoms/Box";
import Logo from "../common/Logo";
import Button from "@ui/atoms/Button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from "@ui/utils/stitches.keyframes";
import navigation from "@/lib/navigation";
import ToggleDarkMode from "../common/ToggleDarkMode";
import NavLink from "./NavLink";

const MobileNavigation = () => {
  return (
    <MobileMenuRoot>
      <Box
        css={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Logo />
      </Box>

      <Box
        css={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: 8,
        }}
      >
        <ToggleDarkMode />
        <RadixDropDownMenu.Root>
          <RadixDropDownMenu.Trigger asChild>
            <Button
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                smooth: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "$violet2",
                  borderColor: "$violet4",
                },
                "&:active": {
                  backgroundColor: "$violet3",
                  borderColor: "$violet5",
                },
              }}
            >
              <HamburgerMenuIcon />
            </Button>
          </RadixDropDownMenu.Trigger>

          <DropdownContent>
            {navigation.map(({ label, href }, i) => (
              <DropdownItem key={i}>
                <NavLink href={href}>{label}</NavLink>
              </DropdownItem>
            ))}
          </DropdownContent>
        </RadixDropDownMenu.Root>
      </Box>
    </MobileMenuRoot>
  );
};

const MobileMenuRoot = styled(RadixNavigationMenu.Root, {
  "@maxMd": {
    display: "grid",
    gridCols: 2,
    gap: 8,
    p: 16,
  },
  "@md": {
    display: "none",
  },
});

const DropdownContent = styled(RadixDropDownMenu.Content, {
  minWidth: "10rem",
  p: 16,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  backgroundColor: "$mauve2",
  borderRadius: 4,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "$mauve6",
  zIndex: 1000,
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const DropdownItem = styled(RadixDropDownMenu.Item, {});

export default MobileNavigation;
