import { graphql } from "@/graphql/generated";

const DefaultPublicationFragment = graphql(`
  fragment DefaultPublication on Publication {
    title
    link
    descriptionRaw
  }
`);

export default DefaultPublicationFragment;
