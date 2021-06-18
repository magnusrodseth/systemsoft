import React from "react";
import { ComponentResumeCourse as ICourse } from "generated/graphql";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface CourseProps {
  courses: ICourse[];
}

const Course: React.FC<CourseProps> = ({ courses }: CourseProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-yellow-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Courses 📚
        </h1>

        {courses.map((course) => (
          <Wrapper className="bg-gray-200 flex flex-row space-x-6">
            {/* Date */}

            {course.start || course.location ? (
              <Wrapper className="bg-blue-200 flex flex-col space-y-3">
                {course.start ? (
                  <div className="flex flex-col">
                    {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
                    <p>From: {course.start.split("-")[0]}</p>
                    <p>To: {course.end ? course.end.split("-")[0] : "Now"}</p>
                  </div>
                ) : null}

                {course.location ? (
                  <div className="flex flex-row">
                    <LocationMarkerIcon className="block h-6 w-6" />
                    <p>{course.location}</p>
                  </div>
                ) : null}
              </Wrapper>
            ) : null}

            {/* Information */}
            <Wrapper className="bg-green-200">
              <h1 className="text-xl font-bold tracking-wide">
                {course.title}
              </h1>

              {course.institution ? (
                <div className={classNames("flex flex-row space-x-4")}>
                  <h2 className="font-semibold tracking-wide">
                    {course.institution}{" "}
                  </h2>
                </div>
              ) : null}

              {course.description ? (
                <div className="mx-10">
                  <p>{course.description}</p>
                </div>
              ) : null}
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};

export default Course;
