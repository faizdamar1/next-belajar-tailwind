import Link from "next/link";
import React from "react";

export default function ResNavlinkComponent({ children, ...props }) {
  return (
    <div>
      <Link {...props}>
        <a className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block">
          {children}
        </a>
      </Link>
    </div>
  );
}
