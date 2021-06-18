import { Employees } from "generated/graphql";
import Link from "next/link";
import React from "react";
import classNames from "utils/classNames";
import Wrapper from "./Wrapper";

interface EmployeeProps {
  employee: Employees;
  odd: boolean;
}

const Employee: React.FC<EmployeeProps> = ({ employee, odd }) => {
  const resumeURL = `/employees/${employee.slug}`;

  return (
    <>
      <Wrapper className="grid mb-6 sm:grid-cols-2 sm:h-72 h-96 bg-gray-300 max-w-6xl sm:ml-auto sm:mr-auto">
        {odd ? (
          <Wrapper className="flex justify-center items-center sm:h-auto h-56 bg-white sm:hidden">
            <h1 className="text-2xl font-bold uppercase text-gray-700">
              {employee.name}
            </h1>
            <Link href={resumeURL}>
              <a>
                <div
                  className={classNames(
                    "mt-10 text-blue-600 bg-gray-100 font-bold tracking-wide",
                    "py-2 px-4 hover:border-transparent rounded",
                    "hover:-translate-y-1 hover:scale-101",
                    "shadow-md hover:shadow-lg",
                    "transition transform duration-500 ease-in-out uppercase"
                  )}
                >
                  Resume
                </div>
              </a>
            </Link>
          </Wrapper>
        ) : (
          <Wrapper className="flex justify-center flex-col items-center sm:h-auto h-56 bg-white">
            <h1 className="text-2xl font-bold uppercase text-blue-700">
              {employee.name}
            </h1>
            <Link href={resumeURL}>
              <a>
                <div
                  className={classNames(
                    "mt-10 text-blue-600 bg-gray-100 font-bold tracking-wide",
                    "py-2 px-4 hover:border-transparent rounded",
                    "hover:-translate-y-1 hover:scale-101",
                    "shadow-md hover:shadow-lg",
                    "transition transform duration-500 ease-in-out uppercase"
                  )}
                >
                  Resume
                </div>
              </a>
            </Link>
          </Wrapper>
        )}
        <Wrapper className="flex justify-center items-center bg-white">
          <table className="table-auto w-full text-left divide-y">
            <thead className="">
              <tr
                className={classNames(
                  "hover:bg-gray-200 transition transform duration-500 ease-in-out"
                )}
              >
                <th className="p-2">Title</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr
                className={classNames(
                  "hover:bg-gray-200 transition transform duration-500 ease-in-out"
                )}
              >
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
          <Wrapper className="flex justify-center flex-col items-center sm:h-auto h-56 bg-white sm:flex">
            <h1 className="text-2xl font-bold uppercase text-blue-700">
              {employee.name}
            </h1>
            <Link href={resumeURL}>
              <a>
                <div
                  className={classNames(
                    "mt-10 text-blue-600 bg-gray-100 font-bold tracking-wide",
                    "py-2 px-4 hover:border-transparent rounded",
                    "hover:-translate-y-1 hover:scale-101",
                    "shadow-md hover:shadow-lg",
                    "transition transform duration-500 ease-in-out uppercase"
                  )}
                >
                  Resume
                </div>
              </a>
            </Link>
          </Wrapper>
        ) : (
          ""
        )}
      </Wrapper>
    </>
  );
};

export default Employee;
