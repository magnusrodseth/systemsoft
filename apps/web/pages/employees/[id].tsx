import DefaultEmployeeFragment from "@/graphql/fragments/Employee";
import { useFragment } from "@/graphql/generated";
import EmployeeQuery from "@/graphql/queries/Employee";
import EmployeesWithSkillsQuery from "@/graphql/queries/EmployeesWithSkills";
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
import ShortResumeItem from "@/components/resume/ShortResumeItem";
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
import ProfessionalExperience from "@/components/resume/ProfessionalExperience";
import Skills from "@/components/resume/Skills";
import Languages from "@/components/resume/Languages";
import Certifications from "@/components/resume/Certifications";
import Publications from "@/components/resume/Publications";
import AllEmployeesQuery from "@/graphql/queries/AllEmployees";

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

      <ProfilePicture
        css={{
          position: "relative",
          overflow: "hidden",
          height: "17rem",
          width: "17rem",
          borderRadius: 8,
          pb: 8,
        }}
        src={imageUrl}
        alt={employee?.name || "Portrettbilde av en ansatt"}
      />

      <Grid
        css={{
          gridCols: 1,
          gap: 24,
        }}
      >
        <PersonalInformation
          employee={employee}
          personalInformation={resume.personalInformation}
        />

        <Grid
          css={{
            "@sm": {
              gridCols: 1,
            },
            "@md": {
              gridCols:
                resume.education && resume.professionalExperience ? 2 : 1,
            },
            columnGap: 16,
            rowGap: 32,
          }}
        >
          {resume.education && <Education education={resume.education} />}

          {resume.professionalExperience && (
            <ProfessionalExperience
              professionalExperience={resume.professionalExperience}
            />
          )}
        </Grid>

        <Grid
          css={{
            "@sm": {
              gridCols: 1,
            },
            "@md": {
              gridCols: resume.skills && resume.languages ? 2 : 1,
            },
            columnGap: 16,
            rowGap: 32,
          }}
        >
          {resume.skills && <Skills skills={resume.skills} />}

          {resume.languages && <Languages languages={resume.languages} />}
        </Grid>

        {resume.certifications && (
          <Certifications certifications={resume.certifications} />
        )}

        {resume.publications && (
          <Publications publications={resume.publications} />
        )}
      </Grid>
    </Box>
  );
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: AllEmployeesQuery,
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
