import Link from "@ui/atoms/Link";
import Image from "@ui/atoms/Image";
import Text from "@ui/atoms/Text";
import icon from "public/icon.svg";

const Logo = () => {
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
      <Image src={icon} alt="Logo" width={25} height={25} />
      <Text>SystemSoft</Text>
    </Link>
  );
};

export default Logo;
