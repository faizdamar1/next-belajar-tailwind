import React from "react";
import Navbar from "./navbar/Navbar";

import NavbarMobile from "./navbar/NavbarMobile";

const Title = ({ children }) => (
  <h1 className="text-xl md:text-3xl font-bold">{children}</h1>
);

const Body = ({children}) => <div>{children}</div>;

const HeroComponent = ({children}) => {
  return (
    <div className="mb-8">
      <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <NavbarMobile />
        <Navbar />

        <div className="container">
          <div className="w-full md:w-2/3">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

HeroComponent.Title = Title;
HeroComponent.Body = Body;

export default HeroComponent;
