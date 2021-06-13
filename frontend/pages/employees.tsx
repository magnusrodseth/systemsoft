import Wrapper from "components/Wrapper";
import { useEmployeesQuery } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";
import createUrqlClient from "../utils/createUrqlClient";

interface EmployeesProps {}

const Employees: React.FC<EmployeesProps> = ({}) => {
  // This hook returns a tuple of the shape [result, executeQuery].
  // Only the result is interesting. Thus, we use an underscore.
  const [result, _] = useEmployeesQuery();

  const { data, fetching, error } = result;

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="grid gap-6 grid-cols-3">
      <Wrapper className="col-start-2 bg-yellow-200">
        <h1 className="text-center text-2xl">
          {fetching ? (
            <h1>Fetching...</h1>
          ) : (
            data?.employees?.map((employee) => {
              <p>employee.name</p>;
            })
          )}
        </h1>
      </Wrapper>
    </div>
  );
};

// This page should be server side rendered, as the content is dynamic.
export default withUrqlClient(createUrqlClient, { ssr: true })(Employees);
