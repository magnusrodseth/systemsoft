import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import Markdown from "components/Markdown";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import classNames from "utils/classNames";
import { Clients as IClients } from "../../generated/graphql";

interface CarouselProps {
  clients: IClients[];
}

const Carousel: React.FC<CarouselProps> = ({ clients }: CarouselProps) => {
  const [currentClient, setCurrentClient] = useState<IClients>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const decrementIndex = () => {
    const nextIndex =
      currentIndex - 1 == -1 ? clients.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const incrementIndex = () => {
    const nextIndex = currentIndex + 1 == clients.length ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const handleCounter = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setCurrentClient(clients[currentIndex]);
  });

  return (
    <div className="flex flex-row items-center justify-center relative h-full">
      <button className="focus:outline-none">
        <ArrowCircleLeftIcon
          className="w-10 h-10 text-white hover:-translate-y-1 transform transition duration-500 ease-in-out left-5 hover:cursor-pointer"
          onClick={decrementIndex}
        />
      </button>

      {currentClient ? (
        <div
          className={classNames(
            "flex flex-col justify-center items-center flex-auto"
          )}
        >
          <div
            key={currentClient.id}
            className={classNames(
              "flex justify-center items-center flex-col space-y-5",
              "w-7/12"
            )}
          >
            <h1 className={classNames("text-center text-3xl font-bold")}>
              {currentClient.name}
            </h1>

            <Markdown
              strip
              className={classNames(
                "text-center text-sm md:text-md"
              )}
            >{`${currentClient.description.substring(0, 200)}...`}</Markdown>

            <Link href={`/clients/${currentClient.slug}`}>
              <button
                className={classNames(
                  "border-blue-500 focus:outline-none border-2 hover:bg-blue-500 hover:text-white",
                  "transition transform ease-in-out duration-500",
                  "tracking-wide font-mono text-blue-600 py-2 px-4 rounded uppercase"
                )}
              >
                Read more
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center relative h-full w-full">
          <div className="text-xl font-mono">Nothing to show here</div>
        </div>
      )}

      <button className="focus:outline-none">
        <ArrowCircleRightIcon
          className={classNames(
            "w-10 h-10 text-white  right-5",
            "hover:cursor-pointer",
            "hover:-translate-y-1 transform transition duration-500 ease-in-out"
          )}
          onClick={incrementIndex}
        />
      </button>
      <div className="absolute bottom-3">
        {/* Counter */}
        <div className="flex flex-row justify-center items-center space-x-6">
          {clients.map((client, index) => {
            const borderColor =
              index == currentIndex ? "border-gray-800" : "border-gray-400";

            return (
              <div
                className={classNames(
                  "rounded-full h-5 w-5 bg-opacity-0 border-2",
                  "hover:cursor-pointer",
                  borderColor
                )}
                onClick={() => {
                  handleCounter(index);
                }}
                key={client.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
