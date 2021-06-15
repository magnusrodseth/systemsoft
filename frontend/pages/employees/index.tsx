import Fetching from "components/Fetching";
import Wrapper from "components/Wrapper";
import { useEmployeesQuery } from "generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";
import createUrqlClient from "../../utils/createUrqlClient";

interface EmployeesProps {}

const Employees: React.FC<EmployeesProps> = ({}) => {
  // This hook returns a tuple of the shape [result, executeQuery].
  // Only the result is interesting. Thus, we use an underscore.
  const [result, _] = useEmployeesQuery();

  const { data, fetching, error } = result;

  return (
    <div className="grid gap-6 grid-cols-3">
      {error ? (
        <Wrapper className="col-start-2 bg-red-300">shid</Wrapper>
      ) : null}

      <Wrapper className="col-start-2 bg-yellow-200">
        {fetching ? (
          <Fetching />
        ) : (
          <div>
            {data?.employees?.map((employee) => (
              <p>{employee?.email}</p>
            ))}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

// This page should be server side rendered, as the content is dynamic.
export default withUrqlClient(createUrqlClient, { ssr: true })(Employees);
