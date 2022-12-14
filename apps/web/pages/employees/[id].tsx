import DefaultEmployeeFragment from "@/graphql/fragments/Employee";
import { useFragment } from "@/graphql/generated";
import { DefaultEmployeeFragmentDoc } from "@/graphql/generated/graphql";
import EmployeeQuery from "@/graphql/queries/Employee";
import EmployeesAndSkillsQuery from "@/graphql/queries/EmployeesAndSkills";
import client from "@/lib/apollo";
import Box from "@ui/atoms/Box";
import Heading from "@ui/atoms/Heading";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC } from "react";
import { indigo, violet } from "@radix-ui/colors";

type EmployeePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const EmployeePage: FC<EmployeePageProps> = ({ data, loading, error }) => {
  const { employee, resume } = data;

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
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
