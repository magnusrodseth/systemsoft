import { graphql } from "../generated";

const AllClientsQuery = graphql(`
  query AllClients {
    allClient {
      ...DefaultClient
    }
  }
`);

export default AllClientsQuery;
