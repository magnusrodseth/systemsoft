import EmployeesWithSkillsQuery from "@/graphql/queries/EmployeesWithSkills";
import client from "@/lib/apollo";
import Box from "@ui/atoms/Box";
import Text from "@ui/atoms/Text";
import Grid from "@ui/molecules/Grid";
import Heading from "@ui/atoms/Heading";
import { InferGetStaticPropsType } from "next";
import { FC } from "react";
import Pill from "@ui/atoms/Pill";
import EmployeeCard from "@/components/EmployeeCard";
import Icon from "@ui/atoms/Icon";
import { Cross2Icon, Component1Icon } from "@radix-ui/react-icons";
import { violet, indigo } from "@radix-ui/colors";
import Error from "@/components/common/Error";
import AllEmployeesQuery from "@/graphql/queries/AllEmployees";
import useFilteredEmployeesQuery from "@/hooks/useFilteredEmployeesQuery";
import Loading from "@/components/common/Loading";

type EmployeesPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const EmployeesPage: FC<EmployeesPageProps> = ({
  allEmployees,
  employeesWithSkills,
  skills,
  loading,
  error,
}) => {
  const { employees, filteredSkillIds, handleToggleFilter, handleClearFilter } =
    useFilteredEmployeesQuery({
      allEmployees,
      employeesWithSkills,
    });

  if (loading) {
    return <Loading />;
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

          {skills.length > 0 && (
            <>
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
                {skills.map(
                  (skill) =>
                    skill && (
                      <Pill
                        key={skill._id}
                        color={
                          filteredSkillIds.includes(skill?._id as string)
                            ? "violet"
                            : "neutral"
                        }
                        onClick={() => handleToggleFilter(skill._id as string)}
                      >
                        {skill.name}
                      </Pill>
                    )
                )}

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
            </>
          )}

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
