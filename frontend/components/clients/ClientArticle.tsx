import Wrapper from "components/Wrapper";
import React from "react";
import classNames from "utils/classNames";
import { Clients as IClients } from "../../generated/graphql";

interface ClientArticleProps {
  client: IClients;
}

const ClientArticle: React.FC<ClientArticleProps> = ({
  client,
}: ClientArticleProps) => {
  return (
    <div
      key={client.id}
      className={classNames(
        "flex justify-center items-center flex-row space-y-5",
        "w-7/12"
      )}
    >
      <Wrapper className="bg-gray-100">
        <img
          src={
            client.logo?.url
              ? client.logo?.url
              : "/illustrations/business-idea.png"
          }
          alt={`${client.name} Logo`}
          className={classNames("w-20")}
        />
      </Wrapper>

      <div className="flex flex-col justify-center items-center space-y-6">
        <h1 className={classNames("text-center text-3xl font-bold")}>
          {client.name}
        </h1>

        <p className={classNames("text-left lg:text-md md:text-sm sm:text-sm")}>
          {client.description}
        </p>

        <button
          className={classNames(
            "border-gray-500 focus:outline-none border-2 hover:bg-gray-500 hover:text-white",
            "transition transform ease-in-out duration-500",
            "tracking-wide font-mono text-gray-600 py-2 px-4 rounded uppercase"
          )}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default ClientArticle;
