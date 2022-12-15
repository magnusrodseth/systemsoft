import EmployeesAndSkillsQuery from "@/graphql/queries/EmployeesAndSkills";
import client from "@/lib/apollo";
import Box from "@ui/atoms/Box";
import Text from "@ui/atoms/Text";
import Grid from "@ui/molecules/Grid";
import Heading from "@ui/atoms/Heading";
import { InferGetStaticPropsType } from "next";
import { FC, useState } from "react";
import Pill from "@ui/atoms/Pill";
import EmployeeCard from "@/components/EmployeeCard";
import Icon from "@ui/atoms/Icon";
import { Cross2Icon } from "@radix-ui/react-icons";
import { violet, indigo } from "@radix-ui/colors";

type EmployeesPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const EmployeesPage: FC<EmployeesPageProps> = ({
  employees,
  skills,
  loading,
  error,
}) => {
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);

  const handleToggleFilter = (skillId: string) => {
    if (filteredSkills.includes(skillId)) {
      setFilteredSkills((prev) => prev.filter((skill) => skill !== skillId));
    } else {
      setFilteredSkills((prev) => [...prev, skillId]);
    }
  };

  const handleClearFilter = () => {
    setFilteredSkills([]);
  };

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
          display: "flex",
          // "@sm": {
          //   fontSize: "$md",
          // },
          // "@md": {
          //   fontSize: "$3xl",
          // },
          // "@lg": {
          //   fontSize: "$5xl",
          // },
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
        Filtrér ferdigheter
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
              filteredSkills.includes(skill._id as string)
                ? "violet"
                : "neutral"
            }
            onClick={() => handleToggleFilter(skill._id as string)}
          >
            {skill.name}
          </Pill>
        ))}

        {filteredSkills.length > 0 && (
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
