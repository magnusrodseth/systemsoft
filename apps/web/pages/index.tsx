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
          display: "grid",
          gridCols: 1,
          gap: 16,
          justifyContent: "center",
          alignItems: "center",
          "@md": {
            gridCols: 2,
          },
        }}
      >
        <Button callToAction>
          <Link
            href="/clients"
            css={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              justifyContent: "center",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            <Icon>
              <ArrowRightIcon />
            </Icon>
            <Text>Kundeopplevelser</Text>
          </Link>
        </Button>

        <Button callToAction>
          <Link
            href="/expertises"
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            <Icon>
              <ArrowRightIcon />
            </Icon>
            <Text>Vårt håndverk</Text>
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default IndexPage;
