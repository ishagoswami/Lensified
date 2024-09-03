// src/components/RoundedProfileCard.jsx

import React from "react";

const RoundedProfileCard = ({ imageSrc, name, designation }) => {
  return (
    <div className="relative w-64 h-64 group overflow-hidden rounded-full shadow-lg">
      {/* Image */}
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
      />
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <h2 className="text-white text-lg font-bold">{name}</h2>
        <p className="text-gray-300">{designation}</p>
      </div>
    </div>
  );
};

export default RoundedProfileCard;
