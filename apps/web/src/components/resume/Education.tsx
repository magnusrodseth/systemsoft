import { DefaultEducationFragment } from "@/graphql/generated/graphql";
import formatDate from "@/utils/formatDate";
import Box from "@ui/atoms/Box";
import Heading from "@ui/atoms/Heading";
import Text from "@ui/atoms/Text";
import HorizontalDivider from "@ui/atoms/HorizontalDivider";
import { FC } from "react";
import ShortResumeItem from "./ShortResumeItem";
import ResumeCard from "./ResumeCard";
import { CalendarIcon, DrawingPinFilledIcon } from "@radix-ui/react-icons";

type EducationProps = {
  education: (DefaultEducationFragment | null | undefined)[];
};

const Education: FC<EducationProps> = ({ education }) => {
  return (
    <ResumeCard>
      <Heading subtitle>Utdanning</Heading>

      {education.map((entry, i) => {
        const isLast = i === education!!.length - 1;
        return (
          <Box key={i}>
            <Heading bold>{`${entry?.degree}, ${entry?.fieldOfStudy}`}</Heading>
            <ShortResumeItem
              icon={<CalendarIcon />}
              body={
                <Text>{`${formatDate(entry?.start)} - ${
                  formatDate(entry?.end) || "nå"
                }`}</Text>
              }
            />
            <ShortResumeItem
              icon={<DrawingPinFilledIcon />}
              body={entry?.school}
            />
            {!isLast && <HorizontalDivider />}
          </Box>
        );
      })}
    </ResumeCard>
  );
};

export default Education;
