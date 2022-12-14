import { graphql } from "@/graphql/generated";

const DefaultResumeFragment = graphql(`
  fragment DefaultResume on Resume {
    personalInformation {
      ...DefaultPersonalInformation
    }
    education {
      ...DefaultEducation
    }
    professionalExperience {
      ...DefaultProfessionalExperience
    }
    skill {
      ...DefaultSkill
    }
    language {
      ...DefaultLanguage
    }
    certification {
      ...DefaultCertification
    }
    publication {
      ...DefaultPublication
    }
  }
`);

export default DefaultResumeFragment;
