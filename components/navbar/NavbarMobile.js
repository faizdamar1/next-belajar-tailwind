import React from "react";
import ResNavlinkComponent from "./ResNavlinkComponent";
import { Menu } from "@headlessui/react";
import LineComponent from "../LineComponent";
import TransitionComponent from "../TransitionComponent";

export default function NavbarMobile() {
  const auth = {
    check: false,
    user: {
      name: "Faiz D. Hernanda",
    },
  };

  return (
    <div>
      <Menu
        as={"div"}
        className="md:hidden flex items-center justify-between py-2.5 px-4 border-b border-gray-700"
      >
        <a href="#" className="text-white font-medium uppercase">
          Brand
        </a>

        <Menu.Button className="focus:outline-none">
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
        </Menu.Button>
        <TransitionComponent>
          <Menu.Items
            as={"div"}
            className="shadow-sm border bg-white absolute right-0 mr-11 top-0 mt-4 py-1 rounded w-56 overflow-hidden "
          >
            <ResNavlinkComponent href="#">Home</ResNavlinkComponent>
            <ResNavlinkComponent href="/article">Articles</ResNavlinkComponent>
            <ResNavlinkComponent href="/gallery">Gallery</ResNavlinkComponent>
            <ResNavlinkComponent href="/about">About</ResNavlinkComponent>
            <ResNavlinkComponent href="/contact">Contact</ResNavlinkComponent>
            <LineComponent />

            {auth.check ? (
              <>
                <ResNavlinkComponent href="#">Dashboard</ResNavlinkComponent>
                <LineComponent />
                <ResNavlinkComponent href="#">
                  {auth.user.name}
                </ResNavlinkComponent>
                <ResNavlinkComponent href="#">
                  Account Setting
                </ResNavlinkComponent>
                <LineComponent />
                <ResNavlinkComponent href="#">Help</ResNavlinkComponent>
                <LineComponent />
                <ResNavlinkComponent href="#">Logout</ResNavlinkComponent>
              </>
            ) : (
              <>
                <ResNavlinkComponent href="/login">Sign In</ResNavlinkComponent>
                <ResNavlinkComponent href="/register">
                  Sign Up
                </ResNavlinkComponent>
              </>
            )}
          </Menu.Items>
        </TransitionComponent>
      </Menu>
    </div>
  );
}
