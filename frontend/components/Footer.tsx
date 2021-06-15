import {
  useContactInformationQuery,
  ContactInformation as IContactInformation,
} from "generated/graphql";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import React from "react";
import createUrqlClient from "utils/createUrqlClient";
import { PhoneIcon, MailIcon } from "@heroicons/react/outline";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";
import classNames from "utils/classNames";
import Image from "next/image";

// Note: This is not actually a syntax error.
// It is just TypeScript not being able to recognize Next JS 11 features
import favicon from "../public/favicon.png";

const Footer: React.FC<WithUrqlProps> = () => {
  const [result, _] = useContactInformationQuery();

  const { data } = result;

  const info = data?.contactInformation as IContactInformation;

  if (info) {
    const { address, zipCode, city, country, phoneNumber, email, linkedin } =
      info;

    return (
      <footer>
        <div className="bg-[#050552] grid sm:grid-cols-2 gap-6 text-white text-center py-10">
          <div className="p-0 m-5">
            <Image
              className={classNames(
                "block m-auto h-8 w-auto",
                "transition duration-500 ease-in-out transform",
                "hover:-translate-y-1 hover:scale-101"
              )}
              src={favicon}
              alt="SystemSoft AS Logo"
              width="35px"
              height="35px"
            />
            <div className="grid gap-1 mt-2">
              <p className="font-bold text-base">Postal and office address</p>
              <p>{address}</p>
              <p>{`${zipCode} ${city}`}</p>
              <p>{country}</p>
            </div>
          </div>
          <div className="p-0 m-6">
            <h1 className="text-2xl">Contact</h1>
            <div className="grid gap-2 mt-5">
              <p
                className={classNames(
                  "flex justify-center transition",
                  "transform duration-500 ease-in-out",
                  "hover:-translate-y-1 hover:scale-101"
                )}
              >
                <Link href={`tel:${phoneNumber as string}`}>
                  <a className="flex">
                    <PhoneIcon className="w-5 mr-2" />
                    {phoneNumber}
                  </a>
                </Link>
              </p>
              <p
                className={classNames(
                  "flex justify-center transition",
                  "transform duration-500 ease-in-out",
                  "hover:-translate-y-1 hover:scale-101"
                )}
              >
                <Link href={`mailto:${email as string}`}>
                  <a className="flex">
                    <MailIcon className="w-5 mr-2" />
                    {email}
                  </a>
                </Link>
              </p>
              <p
                className={classNames(
                  "flex justify-center transition",
                  "transform duration-500 ease-in-out",
                  "hover:-translate-y-1 hover:scale-101"
                )}
              >
                <Link href={linkedin as string}>
                  <a className="flex">
                    <AiOutlineLinkedin className="h-6 w-5 mr-2" />
                    LinkedIn
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  return <></>;
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Footer);
