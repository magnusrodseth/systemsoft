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
            Våre klienter
          </Heading>

          <Text
            css={{
              my: 16,
            }}
          >
            🚧 Under konstruksjon. Vennligst kom tilbake senere. 🚧
          </Text>
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
