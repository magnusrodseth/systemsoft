import Box from "@ui/atoms/Box";
import Spinner from "@ui/molecules/Spinner";
import { LinkedInLogoIcon, Component1Icon } from "@radix-ui/react-icons";
import Heading from "@ui/atoms/Heading";
import Icon from "@ui/atoms/Icon";
import Text from "@ui/atoms/Text";
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
        position: "relative",
        backgroundColor: "$violet3",
        width: "100%",
        display: "flex",
        justifyContent: loading ? "center" : "start",
        alignItems: "center",
        flexDirection: "column",
        py: 8,
        minHeight: "12rem",
      }}
    >
      {loading ? (
        <Spinner icon={<Component1Icon />} />
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
                pt: 16,
              }}
            >
              <Box>
                <Heading
                  size="md"
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
                  size="md"
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
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                mt: 8,
              }}
            >
              {contactInformation.linkedInLink && (
                <Link
                  href={contactInformation.linkedInLink}
                  target="_blank"
                  css={{
                    width: "1.25rem",
                  }}
                >
                  <Icon
                    css={{
                      height: "100%",
                    }}
                  >
                    <LinkedInLogoIcon
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Icon>
                </Link>
              )}
            </Box>
          </>
        )
      )}

      <Box
        css={{
          position: "absolute",
          bottom: 0,
          fontSize: "$xs",
          pb: 12,
        }}
      >
        <Text>
          Developed by{" "}
          <Link href="https://github.com/magnusrodseth" target="_blank">
            Magnus Rødseth
          </Link>{" "}
          © 2022 - present.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
