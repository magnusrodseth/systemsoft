import Carousel from "components/references/Carousel";
import { References } from "generated/graphql";
import React from "react";
import classNames from "utils/classNames";

interface ReferenceArticleProps {
  reference: References;
}

const ReferenceArticle: React.FC<ReferenceArticleProps> = ({ reference }) => {
  return (
    <div className="">
      {reference.images ? (
        <Carousel images={reference.images} titles={["Hei"]} />
      ) : (
        ""
      )}

      <h1
        className={classNames(
          "lg:text-8xl md:text-2xl sm:text-2xl mt-6 tracking-widest",
          "font-extrabold uppercase text-transparent",
          "bg-clip-text bg-gradient-to-r from-blue-600 to-purple-900 text-center mb-6"
        )}
      >
        {reference.title}
      </h1>
    </div>
  );
};

export default ReferenceArticle;
