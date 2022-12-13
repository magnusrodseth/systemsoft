import { graphql } from "../generated";

const DefaultEmployeeFragment = graphql(`
  fragment DefaultEmployee on Employee {
    _id
    name
    email
    title
    image {
      asset {
        url
      }
    }
  }
`);

export default DefaultEmployeeFragment;
