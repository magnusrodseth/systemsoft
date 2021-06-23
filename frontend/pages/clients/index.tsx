import Carousel from "components/clients/Carousel";
import ClientArticle from "components/clients/ClientArticle";
import Loading from "components/Loading";
import Wrapper from "components/Wrapper";
import { useClientsQuery } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";
import classNames from "utils/classNames";
import createUrqlClient from "utils/createUrqlClient";
import { Clients as IClients } from "../../generated/graphql";

interface ClientsProps {}

const Clients: React.FC<ClientsProps> = ({}: ClientsProps) => {
  const [result, _] = useClientsQuery();

  const { data, fetching, error } = result;

  if (fetching)
    return (
      <h1>
        <Loading />
      </h1>
    );

  if (error) return <h1>error</h1>;

  const clients = data?.clients as IClients[];

  return (
    <div className="flex justify-center flex-col mb-8">
      <Wrapper className={classNames("bg-blue-200 w-screen h-96 m-0")}>
        <Carousel clients={clients} />
      </Wrapper>
      <div className={classNames("flex flex-col justify-center items-center")}>
        {clients.map((client) => (
          <ClientArticle client={client} key={client.id} />
        ))}
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Clients);
