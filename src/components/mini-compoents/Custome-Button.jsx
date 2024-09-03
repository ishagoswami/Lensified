// src/CustomButton.js

import React from "react";
import { NavLink } from "react-router-dom";

const CustomButton = ({ children, to, className = "" }) => {
  return (
    <NavLink
      to={to}
      className={`bg-blue-300 rounded-3xl text-white font-semibold py-2 px-4 shadow-md transition-transform transform hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
    >
      {children}
    </NavLink>
  );
};

export default CustomButton;
