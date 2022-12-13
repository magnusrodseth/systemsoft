import { graphql } from "../generated";

const EmployeeQuery = graphql(`
  query Employee($id: ID!) {
    Employee(id: $id) {
      _id
      name
      email
      title
    }
    allResume(where: { employee: { _id: { eq: $id } } }) {
      personalInformation {
        ...DefaultPersonalInformation
      }
      education {
        ...DefaultEducation
      }
      professionalExperience {
        ...DefaultProfessionalExperience
      }
      skill {
        ...DefaultSkill
      }
      language {
        name
      }
      certification {
        ...DefaultCertification
      }
      publication {
        ...DefaultPublication
      }
    }
  }
`);

export default EmployeeQuery;
