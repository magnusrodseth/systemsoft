import { graphql } from "../generated";

const DefaultClientFragment = graphql(`
  fragment DefaultClient on Client {
    _id
    name
    shortDescription
    descriptionRaw
    tags {
      ...DefaultTag
    }
    image {
      asset {
        url
      }
    }
  }
`);

export default DefaultClientFragment;
