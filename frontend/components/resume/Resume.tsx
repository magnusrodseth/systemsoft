import React from "react";
import {
  ComponentResumeEducationComponent as IEducation,
  ComponentResumeProfessionalExperience as IProfessionalExperience,
  ComponentResumePersonalProject as IProject,
  Resume as IResume,
  ComponentResumeSkill as ISkill,
  ComponentResumeLanguage as ILanguage,
  ComponentResumeCertificate as ICertificate,
  ComponentResumeAward as IAward,
  ComponentResumeCourse as ICourse,
} from "generated/graphql";
import PersonalInformation from "./PersonalInformation";
import ResumeHeader from "./ResumeHeader";
import Education from "./Education";
import ProfessionalExperience from "./ProfessionalExperience";
import PersonalProject from "./PersonalProject";
import Skill from "./Skill";
import Language from "./Language";
import Certificate from "./Certificate";
import Award from "./Award";
import Course from "./Course";

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

      {resume.Language ? (
        <Language languages={resume.Language as ILanguage[]} />
      ) : null}

      {resume.Certificate ? (
        <Certificate certificates={resume.Certificate as ICertificate[]} />
      ) : null}

      {resume.Award ? <Award awards={resume.Award as IAward[]} /> : null}

      {resume.Course ? <Course courses={resume.Course as ICourse[]} /> : null}
    </div>
  );
};

export default Resume;
