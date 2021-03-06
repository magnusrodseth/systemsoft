import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import classNames from "../utils/classNames";
import Link from "next/link";

const navigation = [
  { name: "Clients", href: "/clients" },
  { name: "Services", href: "/services" },
  { name: "Employees", href: "/employees" },
  { name: "Contact", href: "/contact" },
];

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-100 shadow-lg font-mono text-center fixed top-0 w-screen z-50"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className={classNames(
                    "inline-flex items-center justify-center p-2 rounded-md hover:text-blue-500",
                    "transition transform duration-500 ease-in-out focus:outline-none ring-2 ring-inset ring-white"
                  )}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a aria-label="Home">
                      <img
                        className={classNames(
                          "lg:block h-8 w-8",
                          "transition duration-500 ease-in-out transform",
                          "hover:-translate-y-1 hover:scale-101"
                        )}
                        src="/favicon.png"
                        alt="SystemSoft AS Logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6 z-50">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "hover:bg-gray-300",
                          "px-3 py-2 rounded-md text-sm font-medium",
                          "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    "hover:bg-gray-300",
                    "block px-3 py-2 rounded-md text-base font-medium",
                    "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
