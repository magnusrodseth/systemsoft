import Carousel from "components/references/Carousel";
import { References } from "generated/graphql";
import React from "react";
import classNames from "utils/classNames";
import { CalendarIcon, UserIcon } from "@heroicons/react/outline";
import Markdown from "components/Markdown";

interface ReferenceArticleProps {
  reference: References;
}

const ReferenceArticle: React.FC<ReferenceArticleProps> = ({ reference }) => {
  return (
    <div className="">
      {reference.images ? (
        <Carousel images={reference.images} />
      ) : null}

      <div className={classNames("flex flex-col items-center m-5")}>
        <h1
          className={classNames(
            "lg:text-8xl md:text-2xl sm:text-2xl mt-6 tracking-widest",
            "font-extrabold uppercase text-transparent",
            "bg-clip-text bg-gradient-to-r from-blue-600 to-purple-900 text-center mb-6"
          )}
        >
          {reference.title}
        </h1>
        <div className="max-w-2xl w-full divide-y">
          <div className="flex justify-center pb-5">
            <div className="flex">
              <UserIcon className="w-5 mr-2" />
              Client: {reference.client?.name}
            </div>
            {reference.completed ? (
              <div className="flex ml-5">
                <CalendarIcon className="w-5 mr-2" /> Completed:{" "}
                {reference.completed}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="pt-5 max-w-2xl w-full">
            <Markdown>{reference.description}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceArticle;
