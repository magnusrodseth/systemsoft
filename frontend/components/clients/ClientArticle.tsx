import Wrapper from "components/Wrapper";
import { LOCAL_BACKEND_URL } from "../../constants";
import React from "react";
import classNames from "utils/classNames";
import { Clients as IClients } from "../../generated/graphql";
import Link from "next/link";
import Markdown from "components/Markdown";

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
        "sm:block w-7/12 md:w-7/12 lg:flex space-y-5 m-auto my-5 pt-10"
      )}
    >
      <Wrapper className="bg-gray-100 mr-0 min-h-[200px] md:flex-none lg:w-5/12 m-0 rounded-lg shadow-md hover:shadow-lg flex justify-center items-center">
        {client.logo?.url ? (
          <img
            src={`${LOCAL_BACKEND_URL}${client.logo?.url}`}
            alt={`${client.name} Logo`}
            className={classNames("w-20 m-4")}
          />
        ) : null}
      </Wrapper>

      <div className="flex flex-col justify-center items-center space-y-6 md:flex-1">
        <h1 className={classNames("text-center text-3xl font-bold")}>
          {client.name}
        </h1>

        <Markdown
          className={classNames("text-left w-full p-5 ml-5 lg:text-md md:text-sm sm:text-sm")}
          strip
        >
          {client.description}
        </Markdown>

        <Link href={`clients/${client.slug}`}>
          <button
            className={classNames(
              "border-gray-500 focus:outline-none border-2 hover:bg-gray-500 hover:text-white",
              "transition transform ease-in-out duration-500",
              "tracking-wide font-mono text-gray-600 py-2 px-4 rounded uppercase"
            )}
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClientArticle;
