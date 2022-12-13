import { graphql } from "@/graphql/generated";

const DefaultProfessionalExperienceFragment = graphql(`
  fragment DefaultProfessionalExperience on ProfessionalExperience {
    employer
    location
    start
    end
    descriptionRaw
  }
`);

export default DefaultProfessionalExperienceFragment;
