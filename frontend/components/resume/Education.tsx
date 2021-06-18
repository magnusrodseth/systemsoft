import React from "react";
import { ComponentResumeEducationComponent as IEducation } from "generated/graphql";
import Wrapper from "components/Wrapper";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import classNames from "utils/classNames";

interface EducationProps {
  education: IEducation[];
}

const Education: React.FC<EducationProps> = ({ education }: EducationProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-yellow-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Education 🎓
        </h1>

        {education.map((education) => (
          <Wrapper className="bg-gray-200 flex flex-row space-x-6">
            {/* Date */}
            <Wrapper className="bg-blue-200">
              {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
              <p>From: {education.start.split("-")[0]}</p>
              <p>To: {education.end ? education.end.split("-")[0] : "Now"}</p>
            </Wrapper>

            {/* Information */}
            <Wrapper className="bg-green-200">
              <h1 className="text-xl font-bold tracking-wide">
                {education.name}
              </h1>

              {education.school ? (
                <div className={classNames("flex flex-row space-x-4")}>
                  <h2 className="font-semibold tracking-wide">
                    {education.school}{" "}
                  </h2>
                  {education.link ? (
                    <a href={education.link} target="_blank">
                      <ExternalLinkIcon className="block h-6 w-6" />
                    </a>
                  ) : null}
                </div>
              ) : null}

              {education.description ? (
                <div className="mx-10">
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
