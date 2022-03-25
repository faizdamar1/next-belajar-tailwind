import App from "../layouts/App";
import React from "react";
import HeroComponent from "../components/HeroComponent";

export default function Articles() {
  return (
    <>
      <HeroComponent>
        <HeroComponent.Body>
          <header className="text-white py-4 sm:py-8 md:py-16">
            <HeroComponent.Title>Articles</HeroComponent.Title>
            <p className="md:text-xl leading-relaxed font-light mt-4 mb-6">
              Rcusandae quis dolorum veritatis nulla, nemo consequuntur
              temporibus quisquam expedita libero est facere ipsum laboriosam
              eveniet itaque. Rem, dicta temporibus?
            </p>
            
          </header>
        </HeroComponent.Body>
      </HeroComponent>
      <div className="container">Articles</div>
    </>
  );
}

Articles.getLayout = (page) => <App title="Article" children={page} />;
