import React from "react";
import { GetServerSideProps } from "next";
import { useClientQuery } from "generated/graphql";
import createUrqlClient from "utils/createUrqlClient";
import { withUrqlClient } from "next-urql";

interface ClientProps {
  name: string;
}

const Client: React.FC<ClientProps> = ({ name }: ClientProps) => {
  const [result, _] = useClientQuery({ variables: { slug: name } });

  const { data, fetching, error } = result;

  if (fetching) return <>Loading...</>;
  if (error) return <>Error...</>;

  return (
    <div>
      {data?.clients?.map((client) => (
        <h2>{client?.name}</h2>
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
