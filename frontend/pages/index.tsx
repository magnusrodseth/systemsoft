import Jumbotron from "components/Jumbotron";
import { withUrqlClient } from "next-urql";
import Link from "next/link";
import React from "react";
import classNames from "utils/classNames";
import createUrqlClient from "utils/createUrqlClient";
import { OfficeBuildingIcon, MailIcon } from "@heroicons/react/solid";

const Index = () => {
  return (
    <div className="flex justify-center flex-col min-h-container">
      <Jumbotron title="SystemSoft AS" />
      <div
        className={classNames(
          "flex flex-col w-screen space-y-10 justify-center",
          "items-center h-container text-center font-mono"
        )}
      >
        <div
          className={classNames(
            "bg-gradient-to-r from-blue-400 to-purple-700 text-center opacity-90",
            "lg:w-4/12 md:w-5/12 sm:w-6/12 w-8/12 rounded-lg p-6 text-white",
            "shadow-md hover:shadow-lg",
            "hover:-translate-y-1 hover:scale-101",
            "transition transform duration-500 ease-in-out"
          )}
        >
          <p className="m-2 text-lg">
            A <strong>software engineering</strong> consulting company based in
            Asker, Norway.
          </p>

          <p className="mt-6 text-sm">
            <i>Engineered for excellence</i>.
          </p>
        </div>

        <div className="flex gap-5 flex-wrap justify-center">
          <Link href="/clients">
            <a>
              <div
                className={classNames(
                  "flex bg-[#3C84E7] text-white py-3 px-8 hover:border-transparent rounded",
                  "hover:-translate-y-1 hover:scale-101",
                  "shadow-md hover:shadow-lg",
                  "transition transform duration-500 ease-in-out uppercase"
                )}
              >
                <OfficeBuildingIcon className="w-6 h-5 mr-2" />
                <p>Our clients</p>
              </div>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <div
                className={classNames(
                  "flex text-[#3C84E7] py-3 px-8 hover:border-transparent rounded",
                  "hover:-translate-y-1 hover:scale-101",
                  "shadow-md hover:shadow-lg",
                  "transition transform duration-500 ease-in-out uppercase"
                )}
              >
                <MailIcon className="w-6 h-5 mr-2" />
                <p>Contact us</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Using Urql, we can optionally server-side render specific pages.
// Index page should not be necessary to SSR, as the content will be quite static.
export default withUrqlClient(createUrqlClient, { ssr: false })(Index);
