import React from "react";
import { ComponentResumeResumeReference as IReference } from "generated/graphql";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface ResumeReferenceProps {
  references: IReference[];
}

const ResumeReference: React.FC<ResumeReferenceProps> = ({
  references,
}: ResumeReferenceProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-yellow-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          References 📨
        </h1>

        {references.map((reference) => (
          <Wrapper className="bg-gray-200 flex flex-row space-x-6">
            {/* Information */}
            <Wrapper className="bg-green-200 flex flex-row items-center space-x-4">
              <h1 className="text-xl font-bold tracking-wide">
                {reference.name}
              </h1>
              {reference.organisation ? (
                <h2>{reference.organisation}</h2>
              ) : null}
            </Wrapper>

            <Wrapper className={classNames("bg-blue-200")}>
              <div className="flex flex-row space-x-2">
                <MailIcon className="block w-5 h-5" />
                <a href={`mailto:${reference.email}`}>{reference.email}</a>
              </div>
              {reference.phoneNumber ? (
                <div className="flex flex-row space-x-2">
                  <PhoneIcon className="block w-5 h-5" />
                  <a href={`tlf:${reference.phoneNumber}`}>
                    {reference.phoneNumber}
                  </a>
                </div>
              ) : null}
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};

export default ResumeReference;
