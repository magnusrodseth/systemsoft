import React from "react";
import { GetServerSideProps } from "next";
import { useClientQuery } from "generated/graphql";
import createUrqlClient from "utils/createUrqlClient";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import { useRouter } from "next/dist/client/router";

const Client: React.FC<WithUrqlProps> = ({ name }) => {
  const [result, _] = useClientQuery({ variables: { slug: name } });
  const router = useRouter();

  const { data, fetching, error } = result;

  if (fetching) return <>Loading...</>;
  if (error) return <>Error...</>;

  if (data?.clients?.length == 0) {
    router.push("/clients");
    return <></>;
  }

  return (
    <div>
      {data?.clients?.map((client, key) => (
        <h2 key={key}>{client?.name}</h2>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { client } = context.query;

  return {
    props: {
      name: client,
    },
  };
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Client);
