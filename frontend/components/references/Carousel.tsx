import { LOCAL_BACKEND_URL } from "../../constants";
import { Maybe, UploadFile } from "generated/graphql";
import React, { useState } from "react";
import classNames from "utils/classNames";

interface CarouselProps {
  titles?: String[];
  images: Maybe<UploadFile>[];
}

const Carousel: React.FC<CarouselProps> = ({ images, titles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // TODO: Arrow component
  return (
    <div
      className="flex flex-col items-center justify-center relative h-96 bg-cover bg-center"
      style={{
        backgroundImage: `url(${LOCAL_BACKEND_URL}${images[currentIndex]?.url})`,
      }}
    >
      <div>
        <h1
          className={classNames(
            "text-center text-5xl font-bold text-white bg-black-100"
          )}
        >
          {titles && titles[currentIndex] ? titles[currentIndex] : ""}
        </h1>
      </div>
      <div
        className="absolute w-10 h-10 bg-green-200 left-5 hover:cursor-pointer"
        onClick={decrementIndex}
      />

      <div
        className={classNames(
          "absolute w-10 h-10 bg-green-200 right-5",
          "hover:cursor-pointer"
        )}
        onClick={incrementIndex}
      />
      {images[currentIndex]?.caption ? (
        <div className="absolute w-screen h-15 bottom-0 text-center bg-gradient-to-t from-black to-transparent bg-opacity-50">
          <p className="text-white m-1">
            {images[currentIndex]?.caption || ""}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Carousel;
