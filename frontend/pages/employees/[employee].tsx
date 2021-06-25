import React from "react";
import { GetServerSideProps } from "next";
import {
  Resume as IResume,
  useEmployeeBySlugQuery,
  useGetEmployeeResumeQuery,
} from "generated/graphql";
import createUrqlClient from "utils/createUrqlClient";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import Resume from "components/resume/Resume";
import classNames from "utils/classNames";
import Loading from "components/Loading";
import Error from "components/Error";
import ReturnButton from "components/ReturnButton";
import { useRouter } from "next/router";

const ResumePage: React.FC<WithUrqlProps> = ({ name }) => {
  const router = useRouter();

  const [result, _] = useGetEmployeeResumeQuery({
    variables: { employeeSlug: name },
  });

  const [exists] = useEmployeeBySlugQuery({
    variables: { employeeSlug: name as string },
  });

  if (exists.data?.employees?.length === 0) {
    router.push("/employees");
    return <></>;
  }

  const { data, fetching, error } = result;

  const resumes = data?.resumes as IResume[];

  if (fetching) {
    return <Loading />;
  }
  if (error) return <Error />;

  const gotNoResumes = resumes.length === 0;
  const gotSeveralResumes = resumes.length > 1;

  const resume = resumes[0];

  return gotNoResumes || gotSeveralResumes ? (
    <div
      className={classNames(
        "flex justify-center items-center flex-col min-h-container"
      )}
    >
      <h1 className={classNames("text-6xl font-mono font-bold text-center")}>
        Oops!
      </h1>

      <p className={classNames("text-center mt-6")}>
        {gotNoResumes
          ? "This employee has not yet uploaded their resume..."
          : ""}
        {gotSeveralResumes
          ? "An employee can only have one active resume..."
          : ""}
      </p>
      <ReturnButton name="employees" link="employees" />
    </div>
  ) : (
    <Resume resume={resume} />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { employee } = context.query;

  return {
    props: {
      name: employee,
    },
  };
};

export default withUrqlClient(createUrqlClient)(ResumePage);
