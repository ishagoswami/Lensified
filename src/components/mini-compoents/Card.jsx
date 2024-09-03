// src/components/Card.jsx

import React from "react";
import HeadingText from "./HeadingText";

const Card = ({ titleFirst, titleSecond, description, imageSrc, children }) => {
  return (
    <>
      <div className="flex my-10 max-w-4xl mx-auto rounded-lg overflow-hidden bg-transparent hover:shadow-xl transition-shadow duration-300">
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4"><HeadingText first={titleFirst} second={titleSecond}/></h2>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>

          {children && <div className="mt-4">{children}</div>}
        </div>
        <div className="flex-shrink-0 flex items-center mx-5">
          <img
            src={imageSrc}
            alt={titleFirst + ' ' + titleSecond}
            className="w-64 h-64 rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
