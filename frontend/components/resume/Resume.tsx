import React from "react";
import {
  ComponentResumeEducationComponent as IEducation,
  ComponentResumeProfessionalExperience as IProfessionalExperience,
  ComponentResumePersonalProject as IProject,
  Resume as IResume,
  ComponentResumeSkill as ISkill,
} from "generated/graphql";
import PersonalInformation from "./PersonalInformation";
import ResumeHeader from "./ResumeHeader";
import Education from "./Education";
import ProfessionalExperience from "./ProfessionalExperience";
import PersonalProject from "./PersonalProject";
import Skill from "./Skill";

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

      {resume.ProfessionalExperience ? (
        <ProfessionalExperience
          experience={
            resume.ProfessionalExperience as IProfessionalExperience[]
          }
        />
      ) : null}

      {resume.PersonalProject ? (
        <PersonalProject projects={resume.PersonalProject as IProject[]} />
      ) : null}

      {resume.Skill ? <Skill skills={resume.Skill as ISkill[]} /> : null}
    </div>
  );
};

export default Resume;
