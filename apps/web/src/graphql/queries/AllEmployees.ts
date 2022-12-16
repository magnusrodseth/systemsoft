import { graphql } from "../generated";

const AllEmployeesQuery = graphql(`
  query AllEmployees {
    allEmployee(sort: { _createdAt: ASC }) {
      ...DefaultEmployee
    }
  }
`);

export default AllEmployeesQuery;
