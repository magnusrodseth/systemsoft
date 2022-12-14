import { graphql } from "../generated";

const EmployeeQuery = graphql(`
  query Employee($id: ID!) {
    Employee(id: $id) {
      ...DefaultEmployee
    }
    allResume(where: { employee: { _id: { eq: $id } } }) {
      ...DefaultResume
    }
  }
`);

export default EmployeeQuery;
