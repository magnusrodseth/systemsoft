import EmployeesWithSkillsQuery from "@/graphql/queries/EmployeesWithSkills";
import client from "@/lib/apollo";
import Box from "@ui/atoms/Box";
import Text from "@ui/atoms/Text";
import Grid from "@ui/molecules/Grid";
import Heading from "@ui/atoms/Heading";
import { InferGetStaticPropsType } from "next";
import { FC, useEffect, useState } from "react";
import Pill from "@ui/atoms/Pill";
import EmployeeCard from "@/components/EmployeeCard";
import Icon from "@ui/atoms/Icon";
import { Cross2Icon, Component1Icon } from "@radix-ui/react-icons";
import { violet, indigo } from "@radix-ui/colors";
import Spinner from "@ui/molecules/Spinner";
import Error from "@/components/common/Error";
import { useQuery } from "@apollo/client";
import { useFragment } from "@/graphql/generated";
import DefaultEmployeeFragment from "@/graphql/fragments/Employee";
import type { DefaultEmployeeFragment as DefaultEmployeeFragmentType } from "@/graphql/generated/graphql";
import AllEmployeesQuery from "@/graphql/queries/AllEmployees";

type EmployeesPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const EmployeesPage: FC<EmployeesPageProps> = ({
  allEmployees,
  employeesWithSkills,
  skills,
  loading,
  error,
}) => {
  const [filteredSkillIds, setFilteredSkillIds] = useState<string[]>([]);
  const [employees, setEmployees] =
    useState<(DefaultEmployeeFragmentType | null | undefined)[]>(allEmployees);

  const handleToggleFilter = (skillId: string) => {
    if (filteredSkillIds.includes(skillId)) {
      setFilteredSkillIds((prev) => prev.filter((skill) => skill !== skillId));
    } else {
      setFilteredSkillIds((prev) => [...prev, skillId]);
    }
  };

  const handleClearFilter = () => {
    setFilteredSkillIds([]);
  };

  useEffect(() => {
    // Filter employees based on filteredSkillIds
    if (filteredSkillIds.length === 0) {
      setEmployees(allEmployees);
    } else {
      const filteredEmployees = employeesWithSkills.filter((employee) => {
        const employeeSkills = employee.skills?.map((skill) => skill?._id);
        return filteredSkillIds.every((skillId) =>
          employeeSkills?.includes(skillId)
        );
      });

      const employees = filteredEmployees
        .filter((entry) => entry.employee)
        .map((entry) => entry.employee);

      setEmployees(employees);
    }
  }, [filteredSkillIds, allEmployees, employeesWithSkills]);

  if (loading) {
    return (
      <Box css={{ my: 32 }}>
        <Spinner icon={<Component1Icon />} />
      </Box>
    );
  }

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      {error ? (
        <Error />
      ) : (
        <>
          <Heading
            css={{
              display: "flex",
              linearGradientUnderline: {
                from: indigo.indigo10,
                to: violet.violet10,
              },
            }}
            pageTitle
          >
            Våre ansatte
          </Heading>

          <Heading
            css={{
              my: 4,
              "@sm": {
                fontSize: "$sm",
              },
              "@md": {
                fontSize: "$xl",
              },
              "@lg": {
                fontSize: "$3xl",
              },
            }}
          >
            Filtrér fagområder
          </Heading>
          <Box
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
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
              <Pill
                key={skill._id}
                color={
                  filteredSkillIds.includes(skill._id as string)
                    ? "violet"
                    : "neutral"
                }
                onClick={() => handleToggleFilter(skill._id as string)}
              >
                {skill.name}
              </Pill>
            ))}

            {filteredSkillIds.length > 0 && (
              <Pill
                color="red"
                css={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                }}
                onClick={handleClearFilter}
              >
                <Icon>
                  <Cross2Icon />
                </Icon>

                <Text css={{ margin: 0 }}>Fjern filter</Text>
              </Pill>
            )}
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
        </>
      )}
    </Box>
  );
};

export const getStaticProps = async () => {
  const {
    data: employeesWithSkillsData,
    loading: employeesWithSkillsLoading,
    error: employeesWithSkillsError,
  } = await client.query({
    query: EmployeesWithSkillsQuery,
  });

  const employeesWithSkills = employeesWithSkillsData.allResume.map(
    (resume) => ({
      employee: resume.employee,
      skills: resume.skill,
    })
  );

  const skills = employeesWithSkillsData.allSkill;

  const {
    data: allEmployeesData,
    loading: allEmployeesLoading,
    error: allEmployeesError,
  } = await client.query({
    query: AllEmployeesQuery,
  });

  const allEmployees = allEmployeesData.allEmployee;

  const loading = employeesWithSkillsLoading || allEmployeesLoading;
  const error = !!(employeesWithSkillsError || allEmployeesError);

  return {
    props: {
      allEmployees,
      employeesWithSkills,
      skills,
      loading,
      error,
    },
  };
};

export default EmployeesPage;
