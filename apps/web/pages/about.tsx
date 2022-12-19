import Box from "@ui/atoms/Box";
import Text from "@ui/atoms/Text";
import Heading from "@ui/atoms/Heading";
import Grid from "@ui/molecules/Grid";
import Image from "@ui/atoms/Image";

const content = [
  {
    text: `Vi i SystemSoft spesialiserer oss på lavnivåprogrammering og
          programvareutvikling. Vårt team av erfarne utviklere har en sterk
          bakgrunn i C++ og har en lidenskap for å lage effektive, pålitelige
          løsninger. Vi er stolte av å levere programvare av høy kvalitet til
          våre klienter, slik at dine prosjekter kjører uten problemer og
          oppfyller deres spesifikke behov.`,
    src: "/illustrations/handshake.svg",
  },
  {
    text: `Uansett om du trenger skreddersydd programvare eller har behov for
          teknisk konsultasjon for et eksisterende system, er vårt team klare
          til å hjelpe. Dersom du har et prosjekt du ønsker hjelp med, gleder vi
          oss til å høre fra deg. Vi vil gjerne diskutere ideene dine og finne
          ut hvordan vi kan hjelpe deg med å gjøre dem til virkelighet.`,
    src: "/illustrations/teamwork.svg",
  },
];

const AboutPage = () => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Heading
        css={{
          display: "flex",
          linearGradientUnderline: {
            from: "$indigo10",
            to: "$violet10",
          },
        }}
        pageTitle
      >
        Om oss
      </Heading>

      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {content.map(({ text, src }, i) => {
          const even = i % 2 === 0;

          return (
            <Grid
              key={i}
              css={{
                "@sm": {
                  gridCols: 1,
                  width: "90%",
                },
                "@md": {
                  gridCols: 3,
                  width: "80%",
                },
                gap: 32,
                mx: 16,
                my: 32,
                textAlign: "left",
              }}
            >
              {!even && (
                <Box
                  css={{
                    "@md": {
                      colSpan: 1,
                      colStart: even ? 3 : 1,
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={src}
                    width={223.75}
                    height={166.25}
                    alt="An illustration"
                  />
                </Box>
              )}

              <Box
                css={{
                  fontSize: "$lg",
                  lineHeight: 1.75,
                  "@md": {
                    colSpan: 2,
                    colStart: even ? 1 : 2,
                  },
                  borderTop: even ? "5px solid $violet9" : "none",
                  borderLeft: even ? "5px solid $violet9" : "none",
                  borderRight: !even ? "5px solid $indigo9" : "none",
                  borderBottom: !even ? "5px solid $indigo9" : "none",
                  p: 16,
                }}
              >
                <Text key={i}>{text}</Text>
              </Box>
              {even && (
                <Box
                  css={{
                    "@md": {
                      colSpan: 1,
                      colStart: even ? 3 : 1,
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={src}
                    width={223.75}
                    height={166.25}
                    alt="An illustration"
                  />
                </Box>
              )}
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};

export default AboutPage;
