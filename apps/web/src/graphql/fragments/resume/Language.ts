import { graphql } from "@/graphql/generated";

const DefaultLanguageFragment = graphql(`
  fragment DefaultLanguage on Language {
    name
  }
`);

export default DefaultLanguageFragment;
