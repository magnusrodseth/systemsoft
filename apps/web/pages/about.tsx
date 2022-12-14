import Box from "@ui/atoms/Box";
import Heading from "@ui/atoms/Heading";

const AboutPage = () => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Heading css={{ display: "flex", gap: 8 }}>Om oss</Heading>
    </Box>
  );
};

export default AboutPage;
