import { DefaultSkillFragment } from "@/graphql/generated/graphql";
import Box from "@ui/atoms/Box";
import Button from "@ui/atoms/Button";
import Heading from "@ui/atoms/Heading";
import Tooltip from "@ui/molecules/Tooltip";
import { FC } from "react";
import ResumeCard from "./ResumeCard";

type SkillsProps = {
  skills: (DefaultSkillFragment | null | undefined)[];
};

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <ResumeCard>
      <Heading subtitle>Fagområder</Heading>
      <Box
        css={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          mt: 12,
        }}
      >
        {skills.map(
          (skill, i) =>
            skill && (
              <Tooltip trigger={<Button>{skill?.name}</Button>} key={i}>
                {skill?.shortDescription || "Ingen beskrivelse."}
              </Tooltip>
            )
        )}
      </Box>
    </ResumeCard>
  );
};
export default Skills;
