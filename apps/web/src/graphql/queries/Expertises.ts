import { graphql } from "../generated";

const ExpertisesQuery = graphql(`
  query Expertises {
    allExpertise {
      name
      shortDescription
      tags {
        name
      }
      image {
        asset {
          url
        }
      }
    }
  }
`);

export default ExpertisesQuery;
