import Link from "next/link";
import classNames from "utils/classNames";
import { ArrowSmLeftIcon } from "@heroicons/react/outline";

const Custom404 = () => {
  return (
    <div
      className={classNames(
        "flex justify-center items-center flex-col h-screen",
        "bg-404 bg-cover bg-center"
      )}
    >
      <div className="flex flex-row mb-5">
        <h1 className="mr-2 text-3xl">
          404 <span className="m-2 text-4xl">|</span> Page Not Found
        </h1>
      </div>
      <h2
        className={classNames(
          "text-blue-600 transition transform duration-500 ease-in-out",
          "hover:-translate-x-1 hover:scale-101",
          "uppercase font-bold text-sm"
        )}
      >
        <Link href={"/"}>
          <a className="flex items-center">
            <ArrowSmLeftIcon className="w-7" />
            Back to homepage
          </a>
        </Link>
      </h2>
    </div>
  );
};

export default Custom404;
