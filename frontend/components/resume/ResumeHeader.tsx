import React from "react";
import { ComponentResumePersonalInformation as IPersonalInformation } from "generated/graphql";
import classNames from "utils/classNames";

interface ResumeHeaderProps {
  data: IPersonalInformation;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  data,
}: ResumeHeaderProps) => {
  return (
    <div className="mt-8">
      {data.profilePicture?.url ? (
        <div
          className={classNames(
            "grid lg:grid-cols-3 md:grid-cols-1 gap-6 items-center"
          )}
        >
          <h1
            className={classNames(
              "lg:col-start-1 lg:col-span-2",
              "lg:text-8xl md:text-4xl sm:text-4xl mt-6 tracking-widest",
              "font-extrabold uppercase text-transparent",
              "bg-clip-text bg-gradient-to-r from-blue-600 to-purple-900 text-center"
            )}
          >
            {data.fullName}
          </h1>

          <div className={classNames("lg:col-start-3", "flex justify-center")}>
            <img
              src={`http://localhost:1337${data.profilePicture.url}`}
              alt="Profile picture"
              className={classNames(
                "rounded-lg shadow-md hover:shadow-lg",
                "transition duration-500 ease-in-out transform",
                "hover:-translate-y-1 hover:scale-101 p-2 bg-white"
              )}
            />
          </div>
        </div>
      ) : (
        <h1
          className={classNames(
            "lg:text-8xl md:text-4xl sm:text-2xl mt-6 tracking-widest",
            "font-extrabold uppercase text-transparent",
            "bg-clip-text bg-gradient-to-r from-blue-600 to-purple-900 text-center"
          )}
        >
          {data.fullName}
        </h1>
      )}
    </div>
  );
};

export default ResumeHeader;
