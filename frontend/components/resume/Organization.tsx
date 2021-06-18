import React from "react";
import { ComponentResumeOrganisation as IOrganization } from "generated/graphql";
import { LocationMarkerIcon } from "@heroicons/react/outline";
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
      <Wrapper className={classNames("w-3/4 bg-purple-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Organizations 🤝
        </h1>

        {organizations.map((organization) => (
          <Wrapper className="bg-gray-200 flex flex-row space-x-6">
            {/* No need to display any date field if you don't know start date */}
            <Wrapper className="bg-blue-200 flex flex-col">
              {organization.start ? (
                <div>
                  {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
                  <p>From: {organization.start.split("-")[0]}</p>
                  <p>
                    To:{" "}
                    {organization.end ? organization.end.split("-")[0] : "Now"}
                  </p>
                </div>
              ) : null}

              {organization.location ? (
                <div className="flex flex-row">
                  <LocationMarkerIcon className="block h-6 w-6" />
                  <p>{organization.location}</p>
                </div>
              ) : null}
            </Wrapper>

            {/* Information */}
            <Wrapper className="bg-pink-200">
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
