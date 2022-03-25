import React, { useState } from "react";
import ResNavlinkComponent from "./ResNavlinkComponent";

export default function NavlinkMComponent() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="md:hidden flex items-center justify-between py-2.5 px-4 border-b border-gray-700">
        <a href="#" className="text-white font-medium uppercase">
          Brand
        </a>

        <div
          onClick={() => {
            setOpen(false);
          }}
          className={`${
            isOpen ? "block" : "hidden"
          } bg-transparent absolute w-full h-full inset-0`}
        ></div>
        <button
          onClick={() => {
            setOpen(!isOpen);
          }}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-white absolute right-0 mr-11 top-0 mt-4 py-1 rounded w-56 overflow-hidden `}
        >
          <ResNavlinkComponent href="#">Home</ResNavlinkComponent>
          <ResNavlinkComponent href="#">Articles</ResNavlinkComponent>
          <ResNavlinkComponent href="#">Gallery</ResNavlinkComponent>
          <ResNavlinkComponent href="#">About</ResNavlinkComponent>
          <ResNavlinkComponent href="#">Contact</ResNavlinkComponent>
          <div className="w-full h-px bg-gray-300 my-1"></div>
          <ResNavlinkComponent href="#">Sign In</ResNavlinkComponent>
          <ResNavlinkComponent href="#">Sign Up</ResNavlinkComponent>
        </div>
      </div>
    </div>
  );
}
