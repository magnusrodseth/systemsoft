import Wrapper from "../../components/Wrapper";
import React from "react";
import { withUrqlClient } from "next-urql";
import createUrqlClient from "utils/createUrqlClient";
import Jumbotron from "components/Jumbotron";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <Jumbotron
      title="Services"
      backgroundColor="bg-blue-400"
      backgroundImage="/illustrations/code-review.png"
      />
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Services);
