import { graphql } from "@/graphql/generated";

const DefaultSkillFragment = graphql(`
  fragment DefaultSkill on Skill {
    name
    shortDescription
  }
`);

export default DefaultSkillFragment;
