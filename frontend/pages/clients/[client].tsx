import React from "react";
import { GetServerSideProps } from "next";
import { useClientQuery } from "generated/graphql";
import createUrqlClient from "utils/createUrqlClient";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import { useRouter } from "next/dist/client/router";
import References from "components/clients/References";

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
      <div>
        {data?.clients?.map((client) => (
          <div key={client?.id}>
            <h1>{client?.name}</h1>
          </div>
        ))}
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
