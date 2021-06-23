import React from "react";
import { ComponentResumeProfessionalExperience as IProfessionalExperience } from "generated/graphql";
import {
  ArrowRightIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";
import Markdown from "components/Markdown";

interface ProfessionalExperienceProps {
  experience: IProfessionalExperience[];
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  experience,
}: ProfessionalExperienceProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-gray-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Professional Experience 💼
        </h1>

        {experience.map((experience) => (
          <Wrapper
            className={classNames("bg-white flex flex-col")}
            key={experience.id}
          >
            {experience.start ? (
              <div className="flex justify-center items-center">
                {/* No need to display any date field if you don't know start date */}
                <CalendarIcon className="block w-6 h-6 mb-0.5 mr-2" />
                {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
                <span className="font-semibold text-lg flex flex-row sm:my-4 items-center">
                  {experience.start.split("-")[0]}
                  <ArrowRightIcon className="block h-4 w-4 mx-2" />
                  {experience.end ? experience.end.split("-")[0] : "now"}
                </span>

                {experience.location ? (
                  <div className="flex flex-row space-2 m-4">
                    <LocationMarkerIcon className="block h-6 w-6" />
                    <p>{experience.location}</p>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Information */}
            <Wrapper className="bg-gray-50">
              <div>
                <span className="text-xl font-bold tracking-wide">
                  {experience.title}
                </span>{" "}
                at{" "}
                <span className="font-semibold tracking-wide">
                  {experience.employer}
                </span>
              </div>

              {experience.description ? (
                <Markdown className="mx-10">{experience.description}</Markdown>
              ) : null}
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};

export default ProfessionalExperience;
