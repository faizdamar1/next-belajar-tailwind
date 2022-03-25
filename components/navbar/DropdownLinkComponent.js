import { Menu } from "@headlessui/react";
import Link from "next/link";
import React from "react";

export default function DropdownLinkComponent({ children, href }) {
  return (
    <div>
      <Menu.Item>
        <Link href={href}>
          <a className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block">
            {children}
          </a>
        </Link>
      </Menu.Item>
    </div>
  );
}
