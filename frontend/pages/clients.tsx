import Wrapper from "components/Wrapper";
import { useClientsQuery } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";
import createUrqlClient from "utils/createUrqlClient";

interface ClientsProps {}

const Clients: React.FC<ClientsProps> = ({}) => {
  const [result, _] = useClientsQuery();

  const { data, fetching, error } = result;

  console.log(data, fetching, error);

  return (
    <div className="grid gap-6 grid-cols-3">
      <Wrapper className="col-start-2 bg-blue-200">
        <h1 className="text-center text-2xl">Clients</h1>

        <div></div>
      </Wrapper>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Clients);
