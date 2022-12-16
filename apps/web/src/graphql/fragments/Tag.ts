import { graphql } from "../generated";

const DefaultTagFragment = graphql(`
  fragment DefaultTag on Tag {
    _id
    name
  }
`);

export default DefaultTagFragment;
