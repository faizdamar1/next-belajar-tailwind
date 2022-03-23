import React from "react";

export default function LabelComponent({ forInput, children }) {
  return (
    <label
      className="block text-gray-700 mb-1 capitalize"
      htmlFor={forInput}
    >
      {children}
    </label>
  );
}
