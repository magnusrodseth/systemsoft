import { useState, useEffect } from "react";
import type {
  DefaultEmployeeFragment,
  DefaultSkillFragment,
} from "@/graphql/generated/graphql";

type FilteredEmployeesQueryProps = {
  allEmployees: (DefaultEmployeeFragment | null | undefined)[];
  employeesWithSkills: {
    employee?: DefaultEmployeeFragment | null;
    skills?: (DefaultSkillFragment | null)[] | null;
  }[];
  skills: DefaultSkillFragment[];
};

/**
 * Filters employees based on their skills.
 *
 * Due to Sanity not providing a good way to filter this, or facilitating custom queries, we have to do this manually.
 * This is fine, as the number of employees is small, and the number of skills is small.
 *
 * @param props is the necessary props to filter employees.
 * @returns all objects and handlers necessary to filter employees.
 */
const useFilteredEmployeesQuery = ({
  allEmployees,
  employeesWithSkills,
}: FilteredEmployeesQueryProps) => {
  const [filteredSkillIds, setFilteredSkillIds] = useState<string[]>([]);
  const [employees, setEmployees] = useState(allEmployees);

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

  return {
    employees,
    filteredSkillIds,
    handleToggleFilter,
    handleClearFilter,
  };
};

export default useFilteredEmployeesQuery;
