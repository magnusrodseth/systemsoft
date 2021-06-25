import { Popover } from "@headlessui/react";
import { LOCAL_BACKEND_URL } from "../constants";
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
  return (
    <div className="w-screen flex justify-center my-8">
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
  );
};

export default Jumbotron;
