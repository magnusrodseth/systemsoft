import { Employees } from "generated/graphql";
import React from "react";
import Wrapper from "./Wrapper";

interface EmployeeProps {
  employee: Employees;
  odd: boolean;
}

const Employee: React.FC<EmployeeProps> = ({ employee, odd }) => {
  return (
    <>
      <Wrapper className="grid mb-6 sm:grid-cols-2 sm:h-72 h-96 bg-blue-500 max-w-6xl sm:ml-auto sm:mr-auto">
        {odd ? (
          <Wrapper className="flex justify-center items-center sm:h-auto h-56 bg-white sm:hidden flex">
            <h1 className="text-2xl font-bold uppercase text-gray-700">
              {employee.name}
            </h1>
          </Wrapper>
        ) : (
          <Wrapper className="flex justify-center items-center sm:h-auto h-56 bg-white">
            <h1 className="text-2xl font-bold uppercase text-gray-700">
              {employee.name}
            </h1>
          </Wrapper>
        )}
        <Wrapper className="flex justify-center items-center bg-white">
          <table className="table-auto w-full text-left divide-y">
            <thead className="">
              <tr className="hover:bg-[#f5f5f5]">
                <th className="p-2">Title</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#f5f5f5]">
                <td className="p-2">{employee.title}</td>
                <td>{employee.email}</td>
              </tr>
            </tbody>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </Wrapper>
        {odd ? (
          <Wrapper className="flex justify-center items-center sm:h-auto h-56 bg-white sm:flex hidden">
            <h1 className="text-2xl font-bold uppercase text-gray-700">
              {employee.name}
            </h1>
          </Wrapper>
        ) : (
          ""
        )}
      </Wrapper>
    </>
  );
};

export default Employee;
