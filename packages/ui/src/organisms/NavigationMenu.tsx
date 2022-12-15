import { NavigationMenuProps as RadixNavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { useRouter } from "next/router";
import { ComponentProps, FC, ReactNode } from "react";
import Box from "../atoms/Box";
import Link from "../atoms/Link";
import Button from "../atoms/Button";
import { NavigationItem } from "../types";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { styled } from "../../stitches.config";

interface NavigationMenuProps extends RadixNavigationMenuProps {
  logo?: ReactNode;
  items: NavigationItem[];
}

const NavigationMenu: FC<NavigationMenuProps> = ({
  logo,
  items,
  children,
  ...props
}) => {
  return (
    <NavigationMenuRoot {...props}>
      <Box
        css={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        {logo}
      </Box>
      <NavigationMenuItem>
        <NavigationMenuList
          css={{
            display: "flex",
            columnGap: 8,
          }}
        >
          {items.map(({ label, href }, i) => (
            <Link href={href} key={i}>
              <Button color="violet">{label}</Button>
            </Link>
          ))}
          {children}
        </NavigationMenuList>
      </NavigationMenuItem>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  );
};

const NavigationMenuRoot = styled(RadixNavigationMenu.Root, {
  display: "grid",
  gridCols: 2,
  gap: 8,
  p: 16,
  backgroundColor: "$mauve2",
});

const NavigationMenuList = styled(RadixNavigationMenu.List, {
  listStyle: "none",
  my: 0,
});

const NavigationMenuItem = styled(RadixNavigationMenu.Item, {
  listStyle: "none",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
});

const ViewportPosition = styled("div", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  top: "100%",
  left: 0,
  perspective: 2000,
});

const NavigationMenuViewport = styled(RadixNavigationMenu.Viewport, {});

export default NavigationMenu;
