import React from "react";
import { ComponentResumePublication as IPublication } from "generated/graphql";
import { CalendarIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface PublicationProps {
  publications: IPublication[];
}

const Publication: React.FC<PublicationProps> = ({
  publications,
}: PublicationProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-yellow-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Publications 📖
        </h1>

        {publications.map((publication) => (
          <Wrapper className="bg-gray-200 flex flex-row space-x-6">
            {/* Date */}
            {publication.date ? (
              <Wrapper className="bg-blue-200 flex flex-row space-x-2 items-center px-2">
                <CalendarIcon className="block h-6 w-6" />
                {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
                <p>{publication.date.split("-")[0]}</p>
              </Wrapper>
            ) : null}

            {/* Information */}
            <Wrapper className="bg-green-200">
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
                <div className="mx-10">
                  <p>{publication.description}</p>
                </div>
              ) : null}
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};

export default Publication;
