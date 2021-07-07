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
  ComponentResumeHobby as IHobby,
  ComponentResumeOrganisation as IOrganization,
  ComponentResumePublication as IPublication,
  ComponentResumeResumeReference as IReference,
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
import Hobby from "./Hobby";
import Organization from "./Organization";
import Publication from "./Publication";
import ResumeReference from "./ResumeReference";
import classNames from "utils/classNames";

interface ResumeProps {
  resume: IResume;
}

const Resume: React.FC<ResumeProps> = ({ resume }) => {
  return (
    <div
      className={classNames(
        "min-height-container flex justify-center flex-col",
        "space-y-8 bg-gradient-to-b from-blue-100 to-[#050552]"
      )}
    >
      {resume.PersonalInformation ? (
        <ResumeHeader data={resume.PersonalInformation} />
      ) : null}

      {resume.PersonalInformation ? (
        <PersonalInformation personalInformation={resume.PersonalInformation} />
      ) : null}

      {(resume.Education as IEducation[]).length > 0 ? (
        <Education education={resume.Education as IEducation[]} />
      ) : null}

      {(resume.ProfessionalExperience as IProfessionalExperience[]).length > 0 ? (
        <ProfessionalExperience
          experience={
            resume.ProfessionalExperience as IProfessionalExperience[]
          }
        />
      ) : null}

      {(resume.PersonalProject as IProject[]).length > 0 ? (
        <PersonalProject projects={resume.PersonalProject as IProject[]} />
      ) : null}

      {(resume.Skill as ISkill[]).length > 0 ? <Skill skills={resume.Skill as ISkill[]} /> : null}

      {(resume.Language as ILanguage[]).length > 0 ? (
        <Language languages={resume.Language as ILanguage[]} />
      ) : null}

      {(resume.Certificate as ICertificate[]).length > 0 ? (
        <Certificate certificates={resume.Certificate as ICertificate[]} />
      ) : null}

      {(resume.Award as IAward[]).length > 0 ? <Award awards={resume.Award as IAward[]} /> : null}

      {(resume.Course as ICourse[]).length > 0 ? <Course courses={resume.Course as ICourse[]} /> : null}

      {(resume.Hobby as IHobby[]).length > 0 ? <Hobby hobbies={resume.Hobby as IHobby[]} /> : null}

      {(resume.Organisation as IOrganization[]).length > 0 ? (
        <Organization organizations={resume.Organisation as IOrganization[]} />
      ) : null}

      {(resume.Publication as IPublication[]).length > 0 ? (
        <Publication publications={resume.Publication as IPublication[]} />
      ) : null}

      {(resume.ResumeReference as IReference[]).length > 0 ? (
        <ResumeReference references={resume.ResumeReference as IReference[]} />
      ) : null}
    </div>
  );
};

export default Resume;
