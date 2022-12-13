import EmployeeQuery from "@/graphql/queries/Employee";
import EmployeesQuery from "@/graphql/queries/Employees";
import ExpertisesQuery from "@/graphql/queries/Expertises";
import client from "@/lib/apollo";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { FC } from "react";

type EmployeePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Employee: FC<EmployeePageProps> = ({ data, loading, error }) => {
  console.log({ data, loading, error });

  return null;
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: EmployeesQuery,
  });

  const paths = data.allEmployee.map((employee) => ({
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

  const data = {
    employee: employeeData.Employee,
    resume: employeeData.allResume[0],
  };

  return {
    props: {
      data,
      loading,
      error: !!error,
    },
  };
};

export default Employee;
