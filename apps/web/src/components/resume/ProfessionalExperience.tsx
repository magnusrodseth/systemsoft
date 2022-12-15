import { DefaultProfessionalExperienceFragment } from "@/graphql/generated/graphql";
import formatDate from "@/utils/formatDate";
import { PortableText } from "@portabletext/react";
import Box from "@ui/atoms/Box";
import Text from "@ui/atoms/Text";
import Heading from "@ui/atoms/Heading";
import { FC } from "react";
import ShortResumeItem from "./ShortResumeItem";
import ResumeCard from "./ResumeCard";
import { CalendarIcon, DrawingPinFilledIcon } from "@radix-ui/react-icons";
import HorizontalDivider from "@ui/atoms/HorizontalDivider";

type ProfessionalExperienceProps = {
  professionalExperience: (
    | DefaultProfessionalExperienceFragment
    | null
    | undefined
  )[];
};

const ProfessionalExperience: FC<ProfessionalExperienceProps> = ({
  professionalExperience,
}) => {
  return (
    <ResumeCard>
      <Heading
        subtitle
        css={{
          linearGradientUnderline: {
            from: "$violet10",
            to: "$indigo10",
          },
        }}
      >
        Jobberfaring
      </Heading>

      {professionalExperience.map((experience, i) => {
        const isLast = i === professionalExperience!!.length - 1;
        return (
          <Box key={i}>
            <Heading bold>{experience?.employer}</Heading>
            <ShortResumeItem
              icon={<CalendarIcon />}
              body={
                <Text>{`${formatDate(experience?.start)} - ${
                  formatDate(experience?.end) || "nå"
                }`}</Text>
              }
            />
            <ShortResumeItem
              icon={<DrawingPinFilledIcon />}
              body={experience?.location}
            />
            <PortableText value={experience?.descriptionRaw} />
            {!isLast && <HorizontalDivider />}
          </Box>
        );
      })}
    </ResumeCard>
  );
};

export default ProfessionalExperience;
