import {
  EnvelopeClosedIcon,
  HomeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
  ChatBubbleIcon,
} from "@radix-ui/react-icons";
import {
  DefaultEmployeeFragment,
  DefaultPersonalInformationFragment,
} from "@/graphql/generated/graphql";
import { PortableText } from "@portabletext/react";
import Heading from "@ui/atoms/Heading";
import HorizontalDivider from "@ui/atoms/HorizontalDivider";
import Link from "@ui/atoms/Link";
import { FC } from "react";
import ShortResumeItem from "./PersonalInformationItem";
import ResumeCard from "./ResumeCard";

interface PersonalInformationProps {
  employee: DefaultEmployeeFragment;
  personalInformation: DefaultPersonalInformationFragment | null;
}

const PersonalInformation: FC<PersonalInformationProps> = ({
  employee,
  personalInformation,
}) => {
  const location = `${personalInformation?.address}, ${personalInformation?.postalCode} ${personalInformation?.city}`;

  return (
    <ResumeCard>
      <Heading subtitle>Om meg</Heading>
      <ShortResumeItem
        icon={<EnvelopeClosedIcon />}
        body={<Link href={`mailto:${employee?.email}`}>{employee?.email}</Link>}
      />
      <ShortResumeItem icon={<PersonIcon />} body={employee?.title} />

      {personalInformation?.address &&
        personalInformation.postalCode &&
        personalInformation.city && (
          <ShortResumeItem icon={<HomeIcon />} body={location} />
        )}

      {personalInformation?.githubLink && (
        <ShortResumeItem
          icon={<GitHubLogoIcon />}
          body={<Link href={personalInformation?.githubLink}>GitHub</Link>}
        />
      )}

      {personalInformation?.linkedinLink && (
        <ShortResumeItem
          icon={<LinkedInLogoIcon />}
          body={<Link href={personalInformation?.linkedinLink}>LinkedIn</Link>}
        />
      )}

      {personalInformation?.status && (
        <ShortResumeItem
          icon={<ChatBubbleIcon />}
          body={personalInformation?.status}
        />
      )}

      <HorizontalDivider />

      {personalInformation?.aboutRaw && (
        <PortableText value={personalInformation?.aboutRaw} />
      )}
    </ResumeCard>
  );
};

export default PersonalInformation;
