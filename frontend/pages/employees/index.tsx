import Employee from "components/Employee";
import Loading from "components/Loading";
import { useEmployeesQuery, Employees as IEmployees } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";

import createUrqlClient from "../../utils/createUrqlClient";
import Error from "components/Error";
import Jumbotron from "components/Jumbotron";

interface EmployeesProps {}

const Employees: React.FC<EmployeesProps> = ({}) => {
  // This hook returns a tuple of the shape [result, executeQuery].
  // Only the result is interesting. Thus, we use an underscore.
  const [result, _] = useEmployeesQuery();

  const { data, fetching, error } = result;

  if (fetching) return <Loading />;
  if (error) return <Error />;

  const employees = data?.employees as IEmployees[];

  return (
    <div>
      <Jumbotron title="Employees" />

      {employees.map((employee) => (
        <Employee employee={employee} key={employee.id} />
      ))}
    </div>
  );
};

// This page should be server side rendered, as the content is dynamic.
export default withUrqlClient(createUrqlClient, { ssr: true })(Employees);
