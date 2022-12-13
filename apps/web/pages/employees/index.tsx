import EmployeesQuery from "@/graphql/queries/Employees";
import client from "@/lib/apollo";
import { InferGetStaticPropsType } from "next";
import { FC } from "react";

type EmployeesPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const EmployeesPage: FC<EmployeesPageProps> = ({
  employees,
  loading,
  error,
}) => {
  return null;
};

export const getStaticProps = async () => {
  const { data, loading, error } = await client.query({
    query: EmployeesQuery,
  });

  const employees = data.allEmployee;

  return {
    props: {
      employees,
      loading,
      error: !!error,
    },
  };
};

export default EmployeesPage;
