import DefaultClientFragment from "@/graphql/fragments/Client";
import { useFragment } from "@/graphql/generated";
import ClientsWithTagsQuery from "@/graphql/queries/ClientsWithTags";
import client from "@/lib/apollo";
import Box from "@ui/atoms/Box";
import Heading from "@ui/atoms/Heading";
import Grid from "@ui/molecules/Grid";
import Spinner from "@ui/molecules/Spinner";
import { InferGetStaticPropsType } from "next";
import { FC } from "react";
import { Component1Icon } from "@radix-ui/react-icons";
import Error from "@/components/common/Error";
import Text from "@ui/atoms/Text";

type ClientsPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ClientsPage: FC<ClientsPageProps> = ({ clients, loading, error }) => {
  if (loading) {
    return (
      <Box css={{ my: 32 }}>
        <Spinner icon={<Component1Icon />} />
      </Box>
    );
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
    query: ClientsWithTagsQuery,
  });

  const clients = data.allClient.map((client) =>
    useFragment(DefaultClientFragment, client)
  );

  return {
    props: {
      clients,
      loading,
      error: !!error,
    },
  };
};

export default ClientsPage;
