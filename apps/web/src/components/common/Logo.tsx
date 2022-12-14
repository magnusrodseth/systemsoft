import Link from "@ui/atoms/Link";
import Image from "@ui/atoms/Image";
import Text from "@ui/atoms/Text";
import Box from "@ui/atoms/Box";

const Logo = () => {
  // TODO: Add Lato font for the logo
  return (
    <Link
      href="/"
      css={{
        display: "flex",
        fontFamily: "$montserrat",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        smooth: "translateY(-2px)",
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <Image src="/logo.svg" alt="Logo" width={25} height={25} />
      <Text
        css={{
          fontFamily: "$montserrat",
          color: "$mauve12",
          fontSize: "$lg",
        }}
      >
        SystemSoft
      </Text>
    </Link>
  );
};

export default Logo;
