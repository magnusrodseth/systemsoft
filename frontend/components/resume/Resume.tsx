import React from "react";
import {
  ComponentResumeEducationComponent as IEducation,
  ComponentResumeProfessionalExperience as IProfessionalExperience,
  Resume as IResume,
} from "generated/graphql";
import PersonalInformation from "./PersonalInformation";
import ResumeHeader from "./ResumeHeader";
import Education from "./Education";
import ProfessionalExperience from "./ProfessionalExperience";

interface ResumeProps {
  resume: IResume;
}

const Resume: React.FC<ResumeProps> = ({ resume }) => {
  return (
    <div className="min-height-container flex justify-center flex-col">
      {resume.PersonalInformation ? (
        <ResumeHeader data={resume.PersonalInformation} />
      ) : null}

      {resume.PersonalInformation ? (
        <PersonalInformation personalInformation={resume.PersonalInformation} />
      ) : null}

      {resume.Education ? (
        <Education education={resume.Education as IEducation[]} />
      ) : null}

      {resume.ProfessionalExperience ? <ProfessionalExperience experience={resume.ProfessionalExperience as IProfessionalExperience[]}/> : null}
    </div>
  );
};

export default Resume;
