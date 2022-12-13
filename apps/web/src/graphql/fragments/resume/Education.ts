import { graphql } from "@/graphql/generated";

const DefaultEducationFragment = graphql(`
  fragment DefaultEducation on Education {
    school
    degree
    fieldOfStudy
    start
    end
  }
`);

export default DefaultEducationFragment;
