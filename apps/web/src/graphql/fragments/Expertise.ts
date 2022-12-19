import { graphql } from "../generated";

const DefaultExpertiseFragment = graphql(`
  fragment DefaultExpertise on Expertise {
    name
    shortDescription
    descriptionRaw
    tags {
      name
    }
    image {
      asset {
        url
      }
    }
  }
`);

export default DefaultExpertiseFragment;
