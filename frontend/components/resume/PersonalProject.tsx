import React from "react";
import { ComponentResumePersonalProject as IProject } from "generated/graphql";
import {
  ArrowRightIcon,
  CalendarIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";
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
      <Wrapper className={classNames("w-3/4 bg-gray-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Personal Projects 📄
        </h1>

        {projects.map((project) => (
          <Wrapper className="bg-white flex flex-col">
            {/* Date */}
            {project.start ? (
              <div className="flex justify-center items-center">
                <CalendarIcon className="block w-6 h-6 mb-0.5 mr-2" />
                {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
                <span className="font-semibold text-lg flex flex-row sm:my-4 items-center">
                  {project.start.split("-")[0]}
                  <ArrowRightIcon className="block h-4 w-4 mx-2" />
                  {project.end ? project.end.split("-")[0] : "now"}
                </span>
              </div>
            ) : null}

            {/* Information */}
            <Wrapper
              className={classNames(
                "bg-blue-100",
                project.image?.url
                  ? "grid gap-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"
                  : "flex flex-col"
              )}
            >
              <div
                className={classNames(
                  "flex flex-row space-x-4 items-center",
                  project.image?.url ? "lg:col-start-1" : ""
                )}
              >
                <h1 className="text-xl font-bold tracking-wide">
                  {project.title}
                </h1>
                {project.link ? (
                  <a href={project.link} target="_blank">
                    <ExternalLinkIcon
                      className={classNames(
                        "block h-6 w-6 -my-0.5 hover:text-blue-500 hover:scale-101",
                        "transform transition duration-500 ease-in-out"
                      )}
                    />
                  </a>
                ) : null}
              </div>
              {project.image?.url ? (
                <Wrapper className="bg-gray-200 lg:col-start-2">
                  <img
                    src={project.image?.url}
                    alt={`Snapshot from ${project.title}`}
                  />
                </Wrapper>
              ) : null}
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
