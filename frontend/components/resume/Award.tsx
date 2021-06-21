import React from "react";
import { ComponentResumeAward as IAward } from "generated/graphql";
import { CalendarIcon } from "@heroicons/react/outline";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface AwardProps {
  awards: IAward[];
}

const Award: React.FC<AwardProps> = ({ awards }: AwardProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-gray-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Awards 🏆
        </h1>

        {awards.map((award) => (
          <Wrapper className="bg-white flex flex-col" key={award.id}>
            {/* Date */}
            {award.date ? (
              <div className="flex justify-center items-center">
                {" "}
                <CalendarIcon className="block h-6 w-6 mb-0.5 mr-2" />
                {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
                <span className="font-semibold text-lg flex flex-row sm:my-4 items-center">
                  {award.date.split("-")[0]}
                </span>{" "}
              </div>
            ) : null}

            {/* Information */}
            <Wrapper className="bg-gray-50">
              <div>
                <span className="text-xl font-bold tracking-wide">
                  {award.name}
                </span>
                <span className="font-semibold tracking-wide">
                  , issued by {award.issuer}
                </span>
              </div>

              {award.description ? (
                <div className="mx-10">
                  <p>{award.description}</p>
                </div>
              ) : null}
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};

export default Award;
