import { LOCAL_BACKEND_URL } from "../../constants";
import { Maybe, UploadFile } from "generated/graphql";
import React, { useState } from "react";
import classNames from "utils/classNames";
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/outline";

interface CarouselProps {
  titles?: String[];
  images: Maybe<UploadFile>[];
}

const Carousel: React.FC<CarouselProps> = ({ images, titles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderLength = images.length;
  const sliderMap = Array(sliderLength).fill(0);

  // const images = reference.images;
  const decrementIndex = () => {
    const nextIndex =
      currentIndex - 1 == -1 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const incrementIndex = () => {
    const nextIndex = currentIndex + 1 == images.length ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const handleCounter = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="flex flex-col items-center justify-center relative h-96 bg-cover bg-center"
      style={{
        backgroundImage: `url(${LOCAL_BACKEND_URL}${images[currentIndex]?.url})`,
      }}
    >
      <div
        className={classNames(
          "transition duration-500 ease-in-out transform",
          "hover:-translate-y-1",
          "bg-gray-800 backdrop-filter backdrop-blur-[2px] hover:backdrop-blur-sm	px-24 py-5 bg-opacity-60 rounded-lg shadow-md hover:shadow-lg"
        )}
      >
        <h1
          className={classNames(
            "text-center text-5xl font-bold text-white bg-black-100"
          )}
        >
          {images[currentIndex]?.name ? images[currentIndex]?.name : ""}
        </h1>
        {images[currentIndex]?.caption ? (
          <p className="text-white m-1">
            {images[currentIndex]?.caption || ""}
          </p>
        ) : null}
      </div>
      <ArrowCircleLeftIcon
        className="absolute w-10 h-10 text-white  left-5 hover:cursor-pointer"
        onClick={decrementIndex}
      />

      <ArrowCircleRightIcon
        className={classNames(
          "absolute w-10 h-10 text-white  right-5",
          "hover:cursor-pointer"
        )}
        onClick={incrementIndex}
      />

      {/* Counter */}
      <div className="flex flex-row justify-center items-center space-x-6">
        <div
          className={classNames(
            "absolute w-screen h-20 bottom-0 text-center",
            "bg-gradient-to-t from-gray-800 to-transparent bg-opacity-50",
            "flex justify-center"
          )}
        >
          <div className="flex absolute bottom-2 gap-3">
            {sliderMap.map((slide, index) => {
              const borderColor =
                index == currentIndex ? "border-white" : "border-gray-400";

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
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
