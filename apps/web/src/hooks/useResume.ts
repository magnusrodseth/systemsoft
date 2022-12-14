import DefaultCertificationFragment from "@/graphql/fragments/resume/Certification";
import DefaultEducationFragment from "@/graphql/fragments/resume/Education";
import DefaultLanguageFragment from "@/graphql/fragments/resume/Language";
import DefaultPersonalInformationFragment from "@/graphql/fragments/resume/PersonalInformation";
import DefaultProfessionalExperienceFragment from "@/graphql/fragments/resume/ProfessionalExperience";
import DefaultPublicationFragment from "@/graphql/fragments/resume/Publication";
import DefaultSkillFragment from "@/graphql/fragments/resume/Skill";
import { useFragment } from "@/graphql/generated";
import { DefaultResumeFragment } from "@/graphql/generated/graphql";

/**
 * Cleans up the resume data and ensures it is typesafe.
 *
 * We need to disable the react-hooks/rules-of-hooks rule because
 * useFragment shouldn't *really* be called inside `.map()` by default.
 *
 * However, it works and the resulting data is typesafe.
 *
 * @param resume is the resume data from the graphql query to clean up.
 * @returns the cleaned up resume data.
 */
const useResume = (resume: DefaultResumeFragment) => {
  const personalInformation = useFragment(
    DefaultPersonalInformationFragment,
    resume.personalInformation
  );
  const education = resume.education?.map((education) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFragment(DefaultEducationFragment, education)
  );
  const professionalExperience = resume.professionalExperience?.map(
    (experience) =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useFragment(DefaultProfessionalExperienceFragment, experience)
  );
  const skills = resume.skill?.map((skill) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFragment(DefaultSkillFragment, skill)
  );
  const languages = resume.language?.map((language) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFragment(DefaultLanguageFragment, language)
  );
  const certifications = resume.certification?.map((certification) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFragment(DefaultCertificationFragment, certification)
  );
  const publications = resume.publication?.map((publication) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFragment(DefaultPublicationFragment, publication)
  );

  return {
    personalInformation,
    education,
    professionalExperience,
    skills,
    languages,
    certifications,
    publications,
  };
};

export default useResume;
