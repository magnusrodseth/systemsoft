import { graphql } from "../generated";

const ClientsWithTagsQuery = graphql(`
  query ClientsWithTags {
    allClient {
      ...DefaultClient
    }
  }
`);

export default ClientsWithTagsQuery;
