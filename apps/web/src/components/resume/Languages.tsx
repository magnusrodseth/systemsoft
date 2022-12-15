import { DefaultLanguageFragment } from "@/graphql/generated/graphql";
import Box from "@ui/atoms/Box";
import Button from "@ui/atoms/Button";
import Heading from "@ui/atoms/Heading";
import { FC } from "react";
import ResumeCard from "./ResumeCard";

type LanguagesProps = {
  languages: (DefaultLanguageFragment | null | undefined)[];
};

const Languages: FC<LanguagesProps> = ({ languages }) => {
  return (
    <ResumeCard>
      <Heading subtitle>Språk</Heading>
      <Box
        css={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          mt: 12,
        }}
      >
        {languages.map(
          (language, i) => language && <Button key={i}>{language?.name}</Button>
        )}
      </Box>
    </ResumeCard>
  );
};
export default Languages;
