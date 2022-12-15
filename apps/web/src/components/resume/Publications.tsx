import { DefaultPublicationFragment } from "@/graphql/generated/graphql";
import { PortableText } from "@portabletext/react";
import Box from "@ui/atoms/Box";
import Heading from "@ui/atoms/Heading";
import HorizontalDivider from "@ui/atoms/HorizontalDivider";
import Link from "next/link";
import { FC } from "react";
import ShortResumeItem from "./PersonalInformationItem";
import ResumeCard from "./ResumeCard";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

type PublicationsProps = {
  publications: (DefaultPublicationFragment | null | undefined)[];
};

const Publications: FC<PublicationsProps> = ({ publications }) => {
  return (
    <ResumeCard>
      <Heading subtitle>Publikasjoner</Heading>

      {publications.map((publication, i) => {
        const isLast = i === publications!!.length - 1;
        return (
          <Box key={i}>
            <Heading bold>{publication?.title}</Heading>
            {publication?.link && (
              <ShortResumeItem
                icon={<ExternalLinkIcon />}
                body={
                  <Link href={publication?.link} target="_blank">
                    Les mer.
                  </Link>
                }
              />
            )}

            <PortableText value={publication?.descriptionRaw} />
            {!isLast && <HorizontalDivider />}
          </Box>
        );
      })}
    </ResumeCard>
  );
};

export default Publications;
