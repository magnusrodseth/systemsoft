import { graphql } from "../generated";

const AllEmployeesQuery = graphql(`
  query AllEmployees {
    allEmployee {
      ...DefaultEmployee
    }
  }
`);

export default AllEmployeesQuery;
