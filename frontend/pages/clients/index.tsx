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
import Error from "components/Error";
import ReturnButton from "components/ReturnButton";
import Jumbotron from "components/Jumbotron";

interface ClientsProps {}

const Clients: React.FC<ClientsProps> = ({}: ClientsProps) => {
  const [result, _] = useClientsQuery();

  const { data, fetching, error } = result;

  if (fetching) return <Loading />;

  if (error) return <Error />;

  const clients = data?.clients as IClients[];

  return (
    <div className="flex justify-center flex-col mb-8">
      {clients.length !== 0 ? (
        <Wrapper className={classNames("bg-gray-300 w-screen h-96 m-0")}>
          <Carousel clients={clients} />
        </Wrapper>
      ) : (
        <Jumbotron title="Clients" />
      )}

      <div
        className={classNames(
          "flex flex-col justify-center items-center divide-y"
        )}
      >
        {clients.length === 0 ? (
          <div className="flex flex-col w-screen text-center items-center justify-center mt-40 font-mono text-xl font-bold m-auto">
            <h1>Nothing to see here yet...</h1>
            <ReturnButton name="homepage" link="" />
          </div>
        ) : null}
        {clients.map((client) => (
          <ClientArticle client={client} key={client.id} />
        ))}
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Clients);
