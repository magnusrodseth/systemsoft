import DefaultEmployeeFragment from "@/graphql/fragments/Employee";
import { useFragment } from "@/graphql/generated";
import EmployeeQuery from "@/graphql/queries/Employee";
import EmployeesAndSkillsQuery from "@/graphql/queries/EmployeesAndSkills";
import client from "@/lib/apollo";
import Box from "@ui/atoms/Box";
import Text from "@ui/atoms/Text";
import Heading from "@ui/atoms/Heading";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC } from "react";
import { indigo, violet } from "@radix-ui/colors";
import Image from "@ui/atoms/Image";
import DefaultResumeFragment from "@/graphql/fragments/resume/Resume";
import Card from "@ui/molecules/Card";
import {
  EnvelopeClosedIcon,
  HomeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ChatBubbleIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Link from "@ui/atoms/Link";
import ShortResumeItem from "@/components/resume/PersonalInformationItem";
import useResume from "@/hooks/useResume";
import { ONE_WEEK_IN_SECONDS } from "@/constants";
import NoInformation from "@/components/resume/NoInformation";
import PortableText from "@/components/PortableText";
import ResumeCard from "@/components/resume/ResumeCard";
import Icon from "@ui/atoms/Icon";
import { DrawingPinFilledIcon, CalendarIcon } from "@radix-ui/react-icons";
import formatDate from "@/utils/formatDate";

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

  const location = `${resume.personalInformation?.address}, ${resume.personalInformation?.postalCode} ${resume.personalInformation?.city}`;
  const imageUrl = employee?.image?.asset?.url;

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Heading
        css={{
          "@sm": {
            fontSize: "$md",
          },
          "@md": {
            fontSize: "$3xl",
          },
          "@lg": {
            fontSize: "$5xl",
          },
          linearGradientUnderline: {
            from: indigo.indigo10,
            to: violet.violet10,
          },
        }}
        pageTitle
      >
        {employee?.name}
      </Heading>
      {imageUrl && (
        <Box css={{ position: "relative" }}>
          <Image
            src={imageUrl}
            alt={employee?.name || "A profile picture of an employee"}
            width={400}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      )}

      {/* Personal information */}
      <ResumeCard>
        <Heading size="xl" bold>
          Utdanning
        </Heading>
        <ShortResumeItem
          icon={<EnvelopeClosedIcon />}
          body={
            <Link href={`mailto:${employee?.email}`}>{employee?.email}</Link>
          }
        />
        <ShortResumeItem icon={<PersonIcon />} body={employee?.title} />

        {resume.personalInformation?.address &&
          resume.personalInformation.postalCode &&
          resume.personalInformation.city && (
            <ShortResumeItem icon={<HomeIcon />} body={location} />
          )}

        {resume.personalInformation?.githubLink && (
          <ShortResumeItem
            icon={<GitHubLogoIcon />}
            body={
              <Link href={resume.personalInformation?.githubLink}>GitHub</Link>
            }
          />
        )}

        {resume.personalInformation?.linkedinLink && (
          <ShortResumeItem
            icon={<LinkedInLogoIcon />}
            body={
              <Link href={resume.personalInformation?.linkedinLink}>
                LinkedIn
              </Link>
            }
          />
        )}

        {resume.personalInformation?.status && (
          <ShortResumeItem
            icon={<ChatBubbleIcon />}
            body={resume.personalInformation?.status}
          />
        )}

        {resume.personalInformation?.aboutRaw && (
          <PortableText value={resume.personalInformation?.aboutRaw} />
        )}
      </ResumeCard>

      {resume.education && (
        <ResumeCard>
          <Heading size="xl" bold>
            Utdanning
          </Heading>

          {resume.education.map((education, i) => (
            <Box key={i}>
              <Heading size="lg">{`${education?.degree}, ${education?.fieldOfStudy}`}</Heading>
              <ShortResumeItem
                icon={<CalendarIcon />}
                body={
                  <Text>{`${education?.start} - ${
                    formatDate(education?.end) || "nå"
                  }`}</Text>
                }
              />
              <ShortResumeItem
                icon={<DrawingPinFilledIcon />}
                body={education?.school}
              />
            </Box>
          ))}
        </ResumeCard>
      )}

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
