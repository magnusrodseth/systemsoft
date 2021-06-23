import React from "react";
import { ComponentResumeHobby as IHobby } from "generated/graphql";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";
import Markdown from "components/Markdown";

interface HobbyProps {
  hobbies: IHobby[];
}

const Hobby: React.FC<HobbyProps> = ({ hobbies }: HobbyProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-gray-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Hobbies 🎨
        </h1>

        <Wrapper className="bg-white grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1">
          {hobbies.map((hobby) => (
            <Wrapper className="bg-gray-50" key={hobby.id}>
              <div className="flex flex-row space-x-4 items-center">
                <h1 className="text-xl font-bold tracking-wide">
                  {hobby.name}
                </h1>
              </div>

              {hobby.description ? (
                <Markdown className="mx-10">{hobby.description}</Markdown>
              ) : null}
            </Wrapper>
          ))}
        </Wrapper>
      </Wrapper>
    </div>
  );
};

export default Hobby;
