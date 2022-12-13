import { NavigationMenuProps as RadixNavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { FC, ReactNode } from "react";
import Box from "../atoms/Box";
import { styled } from "../../stitches.config";
import Link from "../atoms/Link";
import Button from "../atoms/Button";

interface NavigationMenuProps extends RadixNavigationMenuProps {}

const NavigationMenu: FC<NavigationMenuProps> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "end",
        gap: 8,
        p: 16,
        backgroundColor: "$mauve2",
      }}
    >
      <Link href="/">
        <Button color="violet">Hjem</Button>
      </Link>

      <Link href="/expertise">
        <Button color="violet">Vår ekspertise</Button>
      </Link>

      <Link href="/clients">
        <Button color="violet">Våre klienter</Button>
      </Link>

      <Link href="/about">
        <Button color="violet">Om oss</Button>
      </Link>

      <Link href="/employees">
        <Button color="violet">Våre ansatte</Button>
      </Link>

      {children}
    </Box>
  );
};

export default NavigationMenu;
