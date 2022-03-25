import React from 'react'
import LineComponent from '../LineComponent';
import NavlinkComponent from './NavlinkComponent';

export default function Navbar() {
    const auth = {
        check: false,
        user: {
          name: "Faiz D. Hernanda",
        },
      };
    return (
        <div className="hidden md:block border-b border-white/10 py-4 px-4">
          <div className="container">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <a href="#" className="text-white font-medium uppercase mr-6">
                  Brand
                </a>
                <NavlinkComponent href="/">Home</NavlinkComponent>
                <NavlinkComponent href="/article">Articles</NavlinkComponent>
                <NavlinkComponent href="/gallery">Gallery</NavlinkComponent>
                <NavlinkComponent href="/about">About</NavlinkComponent>
                <NavlinkComponent href="/contact">Contact</NavlinkComponent>
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
    )
}
