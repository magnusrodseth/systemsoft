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
    </Box>
  );
};

export default AboutPage;
