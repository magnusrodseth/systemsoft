import { graphql } from "../generated";

const EmployeesWithSkillsQuery = graphql(`
  query EmployeesWithSkills {
    allResume {
      employee {
        ...DefaultEmployee
      }
      skill {
        _id
        name
      }
    }
    allSkill {
      _id
      name
    }
  }
`);

export default EmployeesWithSkillsQuery;
