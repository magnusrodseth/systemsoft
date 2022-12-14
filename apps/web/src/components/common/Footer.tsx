import { animateSpin } from "ui";
import Box from "@ui/atoms/Box";
import { LinkedInLogoIcon, Component1Icon } from "@radix-ui/react-icons";
import Heading from "@ui/atoms/Heading";
import Icon from "@ui/atoms/Icon";
import Link from "ui/src/atoms/Link";
import { useQuery } from "@apollo/client";
import ContactInformationQuery from "@/graphql/queries/ContactInformation";
import { indigo, violet } from "@radix-ui/colors";

const Footer = () => {
  const { data, loading, error } = useQuery(ContactInformationQuery);

  if (error) {
    return null;
  }

  const contactInformation = data?.allContactInformation[0] || undefined;

  return (
    <Box
      css={{
        marginTop: "auto",
        backgroundColor: "$violet3",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 8,
        minHeight: 256,
      }}
    >
      {loading ? (
        <Box
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: `${animateSpin} 2s infinite`,
          }}
        >
          <Component1Icon />
        </Box>
      ) : (
        contactInformation && (
          <>
            <Box
              css={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "start",
                gap: 36,
              }}
            >
              <Box>
                <Heading
                  size="lg"
                  uppercase
                  bold
                  css={{
                    linearGradientUnderline: {
                      from: indigo.indigo10,
                      to: violet.violet10,
                    },
                  }}
                >
                  Besøksadresse
                </Heading>
                <Box>{contactInformation.address}</Box>
                <Box>{`${contactInformation.postalCode} ${contactInformation.city}`}</Box>
                <Box>{contactInformation.country}</Box>
              </Box>

              <Box>
                <Heading
                  size="lg"
                  uppercase
                  bold
                  css={{
                    linearGradientUnderline: {
                      from: indigo.indigo10,
                      to: violet.violet10,
                    },
                  }}
                >
                  Kontakt oss
                </Heading>
                <Box>
                  <Link href={`mailto:${contactInformation.email}`}>
                    {contactInformation.email}
                  </Link>
                </Box>
                <Box>{contactInformation.phone}</Box>
              </Box>
            </Box>

            <Box
              css={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                pt: 24,
              }}
            >
              {contactInformation.linkedInLink && (
                <Link href={contactInformation.linkedInLink} target="_blank">
                  <Icon>
                    <LinkedInLogoIcon />
                  </Icon>
                </Link>
              )}
            </Box>
          </>
        )
      )}
    </Box>
  );
};

export default Footer;
