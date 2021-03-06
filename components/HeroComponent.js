import { Menu } from "@headlessui/react";
import React from "react";
import LineComponent from "./LineComponent";
import DropdownLinkComponent from "./navbar/DropdownLinkComponent";
import NavlinkComponent from "./navbar/NavlinkComponent";
import NavlinkMComponent from "./navbar/NavlinkMComponent";
import TransitionComponent from "./TransitionComponent";

export default function HeroComponent() {
  const auth = {
    check: true,
    user: {
      name: "Faiz D. Hernanda",
    },
  };

  return (
    <div>
      <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <NavlinkMComponent />
        <div className="hidden md:block border-b border-white/10 py-4 px-4">
          <div className="container">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <a href="#" className="text-white font-medium uppercase mr-6">
                  Brand
                </a>
                <NavlinkComponent href="#">Home</NavlinkComponent>
                <NavlinkComponent href="#">Articles</NavlinkComponent>
                <NavlinkComponent href="#">Gallery</NavlinkComponent>
                <NavlinkComponent href="#">About</NavlinkComponent>
                <NavlinkComponent href="#">Contact</NavlinkComponent>
              </div>

              {auth.check ? (
                <div className="flex items-center gap-x-2">
                  <NavlinkComponent className="" href="#"></NavlinkComponent>
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex items-center hover:bg-transparent gap-x-2 text-white">
                      {auth.user.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Menu.Button>
                    <TransitionComponent>
                      <Menu.Items
                        as="div"
                        className="shadow-sm border bg-white absolute right-0 top-0 mt-8 py-1 rounded w-56 overflow-hidden"
                      >
                        <DropdownLinkComponent href="#">
                          Dashboard
                        </DropdownLinkComponent>
                        <DropdownLinkComponent href="#">
                          Horizon
                        </DropdownLinkComponent>
                        <LineComponent />
                        <DropdownLinkComponent href="#">
                          Account Setting
                        </DropdownLinkComponent>
                        <DropdownLinkComponent href="#">
                          Change Password
                        </DropdownLinkComponent>
                        <DropdownLinkComponent href="#">
                          Favorites Articles
                        </DropdownLinkComponent>
                        <DropdownLinkComponent href="#">
                          Help
                        </DropdownLinkComponent>
                        <LineComponent />
                        <DropdownLinkComponent href="#">
                          Logout
                        </DropdownLinkComponent>
                      </Menu.Items>
                    </TransitionComponent>
                  </Menu>
                </div>
              ) : (
                <div className="flex items-center gap-x-2">
                  <NavlinkComponent href="/login">Sign in</NavlinkComponent>
                  <NavlinkComponent href="/register">Sign up</NavlinkComponent>
                </div>
              )}
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="w-full md:w-2/3">
            <header className="text-white py-4 sm:py-8 md:py-16">
              <h1 className="text-xl md:text-3xl font-bold">New Revolution</h1>
              <p className="md:text-xl leading-relaxed font-light mt-4 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <a
                  href="#"
                  className="underline decoration-sky-500 text-sky-400 font-medium"
                >
                  Dolorem quam
                </a>
                , recusandae quis dolorum veritatis nulla, nemo consequuntur
                temporibus quisquam expedita libero est facere ipsum laboriosam
                eveniet itaque. Rem, dicta temporibus?
              </p>
              <a
                href="#"
                className="bg-white hover:bg-gray-50 hover:text-blue-500 transition duration-300 text-gray-900 text-sm md:text-tiny px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-300 md:shadow-gray-400"
              >
                Browse
              </a>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}
