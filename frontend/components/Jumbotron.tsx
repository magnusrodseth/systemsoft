import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import classNames from "utils/classNames";

interface JumbotronProps {
  title: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({
  title,
  backgroundImage,
  backgroundColor,
}: JumbotronProps) => {
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

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-center mb-10">
              <h1
                className={classNames(
                  "transition duration-500 ease-in-out transform",
                  "hover:-translate-y-1 hover:scale-101 uppercase",
                  "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",
                  "block text-blue-600 xl:inline text-blue-500 hover:text-blue-600 text-center"
                )}
              >
                {title}
              </h1>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Jumbotron;
