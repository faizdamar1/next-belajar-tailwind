import Link from "next/link";
import React from "react";

export default function NavlinkComponent({ className, children, ...props }) {
  return (
    <div>
      <Link {...props}>
        <a
          className={`${
            className ? className : ""
          } md:text-sm font-medium px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg`}
        >
          {children}
        </a>
      </Link>
    </div>
  );
}
