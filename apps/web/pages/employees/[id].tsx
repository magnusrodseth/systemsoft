import DefaultEmployeeFragment from "@/graphql/fragments/Employee";
import { useFragment } from "@/graphql/generated";
import EmployeeQuery from "@/graphql/queries/Employee";
import EmployeesAndSkillsQuery from "@/graphql/queries/EmployeesAndSkills";
import client from "@/lib/apollo";
import Box from "@ui/atoms/Box";
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
import PersonalInformationItem from "@/components/resume/PersonalInformationItem";
import useResume from "@/hooks/useResume";

type EmployeePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const EmployeePage: FC<EmployeePageProps> = ({ data, loading, error }) => {
  const { employee: employeeData, resume: resumeData } = data;

  if (!resumeData) {
    // TODO: Display information that resume does not exist, and allow user to be redirected back to employees
  }

  const employee = useFragment(DefaultEmployeeFragment, employeeData);
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
      }}
    >
      <Box>
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
        <Card css={{ p: 8 }}>
          <PersonalInformationItem
            icon={<EnvelopeClosedIcon />}
            body={
              <Link href={`mailto:${employee?.email}`}>{employee?.email}</Link>
            }
          />
          <PersonalInformationItem
            icon={<PersonIcon />}
            body={employee?.title}
          />

          {resume.personalInformation?.address &&
            resume.personalInformation.postalCode &&
            resume.personalInformation.city && (
              <PersonalInformationItem icon={<HomeIcon />} body={location} />
            )}

          {resume.personalInformation?.githubLink && (
            <PersonalInformationItem
              icon={<GitHubLogoIcon />}
              body={
                <Link href={resume.personalInformation?.githubLink}>
                  GitHub
                </Link>
              }
            />
          )}

          {resume.personalInformation?.linkedinLink && (
            <PersonalInformationItem
              icon={<LinkedInLogoIcon />}
              body={
                <Link href={resume.personalInformation?.linkedinLink}>
                  LinkedIn
                </Link>
              }
            />
          )}

          {resume.personalInformation?.status && (
            <PersonalInformationItem
              icon={<ChatBubbleIcon />}
              body={resume.personalInformation?.status}
            />
          )}
        </Card>
      </Box>
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

  return {
    paths,
    fallback: false,
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

  if (!employeeData) {
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
  };
};

export default EmployeePage;
