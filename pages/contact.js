import App from "../layouts/App";
import React from "react";
import HeroComponent from "../components/HeroComponent";

export default function Contacts() {
  return (
    <>
      <HeroComponent></HeroComponent>
      <div className="container">Contacts</div>
    </>
  );
}

Contacts.getLayout = (page) => <App title="Contact" children={page}></App>;
