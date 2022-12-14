import { NavigationMenuProps as RadixNavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { FC, ReactNode } from "react";
import Box from "../atoms/Box";
import Link from "../atoms/Link";
import Button from "../atoms/Button";
import { NavigationItem } from "../types";

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
    <Box
      {...props}
      css={{
        display: "grid",
        gridCols: 2,
        gap: 8,
        p: 16,
        backgroundColor: "$mauve2",
      }}
    >
      <Box
        css={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        {logo}
      </Box>
      <Box
        css={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          columnGap: 8,
        }}
      >
        {items.map(({ label, href }, i) => (
          <Link href={href} key={i}>
            <Button color="violet">{label}</Button>
          </Link>
        ))}
        {children}
      </Box>
    </Box>
  );
};

export default NavigationMenu;
