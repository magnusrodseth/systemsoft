import Wrapper from "../components/Wrapper";
import React from "react";
import { withUrqlClient } from "next-urql";
import createUrqlClient from "utils/createUrqlClient";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <div className="grid gap-6 grid-cols-3">
      <Wrapper className="col-start-2 bg-red-200">
        <h1 className="text-center text-2xl">Services</h1>
      </Wrapper>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Services);
