import Employee from "components/Employee";
import { useEmployeesQuery, Employees as IEmployees } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";
import createUrqlClient from "../../utils/createUrqlClient";

interface EmployeesProps {}

const Employees: React.FC<EmployeesProps> = ({}) => {
  // This hook returns a tuple of the shape [result, executeQuery].
  // Only the result is interesting. Thus, we use an underscore.
  const [result, _] = useEmployeesQuery();

  const { data, fetching, error } = result;

  console.log(fetching, error);

  if (fetching) return <>Loading...</>;
  if (error) return <>Error...</>;

  const employees = data?.employees as IEmployees[];

  let count = 0;

  return (
    <>
      <div className="text-center p-5">
        <h2 className="text-blue-600 font-bold uppercase text-1xl">
          Introducing
        </h2>
        <h1 className="text-5xl font-bold text-gray-800">Our Employees</h1>
      </div>
      <div className="bg-blue-600 h-1 w-10 ml-auto mr-auto mb-6"></div>
      {employees.map((employee) => (
        <div key={employee.id}>
          <Employee employee={employee} odd={++count % 2 == 0} />
        </div>
      ))}
    </>
  );
};

// This page should be server side rendered, as the content is dynamic.
export default withUrqlClient(createUrqlClient, { ssr: true })(Employees);
