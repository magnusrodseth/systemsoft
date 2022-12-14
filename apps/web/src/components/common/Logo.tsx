import Link from "@ui/atoms/Link";
import Image from "@ui/atoms/Image";
import Text from "@ui/atoms/Text";

const Logo = () => {
  return (
    <Link
      href="/"
      css={{
        display: "flex",
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
          fontFamily: "$lato",
        }}
      >
        SystemSoft
      </Text>
    </Link>
  );
};

export default Logo;
