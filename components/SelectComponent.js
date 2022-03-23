import React from "react";

export default function SelectComponent({ children, ...props }) {
  return (
    <select
      {...props}
      className="w-full rounded-xl border-gray-300 shadow-sm  focus:ring focus:ring-blue-100 focus:border-blue-400 transition duration-200"
    >
      {children}
    </select>
  );
}
