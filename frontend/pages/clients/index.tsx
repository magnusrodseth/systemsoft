import Carousel from "components/clients/Carousel";
import ClientArticle from "components/clients/ClientArticle";
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

  console.log(fetching, error);

  const clients = data?.clients as IClients[];

  return (
    <div className="flex justify-center flex-col">
      <Wrapper className={classNames("bg-blue-200 w-screen h-96")}>
        <Carousel clients={clients} />
      </Wrapper>
      <div className={classNames("flex flex-col justify-center items-center")}>
        {clients.map((client) => (
          <ClientArticle client={client} />
        ))}
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Clients);
