import { ArrowSmLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import classNames from "utils/classNames";

interface ReturnButtonProps {
  name: string;
  link: string;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ name, link }) => {
  return (
    <>
      <h2
        className={classNames(
          "text-blue-600 transition transform duration-500 ease-in-out",
          "hover:-translate-x-1 hover:scale-101",
          "uppercase font-bold text-sm mt-5"
        )}
      >
        <Link href={`/${link}`}>
          <a className="flex items-center">
            <ArrowSmLeftIcon className="w-7" />
            Back to {name}
          </a>
        </Link>
      </h2>
    </>
  );
};

export default ReturnButton;
