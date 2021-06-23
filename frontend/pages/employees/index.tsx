import Employee from "components/Employee";
import Loading from "components/Loading";
import { useEmployeesQuery, Employees as IEmployees } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";
import classNames from "utils/classNames";
import createUrqlClient from "../../utils/createUrqlClient";
import Error from "components/Error";

interface EmployeesProps {}

const Employees: React.FC<EmployeesProps> = ({}) => {
  // This hook returns a tuple of the shape [result, executeQuery].
  // Only the result is interesting. Thus, we use an underscore.
  const [result, _] = useEmployeesQuery();

  const { data, fetching, error } = result;

  if (fetching)
    return (
      <>
        <Loading />
      </>
    );
  if (error) return <Error />;

  const employees = data?.employees as IEmployees[];

  let count = 0;

  return (
    <>
      <div className="text-center p-6x">
        <h1
          className={classNames(
            "lg:text-8xl md:text-4xl sm:text-2xl mt-6 tracking-widest",
            "font-extrabold uppercase text-transparent mb-6",
            "bg-clip-text bg-gradient-to-r from-blue-600 to-purple-900 text-center"
          )}
        >
          SystemSoft AS
        </h1>
      </div>
      {employees.map((employee) => (
        <Employee
          employee={employee}
          odd={++count % 2 == 0}
          key={employee.id}
        />
      ))}
    </>
  );
};

// This page should be server side rendered, as the content is dynamic.
export default withUrqlClient(createUrqlClient, { ssr: true })(Employees);
