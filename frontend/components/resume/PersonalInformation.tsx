import React from "react";
import { ComponentResumePersonalInformation as IPersonalInformation } from "generated/graphql";
import {
  CalendarIcon,
  MailIcon,
  LocationMarkerIcon,
  ExternalLinkIcon,
  PhoneIcon,
  AnnotationIcon,
} from "@heroicons/react/outline";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface PersonalInformationProps {
  personalInformation: IPersonalInformation;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  personalInformation,
}: PersonalInformationProps) => {
  return (
    <div>
      <p className={classNames("font-mono my-8 tracking-wide text-center")}>
        {personalInformation.about}
      </p>
      <div className="w-screen flex justify-center text-lg">
        {/* Personal Details */}
        <Wrapper className={classNames("w-3/4 bg-gray-200")}>
          <h1
            className={classNames(
              "font-mono font-bold p-4 text-3xl tracking-wide"
            )}
          >
            Personal Information 👋🏼
          </h1>

          <Wrapper className="bg-white flex space-y-4 flex-row justify-center flex-wrap">
            {personalInformation.dateOfBirth ? (
              // Uncertain why, but the first div requires mt-5 to not be
              // unnettually elevated.
              <div className="flex mx-4 items-center justify-center mt-5">
                <CalendarIcon className="block h-6 w-6 mr-2" />
                <span>{personalInformation.dateOfBirth}</span>
              </div>
            ) : null}

            {/* E-mail */}
            <div className="flex mx-4 items-center justify-center">
              <MailIcon className="block h-6 w-6 mr-2" />
              <span>{personalInformation.email}</span>
            </div>

            {/* Full address */}
            {personalInformation.fullAddress ? (
              <div className="flex mx-4 items-center justify-center">
                <LocationMarkerIcon className="block h-6 w-6 mr-2" />
                <span>{personalInformation.fullAddress}</span>
              </div>
            ) : null}

            {/* GitHub */}
            {personalInformation.githubLink ? (
              <div className="flex mx-4 items-center justify-center">
                <ExternalLinkIcon className="block h-6 w-6 mr-2" />
                <a href={personalInformation.githubLink} target="_blank">
                  GitHub
                </a>
              </div>
            ) : null}

            {/* LinkedIn */}
            {personalInformation.linkedinLink ? (
              <div className="flex mx-4 items-center justify-center">
                <ExternalLinkIcon className="block h-6 w-6 mr-2" />
                <a href={personalInformation.linkedinLink} target="_blank">
                  LinkedIn
                </a>
              </div>
            ) : null}

            {/* Phone number */}
            {personalInformation.phoneNumber ? (
              <div className="flex mx-4 items-center justify-center">
                <PhoneIcon className="block h-6 w-6 mr-2" />
                <a href={`tel:${personalInformation.phoneNumber as string}`}>
                  {personalInformation.phoneNumber}
                </a>
              </div>
            ) : null}

            {/* Status */}
            {personalInformation.status ? (
              <div className="flex mx-4 items-center justify-center">
                <AnnotationIcon className="block h-6 w-6 mr-2" />
                <span>{personalInformation.status}</span>
              </div>
            ) : null}
          </Wrapper>
        </Wrapper>
      </div>
    </div>
  );
};

export default PersonalInformation;
