import Box from "@ui/atoms/Box";
import Button from "@ui/atoms/Button";
import Heading from "@ui/atoms/Heading";
import Typewriter from "ui/src/molecules/Typewriter";
import { violet, indigo } from "@radix-ui/colors";
import Text from "@ui/atoms/Text";
import Link from "@ui/atoms/Link";
import Icon from "@ui/atoms/Icon";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const IndexPage = () => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 32,
      }}
    >
      <Heading
        css={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: 8,
          mb: 16,
          "@md": {
            flexDirection: "row",
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

      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          justifyContent: "center",
          alignItems: "center",
          "@md": {
            flexDirection: "row",
          },
        }}
      >
        <Link href="/clients">
          <Button
            callToAction
            css={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Icon>
              <ArrowRightIcon />
            </Icon>
            <Text>Kundeopplevelser</Text>
          </Button>
        </Link>

        <Link href="/expertises">
          <Button
            callToAction
            css={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Icon>
              <ArrowRightIcon />
            </Icon>
            <Text>Vårt håndverk</Text>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default IndexPage;
