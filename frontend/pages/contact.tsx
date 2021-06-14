import Wrapper from "components/Wrapper";
import { withUrqlClient } from "next-urql";
import React from "react";
import createUrqlClient from "utils/createUrqlClient";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <div className="grid gap-6 grid-cols-3">
      <Wrapper className="col-start-2 bg-indigo-200">
        <h1 className="text-center text-2xl">Contact us</h1>
      </Wrapper>
    </div>
  );
};

// This page does not need to be server side rendered, as the content is quite static.
export default withUrqlClient(createUrqlClient, { ssr: false })(Contact);
