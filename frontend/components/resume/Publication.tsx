import React from "react";
import { ComponentResumePublication as IPublication } from "generated/graphql";
import { CalendarIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";
import Markdown from "components/Markdown";

interface PublicationProps {
  publications: IPublication[];
}

const Publication: React.FC<PublicationProps> = ({
  publications,
}: PublicationProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-gray-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Publications 📖
        </h1>

        {publications.map((publication) => (
          <Wrapper className="bg-white flex flex-col" key={publication.id}>
            {/* Date */}
            {publication.date ? (
              <div className="flex justify-center items-center">
                {" "}
                <CalendarIcon className="block h-6 w-6 mb-0.5 mr-2" />
                {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
                <span className="font-semibold text-lg flex flex-row sm:my-4 items-center">
                  {publication.date.split("-")[0]}
                </span>{" "}
              </div>
            ) : null}

            {/* Information */}
            <Wrapper className="bg-gray-50">
              <div>
                <span className="text-xl font-bold tracking-wide">
                  {publication.name}
                </span>
                <span className="font-semibold tracking-wide">
                  , published by {publication.publisher}
                </span>
                {publication.link ? (
                  <a href={publication.link} target="_blank">
                    <ExternalLinkIcon className="block h-6 w-6" />
                  </a>
                ) : null}
              </div>

              {publication.description ? (
                <Markdown className="mx-10">{publication.description}</Markdown>
              ) : null}
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};

export default Publication;
