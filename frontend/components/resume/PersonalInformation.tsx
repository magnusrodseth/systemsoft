import React from "react";
import { ComponentResumePersonalInformation as IPersonalInformation } from "generated/graphql";
import {
  CalendarIcon,
  MailIcon,
  LocationMarkerIcon,
  ExternalLinkIcon,
  PhoneIcon,
  StatusOnlineIcon,
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
      <div className="w-screen flex justify-center">
        {/* Personal Details */}
        <Wrapper className={classNames("w-3/4 bg-red-200")}>
          <h1
            className={classNames(
              "font-mono font-bold p-4 text-3xl tracking-wide"
            )}
          >
            Personal Information 👋🏼
          </h1>

          <Wrapper className="bg-indigo-200">
            {/* Date of birth */}
            {personalInformation.dateOfBirth !== null ? (
              <li className="flex space-x-4">
                <CalendarIcon className="block h-6 w-6" />
                <span>{personalInformation.dateOfBirth}</span>
              </li>
            ) : null}

            {/* E-mail */}
            <li className="flex space-x-4">
              <MailIcon className="block h-6 w-6" />
              <span>{personalInformation.email}</span>
            </li>

            {/* Full address */}
            {personalInformation.fullAddress !== null ? (
              <li className="flex space-x-4">
                <LocationMarkerIcon className="block h-6 w-6" />
                <span>{personalInformation.fullAddress}</span>
              </li>
            ) : null}

            {/* GitHub */}
            {personalInformation.githubLink !== null ? (
              <li className="flex space-x-4">
                <ExternalLinkIcon className="block h-6 w-6" />
                <a href={personalInformation.githubLink} target="_blank">
                  GitHub
                </a>
              </li>
            ) : null}

            {/* LinkedIn */}
            {personalInformation.linkedinLink !== null ? (
              <li className="flex space-x-4">
                <ExternalLinkIcon className="block h-6 w-6" />
                <a href={personalInformation.linkedinLink} target="_blank">
                  LinkedIn
                </a>
              </li>
            ) : null}

            {/* Phone number */}
            {personalInformation.phoneNumber !== null ? (
              <li className="flex space-x-4">
                <PhoneIcon className="block h-6 w-6" />
                <a href={`tel:${personalInformation.phoneNumber as string}`}>
                  {personalInformation.phoneNumber}
                </a>
              </li>
            ) : null}

            {/* Status */}
            {personalInformation.status !== null ? (
              <li className="flex space-x-4">
                <StatusOnlineIcon className="block h-6 w-6" />
                <span>{personalInformation.status}</span>
              </li>
            ) : null}
          </Wrapper>
        </Wrapper>
      </div>
    </div>
  );
};

export default PersonalInformation;
