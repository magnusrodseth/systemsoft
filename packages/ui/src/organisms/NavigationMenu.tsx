import { NavigationMenuProps as RadixNavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import Box from "../atoms/Box";
import { styled } from "../../stitches.config";

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
      <NavigationLink href="/">Hjem</NavigationLink>
      <NavigationLink href="/expertise">Vår ekspertise</NavigationLink>
      <NavigationLink href="/clients">Våre klienter</NavigationLink>
      <NavigationLink href="/about">Om oss</NavigationLink>
      <NavigationLink href="/employees">Våre ansatte</NavigationLink>

      {children}
    </Box>
  );
};

const NavigationLink: FC<{ children: ReactNode } & LinkProps> = ({
  children,
  ...props
}) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

const StyledLink = styled(Link, {
  px: 12,
  py: 8,
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 5,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "$violet7",
  fontSize: 15,
  color: "$violet12",
  backgroundColor: "$violet3",
  "&:focus": { boxShadow: `0 0 0 2px $violet5` },
  "&:hover": { backgroundColor: "$violet4" },
  display: "block",
  textDecoration: "none",
});

export default NavigationMenu;
