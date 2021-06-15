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

  // TODO: Arrow component
  return (
    <div className="flex flex-row items-center justify-center relative h-full">
      <div
        className="absolute w-10 h-10 bg-green-200 left-5 hover:cursor-pointer"
        onClick={decrementIndex}
      />

      {currentClient ? (
        <div
          className={classNames("flex flex-col justify-center items-center")}
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

            <p
              className={classNames(
                "text-center lg:text-md md:text-sm sm:text-sm"
              )}
            >{`${currentClient.description.substring(0, 200)}...`}</p>

            <button
              className={classNames(
                "border-blue-500 focus:outline-none border-2 hover:bg-blue-500 hover:text-white",
                "transition transform ease-in-out duration-500",
                "tracking-wide font-mono text-blue-600 py-2 px-4 rounded uppercase"
              )}
            >
              Read more
            </button>

            {/* Counter */}
            <div className="flex flex-row justify-center items-center space-x-6">
              {clients.map((_, index) => {
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
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>Fitting error message when client is undefined</div>
      )}

      <div
        className={classNames(
          "absolute w-10 h-10 bg-green-200 right-5",
          "hover:cursor-pointer"
        )}
        onClick={incrementIndex}
      />
    </div>
  );
};

export default Carousel;
