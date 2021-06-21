import React from "react";
import { ComponentResumeCourse as ICourse } from "generated/graphql";
import {
  ArrowRightIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Wrapper from "components/Wrapper";
import classNames from "utils/classNames";

interface CourseProps {
  courses: ICourse[];
}

const Course: React.FC<CourseProps> = ({ courses }: CourseProps) => {
  return (
    <div className="w-screen flex justify-center">
      <Wrapper className={classNames("w-3/4 bg-gray-200")}>
        <h1
          className={classNames(
            "font-mono font-bold p-4 text-3xl tracking-wide"
          )}
        >
          Courses 📚
        </h1>

        {courses.map((course) => (
          <Wrapper className="bg-white flex flex-col">
            {/* Date */}

            {course.start || course.location ? (
              <div className="flex justify-center items-center font-semibold text-lg">
                {course.start ? (
                  <div className="flex justify-center items-center">
                    <CalendarIcon className="block w-6 h-6 mb-0.5 mr-2" />
                    {/* Note that defined dates will always have the fomrat yyyy-mm-dd */}
                    <span className="flex flex-row sm:my-4 items-center">
                      {course.start.split("-")[0]}
                      <ArrowRightIcon className="block h-4 w-4 mx-2" />
                      {course.end ? course.end.split("-")[0] : "now"}
                    </span>
                  </div>
                ) : null}
                {course.location ? (
                  <div className="flex flex-row space-2 m-4">
                    <LocationMarkerIcon className="block h-6 w-6 mr-2" />
                    <p>{course.location}</p>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Information */}
            <Wrapper className="bg-gray-50">
              <div>
                <span className="text-xl font-bold tracking-wide">
                  {course.title}
                </span>
                <span className="font-semibold tracking-wide">
                  , issued by {course.institution}
                </span>
              </div>

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
