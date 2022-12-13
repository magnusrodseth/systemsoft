import Box from "@ui/atoms/Box";
import Button from "@ui/atoms/Button";
import Heading from "ui/src/atoms/Heading";
import Typewriter from "ui/src/molecules/Typewriter";
import { violet, indigo } from "@radix-ui/colors";

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
      <Heading size="5xl" css={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
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
              strings: ["kvalitet.", "[noe annet].", "ingeniørkunst."],
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
