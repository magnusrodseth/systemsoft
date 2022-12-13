import EmployeesAndSkillsQuery from "@/graphql/queries/EmployeesAndSkills";
import client from "@/lib/apollo";
import Box from "@ui/atoms/Box";
import Grid from "@ui/molecules/Grid";
import Heading from "@ui/atoms/Heading";
import { InferGetStaticPropsType } from "next";
import { FC } from "react";
import Pill from "@ui/atoms/Pill";
import EmployeeCard from "@/components/EmployeeCard";

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
          <Pill key={skill._id}>{skill.name}</Pill>
        ))}
      </Box>

      <Grid
        css={{
          mt: 16,
          gap: 16,
          "@sm": {
            gridCols: 1,
          },
          "@md": {
            gridCols: 2,
          },
          "@xl": {
            gridCols: 3,
          },
        }}
      >
        {employees.map((employee, i) => (
          <EmployeeCard employee={employee} key={i} />
        ))}
      </Grid>
    </Box>
  );
};

export const getStaticProps = async () => {
  const { data, loading, error } = await client.query({
    query: EmployeesAndSkillsQuery,
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
