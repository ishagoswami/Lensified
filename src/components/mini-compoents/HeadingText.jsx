import React from "react";

function HeadingText({first, second}) {
  return (
    <h1 className="text-4xl font-bold text-black my-10">
      <span className="text-black">{first} </span>
      <span className="text-blue-600">{second}</span>
    </h1>
  );
}

export default HeadingText;
