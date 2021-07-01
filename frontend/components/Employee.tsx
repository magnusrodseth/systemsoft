import { Employees } from "generated/graphql";
import Link from "next/link";
import React from "react";
import classNames from "utils/classNames";
import Wrapper from "./Wrapper";

interface EmployeeProps {
  employee: Employees;
}

const Employee: React.FC<EmployeeProps> = ({ employee }) => {
  const resumeURL = `/employees/${employee.slug}`;

  return (
    <Wrapper
      className={classNames(
        "flex md:odd:flex-row-reverse md:even:flex-row bg-gray-200",
        "h-full md:justify-between my-8 mx-5 max-w-7xl md:mx-auto",
        "flex-col justify-center items-center"
      )}
    >
      <Wrapper
        className={classNames(
          "bg-white md:w-1/2 h-10/12 w-full flex flex-col justify-center items-center"
        )}
      >
        <h1 className="text-2xl mt-6 font-bold uppercase text-gray-700">
          {employee.name}
        </h1>
        <Link href={resumeURL}>
          <a>
            <div
              className={classNames(
                "my-6 text-blue-600 bg-gray-100 font-bold tracking-wide",
                "py-2 px-4 hover:border-transparent rounded",
                "hover:-translate-y-1 shadow-md hover:shadow-lg",
                "transition transform duration-500 ease-in-out uppercase text-center"
              )}
            >
              Resume
            </div>
          </a>
        </Link>
      </Wrapper>
      <Wrapper
        className={classNames(
          "bg-white md:w-1/2 h-full w-full flex flex-col justify-center items-center p-10"
        )}
      >
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
              <td>
                <Link href={`mailto:${employee.email as string}`}>
                  <a className="flex text-blue-600">{employee.email}</a>
                </Link>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </Wrapper>
    </Wrapper>
  );
};

export default Employee;
