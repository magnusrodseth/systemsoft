import Box from "@ui/atoms/Box";
import Text from "@ui/atoms/Text";
import Heading from "@ui/atoms/Heading";

const AboutPage = () => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Heading
        css={{
          display: "flex",
          "@sm": {
            fontSize: "$md",
          },
          "@md": {
            fontSize: "$3xl",
          },
          "@lg": {
            fontSize: "$5xl",
          },
          linearGradientUnderline: {
            from: "$indigo10",
            to: "$violet10",
          },
        }}
        pageTitle
      >
        Om oss
      </Heading>

      <Text
        css={{
          my: 16,
        }}
      >
        🚧 Under konstruksjon. Vennligst kom tilbake senere. 🚧
      </Text>
    </Box>
  );
};

export default AboutPage;
