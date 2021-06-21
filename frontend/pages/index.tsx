import Wrapper from "components/Wrapper";
import { useGetEmployeeResumeQuery } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";
import classNames from "utils/classNames";
import createUrqlClient from "utils/createUrqlClient";

const Index = () => {
  const [result, _] = useGetEmployeeResumeQuery({
    variables: { employeeSlug: "magnus-rodseth" },
  });

  const { data } = result;

  return (
    <div className="flex m-3 justify-center items-center rounded-lg h-screen">
      <Wrapper
        className={classNames(
          "grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1",
          "bg-gray-200 flex justify-center items-center"
        )}
      >
        {/* Left 2/3 of grid */}
        <Wrapper className="bg-blue-200">
          <div className="flex justify-center items-center flex-col">
            <div className="">
              <h1 className="text-3xl text-center font-bold m-1 uppercase">
                Heading goes here
              </h1>
              <h2 className="text-2xl text-center font-semibold m-1 uppercase">
                Subheading goes here
              </h2>
            </div>

            <p className="font-mono p-2 m-2">
              Dignissimos tempore eum non adipisci magni. Voluptatem laboriosam
              quasi. Voluptatem perspiciatis qui. Aut iste incidunt blanditiis
              quia dolor non voluptate qui. Non quas voluptas eaque veritatis
              dolore corrupti ea reprehenderit. Et officiis accusantium.
            </p>

            <button
              className={classNames(
                "bg-blue-500 hover:bg-blue-600 transition transform ease-in-out duration-500",
                "tracking-wide font-mono text-white py-2 px-4 rounded uppercase"
              )}
            >
              Call to action
            </button>
          </div>
        </Wrapper>

        {/* Right 1/3 of grid */}
        <Wrapper className="flex justify-center items-center bg-gray-600">
          <img
            src="/illustrations/business-deal.png"
            alt="Business deal illustration"
          />
        </Wrapper>
      </Wrapper>
    </div>
  );
};

// Using Urql, we can optionally server-side render specific pages.
// Index page should not be necessary to SSR, as the content will be quite static.
export default withUrqlClient(createUrqlClient, { ssr: false })(Index);
