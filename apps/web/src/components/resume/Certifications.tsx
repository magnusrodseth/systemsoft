import { DefaultCertificationFragment } from "@/graphql/generated/graphql";
import Box from "@ui/atoms/Box";
import Heading from "@ui/atoms/Heading";
import HorizontalDivider from "@ui/atoms/HorizontalDivider";
import Link from "@ui/atoms/Link";
import { FC } from "react";
import ShortResumeItem from "./ShortResumeItem";
import ResumeCard from "./ResumeCard";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Text from "@ui/atoms/Text";

type CertificationsProps = {
  certifications: (DefaultCertificationFragment | null | undefined)[];
};

const Certifications: FC<CertificationsProps> = ({ certifications }) => {
  return (
    <ResumeCard>
      <Heading subtitle>Sertifikater og diplomer</Heading>

      {certifications.map((certification, i) => {
        const isLast = i === certifications!!.length - 1;

        return (
          <Box key={i}>
            <Heading bold>{certification?.title}</Heading>
            {certification?.link && (
              <ShortResumeItem
                icon={<ExternalLinkIcon />}
                body={
                  <Link href={certification?.link} target="_blank">
                    Les mer.
                  </Link>
                }
              />
            )}
            <Text>{certification?.shortDescription}</Text>
            {!isLast && <HorizontalDivider />}
          </Box>
        );
      })}
    </ResumeCard>
  );
};

export default Certifications;
