import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

interface ErrorProps {
  message?: string;
  error?: any;
}

const Error: React.FC<ErrorProps> = ({ message, error }) => {
  { error ? console.log(error) : null}
  return (
    <div className="min-h-container mt-20 flex justify-center items-center">
      <div className="flex divide-x-2 divide-red-600">
        <ExclamationCircleIcon className="w-9 text-red-500" />
        <p className="text-red-600 leading-loose ml-2 pl-2">
          {message || "An error has occurred. Please try again later!"}
        </p>
      </div>
    </div>
  );
};

export default Error;
