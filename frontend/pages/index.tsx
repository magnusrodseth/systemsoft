import Wrapper from "components/Wrapper";
import { withUrqlClient } from "next-urql";
import React from "react";
import createUrqlClient from "utils/createUrqlClient";

const Index = () => {
  return (
    <div className="grid gap-6 grid-cols-3">
      <Wrapper className="col-start-2 bg-red-200">
        <div className="text-center text-2xl">landing page</div>
      </Wrapper>
    </div>
  );
};

// Using Urql, we can optionally server-side render specific pages.
// Index page should not be necessary to SSR, as the content will be quite static.
export default withUrqlClient(createUrqlClient, { ssr: false })(Index);
