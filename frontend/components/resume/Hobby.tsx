import React from "react";
import { ComponentResumeHobby as IHobby } from "generated/graphql";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface HobbyProps {
  hobbies: IHobby[];
}

const Hobby: React.FC<HobbyProps> = ({ hobbies }: HobbyProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-yellow-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Hobbies 🎨
        </h1>

        <Wrapper className="bg-gray-200 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1">
          {hobbies.map((hobby) => (
            <Wrapper className="bg-purple-200">
              <div className="flex flex-row space-x-4 items-center">
                <h1 className="text-xl font-bold tracking-wide">
                  {hobby.name}
                </h1>
              </div>

              {hobby.description ? (
                <div className="mx-10">
                  <p>{hobby.description}</p>
                </div>
              ) : null}
            </Wrapper>
          ))}
        </Wrapper>
      </Wrapper>
    </div>
  );
};

export default Hobby;
