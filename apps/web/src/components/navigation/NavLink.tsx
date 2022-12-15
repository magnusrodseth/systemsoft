import Link from "@ui/atoms/Link";
import { ComponentProps, FC } from "react";
import { useRouter } from "next/router";

interface NavLinkProps extends ComponentProps<typeof Link> {}

const NavLink: FC<NavLinkProps> = ({ href, children, ...props }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      css={{
        textDecoration: "none",
        color: "$mauve12",
        fontSize: "$lg",
        "&:hover": {
          textDecoration: "none",
        },
      }}
      {...props}
      active={isActive}
    >
      {children}
    </Link>
  );
};

export default NavLink;
