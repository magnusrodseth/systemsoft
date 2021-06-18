import { withUrqlClient } from "next-urql";
import Link from "next/link";
import React from "react";
import classNames from "utils/classNames";
import createUrqlClient from "utils/createUrqlClient";

const Index = () => {
  return (
    <div className="flex m-3 justify-center flex-col">
      <h1
        className={classNames(
          "lg:text-8xl md:text-4xl sm:text-2xl mt-6 tracking-widest",
          "font-extrabold uppercase text-transparent",
          "bg-clip-text bg-gradient-to-r from-blue-600 to-purple-900 text-center"
        )}
      >
        SystemSoft AS
      </h1>
      <div
        className={classNames(
          "my-32 flex flex-col w-screen space-y-10 justify-center",
          "items-center h-container text-center font-mono"
        )}
      >
        <div
          className={classNames(
            "bg-gradient-to-r from-blue-400 to-purple-700 text-center opacity-90",
            "w-4/12 rounded-lg p-6 text-white",
            "shadow-md hover:shadow-lg",
            "hover:-translate-y-1 hover:scale-101",
            "transition transform duration-500 ease-in-out"
          )}
        >
          <p className="m-2 text-lg">
            A <strong>software engineering</strong> consulting company based in
            Oslo, Norway.
          </p>

          <p className="mt-6 text-sm">
            <i>Engineered for excellence</i>.
          </p>
        </div>

        <Link href="/clients">
          <a>
            <div
              className={classNames(
                "mt-10 text-blue-600 py-2 px-4 hover:border-transparent rounded",
                "hover:-translate-y-1 hover:scale-101",
                "shadow-md hover:shadow-lg",
                "transition transform duration-500 ease-in-out uppercase"
              )}
            >
              Our clients
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

// Using Urql, we can optionally server-side render specific pages.
// Index page should not be necessary to SSR, as the content will be quite static.
export default withUrqlClient(createUrqlClient, { ssr: false })(Index);
