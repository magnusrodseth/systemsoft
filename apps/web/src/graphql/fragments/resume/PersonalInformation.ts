import { graphql } from "@/graphql/generated";

const DefaultPersonalInformationFragment = graphql(`
  fragment DefaultPersonalInformation on PersonalInformation {
    address
    postalCode
    city
    age
    githubLink
    linkedinLink
    status
    aboutRaw
  }
`);

export default DefaultPersonalInformationFragment;
