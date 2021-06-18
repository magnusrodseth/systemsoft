import React from "react";
import { ComponentResumeLanguage as ILanguage } from "generated/graphql";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface LanguageProps {
  languages: ILanguage[];
}

const Language: React.FC<LanguageProps> = ({ languages }: LanguageProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-gray-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Languages 🌍
        </h1>

        <Wrapper className="bg-white grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1">
          {languages.map((language) => (
            <Wrapper className="bg-gray-50">
              <div className="flex flex-row space-x-4 items-center">
                <h1 className="text-xl font-bold tracking-wide">
                  {language.language}
                </h1>

                {language.languageLevel ? (
                  <h2 className="font-semibold tracking-wide">
                    {language.languageLevel}
                  </h2>
                ) : null}
              </div>
            </Wrapper>
          ))}
        </Wrapper>
      </Wrapper>
    </div>
  );
};

export default Language;
