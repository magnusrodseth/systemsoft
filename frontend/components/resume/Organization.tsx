import React from "react";
import { ComponentResumeOrganisation as IOrganization } from "generated/graphql";
import {
  ArrowRightIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface OrganizationProps {
  organizations: IOrganization[];
}

const Organization: React.FC<OrganizationProps> = ({
  organizations,
}: OrganizationProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-gray-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Organizations 🤝
        </h1>

        {organizations.map((organization) => (
          <Wrapper className="bg-white flex flex-col">
            {organization.start ? (
              <div className="flex justify-center items-center">
                {/* No need to display any date field if you don't know start date */}
                <CalendarIcon className="block w-6 h-6 mb-0.5 mr-2" />
                {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
                <span className="font-semibold text-lg flex flex-row sm:my-4 items-center">
                  {organization.start.split("-")[0]}
                  <ArrowRightIcon className="block h-4 w-4 mx-2" />
                  {organization.end ? organization.end.split("-")[0] : "now"}
                </span>

                {organization.location ? (
                  <div className="flex flex-row space-2 m-4">
                    <LocationMarkerIcon className="block h-6 w-6 mr-2" />
                    <p>{organization.location}</p>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Information */}
            <Wrapper className="bg-gray-50">
              <div>
                <span className="text-xl font-bold tracking-wide">
                  {organization.position}
                </span>{" "}
                at{" "}
                <span className="font-semibold tracking-wide">
                  {organization.name}
                </span>
              </div>

              {organization.description ? (
                <div className="mx-10">
                  <p>{organization.description}</p>
                </div>
              ) : null}
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};

export default Organization;
