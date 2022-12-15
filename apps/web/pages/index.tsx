import Box from "@ui/atoms/Box";
import Button from "@ui/atoms/Button";
import Heading from "@ui/atoms/Heading";
import Typewriter from "ui/src/molecules/Typewriter";
import { violet, indigo } from "@radix-ui/colors";
import Text from "@ui/atoms/Text";

const IndexPage = () => {
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
          flexWrap: "wrap",
          gap: 8,
          "@sm": {
            fontSize: "$sm",
          },
          "@md": {
            fontSize: "$3xl",
          },
          "@lg": {
            fontSize: "$5xl",
          },
        }}
        pageTitle
      >
        <Box>Ditt stopp for </Box>
        <Box
          css={{
            linearGradientText: {
              from: indigo.indigo10,
              to: violet.violet10,
              degrees: 90,
            },
          }}
        >
          <Typewriter
            options={{
              strings: ["kvalitet.", "teknologisk trygghet.", "ingeniørkunst."],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 25,
            }}
          />
        </Box>
      </Heading>

      <Button>call to action</Button>
    </Box>
  );
};

export default IndexPage;
