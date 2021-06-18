import React from "react";
import { ComponentResumePersonalProject as IProject } from "generated/graphql";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface PersonalProjectProps {
  projects: IProject[];
}

const PersonalProject: React.FC<PersonalProjectProps> = ({
  projects,
}: PersonalProjectProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-yellow-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Personal Projects 📄
        </h1>

        {projects.map((project) => (
          <Wrapper className="bg-gray-200 flex flex-row space-x-6">
            {/* No need to display any date field if you don't know start date */}
            {project.start ? (
              <Wrapper className="bg-blue-200 flex flex-col">
                {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
                <p>From: {project.start.split("-")[0]}</p>
                <p>To: {project.end ? project.end.split("-")[0] : "Now"}</p>
              </Wrapper>
            ) : null}

            {/* Information */}
            <Wrapper className="bg-red-200">
              <div className="flex flex-row space-x-4 items-center">
                <h1 className="text-xl font-bold tracking-wide">
                  {project.title}
                </h1>
                {project.link ? (
                  <a href={project.link} target="_blank">
                    <ExternalLinkIcon className="block h-6 w-6 mb-1" />
                  </a>
                ) : null}
              </div>

              {project.description ? (
                <div className="mx-10">
                  <p>{project.description}</p>
                </div>
              ) : null}
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};

export default PersonalProject;
