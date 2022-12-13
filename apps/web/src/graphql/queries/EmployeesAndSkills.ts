import { graphql } from "../generated";

const EmployeesAndSkillsQuery = graphql(`
  query EmployeesAndSkills {
    allEmployee {
      ...DefaultEmployee
    }
    allSkill {
      _id
      name
    }
  }
`);

export default EmployeesAndSkillsQuery;
