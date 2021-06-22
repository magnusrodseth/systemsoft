import React from "react";
import { withUrqlClient } from "next-urql";
import createUrqlClient from "utils/createUrqlClient";
import Jumbotron from "components/Jumbotron";
import { useServicesQuery, Services as IServices } from "generated/graphql";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";
import Image from "next/image";

// Note: This is not actually a syntax error.
// It is just TypeScript not being able to recognize Next JS 11 features
import agreement from "../../public/illustrations/agreement.png";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
  const [result, _] = useServicesQuery();

  const { data, fetching, error } = result;

  console.log(fetching, error);

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
        {services.map((service) => {
          return (
            <Wrapper className="bg-gray-200 w-100 m-5" key={service.id}>
              <h1 className="text-3xl font-mono text-center m-2">
                {service.name}
              </h1>
              <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div className="flex justify-center items-center">
                  <Image
                    src={service.image?.url ? service.image?.url : agreement}
                    alt={service.name}
                    width="200px"
                    height="200px"
                    className={classNames(
                      "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101",
                      "rounded-lg hover:rounded-lg"
                    )}
                  />
                </div>
                <p className="w-3/4">{`${service.description.substring(
                  0,
                  125
                )}...`}</p>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Services);
