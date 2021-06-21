import { Popover } from "@headlessui/react";
import React from "react";
import classNames from "utils/classNames";

interface JumbotronProps {
  title: string;
  backgroundImage?: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({
  title,
  backgroundImage,
}: JumbotronProps) => {
  const src = backgroundImage
    ? backgroundImage
    : "/illustrations/code-review.png";
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          {/* This entire must not be removed! It helps render the Jumbotron correctly. */}
          <Popover>
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8" />
              </>
            )}
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-center mb-10">
              <h1
                className={classNames(
                  "lg:text-8xl md:text-4xl sm:text-2xl mt-6 tracking-widest",
                  "font-extrabold uppercase text-transparent",
                  "bg-clip-text bg-gradient-to-r from-blue-600 to-purple-900 text-center"
                )}
              >
                {title}
              </h1>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {backgroundImage ? (
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={src}
            alt={title}
          />
        ) : (
          <div
            className={classNames(
              "h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",
              "bg-gradient-to-r from-blue-600 to-purple-900"
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Jumbotron;
