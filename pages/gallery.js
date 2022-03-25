import App from "../layouts/App";
import React from "react";
import HeroComponent from "../components/HeroComponent";

export default function Galleries() {
  return (
    <>
      <HeroComponent></HeroComponent>
      <div className="container">Galleries</div>
    </>
  );
}

Galleries.getLayout = (page) => <App title="Gallery" children={page}></App>;
