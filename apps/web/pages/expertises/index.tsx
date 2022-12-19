import DefaultExpertiseFragment from "@/graphql/fragments/Expertise";
import { useFragment } from "@/graphql/generated";
import ExpertisesQuery from "@/graphql/queries/Expertises";
import client from "@/lib/apollo";
import Box from "@ui/atoms/Box";
import Text from "@ui/atoms/Text";
import Heading from "@ui/atoms/Heading";
import { InferGetStaticPropsType } from "next";
import { FC } from "react";
import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";
import Image from "@ui/atoms/Image";
import PortableText from "@/components/PortableText";
import Icon from "@ui/atoms/Icon";
import { CheckIcon } from "@radix-ui/react-icons";

type ExperisesPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ExpertisesPage: FC<ExperisesPageProps> = ({
  expertises,
  loading,
  error,
}) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        textAlign: "center",
        mx: 16,
      }}
    >
      {error ? (
        <Error />
      ) : (
        <>
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
            Vår ekspertise
          </Heading>

          <Box
            css={{
              mt: 32,
            }}
          >
            {expertises.map((expertise, i) => {
              const even = i % 2 === 0;
              return (
                <Box
                  key={i}
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    "@md": {
                      flexDirection: even ? "row" : "row-reverse",
                    },
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    my: 32,
                  }}
                >
                  <Box
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "start",
                      textAlign: "left",
                      p: 32,
                      backgroundColor: even ? "$violet4" : "$indigo4",
                      zIndex: 2,
                      borderRadius: 8,
                    }}
                  >
                    <Heading subtitle>{expertise.name}</Heading>
                    <Text
                      css={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        gap: 8,
                        fontWeight: "bold",
                      }}
                    >
                      <Icon>
                        <CheckIcon />
                      </Icon>
                      {expertise.shortDescription}
                    </Text>

                    <PortableText value={expertise.descriptionRaw} />
                  </Box>

                  <Box
                    css={{
                      position: "relative",
                      zIndex: 1,
                      overflow: "hidden",
                      width: "100%",
                      height: expertise.image?.asset?.url ? "20rem" : "0",
                      my: 16,
                      "@md": {
                        height: "25rem",
                        left: even ? "-5%" : "5%",
                      },
                      opacity: 0.6,
                    }}
                  >
                    {expertise.image?.asset?.url && (
                      <Image
                        src={expertise.image?.asset?.url}
                        alt={
                          expertise.shortDescription ||
                          "An image of an expertise"
                        }
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

export const getStaticProps = async () => {
  const { data, loading, error } = await client.query({
    query: ExpertisesQuery,
  });

  const expertises = data.allExpertise.map((expertise) =>
    useFragment(DefaultExpertiseFragment, expertise)
  );

  return {
    props: {
      expertises,
      loading,
      error: !!error,
    },
  };
};

export default ExpertisesPage;
