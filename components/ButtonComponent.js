import React from "react";

export default function ButtonComponent({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`${
        className ? className : "bg-blue-600 hover:bg-blue-700 ring-blue-200 "
      } border px-6 py-2.5 text-sm font-medium transition duration-300 rounded-xl text-white ring-2 hover:ring-4`}
    >
      {children}
    </button>
  );
}
