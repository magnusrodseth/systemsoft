import React from "react";
import { Resume } from "generated/graphql";
import classNames from "utils/classNames";

interface ResumeProps {
  resume: Resume;
}

const ResumeComponent: React.FC<ResumeProps> = ({ resume }) => {
  return (
    <div className="mt-24">
      <h1 className={classNames("text-6xl font-mono font-bold text-center")}>
        {resume.PersonalInformation?.fullName}
      </h1>
    </div>
  );
};

export default ResumeComponent;
