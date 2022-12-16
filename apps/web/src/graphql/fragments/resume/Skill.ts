import { graphql } from "@/graphql/generated";

const DefaultSkillFragment = graphql(`
  fragment DefaultSkill on Skill {
    _id
    name
    shortDescription
  }
`);

export default DefaultSkillFragment;
