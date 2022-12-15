import Link from "@ui/atoms/Link";
import Image from "@ui/atoms/Image";
import useIsDarkStore from "@/store/isDark";
import logoLight from "public/logo-light.svg";
import logoDark from "public/logo-dark.svg";

const Logo = () => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <Link
      href="/"
      css={{
        display: "flex",
        fontFamily: "$lato",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        smooth: "translateY(-2px)",
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <Image
        src={isDark ? logoDark : logoLight}
        alt="Logo"
        width={95.25}
        height={52.05}
      />
    </Link>
  );
};

export default Logo;
