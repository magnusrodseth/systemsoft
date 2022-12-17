import Box from "@ui/atoms/Box";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { indigo, violet } from "@radix-ui/colors";
import Button from "@ui/atoms/Button";
import Heading from "@ui/atoms/Heading";
import Icon from "@ui/atoms/Icon";
import Text from "@ui/atoms/Text";
import Link from "@ui/atoms/Link";
import { FC } from "react";

type NoInformationProps = {
  description: string;
};

const NoInformation: FC<NoInformationProps> = ({ description }) => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
        textAlign: "center",
      }}
    >
      <Heading
        pageTitle
        css={{
          linearGradientUnderline: {
            from: violet.violet10,
            to: indigo.indigo10,
          },
        }}
      >
        Oisann!
      </Heading>
      <Heading
        css={{
          fontSize: "$lg",
        }}
      >
        {description}
      </Heading>

      <Button color="violet">
        <Link
          href="/employees"
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
            },
          }}
        >
          <Icon>
            <ArrowLeftIcon />
          </Icon>
          <Text>Våre ansatte</Text>
        </Link>
      </Button>
    </Box>
  );
};

export default NoInformation;
