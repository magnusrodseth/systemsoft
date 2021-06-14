import Wrapper from "../components/Wrapper";
import React from "react";
import { withUrqlClient } from "next-urql";
import createUrqlClient from "utils/createUrqlClient";
import { useServicesQuery } from "generated/graphql";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
  const [result, _] = useServicesQuery();

  const { data, fetching, error } = result;

  console.log(data, fetching, error);

  return (
    <div className="grid gap-6 grid-cols-3">
      <Wrapper className="col-start-2 bg-red-200">
        <h1 className="text-center text-2xl">Services</h1>
      </Wrapper>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Services);
