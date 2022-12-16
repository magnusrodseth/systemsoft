import { graphql } from "../generated";

const ExpertisesQuery = graphql(`
  query Expertises {
    allExpertise {
      ...DefaultExpertise
    }
  }
`);

export default ExpertisesQuery;
