import React from "react";
import { withUrqlClient } from "next-urql";
import createUrqlClient from "utils/createUrqlClient";
import Jumbotron from "components/Jumbotron";
import { useServicesQuery, Services as IServices } from "generated/graphql";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";
import Loading from "components/Loading";
import Error from "components/Error";
import Markdown from "components/Markdown";
import ReturnButton from "components/ReturnButton";
import { LOCAL_BACKEND_URL } from "../../constants";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
  const [result, _] = useServicesQuery();

  const { data, fetching, error } = result;

  if (fetching) return <Loading />;

  if (error) return <Error error={error} />;

  const services = data?.services as IServices[];

  return (
    <div className="flex flex-col">
      <Jumbotron title="Services" />

      <div
        className={classNames(
          "grid lg:grid-cols-2 gap-8 ml-10 mr-10",
          "md:grid-cols-1 sm:grid-cols-1"
        )}
      >
        {services.length === 0 ? (
          <div className="flex flex-col w-screen text-center items-center justify-center mt-40 -ml-10 font-mono text-xl font-bold m-auto">
            <h1>Nothing to see here yet...</h1>
            <ReturnButton name="homepage" link="" />
          </div>
        ) : null}
        {services.map((service) => (
          <Wrapper className="bg-gray-200 w-100 m-5" key={service.id}>
            <h1 className="text-3xl font-mono text-center m-2">
              {service.name}
            </h1>
            <div className="flex flex-col justify-center items-center md:flex-row m-2 space-x-2 space-y-2">
              <Wrapper className="bg-white flex justify-center items-center">
                <img src={`${LOCAL_BACKEND_URL}${service.image?.url}`} alt={service.name} />
              </Wrapper>
              <Markdown
                className="flex text-center items-center"
              >{service.description}</Markdown>
            </div>
          </Wrapper>
        ))}
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Services);
