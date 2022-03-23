import React from "react";

export default function InputComponent({ type = "text", ...props }) {
  return (
    <input
      type={type}
      {...props}
      className="w-full rounded-xl border-gray-300 shadow-sm  focus:ring focus:ring-blue-100 focus:border-blue-400 transition duration-200"
      // className="border px-4 py-2 rounded-xl shadow-sm w-full focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-500 transition duration-200"
    />
  );
}
