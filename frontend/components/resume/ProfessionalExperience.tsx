import React from "react";
import { ComponentResumeProfessionalExperience as IProfessionalExperience } from "generated/graphql";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface ProfessionalExperienceProps {
  experience: IProfessionalExperience[];
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  experience,
}: ProfessionalExperienceProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-purple-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Professional Experience 💼
        </h1>

        {experience.map((experience) => (
          <Wrapper className="bg-gray-200 flex flex-row space-x-6">
            {/* No need to display any date field if you don't know start date */}
            <Wrapper className="bg-blue-200 flex flex-col">
              {experience.start ? (
                <div>
                  {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
                  <p>From: {experience.start.split("-")[0]}</p>
                  <p>
                    To: {experience.end ? experience.end.split("-")[0] : "Now"}
                  </p>
                </div>
              ) : null}

              {experience.location ? (
                <div className="flex flex-row">
                  <LocationMarkerIcon className="block h-6 w-6" />
                  <p>{experience.location}</p>
                </div>
              ) : null}
            </Wrapper>

            {/* Information */}
            <Wrapper className="bg-pink-200">
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
                <div className="mx-10">
                  <p>{experience.description}</p>
                </div>
              ) : null}
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};

export default ProfessionalExperience;
