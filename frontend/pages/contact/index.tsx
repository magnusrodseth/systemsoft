import Wrapper from "components/Wrapper";
import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import createUrqlClient from "utils/createUrqlClient";
import { ErrorMessage, Field, Form, Formik } from "formik";
import classNames from "utils/classNames";
import { ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/solid";

interface ContactProps {}

interface APIResponse {
  success: boolean;
  description: string;
  messageId: string;
}

const Contact: React.FC<ContactProps> = ({}) => {
  const [status, setStatus] = useState<APIResponse>();

  return (
    <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-auto">
      <Wrapper className="lg:col-span-3 lg:col-start-2 md:col-span-3 md:col-start-2 sm:col-start-2 sm:col-span-2">
        <h1 className="text-center text-2xl">Contact us</h1>
      </Wrapper>
      <Wrapper className="lg:col-span-3 lg:col-start-2 md:col-span-3 md:col-start-2 sm:col-start-2 sm:col-span-2">
        <Formik
          initialValues={{ fullName: "", email: "", phone: "", message: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              console.log("sending");

              const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              });

              response.text().then((res) => {
                setStatus(JSON.parse(res));
              });

              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, isSubmitting }) => (
            <Form className="grid gap-3">
              {status ? (
                <div className="form-group">
                  <div
                    className={classNames(
                      status?.success ? "bg-green-600" : "bg-red-600",
                      "rounded p-4 text-white flex"
                    )}
                  >
                    {status?.success ? (
                      <CheckCircleIcon className="w-5" />
                    ) : (
                      <ExclamationCircleIcon className="w-5" />
                    )}{" "}
                    <span className="ml-3">{status.description}</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="form-group">
                <label
                  htmlFor="fullName"
                  className={classNames(
                    "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  )}
                >
                  Full Name
                </label>
                <Field
                  name="fullName"
                  type="text"
                  className={classNames(
                    "appearance-none block w-full text-gray-700 border",
                    "rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  )}
                  placeholder="John Doe"
                />
                <ErrorMessage
                  name="fullName"
                  component="span"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Email Address
                </label>
                <Field
                  name="email"
                  type="email"
                  className={classNames(
                    "appearance-none block w-full text-gray-700 border rounded",
                    "py-3 px-4 leading-tight focus:outline-none",
                    "focus:bg-white focus:border-gray-500"
                  )}
                  placeholder="john@example.com"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="phone"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Phone
                </label>
                <Field
                  name="phone"
                  type="text"
                  className={classNames(
                    "appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  )}
                  placeholder="+47 12345678"
                />
                <ErrorMessage
                  name="phone"
                  component="span"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="message"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Message
                </label>
                <Field
                  name="message"
                  as="textarea"
                  type="text"
                  className={classNames(
                    "appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  )}
                />
                <ErrorMessage
                  name="message"
                  component="span"
                  className="text-red-500 text-xs"
                />
              </div>

              <button
                type="submit"
                className="transition transform ease-in-out duration-500 flex text-center justify-center items-center bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-white"
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </div>
  );
};

// This page does not need to be server side rendered, as the content is quite static.
export default withUrqlClient(createUrqlClient, { ssr: false })(Contact);
