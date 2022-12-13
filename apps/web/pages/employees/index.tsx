import EmployeesQuery from "@/graphql/queries/Employees";
import client from "@/lib/apollo";
import Box from "@ui/atoms/Box";
import Heading from "@ui/atoms/Heading";
import { InferGetStaticPropsType } from "next";
import { FC } from "react";
import Pill from "@ui/atoms/Pill";

type EmployeesPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const EmployeesPage: FC<EmployeesPageProps> = ({
  employees,
  skills,
  loading,
  error,
}) => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Heading size="5xl" css={{ display: "flex", gap: 8 }}>
        Våre ansatte
      </Heading>

      <Box
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 6,
          "@sm": {
            width: "80%",
          },
          "@md": {
            width: "60%",
          },
        }}
      >
        {skills.map((skill) => (
          <Pill>{skill.name}</Pill>
        ))}
      </Box>
    </Box>
  );
};

export const getStaticProps = async () => {
  const { data, loading, error } = await client.query({
    query: EmployeesQuery,
  });

  const employees = data.allEmployee;
  const skills = data.allSkill;

  return {
    props: {
      employees,
      skills,
      loading,
      error: !!error,
    },
  };
};

export default EmployeesPage;
