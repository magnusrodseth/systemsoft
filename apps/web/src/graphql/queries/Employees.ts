import { graphql } from "../generated";

const EmployeesQuery = graphql(`
  query Employees {
    allEmployee {
      _id
      name
    }
    allSkill {
      _id
      name
    }
  }
`);

export default EmployeesQuery;
