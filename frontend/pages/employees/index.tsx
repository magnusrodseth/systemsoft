import Employee from "components/Employee";
import { useEmployeesQuery, Employees as IEmployees } from "generated/graphql";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import React from "react";
import createUrqlClient from "../../utils/createUrqlClient";

interface EmployeesProps {}

const Employees: React.FC<EmployeesProps> = ({}) => {
  // This hook returns a tuple of the shape [result, executeQuery].
  // Only the result is interesting. Thus, we use an underscore.
  const [result, _] = useEmployeesQuery();

  const { data, fetching, error } = result;

  if (fetching) return <>Loading...</>;
  if (error) return <>Error...</>;

  const employees = data?.employees as IEmployees[];

  let count = 0;

  return (
    <>
      {employees.map((employee) => (
        <Employee employee={employee} odd={++count % 2 == 0} />
      ))}
    </>
  );
};

// This page should be server side rendered, as the content is dynamic.
export default withUrqlClient(createUrqlClient, { ssr: true })(Employees);
