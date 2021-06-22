import React from "react";
import { ComponentResumeSkill as ISkill } from "generated/graphql";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface SkillProps {
  skills: ISkill[];
}

const Skill: React.FC<SkillProps> = ({ skills }: SkillProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-gray-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Skills ⭐️
        </h1>

        <Wrapper className="bg-white grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1">
          {skills.map((skill) => (
            <Wrapper className="bg-gray-50" key={skill.id}>
              <div className="flex flex-row space-x-4 items-center">
                <h1 className="text-xl font-bold tracking-wide">
                  {skill.name}
                </h1>

                {skill.skillLevel ? (
                  <h2 className="font-semibold tracking-wide">
                    {skill.skillLevel}
                  </h2>
                ) : null}
              </div>

              {skill.description ? (
                <div className="mx-10">
                  <p>{skill.description}</p>
                </div>
              ) : null}
            </Wrapper>
          ))}
        </Wrapper>
      </Wrapper>
    </div>
  );
};

export default Skill;
