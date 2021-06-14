import Wrapper from "components/Wrapper";
import { withUrqlClient } from "next-urql";
import React from "react";
import createUrqlClient from "utils/createUrqlClient";

const Index = () => {
  return (
    <div className="flex m-3 justify-center items-center rounded-lg h-screen">
      <Wrapper className="col-start-2 grid grid-cols-3 m-2">
        {/* Left 2/3 of grid */}
        <Wrapper className="col-start-1 col-span-2">
          <div className="flex justify-center items-center flex-col">
            <div className="">
              <h1 className="text-3xl text-center">Heading goes here</h1>
              <h1 className="text-2xl text-center">Subheading goes here</h1>
            </div>

            <p className="font-mono p-2 m-2">
              Dignissimos tempore eum non adipisci magni. Voluptatem laboriosam
              quasi. Voluptatem perspiciatis qui. Aut iste incidunt blanditiis
              quia dolor non voluptate qui. Non quas voluptas eaque veritatis
              dolore corrupti ea reprehenderit. Et officiis accusantium.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 transition transform ease-in-out duration-500 tracking-wide font-mono text-white py-2 px-4 rounded">
              CALL TO ACTION
            </button>
          </div>
        </Wrapper>

        {/* Right 1/3 of grid */}
        <Wrapper className="col-start-3 flex justify-center items-center">
          <h1 className="text-3xl text-center">Image goes here</h1>
        </Wrapper>
      </Wrapper>
    </div>
  );
};

// Using Urql, we can optionally server-side render specific pages.
// Index page should not be necessary to SSR, as the content will be quite static.
export default withUrqlClient(createUrqlClient, { ssr: false })(Index);
