import React from "react";

export default function CheckComponent({ htmlFor, label, ...props }) {
  return (
    <div className="flex items-center gap-x-2">
      <input
        {...props}
        type="checkbox"
        className="accent-sky-500 mr-2 rounded-sm border-2 border-blue-500 focus:ring-0"
      />
      <label className="select-none" htmlFor={htmlFor}>{label}</label>
    </div>
  );
}
