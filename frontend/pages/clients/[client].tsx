import React from "react";
import { GetServerSideProps } from "next";
import { useClientQuery, Clients as IClients } from "generated/graphql";
import createUrqlClient from "utils/createUrqlClient";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import { useRouter } from "next/dist/client/router";
import References from "components/clients/References";

const Client: React.FC<WithUrqlProps> = ({ name }) => {
  const [result, _] = useClientQuery({ variables: { slug: name } });
  const router = useRouter();

  const { data, fetching, error } = result;

  console.log(fetching, error);

  const clients = data?.clients as IClients[];

  if (fetching) return <>Loading...</>;
  if (error) return <>Error...</>;

  // Clean up input and use const client for the unique client fetched
  const gotNoClients = data?.clients?.length === 0;
  const gotSeveralClients = data?.clients?.length !== 1;

  if (gotNoClients || gotSeveralClients) {
    router.push("/clients");
    return <></>;
  }

  const client = clients[0];

  return (
    <div>
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-7xl font-mono font-bold p-6">
          {client.name}
        </h1>

        <p className="font-mono text-md text-center">
          Take a look at how we've helped {client.name}.
        </p>
      </div>
      <References clientSlug={name} />
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
