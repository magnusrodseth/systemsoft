import { graphql } from "@/graphql/generated";

const DefaultCertificationFragment = graphql(`
  fragment DefaultCertification on Certification {
    title
    shortDescription
    link
  }
`);

export default DefaultCertificationFragment;
