import React from "react";
import { ComponentResumeEducationComponent as IEducation } from "generated/graphql";
import Wrapper from "components/Wrapper";
import {
  ExternalLinkIcon,
  ArrowRightIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import classNames from "utils/classNames";

interface EducationProps {
  education: IEducation[];
}

const Education: React.FC<EducationProps> = ({ education }: EducationProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-gray-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Education 🎓
        </h1>

        {education.map((education) => (
          <Wrapper
            className={classNames("bg-white flex flex-col")}
            key={education.id}
          >
            {/* Date */}
            <div className="flex justify-center items-center">
              <CalendarIcon className="block w-6 h-6 mb-0.5 mr-2" />
              {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
              <span className="font-semibold text-lg flex flex-row sm:my-4 items-center">
                {education.start.split("-")[0]}
                <ArrowRightIcon className="block h-4 w-4 mx-2" />
                {education.end ? education.end.split("-")[0] : "now"}
              </span>
            </div>

            {/* Information */}
            <Wrapper className="bg-gray-50 flex space-y-2 flex-col">
              <h1 className="text-xl font-bold tracking-wider">
                {education.name}
              </h1>

              {education.school ? (
                <div className={classNames("flex flex-row space-x-4")}>
                  <h2 className="font-semibold tracking-wide">
                    {education.school}{" "}
                  </h2>
                  {education.link ? (
                    <a href={education.link} target="_blank">
                      <ExternalLinkIcon
                        className={classNames(
                          "block h-6 w-6 -my-0.5 hover:text-blue-500 hover:scale-101",
                          "transform transition duration-500 ease-in-out"
                        )}
                      />
                    </a>
                  ) : null}
                </div>
              ) : null}

              {education.description ? (
                <div className="mx-10 text-lg">
                  <p>{education.description}</p>
                </div>
              ) : null}
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};

export default Education;
