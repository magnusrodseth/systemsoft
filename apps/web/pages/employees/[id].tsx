import DefaultEmployeeFragment from "@/graphql/fragments/Employee";
import { useFragment } from "@/graphql/generated";
import EmployeeQuery from "@/graphql/queries/Employee";
import EmployeesAndSkillsQuery from "@/graphql/queries/EmployeesAndSkills";
import client from "@/lib/apollo";
import Box from "@ui/atoms/Box";
import HorizontalDivider from "@ui/atoms/HorizontalDivider";
import Tooltip from "@ui/molecules/Tooltip";
import Text from "@ui/atoms/Text";
import Heading from "@ui/atoms/Heading";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC } from "react";
import { indigo, violet } from "@radix-ui/colors";
import Image from "@ui/atoms/Image";
import DefaultResumeFragment from "@/graphql/fragments/resume/Resume";
import {
  EnvelopeClosedIcon,
  HomeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ChatBubbleIcon,
  PersonIcon,
  DotFilledIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import Link from "@ui/atoms/Link";
import ShortResumeItem from "@/components/resume/PersonalInformationItem";
import useResume from "@/hooks/useResume";
import { ONE_WEEK_IN_SECONDS } from "@/constants";
import NoInformation from "@/components/resume/NoInformation";
import PortableText from "@/components/PortableText";
import ResumeCard from "@/components/resume/ResumeCard";
import { DrawingPinFilledIcon, CalendarIcon } from "@radix-ui/react-icons";
import formatDate from "@/utils/formatDate";
import Pill from "@ui/atoms/Pill";
import Button from "@ui/atoms/Button";
import Icon from "@ui/atoms/Icon";
import Card from "@ui/molecules/Card";
import PersonalInformation from "@/components/resume/PersonalInformation";
import ProfilePicture from "@/components/ProfilePicture";
import Grid from "@ui/molecules/Grid";
import Education from "@/components/resume/Education";

type EmployeePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const EmployeePage: FC<EmployeePageProps> = ({ data, loading, error }) => {
  const { employee: employeeData, resume: resumeData } = data;
  const employee = useFragment(DefaultEmployeeFragment, employeeData);

  if (!resumeData) {
    return (
      <NoInformation
        description={`Det ser ut som det ikke finnes mer informasjon om ${employee?.name}.`}
      />
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const resume = useResume(useFragment(DefaultResumeFragment, resumeData));

  const imageUrl = employee?.image?.asset?.url;

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: 16,
        mx: 8,
      }}
    >
      <Heading
        css={{
          linearGradientUnderline: {
            from: indigo.indigo10,
            to: violet.violet10,
          },
        }}
        pageTitle
      >
        {employee?.name}
      </Heading>

      <Box
        css={{
          position: "relative",
          overflow: "hidden",
          height: "18rem",
          width: "18rem",
          borderRadius: 8,
          pb: 8,
        }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={employee.name || "Profilbilde av en ansatt"}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        ) : (
          <Icon
            css={{
              backgroundColor: "$mauve4",
              height: "100%",
              color: "$mauve11",
            }}
          >
            <PersonIcon
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Icon>
        )}
      </Box>

      <Grid
        css={{
          gridCols: 1,
          gap: 16,
        }}
      >
        <PersonalInformation
          employee={employee}
          personalInformation={resume.personalInformation}
        />

        {resume.education && <Education education={resume.education} />}

        {resume.professionalExperience && (
          <ResumeCard>
            <Heading size="xl" bold>
              Jobberfaring
            </Heading>

            {resume.professionalExperience.map((experience, i) => (
              <Box key={i}>
                <Heading size="lg">{experience?.employer}</Heading>
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
              </Box>
            ))}
          </ResumeCard>
        )}

        {resume.skills && (
          <ResumeCard>
            <Heading size="xl" bold>
              Fagområder og ferdigheter
            </Heading>
            {resume.skills.map(
              (skill, i) =>
                skill && (
                  <Tooltip trigger={<Button>{skill?.name}</Button>} key={i}>
                    {skill?.shortDescription}
                  </Tooltip>
                )
            )}
          </ResumeCard>
        )}

        {resume.languages && (
          <ResumeCard>
            <Heading size="xl" bold>
              Språk
            </Heading>
            <Box
              css={{
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
              }}
            >
              {resume.languages.map((language, i) => {
                const isLast = i === resume.languages!!.length - 1;
                return (
                  language && (
                    <Box
                      css={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      key={i}
                    >
                      <Box>
                        <Text>{language?.name}</Text>
                      </Box>

                      {!isLast && (
                        <Icon>
                          <DotFilledIcon />
                        </Icon>
                      )}
                    </Box>
                  )
                );
              })}
            </Box>
          </ResumeCard>
        )}

        {resume.certifications && (
          <ResumeCard>
            <Heading size="xl" bold>
              Sertifikater og diplomer
            </Heading>

            {resume.certifications.map((certification, i) => (
              <Box key={i}>
                <Heading size="lg">{certification?.title}</Heading>
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
              </Box>
            ))}
          </ResumeCard>
        )}

        {resume.publications && (
          <ResumeCard>
            <Heading size="xl" bold>
              Publikasjoner
            </Heading>

            {resume.publications.map((publication, i) => (
              <Box key={i}>
                <Heading size="lg">{publication?.title}</Heading>
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
              </Box>
            ))}
          </ResumeCard>
        )}
      </Grid>
    </Box>
  );
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: EmployeesAndSkillsQuery,
  });

  const employees = data.allEmployee.map((employee) =>
    useFragment(DefaultEmployeeFragment, employee)
  );

  const paths = employees.map((employee) => ({
    params: { id: employee._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ id: string }>) => {
  const id = params?.id as string;

  const {
    data: employeeData,
    loading,
    error,
  } = await client.query({
    query: EmployeeQuery,
    variables: {
      id,
    },
  });

  if (!employeeData.Employee) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  const data = {
    employee: employeeData.Employee || null,
    resume: employeeData.allResume[0] || null,
  };

  return {
    props: {
      data,
      loading,
      error: !!error,
    },
    revalidate: ONE_WEEK_IN_SECONDS,
  };
};

export default EmployeePage;
