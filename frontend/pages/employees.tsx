import Wrapper from "components/Wrapper";
import React from "react";

interface EmployeesProps {}

const Employees: React.FC<EmployeesProps> = ({}) => {
  return (
    <div className="grid gap-6 grid-cols-3">
      <Wrapper className="col-start-2 bg-yellow-200">
        <h1 className="text-center text-2xl">Employees</h1>
      </Wrapper>
    </div>
  );
};

export default Employees;
