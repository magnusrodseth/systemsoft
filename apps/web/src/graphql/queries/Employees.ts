import { graphql } from "../generated";

const EmployeesQuery = graphql(`
  query Employees {
    allEmployee {
      _id
      name
      email
      title
    }
  }
`);

export default EmployeesQuery;
