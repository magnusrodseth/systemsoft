import { animateSpin, styled } from "ui";
import Box from "ui/src/atoms/Box";
import { LinkedInLogoIcon, Component1Icon } from "@radix-ui/react-icons";
import Heading from "@ui/atoms/Heading";
import { useContactInformationQuery } from "@/graphql/generated/generated";
import Link from "./Link";

const Icon = styled("div", {
  width: 56,
  height: 56,
  borderRadius: "9999px",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "$violet8",
  backgroundColor: "$violet5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$mauve12",
  fontSize: "$md",
});

const Footer = () => {
  const { data, loading, error } = useContactInformationQuery();

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
                <Heading uppercase size="lg">
                  Besøksadresse
                </Heading>
                <Box>{contactInformation.address}</Box>
                <Box>{`${contactInformation.postalCode} ${contactInformation.city}`}</Box>
                <Box>{contactInformation.country}</Box>
              </Box>

              <Box>
                <Heading uppercase size="lg">
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
                <Icon>
                  <Link href={contactInformation.linkedInLink} target="_blank">
                    <LinkedInLogoIcon />
                  </Link>
                </Icon>
              )}
            </Box>
          </>
        )
      )}
    </Box>
  );
};

export default Footer;
