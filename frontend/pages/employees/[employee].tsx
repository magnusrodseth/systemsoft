import React from "react";
import { GetServerSideProps } from "next";
import {
  Resume as IResume,
  useGetEmployeeResumeQuery,
} from "generated/graphql";
import createUrqlClient from "utils/createUrqlClient";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import { useRouter } from "next/dist/client/router";
import Wrapper from "components/Wrapper";
import ResumeComponent from "components/ResumeComponent";

const Resume: React.FC<WithUrqlProps> = ({ name }) => {
  const [result, _] = useGetEmployeeResumeQuery({
    variables: { employeeSlug: name },
  });
  const router = useRouter();

  const { data, fetching, error } = result;

  console.log(fetching, error);

  const resumes = data?.resumes as IResume[];

  if (fetching) return <>Loading...</>;
  if (error) return <>Error...</>;

  console.log(resumes);

  // Clean up input and use const client for the unique client fetched
  const gotNoResumes = resumes.length === 0;
  const gotSeveralResumes = resumes.length !== 1;

  if (gotNoResumes) {
    router.push("/employees");
  }

  if (gotSeveralResumes) return <>Conflicting number of resumes</>;

  const resume = resumes[0];

  return <ResumeComponent resume={resume} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { employee } = context.query;

  return {
    props: {
      name: employee,
    },
  };
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Resume);
